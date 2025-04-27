import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="text-white py-8 px-[12vw] md:px-[7vw] lg:px-[20vw]">
      <div className="container mx-auto text-center">
        {/* Name / Logo */}
        <h2 className="text-xl font-semibold text-purple-500">Nitin Kumar</h2>

        {/* Navigation Links - Static */}
        <div className="flex flex-wrap justify-center space-x-4 sm:space-x-6 mt-4">
          {["About", "Skills", "Experience", "Projects", "Education"].map((item, index) => (
            <span
              key={index}
              className="hover:text-purple-500 text-sm sm:text-base my-1 cursor-pointer"
            >
              {item}
            </span>
          ))}
        </div>

        {/* Social Media Icons - Static */}
        <div className="flex flex-wrap justify-center space-x-4 mt-6">
          {[FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaYoutube].map((Icon, index) => (
            <span
              key={index}
              className="text-xl hover:text-purple-500 transition-transform transform hover:scale-110 cursor-pointer"
            >
              <Icon />
            </span>
          ))}
        </div>

        {/* Copyright Text */}
        <p className="text-sm text-gray-400 mt-6">
          © 2025 Nitin Kumar. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
