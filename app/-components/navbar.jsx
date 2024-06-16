"use client";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const NAV_LINKS = [
  { text: "Programming Assessment", href: "/python-quiz" },
  { text: "About us", href: "/about" },
];

const NAV_CLASSES = {
  container: "container mx-auto flex justify-between items-center p-4",
  logo: "w-8 h-8",
  menuBtn: "text-gray-700 hover:text-blue-500 focus:outline-none md:hidden",
  mobileMenu:
    "md:hidden absolute top-16 left-0 right-0 bg-white shadow-lg p-4 flex flex-col items-center space-y-4",
  navLink: "text-gray-700 hover:text-blue-500",
  mobileNavLink: "block text-gray-700 hover:text-blue-500 py-2",
  loginBtn: "text-gray-700 hover:text-blue-500",
  signupBtn: "bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600",
};

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const pathname = usePathname();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <nav className="bg-white fixed top-0 left-0 right-0 z-50 shadow-md">
      <div className={NAV_CLASSES.container}>
        <div className="flex items-center space-x-4">
        <Link href="/">
            <img
              src="https://placehold.co/40x40"
              alt="Logo"
              className={`${NAV_CLASSES.logo} hidden md:block`}
            />
          </Link>
          <Link href="/" onClick={closeMobileMenu}>
            <img
              src="https://placehold.co/40x40"
              alt="Logo"
              className={`${NAV_CLASSES.logo} md:hidden`}
            />
          </Link>
          <div className="hidden md:flex space-x-8">
            {NAV_LINKS.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className={`${NAV_CLASSES.navLink} ${
                  pathname === link.href ? "text-blue-500" : ""
                }`}
              >
                {link.text}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex items-center space-x-4">
          {!isLoggedIn && (
            <Link href="#" className={`${NAV_CLASSES.loginBtn} hidden md:block`}>
              Log in
            </Link>
          )}

          {!isLoggedIn && (
            <Link href="#" className={`${NAV_CLASSES.signupBtn} hidden md:block`}>
              Sign up
            </Link>
          )}

          {isLoggedIn && (
            <Link href="#" className={`${NAV_CLASSES.signupBtn} hidden md:block`}>
              Dashboard
            </Link>
          )}

          <button
            id="menuBtn"
            className={NAV_CLASSES.menuBtn}
            onClick={toggleMobileMenu}
          >
            <img
              src="https://placehold.co/30x30"
              alt="Menu"
              className="w-6 h-6"
            />
          </button>
        </div>
      </div>
      {mobileMenuOpen && (
        <div className={NAV_CLASSES.mobileMenu}>
          {NAV_LINKS.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className={NAV_CLASSES.mobileNavLink}
              onClick={closeMobileMenu} // Close the mobile menu on click
            >
              {link.text}
            </Link>
          ))}

          {!isLoggedIn && (
            <Link href="#" className={NAV_CLASSES.loginBtn} onClick={closeMobileMenu}>
              Log in
            </Link>
          )}

          {!isLoggedIn && (
            <Link href="#" className={NAV_CLASSES.signupBtn} onClick={closeMobileMenu}>
              Sign up
            </Link>
          )}

          {isLoggedIn && (
            <Link href="#" className={NAV_CLASSES.signupBtn} onClick={closeMobileMenu}>
              Dashboard
            </Link>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
