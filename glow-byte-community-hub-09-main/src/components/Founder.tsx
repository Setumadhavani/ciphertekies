
import React from 'react';
import { Linkedin, Twitter, Github, Mail } from 'lucide-react';

const Founder = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Meet Our Founder
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Visionary leadership driving innovation and community growth in the tech industry.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/3">
                <div className="h-80 md:h-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                  <div className="w-48 h-48 bg-white/20 rounded-full flex items-center justify-center">
                    <div className="text-6xl font-bold text-white">AS</div>
                  </div>
<div className="w-48 h-48 rounded-full overflow-hidden border-4 border-white shadow-lg">
  <img
    src="/founder.jpg"
    alt="Founder"
    className="w-full h-full object-cover"
  />
</div>

                    <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
                      Alex Smith
                    </h3>
                    <p className="text-xl text-blue-600 dark:text-blue-400 font-medium">
                      Founder & CEO
                    </p>
                  </div>

                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    With over 15 years of experience in the tech industry, Alex has been at the 
                    forefront of technological innovation. Before founding TechCommunity, Alex 
                    led engineering teams at major tech companies and contributed to numerous 
                    open-source projects.
                  </p>

                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    Passionate about democratizing technology education and fostering inclusive 
                    communities, Alex believes that the best innovations emerge when diverse 
                    minds collaborate towards common goals.
                  </p>

                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                      Achievements & Recognition
                    </h4>
                    <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                      <li>• Forbes 30 Under 30 in Technology (2018)</li>
                      <li>• TEDx Speaker on "Building Inclusive Tech Communities"</li>
                      <li>• Contributor to 50+ open-source projects</li>
                      <li>• Mentor to 100+ aspiring developers</li>
                    </ul>
                  </div>

                  <div className="flex space-x-4 pt-4">
                    <a href="#" className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg text-blue-600 dark:text-blue-400 hover:bg-blue-200 dark:hover:bg-blue-900/50 transition-colors">
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a href="#" className="p-2 bg-gray-100 dark:bg-gray-700 rounded-lg text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">
                      <Twitter className="w-5 h-5" />
                    </a>
                    <a href="#" className="p-2 bg-gray-100 dark:bg-gray-700 rounded-lg text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">
                      <Github className="w-5 h-5" />
                    </a>
                    <a href="#" className="p-2 bg-gray-100 dark:bg-gray-700 rounded-lg text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">
                      <Mail className="w-5 h-5" />
                    </a>
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

export default Founder;
