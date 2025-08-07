"use client"

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
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
    { name: 'About', href: '#about' },
    { 
      name: 'Skills', 
      href: '#',
      dropdown: [
        { name: 'Web Development', icon: Globe, href: '#web-dev' },
        { name: 'Cyber Security', icon: Users, href: '#cy-sec' },
        { name: 'Python Development', icon: Zap, href: '#py-dev' },
      ]
    },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <div className="bg-gradient-to-br from-indigo-950 via-purple-900 to-pink-900">

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
                <div className="w-10 h-10 rounded-lg flex items-center justify-center transform hover:scale-110 transition-transform duration-300">
                  {/* <Zap className="w-6 h-6 text-white" /> */}
                  <Image  src={"/logo-no-bg.png"} width={160} height={60} alt="Logo" />
                </div>
              </div>
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
                      <Link href={item.href}>{item.name}</Link>
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
                            <Link
                              key={dropItem.name}
                              href={dropItem.href}
                              className="flex items-center px-4 py-3 text-sm text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-200 group"
                            >
                              <dropItem.icon className="w-4 h-4 mr-3 text-purple-400 group-hover:text-cyan-400 transition-colors duration-200" />
                              {dropItem.name}
                            </Link>
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
              <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-2 rounded-lg font-medium hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                Get Started
              </button>
              <button className="text-gray-300 hover:text-white p-2 rounded-lg hover:bg-white/10 transition-all duration-300">
                <Search className="w-5 h-5"/>
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
                Started Mobile 
              </button>
            </div>
          </div>
        </div>
      </nav>
      
      
    </div>
  );
};

export default ResponsiveNavbar;