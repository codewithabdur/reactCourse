import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <nav
      className="fixed top-3 left-3 right-3 z-50 backdrop-blur-sm p-4 flex justify-between items-center rounded-xl shadow-lg"
      aria-label="Main Navigation"
    >
      <h1 className="text-2xl font-bold text-[#fff]">Imaginary Realms</h1>
      <ul className="flex gap-4 sm:gap-6 text-sm sm:text-base">
        <li>
          <p onClick={() => navigate(`/`)}  className="text-[#fff] cursor-pointer hover:text-purple-400 transition-colors duration-200">
            Home
          </p>
        </li>
        <li>
          <a href="#" className="text-[#fff] hover:text-purple-400 transition-colors duration-200">
            Blogs
          </a>
        </li>
        <li>
          <a href="#" className="text-[#fff] hover:text-purple-400 transition-colors duration-200">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
