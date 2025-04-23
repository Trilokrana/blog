"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import AuthLinks from "../authLinks/AuthLinks";
import ThemeToggle from "../themeToggle/ThemeToggle";

const Navbar = () => {
  const [menuOpen, SetMenuOpen] = useState(false);

  const toggleMenu = () => SetMenuOpen(!menuOpen);

  return (
    <nav className="w-full z-50 relative">
      <div className="flex justify-between items-center px-4 py-3 md:py-4">
        {/* Left - Social Icons */}
        <div className="flex items-center gap-3">
          <Image src="/instagram.png" alt="Instagram" width={25} height={25} />
          <Image src="/facebook.png" alt="Facebook" width={25} height={25} />
          <Image src="/youtube.png" alt="Youtube" width={25} height={25} />
          <Image src="/tikTok.png" alt="TikTok" width={25} height={25} />
        </div>

        {/* Center - Logo */}
        <div>
          <Image src="/logo.png" alt="Logo" width={40} height={25} />
        </div>

        {/* Right - Desktop Menu */}
        <div className="hidden md:flex items-center gap-6 text-sm font-medium">
          <ThemeToggle />
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/services">Services</Link>
          <Link href="/contact">Contact</Link>
          <AuthLinks />
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-2xl font-bold focus:outline-none text-gray-800"
          >
            {menuOpen ? "✖" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="flex flex-col items-center gap-6 py-8 px-4 md:hidden border-2 border-gray-100 rounded-lg shadow-lg  transition-all duration-300">
          <ThemeToggle />

          <Link href="/" onClick={toggleMenu}>
            Home
          </Link>
          <Link href="/about" onClick={toggleMenu}>
            About
          </Link>
          <Link href="/services" onClick={toggleMenu}>
            Services
          </Link>
          <Link href="/contact" onClick={toggleMenu}>
            Contact
          </Link>
          <AuthLinks />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
