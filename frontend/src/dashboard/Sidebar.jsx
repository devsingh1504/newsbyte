import React, { useState } from "react";
import { useAuth } from "../context/AuthProvider";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { CiMenuBurger } from "react-icons/ci";
import { BiSolidLeftArrowAlt } from "react-icons/bi";
import toast from "react-hot-toast";

function Sidebar({ setComponent }) {
  const { profile, setIsAuthenticated } = useAuth();
  const navigateTo = useNavigate();
  const [show, setShow] = useState(false);

  const handleComponents = (value) => {
    setComponent(value);
  };

  const gotoHome = () => {
    navigateTo("/");
  };

  const handleLogout = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.get(
        "http://localhost:4001/api/users/logout",
        { withCredentials: true }
      );
      toast.success(data.message);
      setIsAuthenticated(false);
      navigateTo("/login");
    } catch (error) {
      console.log(error);
      toast.error(error.data.message || "Failed to logout");
    }
  };

  return (
    <>
      {/* Mobile Menu Icon */}
      <div
        className="lg:hidden fixed top-4 left-4 z-50"
        onClick={() => setShow(!show)}
      >
        <CiMenuBurger className="text-2xl" />
      </div>

      {/* Sidebar for larger screens (lg and up) */}
      <div
        className={`w-64 h-full shadow-lg fixed top-0 left-0 bg-gray-50 transition-transform duration-300 transform lg:translate-x-0 ${
          show ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0`}
      >
        {/* Close Icon for Mobile View */}
        <div
          className="lg:hidden absolute top-4 right-4 text-xl cursor-pointer"
          onClick={() => setShow(!show)}
        >
          <BiSolidLeftArrowAlt className="text-2xl" />
        </div>

        <div className="text-center mt-16">
          {/* <img
            className="w-24 h-24 rounded-full mx-auto mb-2"
            src={profile?.user?.photo?.url}
            alt=""
          /> */}
          <p className="text-2xl font-bold mb-5">{profile?.user?.name}</p>
        </div>

        <ul className="space-y-6 mx-4">
          <button
            onClick={() => handleComponents("My Blogs")}
            className="text-blue-500 w-full bg-white rounded-md shadow-lg px-4 py-2 border border-gray-400 hover:bg-blue-500 hover:text-white"
          >
            MY BLOGS
          </button>
          <button
            onClick={() => handleComponents("Create Blog")}
            className="text-blue-500 w-full bg-white rounded-md shadow-lg px-4 py-2 border border-gray-400 hover:bg-blue-500 hover:text-white"
          >
            CREATE BLOG
          </button>
          {/* <button
            onClick={() => handleComponents("My Profile")}
            className="text-blue-500 w-full bg-white rounded-md shadow-lg px-4 py-2 border border-gray-400 hover:bg-blue-500 hover:text-white"
          >
            MY PROFILE
          </button> */}
          <button
            onClick={gotoHome}
            className="text-blue-500 w-full bg-white rounded-md shadow-lg px-4 py-2 border border-gray-400 hover:bg-blue-500 hover:text-white"
          >
            HOME
          </button>
          <button
            onClick={handleLogout}
            className="text-blue-500 w-full bg-white rounded-md shadow-lg px-4 py-2 border border-gray-400 hover:bg-blue-500 hover:text-white"
          >
            LOGOUT
          </button>
        </ul>
      </div>
    </>
  );
}

export default Sidebar;
