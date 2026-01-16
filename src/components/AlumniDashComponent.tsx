import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { apiClient } from "../clients/apiClient";


interface AlumniStats {
  learnersHelped: number;
  sessionsCompleted: number;
  totalHours: number;
  averageRating: number;
  repeatLearners: number;
}

interface Badge {
  id: string;
  name: string;
  icon: string;
  description: string;
  earnedAt: string;
}

interface WeekActivity {
  day: string;
  sessions: number;
}

interface Testimonial {
  learnerName: string;
  rating: number;
  comment: string;
  date: string;
}

function AlumniDashComponent() {
  const { user } = useAuth();
  const [stats, setStats] = useState<AlumniStats | null>(null);
  const [badges, setBadges] = useState<Badge[]>([]);
  const [weekActivity, setWeekActivity] = useState<WeekActivity[]>([]);
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        setLoading(true);
        const [statsRes, badgesRes, activityRes, testimonialsRes] = await Promise.all([
          apiClient.get("/alumni/stats"),
          apiClient.get("/alumni/badges"),
          apiClient.get("/alumni/week-activity"),
          apiClient.get("/alumni/testimonials")
        ]);

        setStats(statsRes.data);
        setBadges(badgesRes.data);
        setWeekActivity(activityRes.data);
        setTestimonials(testimonialsRes.data);
      } catch (error) {
        console.error("Error fetching dashboard data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchDashboardData();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-orange-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-slate-400">Loading your dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Welcome Header */}
      <section className="bg-gradient-to-r from-orange-500/10 via-pink-500/10 to-purple-500/10 border border-orange-500/30 rounded-2xl p-8">
        <h1 className="text-4xl font-bold mb-2">
          <span className="bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent">
            Welcome back, {user?.fullName || user?.username}! 👋
          </span>
        </h1>
        <p className="text-slate-300 text-lg">
          Here's your impact on the PeerTrack+ community
        </p>
      </section>

      {/* Core Stats Row */}
      <section className="grid grid-cols-2 md:grid-cols-5 gap-4">
        <div className="bg-gradient-to-br from-cyan-900/20 to-slate-800/50 border border-cyan-500/30 rounded-xl p-6 hover:border-cyan-400/50 transition-all">
          <div className="text-3xl mb-2">👥</div>
          <div className="text-3xl font-bold text-cyan-400 mb-1">
            {stats?.learnersHelped || 0}
          </div>
          <div className="text-xs text-slate-400">Learners Helped</div>
        </div>

        <div className="bg-gradient-to-br from-orange-900/20 to-slate-800/50 border border-orange-500/30 rounded-xl p-6 hover:border-orange-400/50 transition-all">
          <div className="text-3xl mb-2">✅</div>
          <div className="text-3xl font-bold text-orange-400 mb-1">
            {stats?.sessionsCompleted || 0}
          </div>
          <div className="text-xs text-slate-400">Sessions Completed</div>
        </div>

        <div className="bg-gradient-to-br from-pink-900/20 to-slate-800/50 border border-pink-500/30 rounded-xl p-6 hover:border-pink-400/50 transition-all">
          <div className="text-3xl mb-2">⏱️</div>
          <div className="text-3xl font-bold text-pink-400 mb-1">
            {stats?.totalHours || 0}
          </div>
          <div className="text-xs text-slate-400">Mentoring Hours</div>
        </div>

        <div className="bg-gradient-to-br from-yellow-900/20 to-slate-800/50 border border-yellow-500/30 rounded-xl p-6 hover:border-yellow-400/50 transition-all">
          <div className="text-3xl mb-2">⭐</div>
          <div className="text-3xl font-bold text-yellow-400 mb-1">
            {stats?.averageRating?.toFixed(1) || "N/A"}
          </div>
          <div className="text-xs text-slate-400">Average Rating</div>
        </div>

        <div className="bg-gradient-to-br from-purple-900/20 to-slate-800/50 border border-purple-500/30 rounded-xl p-6 hover:border-purple-400/50 transition-all">
          <div className="text-3xl mb-2">🔄</div>
          <div className="text-3xl font-bold text-purple-400 mb-1">
            {stats?.repeatLearners || 0}
          </div>
          <div className="text-xs text-slate-400">Repeat Learners</div>
        </div>
      </section>

      {/* Recognition & Badges */}
      <section className="bg-slate-800/40 border border-slate-700 rounded-2xl p-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-slate-100 flex items-center gap-2">
            <span>🏆</span> Recognition & Badges
          </h2>
          <Link
            to="/badges"
            className="text-sm text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            View All →
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {badges.slice(0, 6).map((badge) => (
            <div
              key={badge.id}
              className="bg-slate-900/60 border border-orange-500/30 rounded-xl p-4 text-center hover:border-orange-400/50 transition-all hover:scale-105 group"
            >
              <div className="text-4xl mb-2 group-hover:scale-110 transition-transform">
                {badge.icon}
              </div>
              <div className="text-xs font-semibold text-orange-300 mb-1">
                {badge.name}
              </div>
              <div className="text-xs text-slate-500">{badge.description}</div>
            </div>
          ))}
          {badges.length === 0 && (
            <div className="col-span-full text-center py-8 text-slate-500">
              Complete sessions to earn your first badge! 🎯
            </div>
          )}
        </div>
      </section>

      {/* Momentum Tracker */}
      <section className="bg-slate-800/40 border border-slate-700 rounded-2xl p-8">
        <h2 className="text-2xl font-bold text-slate-100 mb-6 flex items-center gap-2">
          <span>📊</span> This Week's Momentum
        </h2>
        <div className="grid grid-cols-7 gap-3">
          {weekActivity.map((day, index) => (
            <div key={index} className="text-center">
              <div className="text-xs text-slate-500 mb-2">{day.day}</div>
              <div
                className="bg-slate-900/60 rounded-lg border border-slate-700 p-4 relative overflow-hidden"
                style={{ minHeight: "100px" }}
              >
                <div
                  className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-cyan-500/40 to-transparent transition-all"
                  style={{ height: `${Math.min((day.sessions / 5) * 100, 100)}%` }}
                ></div>
                <div className="relative z-10 text-lg font-bold text-cyan-400">
                  {day.sessions}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-4 flex items-center justify-center gap-2 text-sm text-slate-400">
          <span className="w-3 h-3 bg-cyan-500/40 rounded"></span>
          <span>Sessions this week</span>
        </div>
      </section>

      {/* Social Proof */}
      <section className="bg-slate-800/40 border border-slate-700 rounded-2xl p-8">
        <h2 className="text-2xl font-bold text-slate-100 mb-6 flex items-center gap-2">
          <span>💬</span> What Learners Are Saying
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          {testimonials.slice(0, 4).map((testimonial, index) => (
            <div
              key={index}
              className="bg-slate-900/60 border border-pink-500/30 rounded-xl p-6 hover:border-pink-400/50 transition-all"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="font-semibold text-slate-200">
                  {testimonial.learnerName}
                </div>
                <div className="flex gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span
                      key={i}
                      className={
                        i < testimonial.rating
                          ? "text-yellow-400"
                          : "text-slate-600"
                      }
                    >
                      ⭐
                    </span>
                  ))}
                </div>
              </div>
              <p className="text-sm text-slate-400 italic mb-2">
                "{testimonial.comment}"
              </p>
              <div className="text-xs text-slate-500">{testimonial.date}</div>
            </div>
          ))}
          {testimonials.length === 0 && (
            <div className="col-span-full text-center py-8 text-slate-500">
              Your testimonials will appear here after completing sessions
            </div>
          )}
        </div>
      </section>

      {/* Primary CTA */}
      <section className="bg-gradient-to-r from-orange-500/20 via-pink-500/20 to-purple-500/20 border border-orange-500/40 rounded-2xl p-8 text-center">
        <h3 className="text-2xl font-bold text-slate-100 mb-4">
          Ready to mentor more learners?
        </h3>
        <p className="text-slate-300 mb-6">
          Manage your availability and schedule new sessions
        </p>
        <Link
          to="/calendar"
          className="inline-block px-8 py-4 rounded-xl bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 hover:from-orange-600 hover:via-pink-600 hover:to-purple-600 text-white font-bold text-lg transition-all shadow-lg"
        >
          📅 View My Calendar
        </Link>
      </section>
    </div>
  );
}

export default AlumniDashComponent;