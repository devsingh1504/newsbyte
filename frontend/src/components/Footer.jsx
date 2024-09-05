import React from "react";
import { FaGithub } from "react-icons/fa";
import { BsYoutube } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className="border-t py-10 bg-gray-900 text-gray-400">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Products Section */}
          <div className="text-center md:text-center">
            <h2 className="text-lg font-semibold mb-4 text-white">Products</h2>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-blue-500">
                  News
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500">
                  Blogs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500">
                  Creators
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500">
                  Dashboard
                </a>
              </li>
            </ul>
          </div>

          {/* Design to Code Section */}
          <div className="text-center md:text-center">
            <h2 className="text-lg font-semibold mb-4 text-white">
              Design to Code
            </h2>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-blue-500">
                  Figma Plugin
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500">
                  Templates
                </a>
              </li>
            </ul>
          </div>

          {/* Comparison Section */}
          <div className="text-center md:text-center">
            <h2 className="text-lg font-semibold mb-4 text-white">
              Comparison
            </h2>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-blue-500">
                  Anima
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500">
                  Appsmith
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500">
                  FlutterFlow
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500">
                  Monday Hero
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500">
                  Retool
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500">
                  Bubble
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500">
                  Figma Dev Mode
                </a>
              </li>
            </ul>
          </div>

          {/* Company Section */}
          <div className="text-center md:text-center">
            <h2 className="text-lg font-semibold mb-4 text-white">Company</h2>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-blue-500">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500">
                  Career
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>

      {/* Bottom Footer */}
      <div className="bg-gray-800 py-4">
        <div className="container mx-auto flex flex-col md:flex-row justify-center items-center text-center md:text-left  md:space-x-4 md:text-align">
          <div className="text-2xl  font-semibold text-white mb-4 md:mb-0">
            News<span className="text-blue-500">Byte</span>
          </div>
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; 2024 NewsByte Private. All rights reserved.
          </p>

          {/* Social Icons */}
          {/* <div className="flex space-x-4 text-white">
            <a href="#" aria-label="GitHub" className="hover:text-blue-500">
              <FaGithub className="h-6 w-6" />
            </a>
            <a href="#" aria-label="YouTube" className="hover:text-blue-500">
              <BsYoutube className="h-6 w-6" />
            </a>
            <a href="#" aria-label="LinkedIn" className="hover:text-blue-500">
              <FaLinkedin className="h-6 w-6" />
            </a>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Footer;
