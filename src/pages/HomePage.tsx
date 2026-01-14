
// import { Link } from "react-router-dom";

// function HomePage() {
// 	return (
// 		<div className="space-y-12">
// 			{/* Hero Section */}
// 			<section className="grid md:grid-cols-2 gap-8 items-center">
// 				<div>
// 					<h1 className="text-4xl md:text-5xl font-bold text-sky-300 mb-4">
// 						PeerTrack+
// 					</h1>
// 					<p className="text-slate-200 mb-6 text-lg leading-relaxed">
// 						An AI‑powered tutoring and mentorship platform connecting Per
// 						Scholas alumni and learners to level up skills, confidence, and
// 						careers.
// 					</p>
					
// 					<div className="flex gap-3">
// 						<Link
// 							to="/auth"
// 							className="px-6 py-3 rounded-lg bg-sky-500 hover:bg-sky-600 text-white font-medium transition-colors shadow-lg hover:shadow-sky-500/50"
// 						>
// 							Get Started
// 						</Link>
// 						<Link
// 							to="/learn-more"
// 							className="px-6 py-3 rounded-lg border-2 border-slate-600 text-slate-200 font-medium hover:bg-slate-800 transition-colors"
// 						>
// 							Learn More
// 						</Link>
// 					</div>
// 				</div>

// 				<div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 border border-slate-700 rounded-xl p-6 backdrop-blur-sm">
// 					<p className="font-semibold mb-4 text-emerald-300 text-lg">Why PeerTrack+?</p>
// 					<ul className="space-y-3">
// 						<li className="flex items-start gap-3">
// 							<span className="text-emerald-400 text-xl">✓</span>
// 							<span className="text-slate-200">Smart matching between learners and alumni</span>
// 						</li>
// 						<li className="flex items-start gap-3">
// 							<span className="text-sky-400 text-xl">✓</span>
// 							<span className="text-slate-200">AI study assistant and dashboard insights</span>
// 						</li>
// 						<li className="flex items-start gap-3">
// 							<span className="text-violet-400 text-xl">✓</span>
// 							<span className="text-slate-200">Gamified points, badges, and leaderboards</span>
// 						</li>
// 						<li className="flex items-start gap-3">
// 							<span className="text-amber-400 text-xl">✓</span>
// 							<span className="text-slate-200">Inclusive, scalable UX for all tech levels</span>
// 						</li>
// 					</ul>
// 				</div>
// 			</section>

// 			{/* Features Section */}
// 			<section id="features" className="grid md:grid-cols-3 gap-6">
// 				<div className="bg-gradient-to-br from-sky-900/40 to-slate-800/60 border border-sky-700/50 rounded-xl p-6 hover:border-sky-500/50 transition-all hover:shadow-lg hover:shadow-sky-500/20">
// 					<div className="text-3xl mb-3">👨‍🎓</div>
// 					<h2 className="font-bold text-sky-300 mb-2 text-lg">Alumni Mentors</h2>
// 					<p className="text-sm text-slate-200 leading-relaxed">
// 						List skills, set availability, and earn recognition for tutoring
// 						sessions and community impact.
// 					</p>
// 				</div>

// 				<div className="bg-gradient-to-br from-emerald-900/40 to-slate-800/60 border border-emerald-700/50 rounded-xl p-6 hover:border-emerald-500/50 transition-all hover:shadow-lg hover:shadow-emerald-500/20">
// 					<div className="text-3xl mb-3">🚀</div>
// 					<h2 className="font-bold text-emerald-300 mb-2 text-lg">Learners</h2>
// 					<p className="text-sm text-slate-200 mb-4 leading-relaxed">
// 						Find mentors by skill, cohort, or track. Ask quick questions or
// 						schedule deeper mentoring sessions.
// 					</p>
// 					<Link
// 						to="/profile/learner"
// 						className="inline-block px-4 py-2 rounded-lg bg-emerald-500 hover:bg-emerald-600 text-sm text-white font-medium transition-colors"
// 					>
// 						Create Your Profile →
// 					</Link>
// 				</div>

// 				<div className="bg-gradient-to-br from-violet-900/40 to-slate-800/60 border border-violet-700/50 rounded-xl p-6 hover:border-violet-500/50 transition-all hover:shadow-lg hover:shadow-violet-500/20">
// 					<div className="text-3xl mb-3">🤖</div>
// 					<h2 className="font-bold text-violet-300 mb-2 text-lg">AI Assistant</h2>
// 					<p className="text-sm text-slate-200 leading-relaxed">
// 						Get tailored hints, study plans, and progress insights from the
// 						integrated AI assistant.
// 					</p>
// 				</div>
// 			</section>

