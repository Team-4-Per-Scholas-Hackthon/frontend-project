import { useState } from "react";
import { useNavigate, useSearchParams, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { apiClient } from "../clients/apiClient";

function AuthPage() {
  const { logInWithEmail, logInWithProvider, user } = useAuth();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [role, setRole] = useState<"learner" | "alumni" | "">("");
  const [mode, setMode] = useState<"login" | "register">(
    searchParams.get("mode") === "register" ? "register" : "login"
  );
  
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  

  if (user) {
    navigate("/");
  }

  const handleRoleSelection = (selectedRole: "learner" | "alumni") => {
    setRole(selectedRole);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (mode === "register" && !role) {
      setError("Please select your role");
      return;
    }

    try {
      setError("");
      setLoading(true);

      if (mode === "login") {
        await logInWithEmail(email, password);
        navigate("/");
      } else {
        await apiClient.post("/users/register", {
          username,
          email,
          password,
          role,
        });
        await logInWithEmail(email, password);
      }
    } catch (err: any) {
      console.error(err);
      setError(err.response?.data?.message || err.message || "Auth error");
    } finally {
      setLoading(false);
    }
  };

  const handleModeChange = (newMode: "login" | "register") => {
    setMode(newMode);
    setRole("");
    setEmail("");
    setPassword("");
    setUsername("");
    setError("");
  };

  return (
    <div className="min-h-[calc(100vh-200px)] flex items-center justify-center py-8">
      <div className="w-full max-w-6xl mx-auto px-4">
        <div className="bg-slate-800/40 border border-slate-700 rounded-3xl overflow-hidden shadow-2xl">
          <div className="grid md:grid-cols-2 gap-0">
            {/* Left Side - Welcome */}
            <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 p-12 flex flex-col justify-center relative overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-orange-500/10 to-pink-500/10 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-cyan-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
              
              <div className="mb-8 relative z-10">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                  <span className="bg-gradient-to-r from-cyan-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">
                    Welcome to PeerTrack+
                  </span>
                </h1>
                <p className="text-slate-200 text-lg leading-relaxed mb-6">
                  Connect with Per Scholas alumni mentors and level up your tech skills with AI-powered guidance.
                </p>
              </div>

              {/* Illustration */}
              <div className="relative bg-slate-900/40 rounded-2xl p-8 border border-orange-500/20 backdrop-blur-sm">
                <div className="flex items-center justify-center gap-8">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-gradient-to-br from-orange-500/30 to-pink-500/30 rounded-full flex items-center justify-center mb-3 border-2 border-orange-400/50 shadow-lg">
                      <span className="text-5xl">👨‍🏫</span>
                    </div>
                    <div className="text-xs text-orange-300 font-semibold">Alumni</div>
                  </div>

                  <div className="flex flex-col items-center">
                    <div className="w-16 h-1 bg-gradient-to-r from-orange-400 to-cyan-400 rounded-full shadow-lg"></div>
                    <span className="text-cyan-300 text-sm font-semibold my-1">Connected</span>
                    <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full shadow-lg"></div>
                  </div>

                  <div className="text-center">
                    <div className="w-24 h-24 bg-gradient-to-br from-cyan-500/30 to-purple-500/30 rounded-full flex items-center justify-center mb-3 border-2 border-cyan-400/50 shadow-lg">
                      <span className="text-5xl">👨‍💻</span>
                    </div>
                    <div className="text-xs text-cyan-300 font-semibold">Learner</div>
                  </div>
                </div>

                <div className="absolute top-4 right-4 w-12 h-12 bg-gradient-to-br from-yellow-400/30 to-orange-400/30 rounded-lg flex items-center justify-center border border-yellow-400/40 animate-pulse">
                  <span className="text-xl">💡</span>
                </div>
              </div>

              {/* Features */}
              <div className="mt-6 space-y-2 relative z-10">
                <div className="flex items-center gap-2 text-sm text-slate-300">
                  <span className="text-cyan-400">✓</span>
                  <span>AI-powered mentor matching</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-300">
                  <span className="text-orange-400">✓</span>
                  <span>24/7 study assistant</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-300">
                  <span className="text-pink-400">✓</span>
                  <span>Track your progress</span>
                </div>
              </div>
            </div>

            {/* Right Side - Auth Form */}
            <div className="bg-slate-900/60 p-12 flex flex-col justify-center">
              <div className="max-w-md mx-auto w-full">
                {/* Mode Toggle */}
                <div className="flex gap-2 mb-6 bg-slate-800/50 rounded-lg p-1">
                  <button
                    onClick={() => handleModeChange("register")}
                    className={`flex-1 py-2 rounded-md text-sm font-medium transition-all ${
                      mode === "register"
                        ? "bg-gradient-to-r from-orange-500 to-pink-500 text-white"
                        : "text-slate-400 hover:text-slate-200"
                    }`}
                  >
                    Sign Up
                  </button>
                  <button
                    onClick={() => handleModeChange("login")}
                    className={`flex-1 py-2 rounded-md text-sm font-medium transition-all ${
                      mode === "login"
                        ? "bg-gradient-to-r from-cyan-500 to-purple-500 text-white"
                        : "text-slate-400 hover:text-slate-200"
                    }`}
                  >
                    Log In
                  </button>
                </div>

                <div className="text-center mb-6">
                  <h2 className="text-2xl font-bold text-slate-100">
                    {mode === "register" ? "Join Our Community" : "Welcome Back"}
                  </h2>
                  <p className="text-sm text-slate-400 mt-1">
                    {mode === "register"
                      ? role
                        ? "Complete your registration"
                        : "Choose how you want to join PeerTrack+"
                      : "Sign in to continue your journey"}
                  </p>
                </div>

                {error && (
                  <div className="mb-4 text-xs text-red-400 bg-red-950/40 border border-red-700 rounded-lg px-3 py-2">
                    {error}
                  </div>
                )}

                {/* Role Selection (Register Only - Before Form) */}
                {mode === "register" && !role && (
                  <div className="space-y-3">
                    {/* Learner Card */}
                    <button
                      type="button"
                      onClick={() => handleRoleSelection("learner")}
                      className="w-full p-4 rounded-xl text-left transition-all bg-slate-800/50 border-2 border-slate-700 hover:border-cyan-500/50 hover:bg-gradient-to-r hover:from-cyan-500/10 hover:to-purple-500/10 group"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-slate-700/50 group-hover:bg-cyan-500/30 transition-all">
                          <span className="text-2xl">👨‍💻</span>
                        </div>
                        <div className="flex-1">
                          <h3 className="font-bold mb-1 text-slate-300 group-hover:text-cyan-300 transition-colors">
                            I'm a Learner
                          </h3>
                          <p className="text-xs text-slate-400">
                            Find mentors and get help with your tech journey
                          </p>
                        </div>
                        <span className="text-slate-600 group-hover:text-cyan-400 text-xl transition-colors">→</span>
                      </div>
                    </button>

                    {/* Alumni Card */}
                    <button
                      type="button"
                      onClick={() => handleRoleSelection("alumni")}
                      className="w-full p-4 rounded-xl text-left transition-all bg-slate-800/50 border-2 border-slate-700 hover:border-orange-500/50 hover:bg-gradient-to-r hover:from-orange-500/10 hover:to-pink-500/10 group"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-slate-700/50 group-hover:bg-orange-500/30 transition-all">
                          <span className="text-2xl">👨‍🏫</span>
                        </div>
                        <div className="flex-1">
                          <h3 className="font-bold mb-1 text-slate-300 group-hover:text-orange-300 transition-colors">
                            I'm an Alumni
                          </h3>
                          <p className="text-xs text-slate-400">
                            Share expertise and mentor new learners
                          </p>
                        </div>
                        <span className="text-slate-600 group-hover:text-orange-400 text-xl transition-colors">→</span>
                      </div>
                    </button>
                  </div>
                )}

                {/* Registration Form - Appears After Role Selection */}
                {mode === "register" && role && (
                  <div className="space-y-4">
                    {/* Selected Role Display */}
                    <div className={`p-3 rounded-lg border-2 ${
                      role === "learner"
                        ? "bg-cyan-500/10 border-cyan-500/30"
                        : "bg-orange-500/10 border-orange-500/30"
                    }`}>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="text-xl">
                            {role === "learner" ? "👨‍💻" : "👨‍🏫"}
                          </span>
                          <span className={`text-sm font-semibold ${
                            role === "learner" ? "text-cyan-300" : "text-orange-300"
                          }`}>
                            {role === "learner" ? "Learner" : "Alumni"}
                          </span>
                        </div>
                        <button
                          type="button"
                          onClick={() => setRole("")}
                          className="text-xs text-slate-400 hover:text-slate-200 underline"
                        >
                          Change
                        </button>
                      </div>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <label className="block text-xs text-slate-300 mb-1">
                          Username
                        </label>
                        <input
                          type="text"
                          className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-slate-100 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                          value={username}
                          onChange={(e) => setUsername(e.target.value)}
                          placeholder="Choose a username"
                          required
                          autoFocus
                        />
                      </div>

                      <div>
                        <label className="block text-xs text-slate-300 mb-1">
                          Email
                        </label>
                        <input
                          type="email"
                          className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-slate-100 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="your.email@example.com"
                          required
                        />
                      </div>

                      <div>
                        <label className="block text-xs text-slate-300 mb-1">
                          Password
                        </label>
                        <input
                          type="password"
                          className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-slate-100 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          placeholder="Enter your password"
                          required
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={loading}
                        className="w-full mt-4 px-4 py-3 rounded-lg bg-gradient-to-r from-orange-500 via-pink-500 to-orange-600 hover:from-orange-600 hover:via-pink-600 hover:to-orange-700 text-white font-semibold disabled:opacity-60 transition-all shadow-lg"
                      >
                        {loading ? "Creating Account..." : "Create Account"}
                      </button>
                    </form>
                  </div>
                )}

                {/* Login Form */}
                {mode === "login" && (
                  <div className="space-y-4">
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <label className="block text-xs text-slate-300 mb-1">
                          Email
                        </label>
                        <input
                          type="email"
                          className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-slate-100 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="your.email@example.com"
                          required
                          autoFocus
                        />
                      </div>

                      <div>
                        <label className="block text-xs text-slate-300 mb-1">
                          Password
                        </label>
                        <input
                          type="password"
                          className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-slate-100 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          placeholder="Enter your password"
                          required
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={loading}
                        className="w-full mt-4 px-4 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white font-semibold disabled:opacity-60 transition-all shadow-lg"
                      >
                        {loading ? "Signing In..." : "Sign In"}
                      </button>
                      <div className="mt-3 text-center">
                        <Link
                          to="/forgot-password"
                          className="text-xs text-slate-400 hover:text-slate-200 underline underline-offset-4"
                        >
                          Forgot your password?
                        </Link>
                      </div>
                    </form>

                    {/* OAuth - Only on Login */}
                    <div className="mt-6">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="flex-1 h-px bg-slate-700" />
                        <span className="text-xs uppercase tracking-wide text-slate-500">
                          Or sign in with
                        </span>
                        <div className="flex-1 h-px bg-slate-700" />
                      </div>

                      <div className="grid grid-cols-2 gap-3">
                        <button
                          onClick={() => logInWithProvider("github")}
                          className="flex items-center justify-center gap-2 px-4 py-3 rounded-lg border border-slate-600 text-sm text-slate-100 hover:bg-slate-800 hover:border-purple-500/50 transition-all"
                        >
                          <span className="text-lg">⚫</span> GitHub
                        </button>
                        <button
                          onClick={() => logInWithProvider("google")}
                          className="flex items-center justify-center gap-2 px-4 py-3 rounded-lg border border-slate-600 text-sm text-slate-100 hover:bg-slate-800 hover:border-cyan-500/50 transition-all"
                        >
                          <span className="text-lg">🔵</span> Google
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AuthPage;