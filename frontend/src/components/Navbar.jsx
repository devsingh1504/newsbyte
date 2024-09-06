import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";
import { useAuth } from "../context/AuthProvider";
import axios from "axios";
import toast from "react-hot-toast";

function Navbar() {
  const [show, setShow] = useState(false);

  const { profile, isAuthenticated, setIsAuthenticated } = useAuth();
  //console.log(profile?.user);
  const navigateTo = useNavigate();

  const handleLogout = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.get(
        "https://newsbyte-t8jn.onrender.com/api/users/logout",
        { withCredentials: true }
      );
      console.log(data);
      toast.success(data.message);
      setIsAuthenticated(false);
      navigateTo("/login");
    } catch (error) {
      console.log(error);
      toast.error("Failed to logout");
    }
  };

  return (
    <>
      <nav className="shadow-lg px-4 py-2">
        <div className="flex items-center justify-between container mx-auto">
          <div className="font-semibold text-xl">
            News<span className="text-blue-500">Byte</span>
          </div>
          {/* Desktop */}
          <div className="mx-6">
            <ul className="hidden md:flex space-x-6">
              <Link to="/" className="hover:text-blue-500">
                HOME
              </Link>
              <Link to="/blogs" className="hover:text-blue-500">
                Blogs
              </Link>
              <Link to="/news" className="hover:text-blue-500">
                News
              </Link>
              <Link to="/creators" className="hover:text-blue-500">
                CREATORS
              </Link>
              {/* <Link to="/about" className="hover:text-blue-500">
                ABOUT
              </Link> */}
              <Link to="/contact" className="hover:text-blue-500">
                CONTACT
              </Link>
            </ul>
            <div className="md:hidden" onClick={() => setShow(!show)}>
              {show ? <IoCloseSharp size={24} /> : <AiOutlineMenu size={24} />}
            </div>
          </div>
          <div className="hidden md:flex space-x-2">
            {isAuthenticated && profile?.user?.role === "admin" ? (
              <Link
                to="/dashboard"
                className="text-blue-500 w-full bg-white rounded-md shadow-lg px-4 py-2 border border-gray-400 hover:bg-blue-500 hover:text-white"
              >
                DASHBOARD
              </Link>
            ) : (
              ""
            )}

            {!isAuthenticated ? (
              <Link
                to="/Login"
                className="text-blue-500 w-full bg-white rounded-md shadow-lg px-4 py-2 border border-gray-400 hover:underline"
              >
                LOGIN
              </Link>
            ) : (
              <div>
                <button
                  onClick={handleLogout}
                  className="text-blue-500 w-full bg-white rounded-md shadow-lg px-4 py-2 border border-gray-400 hover:bg-blue-500 hover:text-white"
                >
                  LOGOUT
                </button>
              </div>
            )}
          </div>
        </div>
        {/* Mobile Navbar */}
        {show && (
          <div className="bg-white">
            <ul className="flex flex-col h-screen items-center justify-center space-y-3 md:hidden text-xl">
              <Link
                to="/"
                onClick={() => setShow(!show)}
                className="text-xl font-semibold hover:text-blue-500"
              >
                HOME
              </Link>
              <Link
                to="/blogs"
                onClick={() => setShow(!show)}
                className="text-xl font-semibold hover:text-blue-500"
              >
                Blogs
              </Link>
              <Link
                to="/news"
                onClick={() => setShow(!show)}
                className="text-xl font-semibold hover:text-blue-500"
              >
                News
              </Link>
              <Link
                to="/creators"
                onClick={() => setShow(!show)}
                className="text-xl font-semibold hover:text-blue-500"
              >
                CREATORS
              </Link>
              {/* <Link
                to="/about"
                onClick={() => setShow(!show)}
                className="text-xl font-semibold hover:text-blue-500"
              >
                ABOUT
              </Link> */}
              <Link
                to="/contact"
                onClick={() => setShow(!show)}
                className="text-xl font-semibold hover:text-blue-500"
              >
                CONTACT
              </Link>

              {/* Dashboard and Logout/Login buttons in mobile view */}
              {isAuthenticated && profile?.user?.role === "admin" && (
                <Link
                  to="/dashboard"
                  onClick={() => setShow(!show)}
                  className="text-xl font-semibold hover:text-blue-500"
                >
                  DASHBOARD
                </Link>
              )}

              {!isAuthenticated ? (
                <Link
                  to="/Login"
                  onClick={() => setShow(!show)}
                  className="bg-red-600 text-white font-semibold hover:bg-red-800 duration-300 px-4 py-2 rounded"
                >
                  LOGIN
                </Link>
              ) : (
                <button
                  onClick={(e) => {
                    setShow(!show);
                    handleLogout(e);
                  }}
                  className="text-xl font-semibold hover:text-blue-500"
                >
                  LOGOUT
                </button>
              )}
            </ul>
          </div>
        )}
      </nav>
    </>
  );
}

export default Navbar;
