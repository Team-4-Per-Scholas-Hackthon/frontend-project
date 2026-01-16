
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
import { useState, useEffect } from "react";
import { apiClient } from "../clients/apiClient";

interface Session {
  id: string;
  date: string;
  time: string;
  topic: string;
  mentorName?: string;
  learnerName?: string;
  status: "accepted" | "pending" | "new_request";
  duration: string;
}

interface LearnerStats {
  sessionsAttended: number;
  hoursLearned: number;
  currentStreak: number;
}

interface AlumniStats {
  learnersHelped: number;
  sessionsCompleted: number;
  badgesEarned: number;
}

function HomePage() {
  const { user } = useAuth();
  const [sessions, setSessions] = useState<Session[]>([]);
  const [learnerStats, setLearnerStats] = useState<LearnerStats | null>(null);
  const [alumniStats, setAlumniStats] = useState<AlumniStats | null>(null);
  const [selectedSession, setSelectedSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (user) {
      fetchUserData();
    }
  }, [user]);

  const fetchUserData = async () => {
    try {
      setLoading(true);
      if (user?.role === "learner") {
        const [sessionsRes, statsRes] = await Promise.all([
          apiClient.get("/learner/sessions"),
          apiClient.get("/learner/quick-stats")
        ]);
        setSessions(sessionsRes.data);
        setLearnerStats(statsRes.data);
      } else if (user?.role === "alumni") {
        const [sessionsRes, statsRes] = await Promise.all([
          apiClient.get("/alumni/sessions"),
          apiClient.get("/alumni/quick-stats")
        ]);
        setSessions(sessionsRes.data);
        setAlumniStats(statsRes.data);
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
    } finally {
      setLoading(false);
    }
  };

  // ============================================
  // LEARNER VIEW - Welcome Page with Calendar
  // ============================================
  if (user?.role === "learner") {
    return (
      <div className="min-h-[calc(100vh-200px)]">
        <div className="max-w-7xl mx-auto px-4 py-8">
          {/* Welcome Header */}
          <div className="text-center mb-8 bg-slate-800/60 border border-cyan-500/30 rounded-2xl p-8">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-3">
              Welcome back, {user.fullName || user.username}! 🚀
            </h1>
            <p className="text-lg text-slate-300 mb-6">
              Keep up the great work on your learning journey!
            </p>
            <Link
              to="/dashboard/learner"
              className="inline-block px-8 py-4 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white font-semibold text-lg transition-all shadow-lg"
            >
              Go to Full Dashboard →
            </Link>
          </div>

          {/* Quick Stats */}
          {loading ? (
            <div className="flex justify-center py-12">
              <div className="w-16 h-16 border-4 border-cyan-500 border-t-transparent rounded-full animate-spin" />
            </div>
          ) : (
            <>
              <div className="grid md:grid-cols-4 gap-4 mb-8">
                <div className="bg-slate-800/40 border border-cyan-500/30 rounded-xl p-6">
                  <div className="text-3xl mb-2">📚</div>
                  <div className="text-2xl font-bold text-cyan-400">{learnerStats?.sessionsAttended || 0}</div>
                  <div className="text-sm text-slate-400">Sessions</div>
                </div>
                <div className="bg-slate-800/40 border border-purple-500/30 rounded-xl p-6">
                  <div className="text-3xl mb-2">⏰</div>
                  <div className="text-2xl font-bold text-purple-400">{learnerStats?.hoursLearned || 0}</div>
                  <div className="text-sm text-slate-400">Hours Learned</div>
                </div>
                <div className="bg-slate-800/40 border border-orange-500/30 rounded-xl p-6">
                  <div className="text-3xl mb-2">🔥</div>
                  <div className="text-2xl font-bold text-orange-400">{learnerStats?.currentStreak || 0}</div>
                  <div className="text-sm text-slate-400">Day Streak</div>
                </div>
                <div className="bg-slate-800/40 border border-pink-500/30 rounded-xl p-6">
                  <div className="text-3xl mb-2">📈</div>
                  <div className="text-2xl font-bold text-pink-400">85%</div>
                  <div className="text-sm text-slate-400">Progress</div>
                </div>
              </div>

              {/* Calendar */}
              <div className="bg-slate-800/40 border border-slate-700 rounded-2xl p-8 mb-8">
                <h2 className="text-2xl font-bold text-slate-100 mb-6 flex items-center gap-2">
                  <span>📅</span> Your Schedule
                </h2>
                
                <div className="grid grid-cols-7 gap-2 mb-4">
                  {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
                    <div key={day} className="text-center text-sm font-semibold text-slate-400 py-2">
                      {day}
                    </div>
                  ))}
                </div>

                <div className="space-y-2">
                  {/* Week 1 */}
                  <div className="grid grid-cols-7 gap-2">
                    <div className="bg-slate-900/50 border border-slate-700 rounded-lg p-3 text-center text-slate-400">
                      <div className="text-lg font-semibold">1</div>
                    </div>
                    <div className="bg-slate-900/50 border border-slate-700 rounded-lg p-3 text-center text-slate-400">
                      <div className="text-lg font-semibold">2</div>
                    </div>
                    <div className="bg-slate-900/50 border border-slate-700 rounded-lg p-3 text-center text-slate-400">
                      <div className="text-lg font-semibold">3</div>
                    </div>
                    {/* ACCEPTED Session */}
                    <div 
                      onClick={() => setSelectedSession({
                        id: "1",
                        date: "Jan 4",
                        time: "3:00 PM",
                        topic: "JavaScript Basics",
                        mentorName: "John Smith",
                        status: "accepted",
                        duration: "60 min"
                      })}
                      className="bg-gradient-to-br from-emerald-900/40 to-cyan-900/40 border-2 border-emerald-500/50 rounded-lg p-3 cursor-pointer hover:scale-105 transition-all relative overflow-hidden shadow-lg"
                    >
                      <div className="text-lg font-semibold text-emerald-300">4</div>
                      <div className="text-xs text-emerald-200">3:00 PM</div>
                      <div className="text-xs text-emerald-300 font-semibold">✓ Confirmed</div>
                    </div>
                    <div className="bg-slate-900/50 border border-slate-700 rounded-lg p-3 text-center text-slate-400">
                      <div className="text-lg font-semibold">5</div>
                    </div>
                    <div className="bg-slate-900/50 border border-slate-700 rounded-lg p-3 text-center text-slate-400">
                      <div className="text-lg font-semibold">6</div>
                    </div>
                    {/* PENDING Session */}
                    <div 
                      onClick={() => setSelectedSession({
                        id: "2",
                        date: "Jan 7",
                        time: "5:00 PM",
                        topic: "Python Review",
                        mentorName: "Sarah Johnson",
                        status: "pending",
                        duration: "45 min"
                      })}
                      className="bg-gradient-to-br from-yellow-900/40 to-orange-900/40 border-2 border-yellow-500/50 rounded-lg p-3 cursor-pointer hover:scale-105 transition-all relative overflow-hidden shadow-lg"
                    >
                      <div className="text-lg font-semibold text-yellow-300">7</div>
                      <div className="text-xs text-yellow-200">5:00 PM</div>
                      <div className="text-xs text-yellow-300 font-semibold animate-pulse">⏳ Pending</div>
                    </div>
                  </div>

                  {/* Week 2 */}
                  <div className="grid grid-cols-7 gap-2">
                    {[8, 9, 10, 11, 12, 13, 14].map((day) => (
                      <div key={day} className="bg-slate-900/50 border border-slate-700 rounded-lg p-3 text-center text-slate-400">
                        <div className="text-lg font-semibold">{day}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Legend */}
                <div className="mt-6 flex items-center justify-center gap-6 pt-4 border-t border-slate-700">
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-gradient-to-br from-emerald-500/40 to-cyan-500/40 border border-emerald-500/50 rounded"></div>
                    <span className="text-sm text-slate-400">Accepted</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-gradient-to-br from-yellow-500/40 to-orange-500/40 border border-yellow-500/50 rounded"></div>
                    <span className="text-sm text-slate-400">Pending</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-slate-900/50 border border-slate-700 rounded"></div>
                    <span className="text-sm text-slate-400">Available</span>
                  </div>
                </div>
              </div>

              {/* Growth Indicators Mini */}
              <div className="bg-slate-800/40 border border-slate-700 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-slate-100 mb-4">📈 Skills Progress</h3>
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-slate-300">JavaScript</span>
                      <span className="text-cyan-400">12/20 hrs</span>
                    </div>
                    <div className="h-2 bg-slate-900/60 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full" style={{width: '60%'}}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-slate-300">React</span>
                      <span className="text-pink-400">8/15 hrs</span>
                    </div>
                    <div className="h-2 bg-slate-900/60 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-pink-500 to-orange-500 rounded-full" style={{width: '53%'}}></div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>

        {/* Session Detail Modal */}
        {selectedSession && (
          <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4" onClick={() => setSelectedSession(null)}>
            <div className="bg-slate-800 border border-cyan-500/50 rounded-2xl p-8 max-w-md w-full" onClick={(e) => e.stopPropagation()}>
              <h3 className="text-2xl font-bold text-cyan-400 mb-4">{selectedSession.topic}</h3>
              <div className="space-y-3 text-slate-300">
                <p>📅 {selectedSession.date} at {selectedSession.time}</p>
                <p>👨‍🏫 Mentor: {selectedSession.mentorName}</p>
                <p>⏱️ Duration: {selectedSession.duration}</p>
                <p>
                  Status: 
                  <span className={`ml-2 px-3 py-1 rounded-full text-xs font-semibold ${
                    selectedSession.status === 'accepted' 
                      ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                      : 'bg-yellow-500/20 text-yellow-300 border border-yellow-500/40'
                  }`}>
                    {selectedSession.status === 'accepted' ? '✓ Confirmed' : '⏳ Waiting for confirmation'}
                  </span>
                </p>
                {selectedSession.status === 'accepted' && (
                  <a href="#" className="inline-block mt-4 px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg font-semibold">
                    Join Session →
                  </a>
                )}
              </div>
              <button onClick={() => setSelectedSession(null)} className="mt-6 text-slate-400 hover:text-slate-200">Close</button>
            </div>
          </div>
        )}
      </div>
    );
  }

  // ============================================
  // ALUMNI VIEW - Welcome Page with Calendar
  // ============================================
  if (user?.role === "alumni") {
    return (
      <div className="min-h-[calc(100vh-200px)]">
        <div className="max-w-7xl mx-auto px-4 py-8">
          {/* Welcome Header */}
          <div className="text-center mb-8 bg-slate-800/60 border border-orange-500/30 rounded-2xl p-8">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent mb-3">
              Welcome back, {user.fullName || user.username}! 👋
            </h1>
            <p className="text-lg text-slate-300 mb-6">
              Ready to help more learners grow?
            </p>
            <Link
              to="/dashboard/alumni"
              className="inline-block px-8 py-4 rounded-lg bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white font-semibold text-lg transition-all shadow-lg"
            >
              Go to Full Dashboard →
            </Link>
          </div>

          {/* Quick Stats */}
          {loading ? (
            <div className="flex justify-center py-12">
              <div className="w-16 h-16 border-4 border-orange-500 border-t-transparent rounded-full animate-spin" />
            </div>
          ) : (
            <>
              <div className="grid md:grid-cols-4 gap-4 mb-8">
                <div className="bg-slate-800/40 border border-cyan-500/30 rounded-xl p-6">
                  <div className="text-3xl mb-2">👥</div>
                  <div className="text-2xl font-bold text-cyan-400">{alumniStats?.learnersHelped || 0}</div>
                  <div className="text-sm text-slate-400">Learners Helped</div>
                </div>
                <div className="bg-slate-800/40 border border-orange-500/30 rounded-xl p-6">
                  <div className="text-3xl mb-2">✅</div>
                  <div className="text-2xl font-bold text-orange-400">{alumniStats?.sessionsCompleted || 0}</div>
                  <div className="text-sm text-slate-400">Sessions Done</div>
                </div>
                <div className="bg-slate-800/40 border border-yellow-500/30 rounded-xl p-6">
                  <div className="text-3xl mb-2">🏆</div>
                  <div className="text-2xl font-bold text-yellow-400">{alumniStats?.badgesEarned || 0}</div>
                  <div className="text-sm text-slate-400">Badges Earned</div>
                </div>
                <div className="bg-slate-800/40 border border-pink-500/30 rounded-xl p-6">
                  <div className="text-3xl mb-2">⭐</div>
                  <div className="text-2xl font-bold text-pink-400">4.9</div>
                  <div className="text-sm text-slate-400">Rating</div>
                </div>
              </div>

              {/* Calendar */}
              <div className="bg-slate-800/40 border border-slate-700 rounded-2xl p-8 mb-8">
                <h2 className="text-2xl font-bold text-slate-100 mb-6 flex items-center gap-2">
                  <span>📅</span> Your Schedule
                </h2>
                
                <div className="grid grid-cols-7 gap-2 mb-4">
                  {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
                    <div key={day} className="text-center text-sm font-semibold text-slate-400 py-2">
                      {day}
                    </div>
                  ))}
                </div>

                <div className="space-y-2">
                  {/* Week 1 */}
                  <div className="grid grid-cols-7 gap-2">
                    <div className="bg-slate-900/50 border border-slate-700 rounded-lg p-3 text-center text-slate-400">
                      <div className="text-lg font-semibold">1</div>
                    </div>
                    {/* NEW REQUEST - Pulsing */}
                    <div 
                      onClick={() => setSelectedSession({
                        id: "1",
                        date: "Jan 2",
                        time: "2:00 PM",
                        topic: "React Hooks Help",
                        learnerName: "Alex Chen",
                        status: "new_request",
                        duration: "30 min"
                      })}
                      className="bg-gradient-to-br from-orange-900/50 to-red-900/50 border-2 border-orange-500/70 rounded-lg p-3 cursor-pointer hover:scale-105 transition-all relative overflow-hidden shadow-lg animate-pulse"
                    >
                      <div className="text-lg font-semibold text-orange-300">2</div>
                      <div className="text-xs text-orange-200">2:00 PM</div>
                      <div className="text-xs text-orange-300 font-semibold">🔔 New!</div>
                      <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-red-500/20"></div>
                    </div>
                    <div className="bg-slate-900/50 border border-slate-700 rounded-lg p-3 text-center text-slate-400">
                      <div className="text-lg font-semibold">3</div>
                    </div>
                    {/* SCHEDULED Session */}
                    <div 
                      onClick={() => setSelectedSession({
                        id: "2",
                        date: "Jan 4",
                        time: "4:00 PM",
                        topic: "JavaScript Debugging",
                        learnerName: "Maria Lopez",
                        status: "accepted",
                        duration: "60 min"
                      })}
                      className="bg-gradient-to-br from-cyan-900/40 to-purple-900/40 border-2 border-cyan-500/50 rounded-lg p-3 cursor-pointer hover:scale-105 transition-all relative overflow-hidden shadow-lg"
                    >
                      <div className="text-lg font-semibold text-cyan-300">4</div>
                      <div className="text-xs text-cyan-200">4:00 PM</div>
                      <div className="text-xs text-cyan-300 font-semibold">✓ Scheduled</div>
                    </div>
                    <div className="bg-slate-900/50 border border-slate-700 rounded-lg p-3 text-center text-slate-400">
                      <div className="text-lg font-semibold">5</div>
                    </div>
                    <div className="bg-slate-900/50 border border-slate-700 rounded-lg p-3 text-center text-slate-400">
                      <div className="text-lg font-semibold">6</div>
                    </div>
                    <div className="bg-slate-900/50 border border-slate-700 rounded-lg p-3 text-center text-slate-400">
                      <div className="text-lg font-semibold">7</div>
                    </div>
                  </div>

                  {/* Week 2 */}
                  <div className="grid grid-cols-7 gap-2">
                    {[8, 9, 10, 11, 12, 13, 14].map((day) => (
                      <div key={day} className="bg-slate-900/50 border border-slate-700 rounded-lg p-3 text-center text-slate-400">
                        <div className="text-lg font-semibold">{day}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Legend */}
                <div className="mt-6 flex items-center justify-center gap-6 pt-4 border-t border-slate-700">
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-gradient-to-br from-orange-500/50 to-red-500/50 border border-orange-500/70 rounded animate-pulse"></div>
                    <span className="text-sm text-slate-400">New Request</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-gradient-to-br from-cyan-500/40 to-purple-500/40 border border-cyan-500/50 rounded"></div>
                    <span className="text-sm text-slate-400">Scheduled</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-slate-900/50 border border-slate-700 rounded"></div>
                    <span className="text-sm text-slate-400">Available</span>
                  </div>
                </div>
              </div>

              {/* Recent Badges */}
              <div className="bg-slate-800/40 border border-slate-700 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-slate-100 mb-4 flex items-center gap-2">
                  <span>🏆</span> Recent Badges
                </h3>
                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-slate-900/60 border border-orange-500/30 rounded-xl p-4 text-center">
                    <div className="text-4xl mb-2">🥇</div>
                    <div className="text-xs font-semibold text-orange-300">First Session</div>
                  </div>
                  <div className="bg-slate-900/60 border border-cyan-500/30 rounded-xl p-4 text-center">
                    <div className="text-4xl mb-2">⭐</div>
                    <div className="text-xs font-semibold text-cyan-300">5-Star Mentor</div>
                  </div>
                  <div className="bg-slate-900/60 border border-pink-500/30 rounded-xl p-4 text-center">
                    <div className="text-4xl mb-2">🔥</div>
                    <div className="text-xs font-semibold text-pink-300">Weekly Streak</div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>

        {/* Session Detail Modal */}
        {selectedSession && (
          <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4" onClick={() => setSelectedSession(null)}>
            <div className="bg-slate-800 border border-orange-500/50 rounded-2xl p-8 max-w-md w-full" onClick={(e) => e.stopPropagation()}>
              <h3 className="text-2xl font-bold text-orange-400 mb-4">{selectedSession.topic}</h3>
              <div className="space-y-3 text-slate-300">
                <p>📅 {selectedSession.date} at {selectedSession.time}</p>
                <p>👨‍💻 Learner: {selectedSession.learnerName}</p>
                <p>⏱️ Duration: {selectedSession.duration}</p>
                <p>
                  Status: 
                  <span className={`ml-2 px-3 py-1 rounded-full text-xs font-semibold ${
                    selectedSession.status === 'new_request'
                      ? 'bg-orange-500/20 text-orange-300 border border-orange-500/40 animate-pulse'
                      : 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
                  }`}>
                    {selectedSession.status === 'new_request' ? '🔔 New Request' : '✓ Scheduled'}
                  </span>
                </p>
                {selectedSession.status === 'new_request' && (
                  <div className="flex gap-3 mt-4">
                    <button className="flex-1 px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg font-semibold">
                      Accept
                    </button>
                    <button className="flex-1 px-6 py-3 bg-slate-700 hover:bg-slate-600 text-slate-200 rounded-lg">
                      Decline
                    </button>
                  </div>
                )}
                {selectedSession.status === 'accepted' && (
                  <a href="#" className="inline-block mt-4 px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg font-semibold">
                    View Details →
                  </a>
                )}
              </div>
              <button onClick={() => setSelectedSession(null)} className="mt-6 text-slate-400 hover:text-slate-200">Close</button>
            </div>
          </div>
        )}
      </div>
    );
  }

  // ============================================
  // LANDING PAGE - Your Original Beautiful Design
  // ============================================
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
                    to="/auth?mode=register"
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
            to="/auth?mode=register"
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