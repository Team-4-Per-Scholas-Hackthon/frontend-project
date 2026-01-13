// import { Link } from "react-router-dom";
// import MyCalendarComponent from "../components/MyCalendarComponent";

// function HomePage() {
// 	return (
// 		<div className="space-y-8">
// 			<section className="grid md:grid-cols-2 gap-8 items-center">
// 				<div>
// 					<h1 className="text-4xl md:text-5xl font-bold text-sky-300 mb-4">
// 						PeerTrack+
// 					</h1>
// 					<p className="text-slate-200 mb-4">
// 						An AI‑powered tutoring and mentorship platform connecting Per
// 						Scholas alumni and learners to level up skills, confidence, and
// 						careers.
// 					</p>
// 					{/* <div className="flex gap-3">
// 						<Link
// 							to="/auth"
// 							className="px-4 py-2 rounded bg-sky-500 hover:bg-sky-600 text-white text-sm font-medium">
// 							Get started
// 						</Link>
// 						<a
// 							href="#features"
// 							className="px-4 py-2 rounded border border-slate-600 text-slate-200 text-sm hover:bg-slate-800">
// 							Learn more
// 						</a>
// 					</div>           */}


//           <Link
//               to="/auth"
//               className="px-4 py-2 rounded bg-sky-500 hover:bg-sky-600 text-white text-sm font-medium"
//             >
//               Get started
//             </Link>
//             <Link
//               to="/learn-more"
//               className="px-4 py-2 rounded border border-slate-600 text-slate-200 text-sm hover:bg-slate-800"
//             >
//               Learn more
//             </Link>



// 				</div>
// 				<div className="bg-slate-800/60 border border-slate-700 rounded-xl p-4 text-sm text-slate-200">
// 					<p className="font-semibold mb-2 text-emerald-300">Hackathon Focus</p>
// 					<ul className="space-y-1 list-disc list-inside">
// 						<li>Smart matching between learners and alumni</li>
// 						<li>AI study assistant and dashboard insights</li>
// 						<li>Gamified points, badges, and leaderboards</li>
// 						<li>Inclusive, scalable UX for all tech levels</li>
// 					</ul>
// 				</div>
// 			</section>

// 			<section id="features" className="grid md:grid-cols-3 gap-6">
// 				<div className="bg-slate-800/60 border border-slate-700 rounded-lg p-4">
// 					<h2 className="font-semibold text-sky-300 mb-1">Alumni</h2>
// 					<p className="text-sm text-slate-200">
// 						List skills, set availability, and earn recognition for tutoring
// 						sessions and community impact.
// 					</p>
// 				</div>
// 				<div className="bg-slate-800/60 border border-slate-700 rounded-lg p-4">
//   <h2 className="font-semibold text-emerald-300 mb-1">Learners</h2>
//   <p className="text-sm text-slate-200 mb-3">
//     Find mentors by skill, cohort, or track. Ask quick questions or
//     schedule deeper mentoring sessions.
//   </p>
//   <Link
//     to="/profile/learner"
//     className="inline-block mt-1 px-3 py-1.5 rounded bg-emerald-500 hover:bg-emerald-600 text-xs text-white font-medium"
//   >
//     Your Learner Profile
//   </Link>
// </div>
// 				<div className="bg-slate-800/60 border border-slate-700 rounded-lg p-4">
// 					<h2 className="font-semibold text-violet-300 mb-1">AI Assist</h2>
// 					<p className="text-sm text-slate-200">
// 						Get tailored hints, study plans, and progress insights from the
// 						integrated AI assistant.
// 					</p>
// 				</div>
// 			</section>
// 			<section className="border-t py-4">
// 				<MyCalendarComponent />
// 			</section>
// 		</div>
// 	);
// }

// export default HomePage;





import { Link } from "react-router-dom";

