import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signupUser } from "../services/authService";

const Signup = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "engineer",
  });

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await signupUser(form);
      navigate("/login");
    } catch {
      alert("Signup failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-600 via-purple-600 to-blue-500 px-4">
      
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md backdrop-blur-xl bg-white/10 border border-white/20 shadow-2xl rounded-2xl p-8 space-y-6 transition-all duration-300"
      >
        
        <h2 className="text-3xl font-bold text-center text-white tracking-wide">
          Create Account 🚀
        </h2>

        {/* Name */}
        <div className="flex flex-col space-y-1">
          <label className="text-white/80 text-sm">Name</label>
          <input
            placeholder="Enter your name"
            className="w-full p-3 rounded-lg bg-white/20 text-white placeholder-white/60 border border-white/30 focus:outline-none focus:ring-2 focus:ring-white/50 focus:bg-white/30 transition"
            onChange={(e) =>
              setForm({ ...form, name: e.target.value })
            }
          />
        </div>

        {/* Email */}
        <div className="flex flex-col space-y-1">
          <label className="text-white/80 text-sm">Email</label>
          <input
            placeholder="Enter your email"
            className="w-full p-3 rounded-lg bg-white/20 text-white placeholder-white/60 border border-white/30 focus:outline-none focus:ring-2 focus:ring-white/50 focus:bg-white/30 transition"
            onChange={(e) =>
              setForm({ ...form, email: e.target.value })
            }
          />
        </div>

        {/* Password */}
        <div className="flex flex-col space-y-1">
          <label className="text-white/80 text-sm">Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            className="w-full p-3 rounded-lg bg-white/20 text-white placeholder-white/60 border border-white/30 focus:outline-none focus:ring-2 focus:ring-white/50 focus:bg-white/30 transition"
            onChange={(e) =>
              setForm({ ...form, password: e.target.value })
            }
          />
        </div>

        {/* Role */}
        <div className="flex flex-col space-y-1">
          <label className="text-white/80 text-sm">Role</label>
          <select
            className="w-full p-3 rounded-lg bg-white/20 text-white border border-white/30 focus:outline-none focus:ring-2 focus:ring-white/50 focus:bg-white/30 transition"
            onChange={(e) =>
              setForm({ ...form, role: e.target.value })
            }
          >
            <option value="engineer" className="text-black">
              Engineer
            </option>
            <option value="customer" className="text-black">
              Customer
            </option>
          </select>
        </div>

        {/* Button */}
        <button className="w-full bg-white text-indigo-600 font-semibold py-3 rounded-lg shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-300">
          Signup
        </button>

        {/* Extra */}
        <p className="text-center text-white/70 text-sm">
          Already have an account?{" "}
          <span
            onClick={() => navigate("/login")}
            className="text-white font-medium cursor-pointer hover:underline"
          >
            Login
          </span>
        </p>
      </form>
    </div>
  );
};

export default Signup;