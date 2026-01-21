import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import VirtualTutorChat from "../components/VirtualTutorChat";
import TutorList from "../components/TutorList";

function LearnerDashboard() {
  const { user } = useAuth();
  const [showTutors, setShowTutors] = useState(false);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Learner Dashboard
          </h1>
          <p className="text-slate-400 text-sm mt-1">
            Welcome back, {user?.fullName || user?.username || "Learner"}! 🚀
          </p>
        </div>
        <Link
          to="/profile/learner"
          className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white text-sm font-semibold transition-all shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-105"
        >
          My Profile
        </Link>
      </div>

      {/* Find a Tutor Section */}
      <section className="bg-gradient-to-br from-cyan-900/20 to-slate-800/50 border border-cyan-500/30 rounded-2xl p-6 hover:border-cyan-400/50 transition-all relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 rounded-full blur-2xl"></div>
        
        <div className="flex items-center justify-between relative z-10">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 bg-gradient-to-br from-cyan-500/30 to-purple-500/30 rounded-xl flex items-center justify-center border border-cyan-400/30 shadow-lg shadow-cyan-500/20">
              <span className="text-3xl">🔍</span>
            </div>
            <div>
              <h2 className="text-xl font-bold text-cyan-300">Find a Tutor</h2>
              <p className="text-sm text-slate-400">Connect with experienced alumni mentors</p>
            </div>
          </div>
          <button
            onClick={() => setShowTutors(!showTutors)}
            className={`px-6 py-3 rounded-xl font-semibold text-sm transition-all ${
              showTutors
                ? "bg-slate-700 text-slate-200 hover:bg-slate-600 border border-slate-600"
                : "bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-105"
            }`}
          >
            {showTutors ? "Hide Tutors ↑" : "Browse Available Tutors →"}
          </button>
        </div>
      </section>

      {/* Tutor List */}
      {showTutors && (
        <section className="bg-slate-800/40 border border-cyan-500/20 rounded-2xl p-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-gradient-to-br from-orange-500/30 to-pink-500/30 rounded-lg flex items-center justify-center border border-orange-400/30">
              <span className="text-xl">👨‍🏫</span>
            </div>
            <h2 className="text-lg font-bold text-slate-100">Available Alumni Tutors</h2>
          </div>
          <TutorList />
        </section>
      )}

      {/* Main Content Grid */}
      <section className="grid lg:grid-cols-3 gap-6">
        {/* Session Requests - Takes 2 columns */}
        <div className="lg:col-span-2 bg-slate-800/40 border border-slate-700 rounded-2xl p-6 hover:border-pink-500/30 transition-all">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-gradient-to-br from-pink-500/30 to-orange-500/30 rounded-lg flex items-center justify-center border border-pink-400/30 shadow-lg shadow-pink-500/10">
              <span className="text-xl">📋</span>
            </div>
            <div>
              <h2 className="text-lg font-bold text-pink-300">Your Session Requests</h2>
              <p className="text-sm text-slate-400">Track your pending and upcoming tutoring sessions</p>
            </div>
          </div>
          
          {/* Empty State */}
          <div className="mt-6 text-center py-12 bg-slate-900/30 rounded-xl border border-slate-700 border-dashed">
            <div className="w-16 h-16 bg-gradient-to-br from-yellow-500/20 to-orange-500/20 rounded-full flex items-center justify-center mx-auto mb-4 border border-yellow-400/30">
              <span className="text-3xl">📭</span>
            </div>
            <p className="text-slate-300 font-medium">No session requests yet</p>
            <p className="text-sm text-slate-500 mt-1">
              Your session requests will appear here.
            </p>
          </div>
        </div>

        {/* AI Assistant Sidebar */}
        <div className="lg:col-span-1">
          <div className="bg-gradient-to-br from-purple-900/20 to-slate-800/50 border border-purple-500/30 rounded-2xl p-6 hover:border-purple-400/50 transition-all relative overflow-hidden">
            {/* Decorative element */}
            <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-2xl"></div>
            
            <div className="flex items-center gap-3 mb-4 relative z-10">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-500/30 to-pink-500/30 rounded-lg flex items-center justify-center border border-purple-400/30 shadow-lg shadow-purple-500/20 animate-pulse">
                <span className="text-xl">🤖</span>
              </div>
              <div>
                <h2 className="text-lg font-bold text-purple-300">AI Study Assistant</h2>
                <p className="text-xs text-slate-400">Get help with your learning</p>
              </div>
            </div>
            
            <div className="relative z-10">
              <VirtualTutorChat />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default LearnerDashboard;