import { Link } from "react-router-dom";

function LearnMorePage() {
  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 border border-cyan-500/30 rounded-2xl p-8 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-orange-500/10 to-pink-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-cyan-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
        
        <div className="relative z-10">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">
              About PeerTrack+
            </span>
          </h1>
          <p className="text-slate-200 text-sm md:text-base leading-relaxed max-w-3xl">
            Established in 2015, Peertracks began as an innovative platform for
            traditional music streaming, offering instant crypto-based reporting
            and real-time payments for artists. From the start, we were dedicated
            to revolutionizing how streaming and talent support were handled.
          </p>
        </div>
      </section>

      {/* Evolution & Mission Cards */}
      <section className="grid md:grid-cols-2 gap-6">
        {/* How we evolved - Cyan theme (Learner) */}
        <div className="bg-gradient-to-br from-cyan-900/20 to-slate-800/50 border border-cyan-500/30 rounded-2xl p-6 hover:border-cyan-400/50 transition-all hover:shadow-lg hover:shadow-cyan-500/10 group">
          <div className="w-12 h-12 bg-gradient-to-br from-cyan-500/30 to-purple-500/30 rounded-xl flex items-center justify-center mb-4 border border-cyan-400/30 group-hover:scale-110 transition-transform shadow-lg shadow-cyan-500/20">
            <span className="text-2xl">🚀</span>
          </div>
          <h2 className="text-lg font-bold text-cyan-300 mb-2">
            How we evolved
          </h2>
          <p className="text-sm text-slate-200 leading-relaxed">
            Today, PeerTrack+ extends that same spirit of innovation to
            education. We connect Per Scholas learners and alumni with mentors,
            live tutoring, and AI support so that no one has to learn in
            isolation.
          </p>
        </div>

        {/* Our mission - Purple theme (AI/Tertiary) */}
        <div className="bg-gradient-to-br from-purple-900/20 to-slate-800/50 border border-purple-500/30 rounded-2xl p-6 hover:border-purple-400/50 transition-all hover:shadow-lg hover:shadow-purple-500/10 group">
          <div className="w-12 h-12 bg-gradient-to-br from-purple-500/30 to-pink-500/30 rounded-xl flex items-center justify-center mb-4 border border-purple-400/30 group-hover:scale-110 transition-transform shadow-lg shadow-purple-500/20">
            <span className="text-2xl">🎯</span>
          </div>
          <h2 className="text-lg font-bold text-purple-300 mb-2">
            Our mission
          </h2>
          <p className="text-sm text-slate-200 leading-relaxed">
            Our mission is to make expert guidance accessible, personalized, and
            sustainable. Whether you are breaking into tech or leveling up your
            career, PeerTrack+ helps you find the right support at the right
            time.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="grid sm:grid-cols-3 gap-4">
        {/* 24/7 - Cyan */}
        <div className="bg-slate-800/40 border border-cyan-500/30 rounded-xl p-5 text-center hover:border-cyan-400/50 transition-all hover:shadow-lg hover:shadow-cyan-500/10 group">
          <div className="w-10 h-10 bg-gradient-to-br from-yellow-500/30 to-orange-500/30 rounded-lg flex items-center justify-center mx-auto mb-3 border border-yellow-400/30">
            <span className="text-lg">🤖</span>
          </div>
          <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-cyan-300 bg-clip-text text-transparent group-hover:from-cyan-300 group-hover:to-cyan-200 transition-all">
            24/7
          </div>
          <div className="text-xs text-slate-400 mt-1">
            AI study support availability
          </div>
        </div>

        {/* Alumni - Orange */}
        <div className="bg-slate-800/40 border border-orange-500/30 rounded-xl p-5 text-center hover:border-orange-400/50 transition-all hover:shadow-lg hover:shadow-orange-500/10 group">
          <div className="w-10 h-10 bg-gradient-to-br from-yellow-500/30 to-orange-500/30 rounded-lg flex items-center justify-center mx-auto mb-3 border border-yellow-400/30">
            <span className="text-lg">🎓</span>
          </div>
          <div className="text-3xl font-bold bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent group-hover:from-orange-300 group-hover:to-pink-300 transition-all">
            Alumni
          </div>
          <div className="text-xs text-slate-400 mt-1">
            Mentors ready to give back
          </div>
        </div>

        {/* Learners - Pink */}
        <div className="bg-slate-800/40 border border-pink-500/30 rounded-xl p-5 text-center hover:border-pink-400/50 transition-all hover:shadow-lg hover:shadow-pink-500/10 group">
          <div className="w-10 h-10 bg-gradient-to-br from-yellow-500/30 to-orange-500/30 rounded-lg flex items-center justify-center mx-auto mb-3 border border-yellow-400/30">
            <span className="text-lg">👨‍💻</span>
          </div>
          <div className="text-3xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent group-hover:from-pink-300 group-hover:to-purple-300 transition-all">
            Learners
          </div>
          <div className="text-xs text-slate-400 mt-1">
            Focused on skill-based outcomes
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-slate-800/40 border border-slate-700 rounded-2xl p-8 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 via-pink-500/5 to-purple-500/5"></div>
        <div className="absolute top-0 left-1/4 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-0 right-1/4 w-32 h-32 bg-pink-500/10 rounded-full blur-2xl"></div>
        
        <div className="relative z-10">
          <h2 className="text-2xl font-bold text-slate-100 mb-3">
            Ready to Get Started?
          </h2>
          <p className="text-slate-400 mb-6 max-w-lg mx-auto">
            Join the PeerTrack+ community and connect with mentors who understand your journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/auth?mode=register"
              className="px-8 py-3 rounded-xl bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 hover:from-orange-600 hover:via-pink-600 hover:to-purple-600 text-white font-bold transition-all shadow-lg shadow-pink-500/25 hover:scale-105 hover:shadow-pink-500/40"
            >
              Get Started Free
            </Link>
            <Link
              to="/"
              className="px-8 py-3 rounded-xl border-2 border-cyan-500/50 text-cyan-300 font-semibold hover:bg-cyan-500/10 hover:border-cyan-400 transition-all"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default LearnMorePage;