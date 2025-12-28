// client/src/context/AuthContext.jsx
import { createContext, useContext, useEffect, useState } from "react";
import api from "../api/axios";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Load user on refresh
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    const accessToken = localStorage.getItem("accessToken");

    if (storedUser && accessToken) {
      setUser(JSON.parse(storedUser));
      api.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
    }

    setLoading(false);
  }, []);

  const login = async (email, password) => {
    const res = await api.post("/auth/login", { email, password });

    const { user, accessToken, refreshToken } = res.data.data;

    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("accessToken", accessToken);
    localStorage.setItem("refreshToken", refreshToken);

    api.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
    setUser(user);

    return user; // IMPORTANT
  };

  const logout = async () => {
    localStorage.clear();
    delete api.defaults.headers.common.Authorization;
    setUser(null);
    window.location.href = "/login";
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
