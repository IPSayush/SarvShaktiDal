// src/components/Navbar.jsx
import { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full background-main-gradient shadow sticky top-0 z-40 font-[Roboto]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-15">
          {/* left part: logo */}
          <div className="flex items-center">
            <div className="logo-container flex items-center">
              <img
                src="/NavLogo.webp"
                alt="Logo"
                className="logo w-50 sm:w-60  lg:w-44 h-auto object-contain"
                loading="lazy"
              />
            </div>
          </div>

          {/* desktop menu */}
          <ul className="hidden md:flex items-center space-x-8 md:gap-6 lg:gap-10 ml-6">
            <li className="nav-item  m-0 text-center">
              <Link to="/" className="text-sm md:text-2 lg:text-[16px] font-bold text-gray-500 hover:text-white">HOME</Link>
            </li>
            <li className="nav-item  m-0 text-center">
              <Link to="/about" className="text-sm md:text-2 lg:text-[16px] font-bold text-gray-500 hover:text-white">ABOUT</Link>
            </li>
            <li className="nav-item  m-0 text-center">
              <Link to="/gallery" className="text-sm md:text-2 lg:text-[16px] font-bold text-gray-500 hover:text-white">GALLERY</Link>
            </li>
            <li className="nav-item  m-0 text-center">
              <Link to="/news" className="text-sm md:text-2 lg:text-[16px] font-bold text-gray-500 hover:text-white">NEWS</Link>
            </li>
            <li className="nav-item  m-0 text-center">
              <Link to="/become-member" className="text-sm md:text-2 lg:text-[16px] font-bold text-gray-500 hover:text-white">JOIN</Link>
            </li>
            <li className="nav-item  m-0 text-center">
              <Link to="/donation" className="text-sm md:text-2 lg:text-[16px] font-bold text-gray-500 hover:text-white">DONATION</Link>
            </li>
            <li className="nav-item  m-0 text-center">
              <Link to="/contact" className="text-sm md:text-2 lg:text-[16px] font-bold text-gray-500 hover:text-white">CONTACT</Link>
            </li>
          </ul>

          {/* mobile hamburger */}
          <div className="flex md:hidden">
            <button
              onClick={() => setOpen((s) => !s)}
              aria-label="Toggle menu"
              className="p-2 rounded-md text-2xl text-white bg-transparent hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
            >
              {open ? <FiX /> : <FiMenu />}
            </button>
          </div>
        </div>
      </div>

      {/* mobile collapsible menu */}
      <div
        className={`md:hidden transition-[max-height] duration-300 ease-in-out overflow-hidden ${
          open ? "max-h-[500px]" : "max-h-0"
        }`}
      >
        <ul className="px-4 pt-4 pb-6 space-y-3 bg-main-gradient">
          <li className="mobile-item">
            <Link
              to="/"
              onClick={() => setOpen(false)}
              className="block text-base font-bold text-gray-800 hover:text-white"
            >
              HOME
            </Link>
          </li>
          <li className="mobile-item">
            <Link
              to="/about"
              onClick={() => setOpen(false)}
              className="block text-base font-bold text-gray-800 hover:text-white"
            >
              ABOUT
            </Link>
          </li>
          <li className="mobile-item">
            <Link
              to="/gallery"
              onClick={() => setOpen(false)}
              className="block text-base font-bold text-gray-800 hover:text-white"
            >
              GALLERY
            </Link>
          </li>
          <li className="mobile-item">
            <Link
              to="/news"
              onClick={() => setOpen(false)}
              className="block text-base font-bold text-gray-800 hover:text-white"
            >
              NEWS
            </Link>
          </li>
          <li className="mobile-item">
            <Link
              to="/become-member"
              onClick={() => setOpen(false)}
              className="block text-base font-bold text-gray-800 hover:text-white"
            >
              JOIN
            </Link>
          </li>
          <li className="mobile-item">
            <Link
              to="/donation"
              onClick={() => setOpen(false)}
              className="block text-base font-bold text-gray-800 hover:text-white"
            >
              DONATION
            </Link>
          </li>
          <li className="mobile-item">
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="block text-base font-bold text-gray-800 hover:text-white"
            >
              CONTACT
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
