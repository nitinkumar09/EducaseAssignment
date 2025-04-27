import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [showAuthForm, setShowAuthForm] = useState(null);

  const handleMenuItemClick = (sectionId) => {
    setActiveSection(sectionId);
    setIsOpen(false);

    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const menuItems = [
    { id: "About", label: "About" },
    { id: "Contact", label: "Contact" },
    { id: "SignIn", label: "Sign In" },
    { id: "SignUp", label: "Create Account" },
  ];

  return (
    <div>
      <nav className="fixed top-0 w-full z-50 px-6 md:px-8 lg:px-20 bg-[#050414] bg-opacity-90 backdrop-blur-md shadow-md pt-0">
        <div className="text-white py-4 md:py-5 flex justify-between items-center">
          <Link to={"/"}>
            <div className="text-lg font-semibold cursor-pointer">
              <span className="text-[#8245ec]">&lt;</span>
              <span className="text-white">Nitin</span>
              <span className="text-[#8245ec]">/</span>
              <span className="text-white">Kumar</span>
              <span className="text-[#8245ec]">&gt;</span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-8 text-gray-300">
            {menuItems.map((item) => (
              <li
                key={item.id}
                className={`cursor-pointer hover:text-[#8245ec] ${
                  activeSection === item.id ? "text-[#8245ec]" : ""
                }`}
              >
                <button
                  onClick={() => {
                    if (item.id === "SignIn") {
                      setShowAuthForm("SignIn");
                    } else if (item.id === "SignUp") {
                      setShowAuthForm("SignUp");
                    } else {
                      handleMenuItemClick(item.id);
                    }
                  }}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>

          {/* Social Icons */}
          <div className="hidden md:flex space-x-4">
            <a
              href="https://github.com/nitinkumar09"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-[#8245ec]"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-[#8245ec]"
            >
              <FaLinkedin size={24} />
            </a>
          </div>

          {/* Mobile Menu Icon */}
          <div className="md:hidden">
            {isOpen ? (
              <FiX
                className="text-3xl text-[#8245ec] cursor-pointer"
                onClick={() => setIsOpen(false)}
              />
            ) : (
              <FiMenu
                className="text-3xl text-[#8245ec] cursor-pointer"
                onClick={() => setIsOpen(true)}
              />
            )}
          </div>
        </div>

        {/* Mobile Menu Items */}
        {isOpen && (
          <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-4/5 bg-[#050414] bg-opacity-90 backdrop-filter backdrop-blur-lg z-50 rounded-lg shadow-lg md:hidden">
            <ul className="flex flex-col items-center space-y-4 py-4 text-gray-300">
              {menuItems.map((item) => (
                <li
                  key={item.id}
                  className={`cursor-pointer hover:text-white ${
                    activeSection === item.id ? "text-[#8245ec]" : ""
                  }`}
                >
                  <button
                    onClick={() => {
                      if (item.id === "SignIn") {
                        setShowAuthForm("SignIn");
                      } else if (item.id === "SignUp") {
                        setShowAuthForm("SignUp");
                      } else {
                        handleMenuItemClick(item.id);
                      }
                    }}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
              <div className="flex space-x-4">
                <a
                  href="https://github.com/nitinkumar09"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white"
                >
                  <FaGithub size={24} />
                </a>
                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white"
                >
                  <FaLinkedin size={24} />
                </a>
              </div>
            </ul>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
