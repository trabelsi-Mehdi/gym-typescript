import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", {
        email,
        password,
      });
      const role = res.data.role ;
      setMessage(res.data.message);
      alert(res.data.message);
      navigate("/verify-otp", { state: { email , role } });
    
    } catch (err: any) {
      setMessage(err.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#fefaf6] px-4">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold text-[#4e374f] text-center mb-6">Welcome Back</h2>

        <form className="space-y-4" onSubmit={handleSignIn}>
          {message && <p className="text-center text-sm text-red-500">{message}</p>}
          <div>
            <label className="block text-sm font-medium text-[#4e374f] mb-1">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4e374f]"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-[#4e374f] mb-1">Password</label>
            <input
              type="password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4e374f]"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#4e374f] text-white py-2 rounded-lg hover:bg-[#3b2d3e] transition duration-300"
          >
            Sign In
          </button>
        </form>

        <p className="text-sm text-center text-gray-600 mt-4">
          Don't have an account?{" "}
          <a href="/signup" className="text-[#4e374f] font-medium hover:underline">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
}
