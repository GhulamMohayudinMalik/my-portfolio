"use client"

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, ChevronDown, Code, Shield, Globe, Sun, Moon } from 'lucide-react';

const ResponsiveNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && !event.target.closest('nav')) {
        setIsOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isOpen]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (activeDropdown !== null && !event.target.closest('.dropdown-container')) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [activeDropdown]);

  const navItems = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#about' },
    { 
      name: 'Skills', 
      href: '#skills',
      dropdown: [
        { name: 'Web Development', icon: Code, href: '#web-dev' },
        { name: 'Cyber Security', icon: Shield, href: '#cyber-sec' },
        { name: 'Python Development', icon: Globe, href: '#python-dev' },
      ]
    },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Contact', href: '#contact' }
  ];

  const handleToggleTheme = () => {
    setIsDark(!isDark);
    // Theme switching logic would go here
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ease-in-out ${
      scrolled 
        ? 'bg-gray-950/95 backdrop-blur-lg border-b border-green-500/20 shadow-2xl shadow-green-500/10' 
        : 'bg-gray-950/80 backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="#" className="flex-shrink-0 flex items-center group">
            <div className="relative">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-green-500/20 to-green-400/10 border border-green-500/30 flex items-center justify-center transform group-hover:scale-110 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-green-500/25">
                <Image 
                  src="/logo-no-bg.png" 
                  width={32} 
                  height={32} 
                  alt="Logo"
                  className="filter brightness-0 invert hue-rotate-90 contrast-150"
                />
              </div>
              <div className="absolute inset-0 rounded-lg bg-green-500/20 blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <span className="ml-3 text-green-400 font-mono text-lg font-bold tracking-wider hidden sm:block">
              Portfolio
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-1">
              {navItems.map((item, index) => (
                <div key={item.name} className="relative dropdown-container">
                  {item.dropdown ? (
                    <button
                      className="text-green-300/80 hover:text-green-400 px-3 py-2 rounded-lg text-sm font-medium font-mono transition-all duration-300 hover:bg-green-500/10 border border-transparent hover:border-green-500/30 flex items-center space-x-1 group relative"
                      onClick={() => setActiveDropdown(activeDropdown === index ? null : index)}
                    >
                      <span>{item.name}</span>
                      <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${
                        activeDropdown === index ? 'rotate-180' : ''
                      }`} />
                      <div className="absolute inset-0 rounded-lg bg-green-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </button>
                  ) : (
                    <Link
                      href={item.href}
                      className="text-green-300/80 hover:text-green-400 px-3 py-2 rounded-lg text-sm font-medium font-mono transition-all duration-300 hover:bg-green-500/10 border border-transparent hover:border-green-500/30 relative group block"
                    >
                      {item.name}
                      <div className="absolute inset-0 rounded-lg bg-green-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </Link>
                  )}

                  {/* Dropdown Menu */}
                  {item.dropdown && (
                    <div className={`absolute top-full left-0 mt-2 w-56 bg-gray-900/95 backdrop-blur-lg rounded-lg shadow-2xl border border-green-500/20 transition-all duration-300 ${
                      activeDropdown === index 
                        ? 'opacity-100 translate-y-0 visible' 
                        : 'opacity-0 -translate-y-2 invisible'
                    }`}>
                      <div className="py-2">
                        {item.dropdown.map((dropItem) => (
                          <Link
                            key={dropItem.name}
                            href={dropItem.href}
                            className="flex items-center px-4 py-3 text-sm text-green-300/70 hover:text-green-400 hover:bg-green-500/10 transition-all duration-200 group font-mono"
                            onClick={() => setActiveDropdown(null)}
                          >
                            <dropItem.icon className="w-4 h-4 mr-3 text-green-500/70 group-hover:text-green-400 transition-colors duration-200" />
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
            <button 
              onClick={handleToggleTheme}
              className="relative bg-gray-800/80 border border-green-500/30 text-green-400 p-2 rounded-lg font-medium hover:bg-green-500/10 hover:border-green-400/50 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-green-500/25 group"
              aria-label="Toggle theme"
            >
              <div className="relative w-5 h-5">
                {isDark ? (
                  <Sun className="w-5 h-5 transition-transform duration-300 group-hover:rotate-180" />
                ) : (
                  <Moon className="w-5 h-5 transition-transform duration-300 group-hover:-rotate-12" />
                )}
              </div>
              <div className="absolute inset-0 rounded-lg bg-green-500/20 blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <button 
              onClick={handleToggleTheme}
              className="text-green-400 hover:text-green-300 p-2 rounded-lg hover:bg-green-500/10 border border-green-500/30 transition-all duration-300"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-green-400 hover:text-green-300 p-2 rounded-lg hover:bg-green-500/10 border border-green-500/30 transition-all duration-300"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`md:hidden transition-all duration-500 ease-in-out overflow-hidden ${
        isOpen 
          ? 'max-h-96 opacity-100' 
          : 'max-h-0 opacity-0'
      }`}>
        <div className="px-2 pt-2 pb-3 space-y-1 bg-gray-900/95 backdrop-blur-lg border-t border-green-500/20">
          {navItems.map((item) => (
            <div key={item.name}>
              <Link
                href={item.href}
                className="text-green-300/80 hover:text-green-400 block px-3 py-2 rounded-lg text-base font-medium font-mono hover:bg-green-500/10 border border-transparent hover:border-green-500/30 transition-all duration-300"
                onClick={() => !item.dropdown && setIsOpen(false)}
              >
                {item.name}
              </Link>
              {item.dropdown && (
                <div className="ml-4 space-y-1 mt-2">
                  {item.dropdown.map((dropItem) => (
                    <Link
                      key={dropItem.name}
                      href={dropItem.href}
                      className="text-green-300/60 hover:text-green-400 flex items-center px-3 py-2 rounded-lg text-sm hover:bg-green-500/10 transition-all duration-300 font-mono"
                      onClick={() => setIsOpen(false)}
                    >
                      <dropItem.icon className="w-4 h-4 mr-2 text-green-500/70" />
                      {dropItem.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default ResponsiveNavbar;