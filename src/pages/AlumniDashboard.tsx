import { useAuth } from "../context/AuthContext";

function AlumniDashboard() {
  const { user } = useAuth();
  if (!user || user.role !== "alumni") return null;

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-semibold text-sky-300">
        Welcome back, {user.fullName}
      </h1>

      <div className="grid md:grid-cols-3 gap-6">
        <section className="md:col-span-2 bg-slate-800/70 border border-slate-700 rounded-lg p-4">
          <h2 className="text-lg font-semibold text-emerald-300 mb-2">
            Your Tutor Profile
          </h2>
          <p className="text-sm text-slate-200 mb-3">
            Share your skills and availability so learners can find and book you.
          </p>

          <div className="mb-3">
            <h3 className="text-xs font-semibold text-slate-400 uppercase">
              Skills
            </h3>
            <div className="mt-1 flex flex-wrap gap-2">
              {user.skills?.length ? (
                user.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2 py-1 rounded-full bg-sky-500/20 text-sky-200 text-xs border border-sky-500/40"
                  >
                    {skill}
                  </span>
                ))
              ) : (
                <span className="text-xs text-slate-400">
                  No skills listed yet.
                </span>
              )}
            </div>
          </div>

          <div>
            <h3 className="text-xs font-semibold text-slate-400 uppercase">
              Availability
            </h3>
            <p className="mt-1 text-sm text-slate-200">
              {/* replace with real availability field */}
              Set your availability to appear in smart matching results.
            </p>
          </div>
        </section>

        <section className="bg-slate-800/70 border border-slate-700 rounded-lg p-4">
          <h2 className="text-lg font-semibold text-violet-300 mb-2">
            AI Tutor Assistant
          </h2>
          <p className="text-xs text-slate-300 mb-2">
            Ask AI for topic refreshers, quiz ideas, or explanations you can
            use during sessions.
          </p>
          <div className="h-32 mb-2 rounded bg-slate-900/80 border border-slate-700 text-xs text-slate-300 p-2 overflow-y-auto">
            {/* placeholder for chat messages */}
            <p className="text-slate-500 italic">
              Chat history will appear here.
            </p>
          </div>
          <input
            className="w-full rounded border border-slate-700 bg-slate-950 px-2 py-1.5 text-xs text-slate-100"
            placeholder="Ask AI: “Give me a quick JS closure explanation for beginners…”"
          />
        </section>
      </div>

      <section className="bg-slate-800/70 border border-slate-700 rounded-lg p-4">
        <h2 className="text-lg font-semibold text-amber-300 mb-2">
          Upcoming Sessions & Gamification
        </h2>
        <p className="text-sm text-slate-200">
          This is where booked sessions, points, and badges will be displayed
          (e.g., “Helper Level 2”, “5 sessions completed this month”).
        </p>
      </section>
    </div>
  );
}

export default AlumniDashboard;