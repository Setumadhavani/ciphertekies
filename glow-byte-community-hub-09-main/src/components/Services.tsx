
import React from 'react';
import { Code, Lightbulb, Users, Briefcase, BookOpen, Rocket } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Code,
      title: 'Technical Workshops',
      description: 'Hands-on coding sessions covering the latest technologies and cybersecurity frameworks.',
      color: 'blue'
    },
    {
      icon: Lightbulb,
      title: 'Innovation Labs',
      description: 'Collaborative spaces for brainstorming and developing cutting-edge security solutions.',
      color: 'yellow'
    },
    {
      icon: Users,
      title: 'Mentorship Program',
      description: 'Connect with experienced cybersecurity professionals for guidance and career development.',
      color: 'green'
    },
    {
      icon: Briefcase,
      title: 'Career Services',
      description: 'Job placement assistance, resume reviews, and interview preparation for tech roles.',
      color: 'purple'
    },
    {
      icon: BookOpen,
      title: 'Learning Resources',
      description: 'Comprehensive library of tutorials, courses, and cybersecurity educational materials.',
      color: 'red'
    },
    {
      icon: Rocket,
      title: 'Startup Incubation',
      description: 'Support for entrepreneurs looking to launch their cybersecurity and tech startups.',
      color: 'indigo'
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400',
      yellow: 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400',
      green: 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400',
      purple: 'bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400',
      red: 'bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400',
      indigo: 'bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400'
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <section id="services" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 animate-slide-up">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto animate-slide-up" style={{ animationDelay: '200ms' }}>
            We offer a comprehensive range of services designed to support your 
            technology and cybersecurity journey, from learning to career advancement.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 animate-fade-in group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`w-16 h-16 rounded-lg flex items-center justify-center mb-4 ${getColorClasses(service.color)} group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="w-8 h-8 group-hover:animate-pulse" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center animate-bounce-in" style={{ animationDelay: '800ms' }}>
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 hover:-translate-y-1">
            Explore All Services
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
