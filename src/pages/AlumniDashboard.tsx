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
    });
  };

  const pendingRequests = requests.filter((r) => r.status === "OPEN");
  const acceptedRequests = requests.filter((r) => r.status === "ACCEPTED");

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent">
            Alumni Dashboard
          </h1>
          <p className="text-slate-400 text-sm mt-1">
            Welcome back, {user.fullName || user.username}! 👋
          </p>
        </div>
        <Link
          to="/profile/alumni"
          className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white text-sm font-semibold transition-all shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 hover:scale-105"
        >
          Edit Profile
        </Link>
      </div>

      {/* Pending Requests - Compact Section */}
      <section className="bg-gradient-to-br from-orange-900/20 to-slate-800/50 border border-orange-500/40 rounded-2xl p-5 relative overflow-hidden">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 bg-gradient-to-br from-orange-500/40 to-red-500/40 rounded-lg flex items-center justify-center border border-orange-400/50 shadow-lg shadow-orange-500/20">
            <span className="text-xl">{pendingRequests.length > 0 ? '🔔' : '📭'}</span>
          </div>
          <div className="flex-1">
            <h2 className="text-lg font-bold text-orange-300">
              Pending Requests
            </h2>
            <p className="text-xs text-slate-400">
              {pendingRequests.length} request{pendingRequests.length !== 1 ? 's' : ''} waiting
            </p>
          </div>
          {pendingRequests.length > 0 && (
            <span className="px-3 py-1 rounded-full bg-orange-500/20 text-orange-300 text-xs font-bold border border-orange-500/40 animate-pulse">
              {pendingRequests.length} NEW
            </span>
          )}
        </div>

        {requestsLoading ? (
          <div className="flex items-center justify-center py-6">
            <div className="w-8 h-8 border-3 border-orange-500 border-t-transparent rounded-full animate-spin" />
          </div>
        ) : pendingRequests.length === 0 ? (
          <p className="text-sm text-slate-400 text-center py-4">
            No pending requests at the moment
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
                  className="bg-slate-900/60 border border-orange-500/30 rounded-xl p-4 hover:border-orange-500/50 transition-all"
                >
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="font-semibold text-orange-200">{request.title}</h3>
                      <p className="text-xs text-slate-400">
                        from <span className="text-cyan-400">{learnerName}</span>
                        {request.learnerId.cohort && ` • ${request.learnerId.cohort}`}
                      </p>
                    </div>
                  </div>

                  <div className="text-sm text-slate-300 mb-2">
                    <span className="text-slate-400">Topic:</span> {request.topic}
                  </div>

                  <div className="flex flex-wrap gap-2 text-xs text-slate-400 mb-3">
                    {request.preferredDate && (
                      <span className="bg-slate-800/60 px-2 py-1 rounded-full">📅 {formatDate(request.preferredDate)}</span>
                    )}
                    <span className="bg-slate-800/60 px-2 py-1 rounded-full">⏱️ {request.duration} min</span>
                    <span className="bg-slate-800/60 px-2 py-1 rounded-full capitalize">
                      {request.sessionType === 'video' ? '📹' : '💬'} {request.sessionType}
                    </span>
                  </div>

                  <div className="flex gap-2">
                    <button
                      onClick={() => handleAccept(request._id)}
                      className="flex-1 bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-white py-2 rounded-lg font-semibold text-sm transition-all shadow-lg shadow-emerald-500/20"
                    >
                      ✓ Accept
                    </button>
                    <button
                      onClick={() => handleDecline(request._id)}
                      className="flex-1 bg-slate-700 hover:bg-slate-600 text-slate-200 py-2 rounded-lg text-sm transition-all"
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

      {/* Upcoming Sessions - Cyan/Purple Gradient */}
      {acceptedRequests.length > 0 && (
        <section className="bg-gradient-to-br from-cyan-900/20 to-purple-900/20 border border-cyan-500/30 rounded-2xl p-5 hover:border-cyan-400/50 transition-all">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-gradient-to-br from-cyan-500/30 to-purple-500/30 rounded-lg flex items-center justify-center border border-cyan-400/30 shadow-lg shadow-cyan-500/20">
              <span className="text-xl">📅</span>
            </div>
            <h2 className="text-lg font-bold text-cyan-300">
              Upcoming Sessions ({acceptedRequests.length})
            </h2>
          </div>
          <div className="space-y-3">
            {acceptedRequests.map((request) => {
              const learnerName = request.learnerId.firstname || request.learnerId.lastname
                ? `${request.learnerId.firstname || ""} ${request.learnerId.lastname || ""}`.trim()
                : request.learnerId.username;

              return (
                <div
                  key={request._id}
                  className="bg-slate-900/50 border border-cyan-500/20 rounded-xl p-4 flex items-center justify-between hover:border-cyan-500/40 transition-all"
                >
                  <div>
                    <h4 className="font-semibold text-cyan-300">{request.title}</h4>
                    <p className="text-sm text-slate-400">with {learnerName} • {request.topic}</p>
                  </div>
                  <button className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white rounded-lg text-sm font-semibold transition-all shadow-lg shadow-cyan-500/25 hover:scale-105">
                    Start →
                  </button>
                </div>
              );
            })}
          </div>
        </section>
      )}

      {/* Main Content Grid */}
      {loading ? (
        <div className="flex items-center justify-center py-12">
          <div className="w-12 h-12 border-4 border-orange-500 border-t-transparent rounded-full animate-spin" />
        </div>
      ) : (
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Profile Section - Orange Accents */}
          <section className="lg:col-span-2 bg-slate-800/40 border border-slate-700 rounded-2xl p-6 space-y-5 hover:border-orange-500/30 transition-all">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-orange-500/30 to-pink-500/30 rounded-lg flex items-center justify-center border border-orange-400/30 shadow-lg shadow-orange-500/20">
                  <span className="text-xl">🎓</span>
                </div>
                <h2 className="text-lg font-bold text-orange-300">Your Tutor Profile</h2>
              </div>
              <Link
                to="/profile/alumni"
                className="text-sm text-cyan-400 hover:text-cyan-300 font-medium transition-colors"
              >
                Edit →
              </Link>
            </div>

            {/* About Me */}
            <div>
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">About Me</h3>
              {profile?.bio ? (
                <p className="text-sm text-slate-200 leading-relaxed bg-slate-900/30 rounded-xl p-4 border border-slate-700">
                  {profile.bio}
                </p>
              ) : (
                <p className="text-sm text-slate-400 italic bg-slate-900/30 rounded-xl p-4 border border-slate-700 border-dashed">
                  No bio added yet.{" "}
                  <Link to="/profile/alumni" className="text-orange-400 hover:text-orange-300 font-medium">
                    Add one now →
                  </Link>
                </p>
              )}
            </div>

            {/* Cohort */}
            {profile?.cohort && (
              <div>
                <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Cohort</h3>
                <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-300 text-sm font-medium border border-purple-500/40">
                  {profile.cohort}
                </span>
              </div>
            )}

            {/* Skills - Cyan Tags */}
            <div>
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Skills You Teach</h3>
              <div className="flex flex-wrap gap-2">
                {profile?.skills && profile.skills.length > 0 ? (
                  profile.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-300 text-sm font-medium border border-cyan-500/30 hover:border-cyan-500/50 transition-all"
                    >
                      {skill}
                    </span>
                  ))
                ) : (
                  <p className="text-sm text-slate-400 italic">
                    No skills listed yet.{" "}
                    <Link to="/profile/alumni" className="text-orange-400 hover:text-orange-300 font-medium">
                      Add your skills →
                    </Link>
                  </p>
                )}
              </div>
            </div>

            {/* Availability */}
            <div>
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Your Availability</h3>
              {profile?.availability && profile.availability.length > 0 ? (
                <div className="space-y-2">
                  {profile.availability.map((slot) => (
                    <div
                      key={slot._id}
                      className="flex items-center justify-between bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-2 hover:border-emerald-500/30 transition-all"
                    >
                      <span className="text-emerald-300 font-medium text-sm">{formatDate(slot.date)}</span>
                      <span className="text-slate-300 bg-slate-800 px-3 py-1 rounded-full text-xs border border-slate-700">
                        {slot.startTime} - {slot.endTime}
                      </span>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-sm text-slate-400 italic bg-slate-900/30 rounded-xl p-4 border border-slate-700 border-dashed">
                  No availability set.{" "}
                  <Link to="/profile/alumni" className="text-orange-400 hover:text-orange-300 font-medium">
                    Add your availability →
                  </Link>
                </p>
              )}
            </div>
          </section>

          {/* AI Assistant Sidebar - Purple/Pink Gradient */}
          <section className="lg:col-span-1 bg-gradient-to-br from-purple-900/20 to-slate-800/50 border border-purple-500/30 rounded-2xl p-5 hover:border-purple-400/50 transition-all relative overflow-hidden">
            <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-2xl"></div>
            
            <div className="flex items-center gap-3 mb-4 relative z-10">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-500/30 to-pink-500/30 rounded-lg flex items-center justify-center border border-purple-400/30 shadow-lg shadow-purple-500/20 animate-pulse">
                <span className="text-xl">🤖</span>
              </div>
              <div>
                <h2 className="text-lg font-bold text-purple-300">AI Assistant</h2>
                <p className="text-xs text-slate-400">Topic refreshers & quiz ideas</p>
              </div>
            </div>
            
            <div className="h-40 mb-3 rounded-xl bg-slate-900/60 border border-purple-500/20 text-sm text-slate-300 p-3 overflow-y-auto relative z-10">
              <p className="text-slate-500 italic text-center mt-12 text-xs">
                💡 Ask for explanations or teaching tips!
              </p>
            </div>
            
            <div className="relative z-10">
              <input
                className="w-full rounded-lg border border-purple-500/30 bg-slate-900/60 px-3 py-2.5 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-purple-500/60 transition-colors pr-10"
                placeholder="Ask AI..."
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 w-7 h-7 bg-gradient-to-r from-purple-500 to-pink-500 rounded-md flex items-center justify-center text-white text-sm hover:from-purple-600 hover:to-pink-600 transition-all">
                →
              </button>
            </div>
          </section>
        </div>
      )}

      {/* Badges Section - Yellow/Orange Theme */}
      <section className="bg-slate-800/40 border border-yellow-500/30 rounded-2xl p-5 hover:border-yellow-400/50 transition-all">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-gradient-to-br from-yellow-500/30 to-orange-500/30 rounded-lg flex items-center justify-center border border-yellow-400/30 shadow-lg shadow-yellow-500/20">
            <span className="text-xl">🏆</span>
          </div>
          <h2 className="text-lg font-bold text-yellow-300">Your Badges</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          <div className="bg-slate-900/60 border border-orange-500/30 rounded-xl p-3 text-center hover:border-orange-500/50 transition-all hover:scale-105">
            <div className="text-3xl mb-1">🥇</div>
            <div className="text-xs font-semibold text-orange-300">First Session</div>
          </div>
          <div className="bg-slate-900/60 border border-cyan-500/30 rounded-xl p-3 text-center hover:border-cyan-500/50 transition-all hover:scale-105">
            <div className="text-3xl mb-1">⭐</div>
            <div className="text-xs font-semibold text-cyan-300">5-Star Mentor</div>
          </div>
          <div className="bg-slate-900/60 border border-pink-500/30 rounded-xl p-3 text-center hover:border-pink-500/50 transition-all hover:scale-105">
            <div className="text-3xl mb-1">🔥</div>
            <div className="text-xs font-semibold text-pink-300">Weekly Streak</div>
          </div>
          <div className="bg-slate-900/60 border border-purple-500/30 rounded-xl p-3 text-center opacity-50">
            <div className="text-3xl mb-1 grayscale">🎯</div>
            <div className="text-xs font-semibold text-purple-300">10 Sessions</div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AlumniDashboard;