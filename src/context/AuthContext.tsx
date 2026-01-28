import { createContext, useContext, useState } from "react";
import type { AnyUser } from "../types";
import { apiClient } from "../clients/apiClient";
import axios from "axios";
import { useNavigate } from "react-router-dom";

interface AuthContextValue {
	user: AnyUser | null;
	token: string | null;
	logInWithEmail: (email: string, password: string) => Promise<void>;
	logInWithProvider: (provider: "github" | "google") => void;
	logOut: () => void;
	setUser: (user: AnyUser) => void;
	setToken: (token: string) => void;
}

const AuthContext = createContext<AuthContextValue | null>(null);

export const useAuth = () => {
	const ctx = useContext(AuthContext);
	if (!ctx) throw new Error("useAuth must be used within AuthProvider");
	return ctx;
};

export function AuthProvider({ children }: { children: React.ReactNode }) {
	const [user, setUser] = useState<AnyUser | null>(() => {
		const value = localStorage.getItem("peertrack_user");
		if (value) {
			return JSON.parse(value);
		}
	});
	const [token, setToken] = useState<string | null>(() => {
		return localStorage.getItem("peertrack_token");
	});

	//navigation
	const navigate = useNavigate();

	const saveAuth = (userData: AnyUser, jwt: string) => {
		setUser(userData);
		setToken(jwt);
		//we need to delete this  next line due to security issue
		localStorage.setItem("peertrack_user", JSON.stringify(userData));
		localStorage.setItem("peertrack_token", jwt);
	};

	const logInWithEmail = async (email: string, password: string) => {
		const res = await apiClient.post("/users/login", { email, password });
		console.log(res.data);
		const { dbUser: u, token: t } = res.data as {
			dbUser: AnyUser;
			token: string;
		};
		saveAuth(u, t);
	};

	const logInWithProvider = (provider: "github" | "google") => {
		const popup = window.open(
			`${import.meta.env.VITE_BACKEND_URL}/users/auth/${provider}`,
			"_blank",
			"width=500,height=600",
		);

		// Listen for message from popup
		window.addEventListener("message", (event) => {
			//check to see if the message is coming from our backend
			if (event.origin !== import.meta.env.VITE_BACKEND_URL) return;
			//destructure the login
			const { token, user } = event.data;
			//save to the localStorage
			saveAuth(user, token);
			//navigate to home page
			navigate("/");
		});
	};

	const logOut = () => {
		setUser(null);
		setToken(null);
		localStorage.removeItem("peertrack_user");
		localStorage.removeItem("peertrack_token");
	};

	return (
		<AuthContext.Provider
			value={{ user, token, logInWithEmail, logInWithProvider, logOut }}>
			{children}
		</AuthContext.Provider>
	);
}
