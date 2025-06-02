
import React from 'react';
import { Github, Twitter, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4 animate-fade-in">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300">
              CipherTekies
            </div>
            <p className="text-gray-400 leading-relaxed">
              Building the future of technology and cybersecurity through collaboration, 
              innovation, and inclusive community building.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-all duration-300 hover:scale-110 hover:rotate-12">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-all duration-300 hover:scale-110 hover:rotate-12">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-all duration-300 hover:scale-110 hover:rotate-12">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-all duration-300 hover:scale-110 hover:rotate-12">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="animate-fade-in" style={{ animationDelay: '200ms' }}>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <a href="#about" className="block text-gray-400 hover:text-white transition-all duration-300 hover:translate-x-2">About Us</a>
              <a href="#services" className="block text-gray-400 hover:text-white transition-all duration-300 hover:translate-x-2">Services</a>
              <a href="#events" className="block text-gray-400 hover:text-white transition-all duration-300 hover:translate-x-2">Events</a>
              <a href="#team" className="block text-gray-400 hover:text-white transition-all duration-300 hover:translate-x-2">Team</a>
            </div>
          </div>

          <div className="animate-fade-in" style={{ animationDelay: '400ms' }}>
            <h3 className="text-lg font-semibold mb-4">Community</h3>
            <div className="space-y-2">
              <a href="#" className="block text-gray-400 hover:text-white transition-all duration-300 hover:translate-x-2">Join Us</a>
              <a href="#" className="block text-gray-400 hover:text-white transition-all duration-300 hover:translate-x-2">Code of Conduct</a>
              <a href="#" className="block text-gray-400 hover:text-white transition-all duration-300 hover:translate-x-2">Open Source</a>
              <a href="#" className="block text-gray-400 hover:text-white transition-all duration-300 hover:translate-x-2">Contribute</a>
            </div>
          </div>

          <div className="animate-fade-in" style={{ animationDelay: '600ms' }}>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <div className="space-y-2">
              <a href="#" className="block text-gray-400 hover:text-white transition-all duration-300 hover:translate-x-2">Documentation</a>
              <a href="#" className="block text-gray-400 hover:text-white transition-all duration-300 hover:translate-x-2">Tutorials</a>
              <a href="#" className="block text-gray-400 hover:text-white transition-all duration-300 hover:translate-x-2">Blog</a>
              <a href="#" className="block text-gray-400 hover:text-white transition-all duration-300 hover:translate-x-2">Newsletter</a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 animate-fade-in" style={{ animationDelay: '800ms' }}>
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2024 CipherTekies. All rights reserved.
            </div>
            <div className="flex items-center space-x-1 text-gray-400 text-sm">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500 animate-pulse" />
              <span>by the CipherTekies team</span>
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-all duration-300 hover:scale-110">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white transition-all duration-300 hover:scale-110">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
