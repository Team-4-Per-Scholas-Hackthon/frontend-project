import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { apiClient } from "../clients/apiClient";

interface LearnerStats {
  sessionsAttended: number;
  hoursLearned: number;
  skillsImproving: number;
  mentorsWorkedWith: number;
}

interface GrowthIndicator {
  skill: string;
  progress: number;
  goal: number;
}

interface SmartPrompt {
  type: "motivation" | "guidance" | "reminder";
  message: string;
  icon: string;
}

interface Achievement {
  id: string;
  name: string;
  icon: string;
  unlockedAt: string;
}

interface Streak {
  currentStreak: number;
  longestStreak: number;
  lastSessionDate: string;
}

interface RecentSession {
  id: string;
  mentorName: string;
  topic: string;
  date: string;
}

function LearnerDashComponent() {
  const { user } = useAuth();
  const [stats, setStats] = useState<LearnerStats | null>(null);
  const [growthIndicators, setGrowthIndicators] = useState<GrowthIndicator[]>([]);
  const [smartPrompts, setSmartPrompts] = useState<SmartPrompt[]>([]);
  const [achievements, setAchievements] = useState<Achievement[]>([]);
  const [streak, setStreak] = useState<Streak | null>(null);
  const [recentSession, setRecentSession] = useState<RecentSession | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        setLoading(true);
        const [
          statsRes,
          growthRes,
          promptsRes,
          achievementsRes,
          streakRes,
          sessionRes
        ] = await Promise.all([
          apiClient.get("/learner/stats"),
          apiClient.get("/learner/growth-indicators"),
          apiClient.get("/learner/smart-prompts"),
          apiClient.get("/learner/achievements"),
          apiClient.get("/learner/streak"),
          apiClient.get("/learner/recent-session")
        ]);

        setStats(statsRes.data);
        setGrowthIndicators(growthRes.data);
        setSmartPrompts(promptsRes.data);
        setAchievements(achievementsRes.data);
        setStreak(streakRes.data);
        setRecentSession(sessionRes.data);
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
          <div className="w-16 h-16 border-4 border-cyan-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-slate-400">Loading your dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Welcome Header */}
      <section className="bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 border border-cyan-500/30 rounded-2xl p-8">
        <h1 className="text-4xl font-bold mb-2">
          <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Welcome back, {user?.fullName || user?.username}! 🚀
          </span>
        </h1>
        <p className="text-slate-300 text-lg">
          Keep up the great work on your learning journey!
        </p>
      </section>

      {/* Core Stats Row */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-gradient-to-br from-cyan-900/20 to-slate-800/50 border border-cyan-500/30 rounded-xl p-6 hover:border-cyan-400/50 transition-all">
          <div className="text-3xl mb-2">📚</div>
          <div className="text-3xl font-bold text-cyan-400 mb-1">
            {stats?.sessionsAttended || 0}
          </div>
          <div className="text-xs text-slate-400">Sessions Attended</div>
        </div>

        <div className="bg-gradient-to-br from-purple-900/20 to-slate-800/50 border border-purple-500/30 rounded-xl p-6 hover:border-purple-400/50 transition-all">
          <div className="text-3xl mb-2">⏰</div>
          <div className="text-3xl font-bold text-purple-400 mb-1">
            {stats?.hoursLearned || 0}
          </div>
          <div className="text-xs text-slate-400">Hours Learned</div>
        </div>

        <div className="bg-gradient-to-br from-pink-900/20 to-slate-800/50 border border-pink-500/30 rounded-xl p-6 hover:border-pink-400/50 transition-all">
          <div className="text-3xl mb-2">🎯</div>
          <div className="text-3xl font-bold text-pink-400 mb-1">
            {stats?.skillsImproving || 0}
          </div>
          <div className="text-xs text-slate-400">Skills Improving</div>
        </div>

        <div className="bg-gradient-to-br from-orange-900/20 to-slate-800/50 border border-orange-500/30 rounded-xl p-6 hover:border-orange-400/50 transition-all">
          <div className="text-3xl mb-2">👥</div>
          <div className="text-3xl font-bold text-orange-400 mb-1">
            {stats?.mentorsWorkedWith || 0}
          </div>
          <div className="text-xs text-slate-400">Mentors Met</div>
        </div>
      </section>

      {/* Personalized Growth Indicators */}
      <section className="bg-slate-800/40 border border-slate-700 rounded-2xl p-8">
        <h2 className="text-2xl font-bold text-slate-100 mb-6 flex items-center gap-2">
          <span>📈</span> Your Growth Journey
        </h2>
        <div className="space-y-4">
          {growthIndicators.map((indicator, index) => (
            <div key={index} className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-slate-200">
                  {indicator.skill}
                </span>
                <span className="text-sm text-cyan-400">
                  {indicator.progress}/{indicator.goal} hours
                </span>
              </div>
              <div className="relative w-full h-3 bg-slate-900/60 rounded-full overflow-hidden border border-slate-700">
                <div
                  className="absolute top-0 left-0 h-full bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full transition-all duration-500"
                  style={{
                    width: `${Math.min((indicator.progress / indicator.goal) * 100, 100)}%`
                  }}
                ></div>
              </div>
            </div>
          ))}
          {growthIndicators.length === 0 && (
            <div className="text-center py-8 text-slate-500">
              Start learning to track your progress! 🎓
            </div>
          )}
        </div>
      </section>

      {/* Motivation & Guidance */}
      <section className="grid md:grid-cols-2 gap-4">
        {smartPrompts.map((prompt, index) => (
          <div
            key={index}
            className={`bg-slate-800/40 border rounded-xl p-6 ${
              prompt.type === "motivation"
                ? "border-pink-500/30 hover:border-pink-400/50"
                : prompt.type === "guidance"
                ? "border-cyan-500/30 hover:border-cyan-400/50"
                : "border-orange-500/30 hover:border-orange-400/50"
            } transition-all`}
          >
            <div className="flex items-start gap-4">
              <div className="text-4xl">{prompt.icon}</div>
              <div className="flex-1">
                <div
                  className={`text-xs uppercase tracking-wider mb-2 font-semibold ${
                    prompt.type === "motivation"
                      ? "text-pink-400"
                      : prompt.type === "guidance"
                      ? "text-cyan-400"
                      : "text-orange-400"
                  }`}
                >
                  {prompt.type}
                </div>
                <p className="text-sm text-slate-300">{prompt.message}</p>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Learning Streaks & Achievements */}
      <section className="grid md:grid-cols-2 gap-6">
        {/* Streak Card */}
        <div className="bg-slate-800/40 border border-slate-700 rounded-2xl p-8">
          <h3 className="text-xl font-bold text-slate-100 mb-6 flex items-center gap-2">
            <span>🔥</span> Learning Streak
          </h3>
          <div className="text-center mb-6">
            <div className="text-6xl font-bold bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent mb-2">
              {streak?.currentStreak || 0}
            </div>
            <div className="text-sm text-slate-400">Days in a row</div>
          </div>
          <div className="flex justify-around pt-4 border-t border-slate-700">
            <div className="text-center">
              <div className="text-lg font-bold text-purple-400">
                {streak?.longestStreak || 0}
              </div>
              <div className="text-xs text-slate-500">Longest Streak</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-bold text-cyan-400">
                {streak?.lastSessionDate || "Never"}
              </div>
              <div className="text-xs text-slate-500">Last Session</div>
            </div>
          </div>
        </div>

        {/* Achievements Card */}
        <div className="bg-slate-800/40 border border-slate-700 rounded-2xl p-8">
          <h3 className="text-xl font-bold text-slate-100 mb-6 flex items-center gap-2">
            <span>🏆</span> Recent Achievements
          </h3>
          <div className="space-y-3">
            {achievements.slice(0, 4).map((achievement) => (
              <div
                key={achievement.id}
                className="flex items-center gap-3 bg-slate-900/60 border border-yellow-500/30 rounded-lg p-3 hover:border-yellow-400/50 transition-all"
              >
                <div className="text-3xl">{achievement.icon}</div>
                <div className="flex-1">
                  <div className="font-semibold text-slate-200 text-sm">
                    {achievement.name}
                  </div>
                  <div className="text-xs text-slate-500">
                    {achievement.unlockedAt}
                  </div>
                </div>
              </div>
            ))}
            {achievements.length === 0 && (
              <div className="text-center py-8 text-slate-500">
                Complete goals to unlock achievements! 🎯
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Trust & Confidence Boosters */}
      <section className="bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-cyan-500/10 border border-purple-500/30 rounded-2xl p-8">
        <h2 className="text-2xl font-bold text-slate-100 mb-6 text-center">
          💪 You're Making Great Progress!
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="text-4xl mb-3">🎓</div>
            <div className="font-semibold text-slate-200 mb-2">
              Expert Mentors
            </div>
            <p className="text-sm text-slate-400">
              Learn from Per Scholas alumni who've been where you are
            </p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-3">🤖</div>
            <div className="font-semibold text-slate-200 mb-2">
              AI-Powered Help
            </div>
            <p className="text-sm text-slate-400">
              Get instant answers 24/7 from our smart assistant
            </p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-3">🌟</div>
            <div className="font-semibold text-slate-200 mb-2">
              Proven Results
            </div>
            <p className="text-sm text-slate-400">
              Join 1000+ learners who've accelerated their careers
            </p>
          </div>
        </div>
      </section>

      {/* Primary CTAs */}
      <section className="grid md:grid-cols-2 gap-6">
        <div className="bg-gradient-to-br from-cyan-500/20 to-purple-500/20 border border-cyan-500/40 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-slate-100 mb-4">
            Ready for Your Next Session?
          </h3>
          <p className="text-slate-300 mb-6">
            Find the perfect mentor for your learning goals
          </p>
          <Link
            to="/find-mentor"
            className="inline-block px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white font-bold text-lg transition-all shadow-lg"
          >
            🔍 Find a Mentor
          </Link>
        </div>

        {recentSession && (
          <div className="bg-gradient-to-br from-pink-500/20 to-orange-500/20 border border-pink-500/40 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-slate-100 mb-4">
              Continue Where You Left Off
            </h3>
            <p className="text-slate-300 mb-2">
              Last session with <strong>{recentSession.mentorName}</strong>
            </p>
            <p className="text-sm text-slate-400 mb-6">
              Topic: {recentSession.topic}
            </p>
            <Link
              to={`/session/${recentSession.id}`}
              className="inline-block px-8 py-4 rounded-xl bg-gradient-to-r from-pink-500 to-orange-500 hover:from-pink-600 hover:to-orange-600 text-white font-bold text-lg transition-all shadow-lg"
            >
              ▶️ Resume Session
            </Link>
          </div>
        )}
      </section>
    </div>
  );
}

export default LearnerDashComponent;