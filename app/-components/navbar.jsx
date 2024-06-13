'use client'
import React, { useState } from 'react';

const NAV_LINKS = [
  { text: 'Coding Tests', href: '#' },
  { text: 'Certificate', href: '#' },
  { text: 'Programming Languages', href: '#' },
  { text: 'About us', href: '#' }
];

const NAV_CLASSES = {
  container: 'container mx-auto flex justify-between items-center p-4',
  logo: 'w-8 h-8',
  menuBtn: 'text-gray-700 hover:text-blue-500 focus:outline-none md:hidden',
  mobileMenu: 'md:hidden absolute top-16 left-0 right-0 bg-white shadow-lg p-4 flex flex-col items-center space-y-4',
  navLink: 'text-gray-700 hover:text-blue-500',
  mobileNavLink: 'block text-gray-700 hover:text-blue-500 py-2',
  loginBtn: 'text-gray-700 hover:text-blue-500',
  signupBtn: 'bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600'
};

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className="bg-white fixed top-0 left-0 right-0 z-50 shadow-md">
      <div className={NAV_CLASSES.container}>
        <div className="flex items-center space-x-4">
          <img src="https://placehold.co/40x40" alt="Logo" className={NAV_CLASSES.logo} />
          <div className="hidden md:flex space-x-8">
            {NAV_LINKS.map((link, index) => (
              <a key={index} href={link.href} className={NAV_CLASSES.navLink}>{link.text}</a>
            ))}
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <a href="#" className={NAV_CLASSES.loginBtn}>Log in</a>
          <a href="#" className={NAV_CLASSES.signupBtn}>Sign up</a>
          <button id="menuBtn" className={NAV_CLASSES.menuBtn} onClick={toggleMobileMenu}>
            <img src="https://placehold.co/30x30" alt="Menu" className="w-6 h-6" />
          </button>
        </div>
      </div>
      {mobileMenuOpen && (
        <div className={NAV_CLASSES.mobileMenu}>
          {NAV_LINKS.map((link, index) => (
            <a key={index} href={link.href} className={NAV_CLASSES.mobileNavLink}>{link.text}</a>
          ))}
          <a href="#" className={NAV_CLASSES.loginBtn}>Log in</a>
          <a href="#" className={NAV_CLASSES.signupBtn}>Sign up</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
