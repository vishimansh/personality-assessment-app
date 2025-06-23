import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { User } from "lucide-react";

export default function Navbar() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const location = useLocation();
  const pathname = location.pathname;

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const isActive = (path) => {
    if (path === "/home") return pathname === "/" || pathname === "/home";
    return pathname === path;
  };

  return (
    <nav className="fixed top-8 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-6xl px-4">
      <div
        className="rounded-full shadow-lg border border-gray-200/50"
        style={{
          background: "linear-gradient(90deg, #fff 70%, #e9f5f5 100%)"
        }}
      >
        <div className="flex items-center justify-between h-16 px-8">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-extrabold text-gray-900">
              Echo
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="flex items-center space-x-8">
            <Link
              to="/home"
              className={`text-base font-normal ${isActive("/home") ? "text-orange-600 font-semibold" : "text-gray-900"}`}
            >
              Home
            </Link>
            <Link
              to="/how-it-works"
              className={`text-base font-normal ${isActive("/how-it-works") ? "text-orange-600 font-semibold" : "text-gray-900"}`}
            >
              How it works
            </Link>
            <Link
              to="/assessment"
              className={`text-base font-normal ${isActive("/assessment") ? "text-orange-600 font-semibold" : "text-gray-900"}`}
            >
              Assessment
            </Link>
            <Link
              to="/services"
              className={`text-base font-normal ${isActive("/services") ? "text-orange-600 font-semibold" : "text-gray-900"}`}
            >
              Services
            </Link>
            <Link
              to="/about"
              className={`text-base font-normal ${isActive("/about") ? "text-orange-600 font-semibold" : "text-gray-900"}`}
            >
              About
            </Link>
            <Link
              to="/feedback"
              className="px-5 py-2 rounded-full text-base font-medium text-white"
              style={{
                background:
                  "linear-gradient(90deg, #ff9800 0%, #41c9c4 100%)",
                boxShadow: "none"
              }}
            >
              Feedback
            </Link>
          </div>

          {/* Right Controls */}
          <div className="flex items-center space-x-4">
            {/* Light Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className="relative inline-flex h-8 w-14 items-center rounded-full transition-colors duration-200"
              style={{
                background: isDarkMode
                  ? "linear-gradient(90deg, #ff9800 0%, #ffb300 100%)"
                  : "linear-gradient(90deg, #ff9800 0%, #41c9c4 100%)",
                border: "none"
              }}
              aria-label="Toggle light/dark mode"
            >
              {/* Sun icon for light mode */}
              <span
                className={`absolute left-1 top-1 w-6 h-6 flex items-center justify-center rounded-full transition-transform duration-200 ${
                  isDarkMode ? "translate-x-6" : ""
                }`}
                style={{
                  background: "#fff",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.07)"
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4 text-yellow-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <circle cx="12" cy="12" r="5" fill="#ffb300" />
                  <g stroke="#ffb300">
                    <line x1="12" y1="1" x2="12" y2="3" />
                    <line x1="12" y1="21" x2="12" y2="23" />
                    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                    <line x1="1" y1="12" x2="3" y2="12" />
                    <line x1="21" y1="12" x2="23" y2="12" />
                    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                  </g>
                </svg>
              </span>
            </button>

            {/* User Icon */}
            <span className="w-9 h-9 rounded-full border-2 border-black flex items-center justify-center bg-white">
              <User className="w-6 h-6 text-black" />
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
}
