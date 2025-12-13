import { useState } from "react";

function LearnerDashboard() {
  const [searchSkill, setSearchSkill] = useState("");
  const [searchCohort, setSearchCohort] = useState("");

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-semibold text-emerald-300">
        Learner Dashboard
      </h1>

      <section className="bg-slate-800/70 border border-slate-700 rounded-lg p-4">
        <h2 className="text-lg font-semibold text-sky-300 mb-2">
          Find a Tutor
        </h2>
        <div className="grid md:grid-cols-3 gap-3 text-sm">
          <div>
            <label className="block text-xs text-slate-300 mb-1">
              By skill
            </label>
            <input
              className="w-full rounded border border-slate-700 bg-slate-950 px-2 py-1.5 text-xs text-slate-100"
              placeholder="e.g. React, Python, Networking"
              value={searchSkill}
              onChange={(e) => setSearchSkill(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-xs text-slate-300 mb-1">
              By cohort
            </label>
            <input
              className="w-full rounded border border-slate-700 bg-slate-950 px-2 py-1.5 text-xs text-slate-100"
              placeholder="e.g. 2025-RTT-54"
              value={searchCohort}
              onChange={(e) => setSearchCohort(e.target.value)}
            />
          </div>
          <div className="flex items-end">
            <button className="w-full px-3 py-2 rounded bg-sky-500 hover:bg-sky-600 text-xs font-medium">
              Smart match (AI)
            </button>
          </div>
        </div>
      </section>

      <section className="grid md:grid-cols-3 gap-6">
        <div className="md:col-span-2 bg-slate-800/70 border border-slate-700 rounded-lg p-4">
          <h2 className="text-lg font-semibold text-slate-100 mb-2">
            Matched Tutors
          </h2>
          <p className="text-sm text-slate-300 mb-2">
            AI will suggest tutors based on your skills, cohort, and recent
            activity. You will be able to request sessions here.
          </p>
          <div className="mt-3 text-xs text-slate-500 italic">
            Tutor cards will appear here after backend integration.
          </div>
        </div>

        <div className="bg-slate-800/70 border border-slate-700 rounded-lg p-4">
          <h2 className="text-lg font-semibold text-violet-300 mb-2">
            Quick Help AI Chat
          </h2>
          <div className="h-32 mb-2 rounded bg-slate-900/80 border border-slate-700 text-xs text-slate-300 p-2 overflow-y-auto">
            <p className="text-slate-500 italic">
              Ask a question to get hints or summaries before your session.
            </p>
          </div>
          <input
            className="w-full rounded border border-slate-700 bg-slate-950 px-2 py-1.5 text-xs text-slate-100"
            placeholder="Ask: “Explain Big O in simple terms…”"
          />
        </div>
      </section>
    </div>
  );
}

export default LearnerDashboard;