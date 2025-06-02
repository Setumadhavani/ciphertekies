
import React from 'react';
import { Calendar, MapPin, Clock, Users } from 'lucide-react';

const Events = () => {
  const events = [
    {
      title: 'AI & Machine Learning Summit 2024',
      date: 'June 15, 2024',
      time: '9:00 AM - 6:00 PM',
      location: 'Tech Convention Center',
      attendees: 500,
      description: 'Join industry leaders for a day of insights into the latest AI and ML trends.',
      type: 'Conference',
      status: 'upcoming'
    },
    {
      title: 'React.js Workshop Series',
      date: 'June 22-24, 2024',
      time: '2:00 PM - 5:00 PM',
      location: 'Community Hub',
      attendees: 50,
      description: 'Three-day intensive workshop covering advanced React concepts and best practices.',
      type: 'Workshop',
      status: 'upcoming'
    },
    {
      title: 'Startup Pitch Night',
      date: 'July 5, 2024',
      time: '6:00 PM - 9:00 PM',
      location: 'Innovation Center',
      attendees: 200,
      description: 'Watch promising startups pitch their ideas to investors and industry experts.',
      type: 'Networking',
      status: 'upcoming'
    }
  ];

  return (
    <section id="events" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Upcoming Events
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Stay connected with our vibrant community through workshops, conferences, 
            networking events, and collaborative sessions.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {events.map((event, index) => (
            <div 
              key={index}
              className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex justify-between items-start mb-4">
                <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 px-3 py-1 rounded-full text-sm font-medium">
                  {event.type}
                </span>
                <span className="bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 px-3 py-1 rounded-full text-sm font-medium">
                  {event.status}
                </span>
              </div>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                {event.title}
              </h3>
              
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {event.description}
              </p>

              <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <div className="flex items-center space-x-2">
                  <Calendar className="w-4 h-4" />
                  <span>{event.date}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4" />
                  <span>{event.time}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4" />
                  <span>{event.location}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="w-4 h-4" />
                  <span>{event.attendees} attendees expected</span>
                </div>
              </div>

              <button className="w-full mt-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 rounded-lg font-medium hover:shadow-lg transition-all duration-200">
                Register Now
              </button>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button className="border-2 border-blue-600 text-blue-600 dark:text-blue-400 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 transition-all duration-200">
            View All Events
          </button>
        </div>
      </div>
    </section>
  );
};

export default Events;
