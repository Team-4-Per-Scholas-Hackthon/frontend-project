import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { apiClient } from "../clients/apiClient";

export default function ResetPasswordPage() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const email = searchParams.get("email");
  const token = searchParams.get("token");

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  if (!email || !token) {
    return (
      <div className="text-center mt-20 text-red-400">
        Invalid or expired reset link.
      </div>
    );
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      setError("");
      setLoading(true);

      await apiClient.post("/users/reset-password", {
        email,
        token,
        newPassword: password,
      });

      setSuccess("Password reset successful! Redirecting to login...");
      setTimeout(() => navigate("/auth"), 2000);
    } catch (err: any) {
      setError(err.response?.data?.message || "Reset failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-[calc(100vh-200px)] flex items-center justify-center py-8">
      <div className="w-full max-w-md bg-slate-900/60 border border-slate-700 rounded-2xl p-8 shadow-2xl">
        <h1 className="text-2xl font-bold mb-2 text-slate-100">
          Reset your password
        </h1>
        <p className="text-sm text-slate-400 mb-6">
          Enter a new password for <strong>{email}</strong>
        </p>

        {error && (
          <div className="mb-4 text-xs text-red-400 bg-red-950/40 border border-red-700 rounded-lg px-3 py-2">
            {error}
          </div>
        )}
        {success && (
          <div className="mb-4 text-xs text-green-300 bg-green-950/30 border border-green-700 rounded-lg px-3 py-2">
            {success}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs text-slate-300 mb-1">
              New Password
            </label>
            <input
              type="password"
              className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-slate-100 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block text-xs text-slate-300 mb-1">
              Confirm Password
            </label>
            <input
              type="password"
              className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-slate-100 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full px-4 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white font-semibold disabled:opacity-60 transition-all shadow-lg"
          >
            {loading ? "Resetting..." : "Reset Password"}
          </button>
        </form>
      </div>
    </div>
  );
}