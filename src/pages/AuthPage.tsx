import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { apiClient } from "../clients/apiClient";

function AuthPage() {
	const { logInWithEmail, logInWithProvider, user } = useAuth();
	const navigate = useNavigate();

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [username, setUsername] = useState("");
	const [role, setRole] = useState("");
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


	return (
		<div className="max-w-md mx-auto mt-10 bg-slate-900/80 border border-slate-700 rounded-xl p-6 shadow-lg">
			<h1 className="text-2xl font-semibold text-sky-300 mb-2 text-center">
				{mode === "login" ? "Sign in" : "Create your account"}
			</h1>
			<p className="text-xs text-slate-400 text-center mb-4">
				Use your Per Scholas email or connect GitHub / Google to join
				PeerTrack+.
			</p>

			{error && (
				<div className="mb-3 text-xs text-red-400 bg-red-950/40 border border-red-700 rounded px-3 py-2">
					{error}
				</div>
			)}

			<form onSubmit={handleSubmit} className="space-y-3">
				{mode === "register" ? (
					<>
						<div>
							<label className="block text-xs text-slate-300 mb-1">
								Username
							</label>
							<input
								type="text"
								className="w-full rounded border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-slate-100 focus:outline-none focus:ring-1 focus:ring-sky-500"
								value={username}
								onChange={(e) => setUsername(e.target.value)}
								required
							/>
						</div>
						<div>
							<label className="block text-xs text-slate-300 mb-1">
								Register As
							</label>
							<select
								className="w-full rounded border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-slate-100 focus:outline-none focus:ring-1 focus:ring-sky-500"
								value={role}
								onChange={(e) => setRole(e.target.value)}
								required>
								<option value="" hidden>
									-- Select --
								</option>
								<option value="learner">Learner</option>
								<option value="alumni">Alumni</option>
							</select>
						</div>
					</>
				) : (
					""
				)}
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
					className="w-full mt-2 px-4 py-2 rounded bg-sky-500 hover:bg-sky-600 text-white text-sm font-medium disabled:opacity-60">
					{loading
						? "Please wait..."
						: mode === "login"
						? "Sign in"
						: "Register"}
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
					className="flex-1 px-3 py-2 rounded border border-slate-600 text-xs text-slate-100 hover:bg-slate-800">
					GitHub
				</button>
				<button
					onClick={() => logInWithProvider("google")}
					className="flex-1 px-3 py-2 rounded border border-slate-600 text-xs text-slate-100 hover:bg-slate-800">
					Google
				</button>
			</div>

			<div className="mt-4 text-center text-xs text-slate-400">
				{mode === "login" ? (
					<>
						New to PeerTrack+?{" "}
						<button
							onClick={() => setMode("register")}
							className="text-sky-400 hover:underline">
							Create an account
						</button>
					</>
				) : (
					<>
						Already have an account?{" "}
						<button
							onClick={() => setMode("login")}
							className="text-sky-400 hover:underline">
							Sign in
						</button>
					</>
				)}
			</div>
		</div>
	);
}

export default AuthPage;




