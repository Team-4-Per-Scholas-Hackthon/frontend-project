import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="space-y-8">
      <section className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-sky-300 mb-4">
            PeerTrack+
          </h1>
          <p className="text-slate-200 mb-4">
            An AI‑powered tutoring and mentorship platform connecting Per
            Scholas alumni and learners to level up skills, confidence, and
            careers.
          </p>
          <div className="flex gap-3">
            <Link
              to="/auth"
              className="px-4 py-2 rounded bg-sky-500 hover:bg-sky-600 text-white text-sm font-medium"
            >
              Get started
            </Link>
            <a
              href="#features"
              className="px-4 py-2 rounded border border-slate-600 text-slate-200 text-sm hover:bg-slate-800"
            >
              Learn more
            </a>
          </div>
        </div>
        <div className="bg-slate-800/60 border border-slate-700 rounded-xl p-4 text-sm text-slate-200">
          <p className="font-semibold mb-2 text-emerald-300">Hackathon Focus</p>
          <ul className="space-y-1 list-disc list-inside">
            <li>Smart matching between learners and alumni</li>
            <li>AI study assistant and dashboard insights</li>
            <li>Gamified points, badges, and leaderboards</li>
            <li>Inclusive, scalable UX for all tech levels</li>
          </ul>
        </div>
      </section>

      <section id="features" className="grid md:grid-cols-3 gap-6">
        <div className="bg-slate-800/60 border border-slate-700 rounded-lg p-4">
          <h2 className="font-semibold text-sky-300 mb-1">Alumni</h2>
          <p className="text-sm text-slate-200">
            List skills, set availability, and earn recognition for tutoring
            sessions and community impact.
          </p>
        </div>
        <div className="bg-slate-800/60 border border-slate-700 rounded-lg p-4">
          <h2 className="font-semibold text-emerald-300 mb-1">Learners</h2>
          <p className="text-sm text-slate-200">
            Find mentors by skill, cohort, or track. Ask quick questions or
            schedule deeper mentoring sessions.
          </p>
        </div>
        <div className="bg-slate-800/60 border border-slate-700 rounded-lg p-4">
          <h2 className="font-semibold text-violet-300 mb-1">AI Assist</h2>
          <p className="text-sm text-slate-200">
            Get tailored hints, study plans, and progress insights from the
            integrated AI assistant.
          </p>
        </div>
      </section>
    </div>
  );
}

export default HomePage;