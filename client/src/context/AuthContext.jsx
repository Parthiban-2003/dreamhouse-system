import { createContext, useContext, useState, useEffect } from "react";
import { loginUser, logoutUser } from "../services/authService";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // ✅ Restore auth on refresh
  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      setUser({ token }); // minimal restore
    }

    setLoading(false);
  }, []);

  // ✅ LOGIN
  const login = async (data) => {
    const res = await loginUser(data);

    localStorage.setItem("token", res.token); 
    setUser(res.user);
  };

  // ✅ LOGOUT
  const logout = () => {
    logoutUser();
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);