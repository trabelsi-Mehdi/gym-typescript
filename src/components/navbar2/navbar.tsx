import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BellIcon, UserCircleIcon } from "@heroicons/react/24/outline";
import Logo from "@/assets/logoPrincipale.png";

const AppNavbar = () => {
  const navigate = useNavigate();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200 shadow-sm">
      <div className="flex items-center justify-between px-6 py-4">
        {/* Left - Logo */}
        <div className="flex items-center gap-4">
          <img src={Logo} alt="App Logo" className="h-10 w-auto" />
          <h1 className="text-xl font-semibold text-gray-700">Admin Panel</h1>
        </div>

        {/* Center - Links */}
        <div className="hidden md:flex gap-6 text-sm font-medium text-gray-600">
          <button onClick={() => navigate("/admin/dashboard")} className="hover:text-[#dd2e44] transition">
            Dashboard
          </button>
          <button onClick={() => navigate("/admin/users")} className="hover:text-[#dd2e44] transition">
            Users
          </button>
          <button onClick={() => navigate("/admin/schools")} className="hover:text-[#dd2e44] transition">
            Schools
          </button>
          <button onClick={() => navigate("/admin/stats")} className="hover:text-[#dd2e44] transition">
            Statistics
          </button>
        </div>

        {/* Right - Profile + Notifications */}
        <div className="flex items-center gap-6">
          <BellIcon className="h-6 w-6 text-gray-500 hover:text-[#dd2e44] cursor-pointer" />

          <div className="relative">
            <UserCircleIcon
              className="h-8 w-8 text-gray-600 hover:text-[#dd2e44] cursor-pointer"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            />
            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded-lg shadow-md">
                <button
                  onClick={() => navigate("/profile")}
                  className="w-full text-left px-4 py-2 hover:bg-gray-100 text-sm"
                >
                  Profile
                </button>
                <button
                  onClick={() => {
                    localStorage.removeItem("accessToken");
                    navigate("/signin");
                  }}
                  className="w-full text-left px-4 py-2 hover:bg-gray-100 text-sm text-red-600"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default AppNavbar;