// 			{/* Stats Section */}
// 			<section className="bg-gradient-to-r from-slate-800/40 via-slate-800/60 to-slate-800/40 border border-slate-700 rounded-2xl p-8">
// 				<h3 className="text-2xl font-bold text-center text-slate-100 mb-8">
// 					Building Your Tech Career, Together
// 				</h3>
// 				<div className="grid md:grid-cols-3 gap-8">
// 					<div className="text-center">
// 						<div className="text-4xl font-bold text-sky-400 mb-2">24/7</div>
// 						<div className="text-sm text-slate-400">AI Study Support</div>
// 						<div className="text-xs text-slate-500 mt-1">Always available when you need help</div>
// 					</div>
// 					<div className="text-center">
// 						<div className="text-4xl font-bold text-emerald-400 mb-2">100+</div>
// 						<div className="text-sm text-slate-400">Alumni Mentors</div>
// 						<div className="text-xs text-slate-500 mt-1">Ready to share their expertise</div>
// 					</div>
// 					<div className="text-center">
// 						<div className="text-4xl font-bold text-violet-400 mb-2">∞</div>
// 						<div className="text-sm text-slate-400">Career Possibilities</div>
// 						<div className="text-xs text-slate-500 mt-1">Your future starts here</div>
// 					</div>
// 				</div>
// 			</section>

// 			{/* How It Works Section */}
// 			<section className="space-y-6">
// 				<h3 className="text-2xl font-bold text-center text-slate-100">
// 					How It Works
// 				</h3>
// 				<div className="grid md:grid-cols-3 gap-6">
// 					<div className="bg-slate-800/40 border border-slate-700 rounded-xl p-6 text-center">
// 						<div className="w-12 h-12 bg-sky-500/20 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-sky-500">
// 							<span className="text-sky-300 font-bold text-lg">1</span>
// 						</div>
// 						<h4 className="font-semibold text-slate-200 mb-2">Sign Up</h4>
// 						<p className="text-sm text-slate-400">
// 							Create your profile and tell us what you want to learn
// 						</p>
// 					</div>
// 					<div className="bg-slate-800/40 border border-slate-700 rounded-xl p-6 text-center">
// 						<div className="w-12 h-12 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-emerald-500">
// 							<span className="text-emerald-300 font-bold text-lg">2</span>
// 						</div>
// 						<h4 className="font-semibold text-slate-200 mb-2">Get Matched</h4>
// 						<p className="text-sm text-slate-400">
// 							AI connects you with the perfect alumni mentor
// 						</p>
// 					</div>
// 					<div className="bg-slate-800/40 border border-slate-700 rounded-xl p-6 text-center">
// 						<div className="w-12 h-12 bg-violet-500/20 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-violet-500">
// 							<span className="text-violet-300 font-bold text-lg">3</span>
// 						</div>
// 						<h4 className="font-semibold text-slate-200 mb-2">Start Learning</h4>
// 						<p className="text-sm text-slate-400">
// 							Schedule sessions and level up your skills
// 						</p>
// 					</div>
// 				</div>
// 			</section>

// 			{/* CTA Section */}
// 			<section className="bg-gradient-to-r from-sky-900/20 via-violet-900/20 to-emerald-900/20 border border-slate-700 rounded-2xl p-8 text-center">
// 				<h3 className="text-3xl font-bold text-slate-100 mb-4">
// 					Ready to Accelerate Your Career?
// 				</h3>
// 				<p className="text-slate-300 mb-6 max-w-2xl mx-auto">
// 					Join the PeerTrack+ community and connect with mentors who've been exactly where you are.
// 				</p>
// 				<Link
// 					to="/auth"
// 					className="inline-block px-8 py-4 rounded-lg bg-gradient-to-r from-sky-500 to-emerald-500 hover:from-sky-600 hover:to-emerald-600 text-white font-semibold text-lg transition-all shadow-lg hover:shadow-xl"
// 				>
// 					Get Started Free
// 				</Link>
// 			</section>
// 		</div>
// 	);
// }

// export default HomePage;





