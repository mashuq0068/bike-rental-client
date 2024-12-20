import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { logout } from "../../redux/features/auth/authSlice";
import Cookies from "js-cookie";
import { Modal } from "antd";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const user = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    Modal.confirm({
      title: "Are you sure you want to Logout?",
      content:
        "If you logout, you will need to log in again to access private features.",
      okText: "Yes",
      cancelText: "No",
      onOk: () => {
        dispatch(logout());
        Cookies.remove("token", { path: "/" });
        navigate("/login");
      },
    });
  };

  return (
    <header className="bg-gray-900/80 sticky top-0 z-50">
      <div className="container flex justify-between items-center p-4">
        {/* Logo */}
        <div
          onClick={() => navigate("/")}
          className="text-2xl cursor-pointer font-bold text-white"
        >
          BIKEASE.
        </div>

        {/* Centered Navigation Links */}
        <nav className="hidden md:flex space-x-6 text-sm uppercase mx-auto">
          <NavLink
            to="/"
            className="block text-gray-200 hover:text-red-500 transition-colors duration-300"
          >
            Home
          </NavLink>
          <NavLink
              to={`/dashboard/${
                user?.role === "admin" ? "admin" : "user"
              }/profile`}
            className="block text-gray-200 hover:text-red-500 transition-colors duration-300"
          >
            Dashboard
          </NavLink>
          <NavLink
            to="/bikes"
            className="block text-gray-200 hover:text-red-500 transition-colors duration-300"
          >
            Bikes
          </NavLink>
          <NavLink
            to="/about-us"
            className="block text-gray-200 hover:text-red-500 transition-colors duration-300"
          >
            About
          </NavLink>
          <NavLink
            to="/contact-us"
            className="block text-gray-200 hover:text-red-500 transition-colors duration-300"
          >
            Contact
          </NavLink>
          {user?.email ? (
            <button
              onClick={handleLogout}
              className="block  uppercase text-gray-200 hover:text-red-500 transition-colors duration-300"
            >
              Logout
            </button>
          ) : (
            <button
              onClick={() => navigate("/login")}
              className="block uppercase text-gray-200 hover:text-red-500 transition-colors duration-300"
            >
              Login
            </button>
          )}
        </nav>

        {/* Profile or Login Button on the Right */}
        <div className="hidden md:flex items-center space-x-4">
        <button
            onClick={() => navigate("/bikes")}
            className="bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600 transition-all duration-300 shadow-lg"
          >
            Rent a Bike
          </button>
          <div className="text-gray-200 hover:text-red-500 cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 11a4 4 0 11-8 0 4 4 0 018 0zM2 20h20M4 20l1.5-4.5m13.5 4.5l-1.5-4.5"
              />
            </svg>
          </div>

         
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-200 hover:text-red-500 focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={
                  isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"
                }
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <nav className="md:hidden bg-black bg-opacity-90 p-4 text-center">
          <NavLink
            to="/"
            className="block text-gray-200 hover:text-red-500 transition-colors duration-300 mb-2"
          >
            Home
          </NavLink>
          <NavLink
            to="/dashboard"
            className="block text-gray-200 hover:text-red-500 transition-colors duration-300 mb-2"
          >
            Dashboard
          </NavLink>
          <NavLink
            to="/bikes"
            className="block text-gray-200 hover:text-red-500 transition-colors duration-300 mb-2"
          >
            Bikes
          </NavLink>
          <NavLink
            to="/about-us"
            className="block text-gray-200 hover:text-red-500 transition-colors duration-300 mb-2"
          >
            About
          </NavLink>
          <NavLink
            to="/contact-us"
            className="block text-gray-200 hover:text-red-500 transition-colors duration-300 mb-2"
          >
            Contact
          </NavLink>
          {user?.email ? (
            <button
              onClick={handleLogout}
              className="bg-red-500 text-white px-4 py-2 rounded-full mt-4 hover:bg-red-600 transition-all duration-300 shadow-lg"
            >
              Logout
            </button>
          ) : (
            <button
              onClick={() => navigate("/login")}
              className="bg-red-500 text-white px-4 py-2 rounded-full mt-4 hover:bg-red-600 transition-all duration-300 shadow-lg"
            >
              Login
            </button>
          )}
        </nav>
      )}
    </header>
  );
};

export default Navbar;
