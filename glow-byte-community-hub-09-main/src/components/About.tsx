
import React from 'react';
import { Target, Eye, Heart } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Our Community
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            We are a passionate community of technology enthusiasts, developers, and innovators 
            dedicated to fostering growth, collaboration, and technological advancement.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
              Our Story
            </h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Founded in 2020, TechCommunity emerged from a simple belief: that the best 
              innovations happen when passionate minds come together. What started as a small 
              group of developers sharing knowledge has grown into a thriving ecosystem of 
              over 5,000 members from around the globe.
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              We've organized hundreds of workshops, hackathons, and networking events, 
              launched numerous open-source projects, and helped thousands of individuals 
              advance their careers in technology.
            </p>
          </div>
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-8 text-white">
              <div className="space-y-6">
                <div className="text-4xl font-bold">2020</div>
                <div className="text-xl">Year Founded</div>
                <div className="grid grid-cols-2 gap-4 pt-4">
                  <div>
                    <div className="text-2xl font-bold">5000+</div>
                    <div className="text-blue-100">Active Members</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold">50+</div>
                    <div className="text-blue-100">Countries</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-6 rounded-xl bg-gray-50 dark:bg-gray-800">
            <div className="bg-blue-100 dark:bg-blue-900/30 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Target className="w-8 h-8 text-blue-600 dark:text-blue-400" />
            </div>
            <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
              Our Mission
            </h4>
            <p className="text-gray-600 dark:text-gray-300">
              To democratize technology education and create opportunities for 
              innovation through collaborative learning and community support.
            </p>
          </div>

          <div className="text-center p-6 rounded-xl bg-gray-50 dark:bg-gray-800">
            <div className="bg-purple-100 dark:bg-purple-900/30 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Eye className="w-8 h-8 text-purple-600 dark:text-purple-400" />
            </div>
            <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
              Our Vision
            </h4>
            <p className="text-gray-600 dark:text-gray-300">
              To be the leading global platform where technology enthusiasts 
              connect, learn, and build the future together.
            </p>
          </div>

          <div className="text-center p-6 rounded-xl bg-gray-50 dark:bg-gray-800">
            <div className="bg-green-100 dark:bg-green-900/30 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Heart className="w-8 h-8 text-green-600 dark:text-green-400" />
            </div>
            <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
              Our Values
            </h4>
            <p className="text-gray-600 dark:text-gray-300">
              Inclusivity, innovation, collaboration, and continuous learning 
              are at the heart of everything we do.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
