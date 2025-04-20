import { useLocation } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function VerifyOtp() {
    const {state} = useLocation();
    const [otp, setOtp] = useState("");
    const [message, setMessage] = useState("");
    const navigate = useNavigate();
    const handleVerifyOtp = async (e: React.FormEvent) => {
        e.preventDefault();
        try{
            const res = await axios.post("http://localhost:5000/api/auth/verify-otp",{
                email: state.email,
                otp
            });
            setMessage(res.data.message);
            alert(res.data.message);
            localStorage.setItem("accessToken", res.data.accessToken);
            if (state.role === "admin") navigate("/admin");
            else if (state.role === "driving_school") navigate("/school");
            else if (state.role === "client") navigate("/client");
            else setMessage("Unknown role!");

        }catch(err:any){
            setMessage(err.response?.data?.message || "Something went wrong");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-[#fefaf6] px-4">
        <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
          <h2 className="text-3xl font-bold text-[#4e374f] text-center mb-6">Let's Verify</h2>
          <form className="space-y-4" onSubmit={handleVerifyOtp}>
          {message && <p className="mt-2">{message}</p>}

            <div>
              <label className="block text-sm font-medium text-[#4e374f] mb-1">OTP</label>
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4e374f]"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                required
              />
            </div>
            <button
                type="submit"
              className="w-full bg-[#4e374f] text-white py-2 rounded-lg hover:bg-[#3b2d3e] transition duration-300"
            >
              Verify
            </button>
          </form>
          
        </div>
      </div>
      );
    }