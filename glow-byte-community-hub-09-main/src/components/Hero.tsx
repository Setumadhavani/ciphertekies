
import React from 'react';
import { ArrowRight, Code, Users, Zap } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="pt-16 min-h-screen flex items-center bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight animate-slide-up">
                Welcome to
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent animate-pulse"> CipherTekies</span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed animate-slide-up" style={{ animationDelay: '200ms' }}>
                Join our vibrant community of developers, cybersecurity experts, and tech enthusiasts. 
                Together, we're shaping tomorrow's digital landscape through collaboration, 
                learning, and cutting-edge innovation in technology and security.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 animate-slide-up" style={{ animationDelay: '400ms' }}>
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center space-x-2 hover:shadow-lg transition-all duration-300 transform hover:scale-105 hover:-translate-y-1">
                <span>Join Community</span>
                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
              <button className="border-2 border-blue-600 text-blue-600 dark:text-blue-400 px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 transition-all duration-300 hover:scale-105">
                Learn More
              </button>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center animate-bounce-in" style={{ animationDelay: '600ms' }}>
                <div className="bg-blue-100 dark:bg-blue-900/30 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-3 hover:scale-110 transition-transform duration-300">
                  <Users className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                </div>
                <div className="text-2xl font-bold text-gray-900 dark:text-white">5000+</div>
                <div className="text-gray-600 dark:text-gray-400">Members</div>
              </div>
              <div className="text-center animate-bounce-in" style={{ animationDelay: '800ms' }}>
                <div className="bg-purple-100 dark:bg-purple-900/30 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-3 hover:scale-110 transition-transform duration-300">
                  <Code className="w-8 h-8 text-purple-600 dark:text-purple-400" />
                </div>
                <div className="text-2xl font-bold text-gray-900 dark:text-white">200+</div>
                <div className="text-gray-600 dark:text-gray-400">Projects</div>
              </div>
              <div className="text-center animate-bounce-in" style={{ animationDelay: '1000ms' }}>
                <div className="bg-green-100 dark:bg-green-900/30 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-3 hover:scale-110 transition-transform duration-300">
                  <Zap className="w-8 h-8 text-green-600 dark:text-green-400" />
                </div>
                <div className="text-2xl font-bold text-gray-900 dark:text-white">50+</div>
                <div className="text-gray-600 dark:text-gray-400">Events</div>
              </div>
            </div>
          </div>

          <div className="relative animate-float">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-3xl transform rotate-6 animate-pulse"></div>
            <div className="relative bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-2">
              <div className="space-y-6">
                <div className="flex items-center space-x-4 animate-slide-in">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg animate-spin-slow"></div>
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white">Latest Project</div>
                    <div className="text-gray-600 dark:text-gray-400">Cybersecurity Platform</div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <div className="h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full w-3/4 animate-progress"></div>
                  </div>
                  <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400">
                    <span>Progress</span>
                    <span>75%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
