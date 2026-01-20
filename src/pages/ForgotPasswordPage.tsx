import { useState } from "react";
import { apiClient } from "../clients/apiClient";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setError("");
      setMsg("");
      setLoading(true);

      const res = await apiClient.post("/users/forgot-password", { email });
      setMsg(res.data?.message || "If an account exists, a reset link will be sent.");
    } catch (err: any) {
      setError(err.response?.data?.message || err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-[calc(100vh-200px)] flex items-center justify-center py-8">
      <div className="w-full max-w-md bg-slate-900/60 border border-slate-700 rounded-2xl p-8 shadow-2xl">
        <h1 className="text-2xl font-bold text-slate-100 mb-2">Reset Password</h1>
        <p className="text-sm text-slate-400 mb-6">
          Enter your email and we’ll send you a reset link.
        </p>

        {msg && (
          <div className="mb-4 text-xs text-green-300 bg-green-950/30 border border-green-700 rounded-lg px-3 py-2">
            {msg}
          </div>
        )}
        {error && (
          <div className="mb-4 text-xs text-red-400 bg-red-950/40 border border-red-700 rounded-lg px-3 py-2">
            {error}
          </div>
        )}

        <form onSubmit={submit} className="space-y-4">
          <div>
            <label className="block text-xs text-slate-300 mb-1">Email</label>
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

          <button
            type="submit"
            disabled={loading}
            className="w-full px-4 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white font-semibold disabled:opacity-60 transition-all shadow-lg"
          >
            {loading ? "Sending..." : "Send Reset Link"}
          </button>
        </form>
      </div>
    </div>
  );
}