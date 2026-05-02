import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await login({ email, password });
      navigate("/dashboard");
    } catch (err) {
      console.error(err);
      alert("Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-600 via-purple-600 to-blue-500 px-4">
      
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md backdrop-blur-xl bg-white/10 border border-white/20 shadow-2xl rounded-2xl p-8 space-y-6 transition-all duration-300"
      >
        
        <h2 className="text-3xl font-bold text-center text-white tracking-wide">
          Welcome Back 👋
        </h2>

        {/* Email */}
        <div className="flex flex-col space-y-1">
          <label className="text-white/80 text-sm">Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full p-3 rounded-lg bg-white/20 text-white placeholder-white/60 border border-white/30 focus:outline-none focus:ring-2 focus:ring-white/50 focus:bg-white/30 transition"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        {/* Password */}
        <div className="flex flex-col space-y-1">
          <label className="text-white/80 text-sm">Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            className="w-full p-3 rounded-lg bg-white/20 text-white placeholder-white/60 border border-white/30 focus:outline-none focus:ring-2 focus:ring-white/50 focus:bg-white/30 transition"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        {/* Button */}
        <button
          className="w-full bg-white text-indigo-600 font-semibold py-3 rounded-lg shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={loading}
        >
          {loading ? "Logging in..." : "Login"}
        </button>

        {/* Extra */}
        <p className="text-center text-white/70 text-sm">
          Don’t have an account?{" "}
          <span className="text-white font-medium cursor-pointer hover:underline">
            Sign up
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;