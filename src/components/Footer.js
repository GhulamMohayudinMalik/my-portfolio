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
        { name: 'Web Development', icon: Globe, href: '#skills' },
        { name: 'Cyber Security', icon: Users, href: '#skills' },
        { name: 'Python Development', icon: Zap, href: '#skills' },
      ]
    },
    {
      title: 'Quick Links',
      links: [
        { name: 'Home', href: '#' },
        { name: 'About', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Certifications', href: '#certifications' },
        { name: 'Contact', href: '#contact' },
      ]
    },
    {
      title: 'Contact Info',
      links: [
        { name: 'ghulammohayudinmalik@gmail.com', icon: Mail, href: 'mailto:ghulammohayudinmalik@gmail.com' },
        { name: '+92 (307) 851-0037', icon: Phone, href: 'tel:+923078510037' },
        { name: 'Bahawalpur, Pakistan', icon: MapPin, href: '#location' },
      ]
    }
  ];

  const socialLinks = [
    { name: 'GitHub', icon: Github, href: 'https://github.com/GhulamMohayudinMalik' },
    { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com/in/ghulam-mohayyudin' },
  ];

  return (
    <footer className="relative overflow-hidden">
      
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            
            <div className="lg:col-span-1">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center transform hover:scale-110 transition-transform duration-300">
                  <Image src={"/logo-no-bg.png"} width={160} height={60} alt="Logo" />
                </div>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed text-sm sm:text-base">
                Crafting digital experiences with cutting-edge technology and creative solutions. 
                Let&apos;s build something amazing together.
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
                <h3 className="text-white font-semibold text-base sm:text-lg mb-4 sm:mb-6 relative">
                  {section.title}
                  <div className="absolute bottom-0 left-0 w-8 h-0.5 bg-green-400 rounded-full"></div>
                </h3>
                <ul className="space-y-2 sm:space-y-3">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="flex items-center text-gray-300 hover:text-white transition-all duration-300 group text-sm sm:text-base"
                      >
                        {link.icon && (
                          <link.icon className="w-4 h-4 mr-2 sm:mr-3 text-white group-hover:text-green-400 transition-colors duration-200 flex-shrink-0" />
                        )}
                        <span className="group-hover:translate-x-1 transition-transform duration-200 break-words">
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
          <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-white/10">
            <div className="max-w-md mx-auto text-center lg:mx-0 lg:text-left">
              <h3 className="text-white font-semibold text-base sm:text-lg mb-3 sm:mb-4">Stay Updated</h3>
              <p className="text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base">
                Subscribe to get the latest updates on new projects and tech insights.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-3 sm:px-4 py-2 sm:py-3 rounded-lg bg-white/10 backdrop-blur-xs border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300 text-sm sm:text-base"
                />
                <button className="border-2 border-green-400 hover:bg-green-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-sm sm:text-base">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 bg-white/5 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-3 md:space-y-0">
              <div className="flex flex-wrap text-center justify-center items-center text-gray-300 text-xs sm:text-sm">
                <span>© 2025 Ghulam Mohayudin. Made with Next</span>
                <Heart className="w-3 h-3 sm:w-4 sm:h-4 mx-1 sm:mx-2 text-red-500 animate-pulse" />
                <span>and lots of coffee.</span>
              </div>
              
              <div className="flex flex-wrap items-center justify-center space-x-4 sm:space-x-6 text-xs sm:text-sm text-gray-300">
                <Link href="#privacy" className="hover:text-white transition-colors duration-300">
                  Privacy Policy
                </Link>
                <Link href="#terms" className="hover:text-white transition-colors duration-300">
                  Terms of Service
                </Link>
                <button
                  onClick={scrollToTop}
                  className="flex items-center space-x-1 sm:space-x-2 hover:text-white transition-all duration-300 transform hover:scale-105"
                >
                  <span>Back to Top</span>
                  <ArrowUp className="w-3 h-3 sm:w-4 sm:h-4" />
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