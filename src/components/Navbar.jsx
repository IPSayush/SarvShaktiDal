import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full bg-main-gradient from-red-500 via-rose-200 to-yellow-400 shadow">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-2">

        {/* Logo */}
        <div className="flex items-center space-x-3">
          <img src="/NavLogo.jpg" alt="Logo" className="h-14 w-full" />
        </div>

        {/* Desktop menu */}
        <ul className="hidden md:flex items-center space-x-8 font-semibold desktop-menu">
          <li className="nav-item hover:text-white cursor-pointer text-center">HOME</li>
          <li className="nav-item hover:text-white cursor-pointer text-center">ABOUT US</li>
          <li className="nav-item hover:text-white cursor-pointer text-center">GALLERY</li>
          <li className="nav-item hover:text-white cursor-pointer text-center">NEWS</li>
          <li className="nav-item hover:text-white cursor-pointer text-center">BECOME MEMBER</li>
          <li className="nav-item hover:text-white cursor-pointer text-center">DONATION</li>
          <li className="nav-item hover:text-white cursor-pointer text-center">CONTACT</li>
        </ul>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden p-2 rounded text-3xl text-white"
          onClick={() => setOpen(!open)}
        >
          {open ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <ul className="md:hidden px-6 pb-6 space-y-4 bg-main-gradient from-red-500 via-rose-200 to-yellow-400 font-semibold">
          <li className="nav-item">HOME</li>
          <li className="nav-item">WHAT WE ARE</li>
          <li className="nav-item">WHAT WE DO</li>
          <li className="nav-item">MEDIA ROOM</li>
          <li className="nav-item">WORK WITH US</li>
          <li className="nav-item">Donation</li>
          <li className="nav-item">CONTACT</li> 
        </ul>
      )}
    </nav>
  );
}