import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function HomePage() {
  const { user } = useAuth();

  // If user is logged in, show personalized welcome
  if (user) {
    return (
      <div className="min-h-[calc(100vh-200px)]">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="text-center mb-12 bg-slate-800/60 border border-orange-500/30 rounded-2xl p-12">
            <h1 className="text-5xl font-bold bg-gradient-to-r from-orange-400 via-pink-500 to-cyan-400 bg-clip-text text-transparent mb-4">
              Welcome back, {user.fullName || user.username}! 👋
            </h1>
            <p className="text-xl text-slate-300 mb-8">
              Ready to continue your learning journey?
            </p>
            <Link
              to={
                user.role === "learner"
                  ? "/dashboard/learner"
                  : user.role === "alumni"
                  ? "/dashboard/alumni"
                  : "/dashboard/admin"
              }
              className="inline-block px-8 py-4 rounded-lg bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white font-semibold text-lg transition-all shadow-lg"
            >
              Go to Dashboard →
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // Landing page for non-logged-in users
  return (
    <div className="space-y-0">
      {/* Hero Section - Split Screen */}
      <section className="min-h-[calc(100vh-200px)] flex items-center py-12">
        <div className="max-w-7xl mx-auto px-4 w-full">
          <div className="bg-slate-800/40 border border-slate-700 rounded-3xl overflow-hidden shadow-2xl">
            <div className="grid md:grid-cols-2 gap-0">
              {/* Left Side - Welcome & Illustration */}
              <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 p-12 flex flex-col justify-center relative overflow-hidden">
                {/* Decorative background elements */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-orange-500/10 to-pink-500/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-cyan-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
                
                <div className="mb-8 relative z-10">
                  <h1 className="text-4xl md:text-5xl font-bold mb-4">
                    <span className="bg-gradient-to-r from-cyan-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">
                      Welcome to PeerTrack+
                    </span>
                  </h1>
                  <p className="text-slate-200 text-lg leading-relaxed mb-6">
                    An AI-powered tutoring and mentorship platform connecting Per
                    Scholas alumni and learners to level up skills, confidence, and
                    careers.
                  </p>
                </div>

                {/* Illustration Area */}
                <div className="relative bg-slate-900/40 rounded-2xl p-8 border border-orange-500/20 mb-6 backdrop-blur-sm">
                  <div className="flex items-center justify-center gap-8">
                    {/* Alumni Mentor */}
                    <div className="text-center">
                      <div className="w-24 h-24 bg-gradient-to-br from-orange-500/30 to-pink-500/30 rounded-full flex items-center justify-center mb-3 border-2 border-orange-400/50 shadow-lg shadow-orange-500/20">
                        <span className="text-5xl">👨‍🏫</span>
                      </div>
                      <div className="text-xs text-orange-300 font-semibold">Alumni Mentor</div>
                    </div>

                    {/* Connection Line */}
                    <div className="flex flex-col items-center">
                      <div className="w-16 h-1 bg-gradient-to-r from-orange-400 via-pink-400 to-cyan-400 rounded-full mb-1 shadow-lg shadow-pink-500/50"></div>
                      <span className="text-cyan-300 text-sm font-semibold">Connected</span>
                      <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 via-purple-400 to-orange-400 rounded-full mt-1 shadow-lg shadow-cyan-500/50"></div>
                    </div>

                    {/* Learner */}
                    <div className="text-center">
                      <div className="w-24 h-24 bg-gradient-to-br from-cyan-500/30 to-purple-500/30 rounded-full flex items-center justify-center mb-3 border-2 border-cyan-400/50 shadow-lg shadow-cyan-500/20">
                        <span className="text-5xl">👨‍💻</span>
                      </div>
                      <div className="text-xs text-cyan-300 font-semibold">Learner</div>
                    </div>
                  </div>

                  {/* Floating elements */}
                  <div className="absolute top-4 right-4 w-12 h-12 bg-gradient-to-br from-yellow-400/30 to-orange-400/30 rounded-lg flex items-center justify-center border border-yellow-400/40 animate-pulse shadow-lg">
                    <span className="text-xl">💡</span>
                  </div>
                  <div className="absolute bottom-4 left-4 w-12 h-12 bg-gradient-to-br from-pink-400/30 to-purple-400/30 rounded-lg flex items-center justify-center border border-pink-400/40 animate-pulse shadow-lg" style={{ animationDelay: '1s' }}>
                    <span className="text-xl">🚀</span>
                  </div>
                </div>

                {/* Why PeerTrack+ checklist */}
                <div className="bg-slate-800/60 border border-pink-500/20 rounded-xl p-6 backdrop-blur-sm relative z-10">
                  <p className="font-semibold mb-4 text-pink-300 text-lg">Why PeerTrack+?</p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="text-cyan-400 text-xl flex-shrink-0">✓</span>
                      <span className="text-slate-200">Smart matching between learners and alumni</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-orange-400 text-xl flex-shrink-0">✓</span>
                      <span className="text-slate-200">AI study assistant and dashboard insights</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-pink-400 text-xl flex-shrink-0">✓</span>
                      <span className="text-slate-200">Gamified points, badges, and leaderboards</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-purple-400 text-xl flex-shrink-0">✓</span>
                      <span className="text-slate-200">Inclusive, scalable UX for all tech levels</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Right Side - CTA */}
              <div className="bg-slate-900/60 p-12 flex flex-col justify-center">
                <div className="max-w-md mx-auto w-full">
                  <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold text-slate-100 mb-2">
                      Get Started Today
                    </h2>
                    <p className="text-sm text-slate-400">
                      Join our community of learners and mentors
                    </p>
                  </div>

                  {/* Primary CTA */}
                  <Link
                    to="/auth"
                    className="block w-full px-8 py-4 rounded-xl bg-gradient-to-r from-orange-500 via-pink-500 to-orange-600 hover:from-orange-600 hover:via-pink-600 hover:to-orange-700 text-white text-center font-bold text-lg transition-all shadow-lg shadow-orange-500/30 hover:shadow-xl hover:shadow-pink-500/40 mb-4"
                  >
                    Get Started Free
                  </Link>

                  {/* Secondary CTA */}
                  <Link
                    to="/learn-more"
                    className="block w-full px-8 py-4 rounded-xl border-2 border-cyan-500/50 text-cyan-300 text-center font-semibold hover:bg-cyan-500/10 hover:border-cyan-400 transition-all"
                  >
                    Learn More
                  </Link>

                  {/* Divider */}
                  <div className="flex items-center gap-4 my-6">
                    <div className="flex-1 h-px bg-gradient-to-r from-transparent via-slate-600 to-transparent"></div>
                    <span className="text-xs text-slate-500 uppercase tracking-wider">Quick Access</span>
                    <div className="flex-1 h-px bg-gradient-to-r from-transparent via-slate-600 to-transparent"></div>
                  </div>

                  {/* OAuth Providers */}
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    <button className="flex items-center justify-center gap-2 px-4 py-3 rounded-lg border border-slate-600 text-sm text-slate-100 hover:bg-slate-800 hover:border-purple-500/50 transition-all">
                      <span className="text-lg">⚫</span> GitHub
                    </button>
                    <button className="flex items-center justify-center gap-2 px-4 py-3 rounded-lg border border-slate-600 text-sm text-slate-100 hover:bg-slate-800 hover:border-cyan-500/50 transition-all">
                      <span className="text-lg">🔵</span> Google
                    </button>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-700/50">
                    <div className="text-center">
                      <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-cyan-300 bg-clip-text text-transparent">24/7</div>
                      <div className="text-xs text-slate-500">AI Support</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold bg-gradient-to-r from-pink-400 to-orange-400 bg-clip-text text-transparent">100+</div>
                      <div className="text-xs text-slate-500">Mentors</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">∞</div>
                      <div className="text-xs text-slate-500">Possibilities</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-slate-900/40">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Alumni Mentors */}
            <div className="bg-gradient-to-br from-orange-900/20 to-slate-800/50 border border-orange-500/30 rounded-xl p-8 hover:border-orange-400/50 transition-all hover:shadow-lg hover:shadow-orange-500/20 group">
              <div className="w-14 h-14 bg-gradient-to-br from-orange-500/30 to-pink-500/30 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg shadow-orange-500/20">
                <span className="text-4xl">🎓</span>
              </div>
              <h2 className="font-bold text-orange-300 mb-3 text-xl">Alumni Mentors</h2>
              <p className="text-slate-300 leading-relaxed text-sm mb-4">
                List skills, set availability, and earn recognition for tutoring
                sessions and community impact.
              </p>
            </div>

            {/* Learners */}
            <div className="bg-gradient-to-br from-cyan-900/20 to-slate-800/50 border border-cyan-500/30 rounded-xl p-8 hover:border-cyan-400/50 transition-all hover:shadow-lg hover:shadow-cyan-500/20 group">
              <div className="w-14 h-14 bg-gradient-to-br from-cyan-500/30 to-purple-500/30 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg shadow-cyan-500/20">
                <span className="text-4xl">🚀</span>
              </div>
              <h2 className="font-bold text-cyan-300 mb-3 text-xl">Learners</h2>
              <p className="text-slate-300 leading-relaxed text-sm mb-4">
                Find mentors by skill, cohort, or track. Ask quick questions or
                schedule deeper mentoring sessions.
              </p>
              <Link
                to="/auth"
                className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-medium text-sm transition-colors"
              >
                Create Your Profile →
              </Link>
            </div>

            {/* AI Assistant */}
            <div className="bg-gradient-to-br from-purple-900/20 to-slate-800/50 border border-purple-500/30 rounded-xl p-8 hover:border-purple-400/50 transition-all hover:shadow-lg hover:shadow-purple-500/20 group">
              <div className="w-14 h-14 bg-gradient-to-br from-purple-500/30 to-pink-500/30 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg shadow-purple-500/20">
                <span className="text-4xl">🤖</span>
              </div>
              <h2 className="font-bold text-purple-300 mb-3 text-xl">AI Assistant</h2>
              <p className="text-slate-300 leading-relaxed text-sm">
                Get tailored hints, study plans, and progress insights from the
                integrated AI assistant.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-slate-800/40 border-y border-slate-700">
        <div className="max-w-7xl mx-auto px-4">
          <h3 className="text-2xl font-bold text-center text-slate-100 mb-12">
            Building Your Tech Career, Together
          </h3>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center group">
              <div className="text-5xl font-bold mb-2">
                <span className="bg-gradient-to-r from-cyan-400 to-cyan-300 bg-clip-text text-transparent group-hover:from-cyan-300 group-hover:to-cyan-200 transition-all">24/7</span>
              </div>
              <div className="text-lg text-slate-300 mb-1">AI Study Support</div>
              <div className="text-sm text-slate-500">Always available when you need help</div>
            </div>
            <div className="text-center group">
              <div className="text-5xl font-bold mb-2">
                <span className="bg-gradient-to-r from-pink-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent group-hover:from-pink-300 group-hover:via-orange-300 group-hover:to-yellow-300 transition-all">100+</span>
              </div>
              <div className="text-lg text-slate-300 mb-1">Alumni Mentors</div>
              <div className="text-sm text-slate-500">Ready to share their expertise</div>
            </div>
            <div className="text-center group">
              <div className="text-5xl font-bold mb-2">
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent group-hover:from-purple-300 group-hover:to-pink-300 transition-all">∞</span>
              </div>
              <div className="text-lg text-slate-300 mb-1">Career Possibilities</div>
              <div className="text-sm text-slate-500">Your future starts here</div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-slate-900/40">
        <div className="max-w-7xl mx-auto px-4">
          <h3 className="text-3xl font-bold text-center text-slate-100 mb-12">
            How It Works
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-800/60 border border-orange-500/30 rounded-xl p-8 text-center hover:border-orange-400/50 transition-all hover:shadow-lg hover:shadow-orange-500/20">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold shadow-lg shadow-orange-500/40">
                1
              </div>
              <h4 className="font-bold text-slate-100 mb-3 text-lg">Sign Up</h4>
              <p className="text-sm text-slate-400 leading-relaxed">
                Create your profile and tell us what you want to learn
              </p>
            </div>

            <div className="bg-slate-800/60 border border-cyan-500/30 rounded-xl p-8 text-center hover:border-cyan-400/50 transition-all hover:shadow-lg hover:shadow-cyan-500/20">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold shadow-lg shadow-cyan-500/40">
                2
              </div>
              <h4 className="font-bold text-slate-100 mb-3 text-lg">Get Matched</h4>
              <p className="text-sm text-slate-400 leading-relaxed">
                AI connects you with the perfect alumni mentor
              </p>
            </div>

            <div className="bg-slate-800/60 border border-purple-500/30 rounded-xl p-8 text-center hover:border-purple-400/50 transition-all hover:shadow-lg hover:shadow-purple-500/20">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold shadow-lg shadow-purple-500/40">
                3
              </div>
              <h4 className="font-bold text-slate-100 mb-3 text-lg">Start Learning</h4>
              <p className="text-sm text-slate-400 leading-relaxed">
                Schedule sessions and level up your skills
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-slate-800/60 via-slate-800/80 to-slate-800/60 border-y border-slate-700 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 via-pink-500/5 to-purple-500/5"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"></div>
        
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl font-bold text-slate-100 mb-4">
            Ready to Accelerate Your Career?
          </h2>
          <p className="text-slate-300 text-lg mb-8">
            Join the PeerTrack+ community and connect with mentors who've been exactly where you are.
          </p>
          <Link
            to="/auth"
            className="inline-block px-10 py-5 rounded-xl bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 hover:from-orange-600 hover:via-pink-600 hover:to-purple-600 text-white font-bold text-xl transition-all shadow-2xl shadow-pink-500/30 hover:scale-105 hover:shadow-pink-500/50"
          >
            Get Started Free
          </Link>
          <p className="text-slate-400 text-sm mt-4">
            No credit card required • Always free to join
          </p>
        </div>
      </section>
    </div>
  );
}

export default HomePage;