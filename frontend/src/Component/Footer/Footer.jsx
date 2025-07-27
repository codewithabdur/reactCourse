import React from "react";


const Footer = () => {
  return (
    <footer className="bg-black border-t border-gray-800 py-6 text-center text-gray-500 text-sm">
      © {new Date().getFullYear()} Imaginary Realms. All rights reserved.
    </footer>
  );
}

export default Footer;
