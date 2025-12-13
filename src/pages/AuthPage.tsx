import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function AuthPage() {
  const { logInWithEmail, logInWithProvider, user } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mode, setMode] = useState<"login" | "register">("login");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  if (user) {
    navigate("/");
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setError("");
      setLoading(true);

      if (mode === "login") {
        await logInWithEmail(email, password);
        navigate("/");
      } else {
        // registration then login – depends on your backend
        // await apiClient.post("/auth/register", { email, password, ... });
        // await logInWithEmail(email, password);
      }
    } catch (err: any) {
      console.error(err);
      setError(err.response?.data?.message || err.message || "Auth error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 bg-slate-900/80 border border-slate-700 rounded-xl p-6 shadow-lg">
      <h1 className="text-2xl font-semibold text-sky-300 mb-2 text-center">
        {mode === "login" ? "Sign in" : "Create your account"}
      </h1>
      <p className="text-xs text-slate-400 text-center mb-4">
        Use your Per Scholas email or connect GitHub / Google to join PeerTrack+.
      </p>

      {error && (
        <div className="mb-3 text-xs text-red-400 bg-red-950/40 border border-red-700 rounded px-3 py-2">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-3">
        <div>
          <label className="block text-xs text-slate-300 mb-1">Email</label>
          <input
            type="email"
            className="w-full rounded border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-slate-100 focus:outline-none focus:ring-1 focus:ring-sky-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div>
          <label className="block text-xs text-slate-300 mb-1">Password</label>
          <input
            type="password"
            className="w-full rounded border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-slate-100 focus:outline-none focus:ring-1 focus:ring-sky-500"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full mt-2 px-4 py-2 rounded bg-sky-500 hover:bg-sky-600 text-white text-sm font-medium disabled:opacity-60"
        >
          {loading ? "Please wait..." : mode === "login" ? "Sign in" : "Register"}
        </button>
      </form>

      <div className="mt-4 flex items-center gap-2">
        <div className="flex-1 h-px bg-slate-700" />
        <span className="text-[10px] uppercase tracking-wide text-slate-400">
          or continue with
        </span>
        <div className="flex-1 h-px bg-slate-700" />
      </div>

      <div className="mt-3 flex gap-2">
        <button
          onClick={() => logInWithProvider("github")}
          className="flex-1 px-3 py-2 rounded border border-slate-600 text-xs text-slate-100 hover:bg-slate-800"
        >
          GitHub
        </button>
        <button
          onClick={() => logInWithProvider("google")}
          className="flex-1 px-3 py-2 rounded border border-slate-600 text-xs text-slate-100 hover:bg-slate-800"
        >
          Google
        </button>
      </div>

      <div className="mt-4 text-center text-xs text-slate-400">
        {mode === "login" ? (
          <>
            New to PeerTrack+?{" "}
            <button
              onClick={() => setMode("register")}
              className="text-sky-400 hover:underline"
            >
              Create an account
            </button>
          </>
        ) : (
          <>
            Already have an account?{" "}
            <button
              onClick={() => setMode("login")}
              className="text-sky-400 hover:underline"
            >
              Sign in
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default AuthPage;