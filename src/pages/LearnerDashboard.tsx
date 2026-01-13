import { useState } from "react";
import { Link } from "react-router-dom";
import VirtualTutorChat from "../components/VirtualTutorChat";
import TutorList from "../components/TutorList";

function LearnerDashboard() {
  const [showTutors, setShowTutors] = useState(false);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-semibold text-emerald-300">
          Learner Dashboard
        </h1>
        <Link
          to="/profile/learner"
          className="px-4 py-2 rounded bg-emerald-500 hover:bg-emerald-600 text-white text-sm font-medium transition-colors"
        >
          My Profile
        </Link>
      </div>

      {/* Find a Tutor section */}
      <section className="bg-slate-800/70 border border-slate-700 rounded-lg p-4">
        <h2 className="text-lg font-semibold text-sky-300 mb-3">
          Find a Tutor
        </h2>
        <button
          onClick={() => setShowTutors(!showTutors)}
          className="px-4 py-2 rounded bg-sky-500 hover:bg-sky-600 text-white text-sm font-medium"
        >
          {showTutors ? "Hide Tutors" : "Browse Available Tutors"}
        </button>
      </section>

      {/* Tutor List */}
      {showTutors && (
        <section className="bg-slate-800/70 border border-slate-700 rounded-lg p-4">
          <h2 className="text-lg font-semibold text-slate-100 mb-4">
            Available Tutors
          </h2>
          <TutorList />
        </section>
      )}

      {/* Virtual Tutor Chat */}
      <section className="grid md:grid-cols-3 gap-6">
        <div className="md:col-span-2 bg-slate-800/70 border border-slate-700 rounded-lg p-4">
          <h2 className="text-lg font-semibold text-slate-100 mb-2">
            Your Session Requests
          </h2>
          <p className="text-sm text-slate-300 mb-2">
            Track your pending and upcoming tutoring sessions here.
          </p>
          <div className="mt-3 text-xs text-slate-500 italic">
            Your session requests will appear here.
          </div>
        </div>

        <VirtualTutorChat />
      </section>
    </div>
  );
}

export default LearnerDashboard;