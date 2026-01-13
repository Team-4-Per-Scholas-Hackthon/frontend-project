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

function AlumniDashboard() {
  const { user } = useAuth();
  const [profile, setProfile] = useState<AlumniProfile | null>(null);
  const [loading, setLoading] = useState(true);

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

      {loading ? (
        <div className="flex items-center justify-center py-12">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-sky-500" />
        </div>
      ) : (
        <div className="grid md:grid-cols-3 gap-6">
          {/* Main Profile Section */}
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
              placeholder="Ask AI: Give me a quick JS closure explanation for beginners..."
            />
          </section>
        </div>
      )}

      {/* Upcoming Sessions & Gamification */}
      <section className="bg-slate-800/70 border border-slate-700 rounded-lg p-4">
        <h2 className="text-lg font-semibold text-amber-300 mb-2">
          Upcoming Sessions & Gamification
        </h2>
        <p className="text-sm text-slate-200">
          This is where booked sessions, points, and badges will be displayed
          (e.g., "Helper Level 2", "5 sessions completed this month").
        </p>
      </section>
    </div>
  );
}

export default AlumniDashboard;