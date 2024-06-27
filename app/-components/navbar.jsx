"use client";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from 'next/image';
import logo from '../assets/techluminate-logo-e1707169416639.png';
import { signIn, signOut, useSession, getProviders } from "next-auth/react";

const NAV_LINKS = [
  { text: "Programming Assessment", href: "/python-quiz" },
  { text: "About us", href: "/about" },
];

const NAV_CLASSES = {
  container: "container mx-auto flex justify-between items-center p-4",
  logo: "w-8 h-8",
  menuBtn: "text-gray-700 hover:text-blue-500 focus:outline-none md:hidden",
  mobileMenu: "md:hidden absolute top-16 left-0 right-0 bg-white shadow-lg p-4 flex flex-col items-center space-y-4",
  navLink: "text-gray-700 hover:text-blue-500",
  mobileNavLink: "block text-gray-700 hover:text-blue-500 py-2",
  loginBtn: "text-gray-700 hover:text-blue-500",
  signupBtn: "bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600",
  profileIcon: "w-8 h-8 rounded-full cursor-pointer",
  dropdownMenu: "absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1",
  dropdownItem: "block px-4 py-2 text-gray-700 hover:bg-gray-100",
};

const Navbar = () => {
  const { data: session } = useSession();
  const profileImage = session?.user?.image
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const pathname = usePathname();
  const profileDefault = 'https://placehold.co/40x40'
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const closeDropdown = () => {
    setDropdownOpen(false);
  };

  const signOutHandler = () => {
    closeMobileMenu();
    signOut();
  };

  console.log(session, profileImage)
  return (
    <nav className="bg-white fixed top-0 left-0 right-0 z-50 shadow-md">
      <div className={NAV_CLASSES.container}>
        <div className="flex items-center space-x-4">
          <Link href="/">
            <Image
              width="40"
              height="40"
              src={logo}
              alt="Logo"
              className={`${NAV_CLASSES.logo} hidden md:block`}
            />
          </Link>
          <Link href="/" onClick={closeMobileMenu}>
            <Image
              width={40}
              height={40}
              src={logo}
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
          {!session && (
            <>
              <Link
                href="/register"
                className={`${NAV_CLASSES.loginBtn} hidden md:block`}
              >
                Log in
              </Link>
              <Link
                href="/login"
                className={`${NAV_CLASSES.signupBtn} hidden md:block`}
              >
                Sign up
              </Link>
            </>
          )}
          {session && (
            <div className="relative hidden md:block">
              <Image
              width={40}
              height={40}
                src={profileImage || profileDefault}
                alt="Profile"
                className={NAV_CLASSES.profileIcon}
                onClick={toggleDropdown}
              />
              {dropdownOpen && (
                <div className={NAV_CLASSES.dropdownMenu}>
                  <Link
                    href="/profile"
                    className={NAV_CLASSES.dropdownItem}
                    onClick={closeDropdown}
                  >
                    Profile
                  </Link>
                  <Link
                    href="/dashboard"
                    className={NAV_CLASSES.dropdownItem}
                    onClick={closeDropdown}
                  >
                    Dashboard
                  </Link>
                  <Link
                    href="/settings"
                    className={NAV_CLASSES.dropdownItem}
                    onClick={closeDropdown}
                  >
                    Settings
                  </Link>
                  <Link
                    href="/"
                    className={NAV_CLASSES.dropdownItem}
                    onClick={signOutHandler}
                  >
                    Sign Out
                  </Link>
                </div>
              )}
            </div>
          )}

          <div
            id="menuBtn"
            className="p-2 md:hidden"
            onClick={toggleMobileMenu}
          >
            <div className={`hamburger ${mobileMenuOpen ? 'open' : ''}`}>
              <span className="line top bg-black"></span>
              <span className="line middle bg-black"></span>
              <span className="line bottom bg-black"></span>
            </div>
          </div>
        </div>
      </div>
      {mobileMenuOpen && (
        <div className={NAV_CLASSES.mobileMenu}>
          {NAV_LINKS.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className={NAV_CLASSES.mobileNavLink}
              onClick={closeMobileMenu}
            >
              {link.text}
            </Link>
          ))}
          {!session && (
            <>
              <Link
                href="/register"
                className={NAV_CLASSES.mobileNavLink}
                onClick={closeMobileMenu}
              >
                Log in
              </Link>
              <Link
                href="/login"
                className={NAV_CLASSES.mobileNavLink}
                onClick={closeMobileMenu}
              >
                Sign up
              </Link>
            </>
          )}
          {session && (
            <>
              <Link
                href="/profile"
                className={NAV_CLASSES.mobileNavLink}
                onClick={closeMobileMenu}
              >
                Profile
              </Link>
              <Link
                href="/dashboard"
                className={NAV_CLASSES.mobileNavLink}
                onClick={closeMobileMenu}
              >
                Dashboard
              </Link>
              <Link
                href="/settings"
                className={NAV_CLASSES.mobileNavLink}
                onClick={closeMobileMenu}
              >
                Settings
              </Link>
              <Link
                href="/"
                className={NAV_CLASSES.mobileNavLink}
                onClick={signOutHandler}
              >
                Sign Out
              </Link>
            </>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
