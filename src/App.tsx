import { Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "./context/AuthContext";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import AuthPage from "./pages/AuthPage";
import AdminDashboard from "./pages/AdminDashboard";
import AlumniDashboard from "./pages/AlumniDashboard";
import LearnerDashboard from "./pages/LearnerDashboard";
import type { JSX } from "react";
import UserFormPage from "./pages/userFormPage";
import LearnerProfilePage from "./pages/LearnerProfilePage";


import LearnMorePage from "./pages/LearnMorePage";

function ProtectedRoute({
	children,
	allowedRoles,
}: {
	children: JSX.Element;
	allowedRoles?: string[];
}) {
	const { user } = useAuth();
	if (!user) return <Navigate to="/auth" replace />;
	if (allowedRoles && !allowedRoles.includes(user.role)) {
		return <Navigate to="/" replace />;
	}
	return children;
}

function App() {
	return (
    <div className="min-h-screen bg-slate-900 text-slate-50">
      <Navbar />
      <main className="max-w-6xl mx-auto px-4 py-6">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/learn-more" element={<LearnMorePage />} />
          <Route path="/userform" element={<UserFormPage />} />

          <Route
            path="/dashboard/admin"
            element={
              <ProtectedRoute allowedRoles={["ADMIN"]}>
                <AdminDashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/dashboard/alumni"
            element={
              <ProtectedRoute allowedRoles={["ALUMNI"]}>
                <AlumniDashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/dashboard/learner"
            element={
              <ProtectedRoute allowedRoles={["learner"]}>
                <LearnerDashboard />
              </ProtectedRoute>
            }
          />

          <Route
            path="/profile/learner"
            element={
              <ProtectedRoute allowedRoles={["learner"]}>
                <LearnerProfilePage />
              </ProtectedRoute>
            }
          />

          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
