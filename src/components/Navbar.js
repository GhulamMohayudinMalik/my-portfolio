// import React from "react";
// import Image from "next/image";
// import { Rubik_Glitch } from "next/font/google";
// import NavLink from "./NavLink";
// import Link from "next/link";

// const rubicGlitch = Rubik_Glitch({
//   subsets: ["latin"],
//   weight: "400",
//   variable: "--font-rubic-glitch",
// });

// function Navbar() {
//   return (
//     <div className="w-full mx-auto p-3 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0
//  sticky top-0 bg-gradient-to-br from-black via-green-900 to-black z-1">
//       <div>
//         <Link href={"/"}>
//         <Image src={"/name-logo-3-2.png"} width={70} height={70} alt="Logo" />
//         </Link>
//       </div>

//       <ul
//         className={`flex gap-6 items-center justify-center text-xl ${rubicGlitch.className}`}
//       >
//         <li>
//           <NavLink href={"/"}>Home</NavLink>
//         </li>
//         <li>
//           <NavLink href={"#about"}>About</NavLink>
//         </li>
//         <li>
//           <NavLink href={"/#"}>Tools</NavLink>
//         </li>
//         <li>
//           <NavLink href={"#certifications"}>Certifications</NavLink>
//         </li>
//         <li>
//           <NavLink href={"/#"}>Services</NavLink>
//         </li>
//         <li>
//           <NavLink href={"#contact"}>Contact</NavLink>
//         </li>
//       </ul>
//     </div>
//   );
// }

// export default Navbar;


"use client"

import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Zap, Globe, Users, Settings, Search } from 'lucide-react';

const ResponsiveNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#' },
    { 
      name: 'Products', 
      href: '#',
      dropdown: [
        { name: 'Web Development', icon: Globe, href: '#' },
        { name: 'Mobile Apps', icon: Zap, href: '#' },
        { name: 'Consulting', icon: Users, href: '#' }
      ]
    },
    { name: 'About', href: '#' },
    { name: 'Contact', href: '#' }
  ];

  return (
    <div className="bg-gradient-to-br from-indigo-950 via-purple-900 to-pink-900">
      {/* Background Animation */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
        <div className="absolute top-40 left-1/2 w-80 h-80 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
      </div>

      {/* Navbar */}
      <nav className={`fixed w-full z-50 transition-all duration-500 ease-in-out ${
        scrolled 
          ? 'bg-white/10 backdrop-blur-lg border-b border-white/20 shadow-2xl' 
          : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg flex items-center justify-center shadow-lg transform hover:scale-110 transition-transform duration-300">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg blur opacity-50 -z-10"></div>
              </div>
              <span className="ml-3 text-xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                NexaUI
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {navItems.map((item, index) => (
                  <div key={item.name} className="relative group">
                    <button
                      className="text-gray-300 hover:text-white px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-white/10 backdrop-blur-sm flex items-center space-x-1 group"
                      onMouseEnter={() => item.dropdown && setActiveDropdown(index)}
                      onMouseLeave={() => setActiveDropdown(null)}
                    >
                      <span>{item.name}</span>
                      {item.dropdown && (
                        <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${
                          activeDropdown === index ? 'rotate-180' : ''
                        }`} />
                      )}
                    </button>

                    {/* Dropdown Menu */}
                    {item.dropdown && (
                      <div className={`absolute top-full left-0 mt-2 w-56 bg-white/10 backdrop-blur-lg rounded-xl shadow-2xl border border-white/20 transition-all duration-300 ${
                        activeDropdown === index 
                          ? 'opacity-100 translate-y-0 visible' 
                          : 'opacity-0 -translate-y-2 invisible'
                      }`}
                      onMouseEnter={() => setActiveDropdown(index)}
                      onMouseLeave={() => setActiveDropdown(null)}>
                        <div className="py-2">
                          {item.dropdown.map((dropItem) => (
                            <a
                              key={dropItem.name}
                              href={dropItem.href}
                              className="flex items-center px-4 py-3 text-sm text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-200 group"
                            >
                              <dropItem.icon className="w-4 h-4 mr-3 text-purple-400 group-hover:text-cyan-400 transition-colors duration-200" />
                              {dropItem.name}
                            </a>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Right side items */}
            <div className="hidden md:flex items-center space-x-4">
              <button className="text-gray-300 hover:text-white p-2 rounded-lg hover:bg-white/10 transition-all duration-300">
                <Search className="w-5 h-5" />
              </button>
              <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-2 rounded-lg font-medium hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                Get Started
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-300 hover:text-white p-2 rounded-lg hover:bg-white/10 transition-all duration-300"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden transition-all duration-500 ease-in-out ${
          isOpen 
            ? 'max-h-96 opacity-100' 
            : 'max-h-0 opacity-0 overflow-hidden'
        }`}>
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white/5 backdrop-blur-lg border-t border-white/10">
            {navItems.map((item) => (
              <div key={item.name}>
                <a
                  href={item.href}
                  className="text-gray-300 hover:text-white block px-3 py-2 rounded-lg text-base font-medium hover:bg-white/10 transition-all duration-300"
                >
                  {item.name}
                </a>
                {item.dropdown && (
                  <div className="ml-4 space-y-1">
                    {item.dropdown.map((dropItem) => (
                      <a
                        key={dropItem.name}
                        href={dropItem.href}
                        className="text-gray-400 hover:text-white flex items-center px-3 py-2 rounded-lg text-sm hover:bg-white/5 transition-all duration-300"
                      >
                        <dropItem.icon className="w-4 h-4 mr-2" />
                        {dropItem.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-4 pb-3 border-t border-white/10">
              <button className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </nav>
      
    </div>
  );
};

export default ResponsiveNavbar;