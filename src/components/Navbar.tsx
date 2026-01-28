import { Link, NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Navbar() {
	const { user, logOut } = useAuth();
	const navigate = useNavigate();

	const dashboardPath =
		user?.role === "admin"
			? "/dashboard/admin"
			: user?.role === "alumni"
				? "/dashboard/alumni"
				: user?.role === "learner"
					? "/dashboard/learner"
					: "/";

	return (
		<header className="bg-slate-950/80 border-b border-slate-800">
			<nav className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
				<Link to="/" className="flex items-center gap-2">
					<span className="h-8 w-8 rounded-full bg-sky-500 flex items-center justify-center text-xs font-bold">
						PT+
					</span>
					<span className="font-semibold text-lg text-sky-100">PeerTrack+</span>
				</Link>

				<div className="flex items-center gap-4">
					<NavLink
						to="/"
						className={({ isActive }) =>
							`text-sm ${isActive ? "text-sky-400" : "text-slate-300"}`
						}>
						Home
					</NavLink>
					{user && (
						<NavLink
							to={dashboardPath}
							className={({ isActive }) =>
								`text-sm ${isActive ? "text-sky-400" : "text-slate-300"}`
							}>
							Dashboard
						</NavLink>
					)}
					{!user && (
						<NavLink
							to="/auth"
							className="text-sm px-3 py-1.5 rounded bg-sky-500 hover:bg-sky-600 text-white">
							Log In
						</NavLink>
					)}
					{user && (
						<button
							onClick={() => {
								logOut();
								navigate("/");
							}}
							className="text-xs px-3 py-1.5 rounded border border-slate-600 text-slate-200 hover:bg-slate-800">
							Log out
						</button>
					)}
					{user && (
						<span className="text-xs text-slate-400">
							{user.fullName} · {user.role.toLowerCase()}
						</span>
					)}
				</div>
			</nav>
		</header>
	);
}

export default Navbar;
