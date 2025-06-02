
import React from 'react';
import { Linkedin, Twitter, Github } from 'lucide-react';

const Team = () => {
  const teamMembers = [
    {
      name: 'Sarah Johnson',
      role: 'CTO & Co-founder',
      bio: 'Full-stack developer with expertise in AI/ML and cloud architecture.',
      initials: 'SJ',
      color: 'from-pink-400 to-red-500'
    },
    {
      name: 'Michael Chen',
      role: 'Head of Community',
      bio: 'Community builder passionate about developer education and engagement.',
      initials: 'MC',
      color: 'from-green-400 to-blue-500'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Lead Designer',
      bio: 'UX/UI designer focused on creating intuitive and inclusive experiences.',
      initials: 'ER',
      color: 'from-purple-400 to-pink-500'
    },
    {
      name: 'David Kim',
      role: 'DevOps Engineer',
      bio: 'Infrastructure specialist ensuring scalable and reliable systems.',
      initials: 'DK',
      color: 'from-yellow-400 to-orange-500'
    },
    {
      name: 'Lisa Wang',
      role: 'Content Director',
      bio: 'Technical writer and educator creating comprehensive learning resources.',
      initials: 'LW',
      color: 'from-indigo-400 to-purple-500'
    },
    {
      name: 'James Wilson',
      role: 'Event Coordinator',
      bio: 'Event management specialist organizing impactful community gatherings.',
      initials: 'JW',
      color: 'from-teal-400 to-green-500'
    }
  ];

  return (
    <section id="team" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Our Amazing Team
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Meet the passionate individuals who make our community thrive. 
            Together, we're building the future of technology education and collaboration.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div 
              key={index}
              className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="text-center">
                <div className={`w-20 h-20 bg-gradient-to-r ${member.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <span className="text-2xl font-bold text-white">{member.initials}</span>
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
                  {member.name}
                </h3>
                
                <p className="text-blue-600 dark:text-blue-400 font-medium mb-3">
                  {member.role}
                </p>
                
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-6">
                  {member.bio}
                </p>

                <div className="flex justify-center space-x-3">
                  <a href="#" className="p-2 bg-gray-100 dark:bg-gray-700 rounded-lg text-gray-600 dark:text-gray-400 hover:bg-blue-100 dark:hover:bg-blue-900/30 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a href="#" className="p-2 bg-gray-100 dark:bg-gray-700 rounded-lg text-gray-600 dark:text-gray-400 hover:bg-blue-100 dark:hover:bg-blue-900/30 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    <Twitter className="w-4 h-4" />
                  </a>
                  <a href="#" className="p-2 bg-gray-100 dark:bg-gray-700 rounded-lg text-gray-600 dark:text-gray-400 hover:bg-blue-100 dark:hover:bg-blue-900/30 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    <Github className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Want to join our team? We're always looking for passionate individuals to help grow our community.
          </p>
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-200 transform hover:scale-105">
            View Open Positions
          </button>
        </div>
      </div>
    </section>
  );
};

export default Team;
