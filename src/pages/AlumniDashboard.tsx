import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { apiClient } from "../clients/apiClient";

interface AvailabilitySlot {
  _id: string;
  date: string;
  startTime: string;
  endTime: string;
}

interface AlumniProfile {
  bio: string;
  cohort: string;
  skills: string[];
  availability: AvailabilitySlot[];
}

interface SessionRequest {
  _id: string;
  learnerId: {
    _id: string;
    username: string;
    firstname: string;
    lastname: string;
    email: string;
    cohort?: string;
    track?: string;
  };
  title: string;
  topic: string;
  description?: string;
  preferredDate?: string;
  preferredTime?: string;
  duration: number;
  sessionType: string;
  status: string;
  createdAt: string;
}

function AlumniDashboard() {
  const { user } = useAuth();
  const [profile, setProfile] = useState<AlumniProfile | null>(null);
  const [requests, setRequests] = useState<SessionRequest[]>([]);
  const [loading, setLoading] = useState(true);
  const [requestsLoading, setRequestsLoading] = useState(true);

  useEffect(() => {
    const loadProfile = async () => {
      try {
        setLoading(true);
        const res = await apiClient.get("/users/me/profile");
        setProfile(res.data as AlumniProfile);
      } catch (err) {
        console.error("Failed to load profile:", err);
      } finally {
        setLoading(false);
      }
    };

    if (user) loadProfile();
  }, [user]);

  useEffect(() => {
    const loadRequests = async () => {
      try {
        setRequestsLoading(true);
        const res = await apiClient.get("/requests");
        setRequests(res.data);
      } catch (err) {
        console.error("Failed to load requests:", err);
      } finally {
        setRequestsLoading(false);
      }
    };

    if (user) loadRequests();
  }, [user]);

  const handleAccept = async (requestId: string) => {
    try {
      await apiClient.patch(`/requests/${requestId}/accept`);
      // Refresh requests
      const res = await apiClient.get("/requests");
      setRequests(res.data);
    } catch (err: any) {
      console.error("Failed to accept:", err);
      alert(err.response?.data?.message || "Failed to accept request");
    }
  };

  const handleDecline = async (requestId: string) => {
    try {
      await apiClient.patch(`/requests/${requestId}/decline`);
      // Refresh requests
      const res = await apiClient.get("/requests");
      setRequests(res.data);
    } catch (err: any) {
      console.error("Failed to decline:", err);
      alert(err.response?.data?.message || "Failed to decline request");
    }
  };

  if (!user || user.role !== "alumni") return null;

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString("en-US", {
      weekday: "short",
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  const pendingRequests = requests.filter((r) => r.status === "OPEN");
  const acceptedRequests = requests.filter((r) => r.status === "ACCEPTED");
  const pastRequests = requests.filter((r) => ["DECLINED", "CANCELLED", "COMPLETED"].includes(r.status));

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-semibold text-sky-300">
          Welcome back, {user.fullName || user.username}
        </h1>
        <Link
          to="/profile/alumni"
          className="px-4 py-2 rounded bg-sky-500 hover:bg-sky-600 text-white text-sm font-medium transition-colors"
        >
          Edit Profile
        </Link>
      </div>

      {/* Pending Requests */}
      <section className="bg-slate-800/70 border border-slate-700 rounded-lg p-4">
        <h2 className="text-lg font-semibold text-amber-300 mb-3">
          Pending Session Requests ({pendingRequests.length})
        </h2>
        
        {requestsLoading ? (
          <div className="flex items-center justify-center py-8">
            <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-amber-500" />
          </div>
        ) : pendingRequests.length === 0 ? (
          <p className="text-sm text-slate-400 italic">
            No pending requests at the moment.
          </p>
        ) : (
          <div className="space-y-3">
            {pendingRequests.map((request) => {
              const learnerName = request.learnerId.firstname || request.learnerId.lastname
                ? `${request.learnerId.firstname || ""} ${request.learnerId.lastname || ""}`.trim()
                : request.learnerId.username;

              return (
                <div
                  key={request._id}
                  className="bg-slate-900/50 border border-slate-700 rounded-lg p-4"
                >
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="font-semibold text-emerald-300">
                        {request.title}
                      </h3>
                      <p className="text-sm text-slate-400">
                        from {learnerName}
                        {request.learnerId.cohort && ` • ${request.learnerId.cohort}`}
                      </p>
                    </div>
                    <span className="px-2 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs border border-amber-500/40">
                      {request.status}
                    </span>
                  </div>

                  <div className="text-sm text-slate-300 mb-2">
                    <span className="text-slate-400">Topic:</span> {request.topic}
                  </div>

                  {request.description && (
                    <p className="text-sm text-slate-300 mb-3">
                      {request.description}
                    </p>
                  )}

                  <div className="flex flex-wrap gap-3 text-xs text-slate-400 mb-3">
                    {request.preferredDate && (
                      <span>📅 {formatDate(request.preferredDate)}</span>
                    )}
                    {request.preferredTime && (
                      <span>🕐 {request.preferredTime}</span>
                    )}
                    <span>⏱️ {request.duration} min</span>
                    <span className="capitalize">📹 {request.sessionType}</span>
                  </div>

                  <div className="flex gap-2">
                    <button
                      onClick={() => handleAccept(request._id)}
                      className="flex-1 bg-emerald-500 hover:bg-emerald-600 text-white text-sm py-2 rounded font-medium"
                    >
                      Accept
                    </button>
                    <button
                      onClick={() => handleDecline(request._id)}
                      className="flex-1 bg-slate-700 hover:bg-slate-600 text-slate-200 text-sm py-2 rounded"
                    >
                      Decline
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </section>

      {/* Accepted/Upcoming Sessions */}
      {acceptedRequests.length > 0 && (
        <section className="bg-slate-800/70 border border-slate-700 rounded-lg p-4">
          <h2 className="text-lg font-semibold text-emerald-300 mb-3">
            Upcoming Sessions ({acceptedRequests.length})
          </h2>
          <div className="space-y-2">
            {acceptedRequests.map((request) => {
              const learnerName = request.learnerId.firstname || request.learnerId.lastname
                ? `${request.learnerId.firstname || ""} ${request.learnerId.lastname || ""}`.trim()
                : request.learnerId.username;

              return (
                <div
                  key={request._id}
                  className="bg-slate-900/50 border border-slate-700 rounded-lg p-3 flex items-center justify-between"
                >
                  <div>
                    <h4 className="font-medium text-slate-200">
                      {request.title}
                    </h4>
                    <p className="text-xs text-slate-400">
                      with {learnerName} • {request.topic}
                    </p>
                  </div>
                  <span className="px-2 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs border border-emerald-500/40">
                    ACCEPTED
                  </span>
                </div>
              );
            })}
          </div>
        </section>
      )}

      {loading ? (
        <div className="flex items-center justify-center py-12">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-sky-500" />
        </div>
      ) : (
        <div className="grid md:grid-cols-3 gap-6">
          {/* Profile Section */}
          <section className="md:col-span-2 bg-slate-800/70 border border-slate-700 rounded-lg p-4 space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold text-emerald-300">
                Your Tutor Profile
              </h2>
            </div>

            {/* About Me */}
            <div>
              <h3 className="text-xs font-semibold text-slate-400 uppercase mb-2">
                About Me
              </h3>
              {profile?.bio ? (
                <p className="text-sm text-slate-200 leading-relaxed">
                  {profile.bio}
                </p>
              ) : (
                <p className="text-sm text-slate-400 italic">
                  No bio added yet.{" "}
                  <Link to="/profile/alumni" className="text-sky-400 hover:underline">
                    Add one now
                  </Link>
                </p>
              )}
            </div>

            {/* Cohort */}
            {profile?.cohort && (
              <div>
                <h3 className="text-xs font-semibold text-slate-400 uppercase mb-1">
                  Cohort
                </h3>
                <p className="text-sm text-slate-200">{profile.cohort}</p>
              </div>
            )}

            {/* Skills */}
            <div>
              <h3 className="text-xs font-semibold text-slate-400 uppercase mb-2">
                Skills
              </h3>
              <div className="flex flex-wrap gap-2">
                {profile?.skills && profile.skills.length > 0 ? (
                  profile.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-full bg-sky-500/20 text-sky-200 text-xs border border-sky-500/40"
                    >
                      {skill}
                    </span>
                  ))
                ) : (
                  <p className="text-sm text-slate-400 italic">
                    No skills listed yet.{" "}
                    <Link to="/profile/alumni" className="text-sky-400 hover:underline">
                      Add your skills
                    </Link>
                  </p>
                )}
              </div>
            </div>

            {/* Availability */}
            <div>
              <h3 className="text-xs font-semibold text-slate-400 uppercase mb-2">
                Availability
              </h3>
              {profile?.availability && profile.availability.length > 0 ? (
                <div className="space-y-2">
                  {profile.availability.map((slot) => (
                    <div
                      key={slot._id}
                      className="flex items-center gap-3 text-sm bg-slate-900/50 border border-slate-700 rounded px-3 py-2"
                    >
                      <div className="flex-1">
                        <span className="text-emerald-300 font-medium">
                          {formatDate(slot.date)}
                        </span>
                      </div>
                      <div className="text-slate-300">
                        {slot.startTime} - {slot.endTime}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-sm text-slate-400 italic">
                  No availability set.{" "}
                  <Link to="/profile/alumni" className="text-sky-400 hover:underline">
                    Add your availability
                  </Link>
                </p>
              )}
            </div>
          </section>

          {/* AI Tutor Assistant */}
          <section className="bg-slate-800/70 border border-slate-700 rounded-lg p-4">
            <h2 className="text-lg font-semibold text-violet-300 mb-2">
              AI Tutor Assistant
            </h2>
            <p className="text-xs text-slate-300 mb-2">
              Ask AI for topic refreshers, quiz ideas, or explanations you can
              use during sessions.
            </p>
            <div className="h-32 mb-2 rounded bg-slate-900/80 border border-slate-700 text-xs text-slate-300 p-2 overflow-y-auto">
              <p className="text-slate-500 italic">
                Chat history will appear here.
              </p>
            </div>
            <input
              className="w-full rounded border border-slate-700 bg-slate-950 px-2 py-1.5 text-xs text-slate-100"
              placeholder="Ask AI: Give me a quick JS closure explanation for beginners"
            />
          </section>
        </div>
      )}
    </div>
  );
}

export default AlumniDashboard;