import { createContext, useContext, useState } from "react";
import type { AnyUser } from "../types";
import { apiClient } from "../clients/apiClient"

interface AuthContextValue {
  user: AnyUser | null;
  token: string | null;
  logInWithEmail: (email: string, password: string) => Promise<void>;
  logInWithProvider: (provider: "github" | "google") => void;
  logOut: () => void;
}

const AuthContext = createContext<AuthContextValue | null>(null);

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
};

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<AnyUser | null>(() => {
    const stored = localStorage.getItem("peertrack_user");
    return stored ? JSON.parse(stored) : null;
  });
  const [token, setToken] = useState<string | null>(() => {
    return localStorage.getItem("peertrack_token");
  });

  const saveAuth = (userData: AnyUser, jwt: string) => {
    setUser(userData);
    setToken(jwt);
    localStorage.setItem("peertrack_user", JSON.stringify(userData));
    localStorage.setItem("peertrack_token", jwt);
  };

  const logInWithEmail = async (email: string, password: string) => {
    const res = await apiClient.post("/auth/login", { email, password });
    const { user: u, token: t } = res.data as { user: AnyUser; token: string };
    saveAuth(u, t);
  };

  const logInWithProvider = (provider: "github" | "google") => {
    window.location.href = `${import.meta.env.VITE_BACKEND_URL}/auth/${provider}`;
  };

  const logOut = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem("peertrack_user");
    localStorage.removeItem("peertrack_token");
  };

  return (
    <AuthContext.Provider value={{ user, token, logInWithEmail, logInWithProvider, logOut }}>
      {children}
    </AuthContext.Provider>
  );
}