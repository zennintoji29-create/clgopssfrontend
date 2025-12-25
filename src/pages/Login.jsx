import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../auth/AuthContext";

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(form);
      const user = JSON.parse(localStorage.getItem("user"));
      navigate(user.role === "admin" ? "/admin" : "/student");
    } catch (err) {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-black">
      <div className="bg-glass backdrop-blur-md p-8 rounded-2xl w-full max-w-md shadow-xl">
        <h2 className="text-2xl font-bold mb-6 text-center">
          CollegeOps Login
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            className="w-full p-3 rounded bg-gray-800 focus:outline-none"
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            className="w-full p-3 rounded bg-gray-800 focus:outline-none"
            required
          />

          <button className="w-full bg-primary py-3 rounded font-semibold hover:opacity-90 transition">
            Login
          </button>
        </form>

        <p className="text-center mt-4 text-sm text-gray-400">
          Don’t have an account?{" "}
          <Link to="/register" className="text-primary">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
