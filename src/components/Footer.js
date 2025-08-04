"use client"

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Globe, 
  Users, 
  Zap, 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Linkedin, 
  Twitter, 
  Instagram,
  ArrowUp,
  Heart
} from 'lucide-react';

const ResponsiveFooter = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerSections = [
    {
      title: 'Skills',
      links: [
        { name: 'Web Development', icon: Globe, href: '#web-dev' },
        { name: 'Cyber Security', icon: Users, href: '#cy-sec' },
        { name: 'Python Development', icon: Zap, href: '#py-dev' },
      ]
    },
    {
      title: 'Quick Links',
      links: [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Portfolio', href: '#portfolio' },
        { name: 'Contact', href: '#contact' },
      ]
    },
    {
      title: 'Contact Info',
      links: [
        { name: 'ghulammohayudinmalik@gmail.com', icon: Mail, href: 'mailto:hello@example.com' },
        { name: '+92 (307) 851-0037', icon: Phone, href: 'tel:+15551234567' },
        { name: 'Bahawalpur, Pakistan', icon: MapPin, href: '#location' },
      ]
    }
  ];

  const socialLinks = [
    { name: 'GitHub', icon: Github, href: '#github' },
    { name: 'LinkedIn', icon: Linkedin, href: '#linkedin' },
    { name: 'Twitter', icon: Twitter, href: '#twitter' },
    { name: 'Instagram', icon: Instagram, href: '#instagram' },
  ];

  return (
    <footer className="relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
        <div className="absolute top-40 left-1/2 w-80 h-80 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
      </div>

      {/* Main Footer Content */}
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Logo and Description */}
            <div className="lg:col-span-1">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center transform hover:scale-110 transition-transform duration-300">
                  <Image src={"/logo-no-bg.png"} width={160} height={60} alt="Logo" />
                </div>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Crafting digital experiences with cutting-edge technology and creative solutions. 
                Let's build something amazing together.
              </p>
              
              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <Link
                    key={social.name}
                    href={social.href}
                    className="w-10 h-10 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-gray-300 hover:text-white hover:bg-white/20 transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
                  >
                    <social.icon className="w-5 h-5" />
                  </Link>
                ))}
              </div>
            </div>

            {/* Footer Sections */}
            {footerSections.map((section) => (
              <div key={section.title} className="lg:col-span-1">
                <h3 className="text-white font-semibold text-lg mb-6 relative">
                  {section.title}
                  <div className="absolute bottom-0 left-0 w-8 h-0.5 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full"></div>
                </h3>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="flex items-center text-gray-300 hover:text-white transition-all duration-300 group"
                      >
                        {link.icon && (
                          <link.icon className="w-4 h-4 mr-3 text-purple-400 group-hover:text-cyan-400 transition-colors duration-200" />
                        )}
                        <span className="group-hover:translate-x-1 transition-transform duration-200">
                          {link.name}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Newsletter Signup */}
          <div className="mt-12 pt-8 border-t border-white/10">
            <div className="max-w-md mx-auto text-center lg:mx-0 lg:text-left">
              <h3 className="text-white font-semibold text-lg mb-4">Stay Updated</h3>
              <p className="text-gray-300 mb-6">
                Subscribe to get the latest updates on new projects and tech insights.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300"
                />
                <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 bg-white/5 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="flex items-center text-gray-300 text-sm">
                <span>© 2025 Ghulam Mohayudin. Made with Next</span>
                <Heart className="w-4 h-4 mx-2 text-red-500 animate-pulse" />
                <span>and lots of coffee.</span>
              </div>
              
              <div className="flex items-center space-x-6 text-sm text-gray-300">
                <Link href="#privacy" className="hover:text-white transition-colors duration-300">
                  Privacy Policy
                </Link>
                <Link href="#terms" className="hover:text-white transition-colors duration-300">
                  Terms of Service
                </Link>
                <button
                  onClick={scrollToTop}
                  className="flex items-center space-x-2 hover:text-white transition-all duration-300 transform hover:scale-105"
                >
                  <span>Back to Top</span>
                  <ArrowUp className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default ResponsiveFooter;