function HomePage() {
	return (
		<div className="space-y-12">
			{/* Hero Section */}
			<section className="grid md:grid-cols-2 gap-8 items-center">
				<div>
					<h1 className="text-4xl md:text-5xl font-bold text-sky-300 mb-4">
						PeerTrack+
					</h1>
					<p className="text-slate-200 mb-6 text-lg leading-relaxed">
						An AI‑powered tutoring and mentorship platform connecting Per
						Scholas alumni and learners to level up skills, confidence, and
						careers.
					</p>
					
					<div className="flex gap-3">
						<Link
							to="/auth"
							className="px-6 py-3 rounded-lg bg-sky-500 hover:bg-sky-600 text-white font-medium transition-colors shadow-lg hover:shadow-sky-500/50"
						>
							Get Started
						</Link>
						<Link
							to="/learn-more"
							className="px-6 py-3 rounded-lg border-2 border-slate-600 text-slate-200 font-medium hover:bg-slate-800 transition-colors"
						>
							Learn More
						</Link>
					</div>
				</div>

				<div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 border border-slate-700 rounded-xl p-6 backdrop-blur-sm">
					<p className="font-semibold mb-4 text-emerald-300 text-lg">Why PeerTrack+?</p>
					<ul className="space-y-3">
						<li className="flex items-start gap-3">
							<span className="text-emerald-400 text-xl">✓</span>
							<span className="text-slate-200">Smart matching between learners and alumni</span>
						</li>
						<li className="flex items-start gap-3">
							<span className="text-sky-400 text-xl">✓</span>
							<span className="text-slate-200">AI study assistant and dashboard insights</span>
						</li>
						<li className="flex items-start gap-3">
							<span className="text-violet-400 text-xl">✓</span>
							<span className="text-slate-200">Gamified points, badges, and leaderboards</span>
						</li>
						<li className="flex items-start gap-3">
							<span className="text-amber-400 text-xl">✓</span>
							<span className="text-slate-200">Inclusive, scalable UX for all tech levels</span>
						</li>
					</ul>
				</div>
			</section>

			{/* Features Section */}
			<section id="features" className="grid md:grid-cols-3 gap-6">
				<div className="bg-gradient-to-br from-sky-900/40 to-slate-800/60 border border-sky-700/50 rounded-xl p-6 hover:border-sky-500/50 transition-all hover:shadow-lg hover:shadow-sky-500/20">
					<div className="text-3xl mb-3">👨‍🎓</div>
					<h2 className="font-bold text-sky-300 mb-2 text-lg">Alumni Mentors</h2>
					<p className="text-sm text-slate-200 leading-relaxed">
						List skills, set availability, and earn recognition for tutoring
						sessions and community impact.
					</p>
				</div>

				<div className="bg-gradient-to-br from-emerald-900/40 to-slate-800/60 border border-emerald-700/50 rounded-xl p-6 hover:border-emerald-500/50 transition-all hover:shadow-lg hover:shadow-emerald-500/20">
					<div className="text-3xl mb-3">🚀</div>
					<h2 className="font-bold text-emerald-300 mb-2 text-lg">Learners</h2>
					<p className="text-sm text-slate-200 mb-4 leading-relaxed">
						Find mentors by skill, cohort, or track. Ask quick questions or
						schedule deeper mentoring sessions.
					</p>
					<Link
						to="/profile/learner"
						className="inline-block px-4 py-2 rounded-lg bg-emerald-500 hover:bg-emerald-600 text-sm text-white font-medium transition-colors"
					>
						Create Your Profile →
					</Link>
				</div>

				<div className="bg-gradient-to-br from-violet-900/40 to-slate-800/60 border border-violet-700/50 rounded-xl p-6 hover:border-violet-500/50 transition-all hover:shadow-lg hover:shadow-violet-500/20">
					<div className="text-3xl mb-3">🤖</div>
					<h2 className="font-bold text-violet-300 mb-2 text-lg">AI Assistant</h2>
					<p className="text-sm text-slate-200 leading-relaxed">
						Get tailored hints, study plans, and progress insights from the
						integrated AI assistant.
					</p>
				</div>
			</section>

			{/* Stats Section */}
			<section className="bg-gradient-to-r from-slate-800/40 via-slate-800/60 to-slate-800/40 border border-slate-700 rounded-2xl p-8">
				<h3 className="text-2xl font-bold text-center text-slate-100 mb-8">
					Building Your Tech Career, Together
				</h3>
				<div className="grid md:grid-cols-3 gap-8">
					<div className="text-center">
						<div className="text-4xl font-bold text-sky-400 mb-2">24/7</div>
						<div className="text-sm text-slate-400">AI Study Support</div>
						<div className="text-xs text-slate-500 mt-1">Always available when you need help</div>
					</div>
					<div className="text-center">
						<div className="text-4xl font-bold text-emerald-400 mb-2">100+</div>
						<div className="text-sm text-slate-400">Alumni Mentors</div>
						<div className="text-xs text-slate-500 mt-1">Ready to share their expertise</div>
					</div>
					<div className="text-center">
						<div className="text-4xl font-bold text-violet-400 mb-2">∞</div>
						<div className="text-sm text-slate-400">Career Possibilities</div>
						<div className="text-xs text-slate-500 mt-1">Your future starts here</div>
					</div>
				</div>
			</section>

			{/* How It Works Section */}
			<section className="space-y-6">
				<h3 className="text-2xl font-bold text-center text-slate-100">
					How It Works
				</h3>
				<div className="grid md:grid-cols-3 gap-6">
					<div className="bg-slate-800/40 border border-slate-700 rounded-xl p-6 text-center">
						<div className="w-12 h-12 bg-sky-500/20 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-sky-500">
							<span className="text-sky-300 font-bold text-lg">1</span>
						</div>
						<h4 className="font-semibold text-slate-200 mb-2">Sign Up</h4>
						<p className="text-sm text-slate-400">
							Create your profile and tell us what you want to learn
						</p>
					</div>
					<div className="bg-slate-800/40 border border-slate-700 rounded-xl p-6 text-center">
						<div className="w-12 h-12 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-emerald-500">
							<span className="text-emerald-300 font-bold text-lg">2</span>
						</div>
						<h4 className="font-semibold text-slate-200 mb-2">Get Matched</h4>
						<p className="text-sm text-slate-400">
							AI connects you with the perfect alumni mentor
						</p>
					</div>
					<div className="bg-slate-800/40 border border-slate-700 rounded-xl p-6 text-center">
						<div className="w-12 h-12 bg-violet-500/20 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-violet-500">
							<span className="text-violet-300 font-bold text-lg">3</span>
						</div>
						<h4 className="font-semibold text-slate-200 mb-2">Start Learning</h4>
						<p className="text-sm text-slate-400">
							Schedule sessions and level up your skills
						</p>
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className="bg-gradient-to-r from-sky-900/20 via-violet-900/20 to-emerald-900/20 border border-slate-700 rounded-2xl p-8 text-center">
				<h3 className="text-3xl font-bold text-slate-100 mb-4">
					Ready to Accelerate Your Career?
				</h3>
				<p className="text-slate-300 mb-6 max-w-2xl mx-auto">
					Join the PeerTrack+ community and connect with mentors who've been exactly where you are.
				</p>
				<Link
					to="/auth"
					className="inline-block px-8 py-4 rounded-lg bg-gradient-to-r from-sky-500 to-emerald-500 hover:from-sky-600 hover:to-emerald-600 text-white font-semibold text-lg transition-all shadow-lg hover:shadow-xl"
				>
					Get Started Free
				</Link>
			</section>
		</div>
	);
}

export default HomePage;