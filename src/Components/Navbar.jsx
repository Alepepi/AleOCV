import React, { useState } from 'react';
import { FaLinkedin, FaGithub, FaWhatsapp } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import logo from "../assets/Logo-sm-foto.png";
import { Link } from 'react-scroll';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="mb-20 flex items-center py-6 mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div className="relative flex h-16 items-center justify-between w-full">
        <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
          <button
            type="button"
            onClick={toggleMenu}
            className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            aria-controls="mobile-menu"
            aria-expanded="false"
          >
            <span className="absolute -inset-0.5"></span>
            <span className="sr-only">Open main menu</span>
            <svg
              className={`${menuOpen ? 'hidden' : 'block'} h-6 w-6`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
            <svg
              className={`${menuOpen ? 'block' : 'hidden'} h-6 w-6`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
        <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
          <div className="flex flex-shrink-0 items-center">
            <img className="h-10 w-auto sm:h-8" src={logo} alt="Logo" />
          </div>
          <div className="hidden sm:ml-6 sm:block w-full">
            <div className="flex justify-center space-x-4 w-full">
              <Link onClick={toggleMenu} to="about" smooth offset={-100} className="block py-2 px-3 text-white rounded hover:bg-gray-100 text-md md:hover:bg-transparent md:hover:text-blue-300 md:p-0 md:text-sm">
                About
              </Link>
              <Link onClick={toggleMenu} to="technologies" smooth offset={-100} className="block py-2 px-3 text-white rounded hover:bg-gray-100 text-md md:hover:bg-transparent md:hover:text-blue-300 md:p-0 md:text-sm">
                Technologies
              </Link>
              <Link onClick={toggleMenu} to="experience" smooth offset={-100} className="block py-2 px-3 text-white rounded hover:bg-gray-100 text-md md:hover:bg-transparent md:hover:text-blue-300 md:p-0 md:text-sm">
                Experience
              </Link>
              <Link onClick={toggleMenu} to="projects" smooth offset={-100} className="block py-2 px-3 text-white rounded hover:bg-gray-100 text-md md:hover:bg-transparent md:hover:text-blue-300 md:p-0 md:text-sm">
                Projects
              </Link>
              <Link onClick={toggleMenu} to="certificates" smooth offset={-100} className="block py-2 px-3 text-white rounded hover:bg-gray-100 text-md md:hover:bg-transparent md:hover:text-blue-300 md:p-0 md:text-sm">
                Certificates
              </Link>
              <Link onClick={toggleMenu} to="contact" smooth offset={-100} className="block py-2 px-3 text-white rounded hover:bg-gray-100 text-md md:hover:bg-transparent md:hover:text-blue-300 md:p-0 md:text-sm">
                Contact
              </Link>
            </div>
          </div>
        </div>
        
        <div className="hidden sm:flex sm:items-center sm:ml-6 md:grid md:grid-cols-2 md:gap-2 lg:flex lg:space-x-4">
          <a href="https://www.linkedin.com/in/alejandroollivierochoa/" className="text-gray-300 hover:text-white">
            <FaLinkedin className="lg:h-6 lg:w-6 md:h-4 md:w-4 md:mr-2 mr-4" />
          </a>
          <a href="https://github.com/Alepepi" className="text-gray-300 hover:text-white">
            <FaGithub className="lg:h-6 lg:w-6 md:h-4 md:w-4 md:mr-2 mr-4" />
          </a>
          <a href="https://wa.me/+5287133147569" className="text-gray-300 hover:text-white">
            <FaWhatsapp className="lg:h-6 lg:w-6 md:h-4 md:w-4 md:mr-2 mr-4" />
          </a>
          <a href="https://leetcode.com/u/Alepepi/" className="text-gray-300 hover:text-white">
            <SiLeetcode className="lg:h-6 lg:w-6 md:h-4 md:w-4" />
          </a>
        </div>
      </div>

      <div className={`${menuOpen ? 'block' : 'hidden'} sm:hidden`} id="mobile-menu">
        <div className="space-y-1 px-2 pb-3 pt-2">
          <Link
            onClick={toggleMenu}
            to="about"
            smooth
            offset={-100}
            className="text-white hover:bg-gray-100 hover:text-blue-300 block p-2 rounded"
          >
            About
          </Link>
          <Link
            onClick={toggleMenu}
            to="technologies"
            smooth
            offset={-100}
            className="text-white hover:bg-gray-100 hover:text-blue-300 block p-2 rounded"
          >
            Technologies
          </Link>
          <Link
            onClick={toggleMenu}
            to="experience"
            smooth
            offset={-100}
            className="text-white hover:bg-gray-100 hover:text-blue-300 block p-2 rounded"
          >
            Experience
          </Link>
          <Link
            onClick={toggleMenu}
            to="projects"
            smooth
            offset={-100}
            className="text-white hover:bg-gray-100 hover:text-blue-300 block p-2 rounded"
          >
            Projects
          </Link>
          <Link
            onClick={toggleMenu}
            to="certificates"
            smooth
            offset={-100}
            className="text-white hover:bg-gray-100 hover:text-blue-300 block p-2 rounded"
          >
            Certificates
          </Link>
          <Link
            onClick={toggleMenu}
            to="contact"
            smooth
            offset={-100}
            className="text-white hover:bg-gray-100 hover:text-blue-300 block p-2 rounded"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;