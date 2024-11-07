// File: src/pages/AboutPage.jsx
import React from 'react';

const socialLinks = [
  { name: 'Twitter', url: 'https://twitter.com/yourusername', icon: 'twitter' },
  { name: 'LinkedIn', url: 'https://linkedin.com/in/yourusername', icon: 'linkedin' },
  { name: 'Instagram', url: 'https://instagram.com/yourusername', icon: 'instagram' },
  { name: 'Behance', url: 'https://behance.net/yourusername', icon: 'behance' },
];

const AboutPage = () => {
  return (
    <div className="h-[calc(100vh-4rem)] flex items-center bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Image */}
          <div className="relative">
            <div className="aspect-square overflow-hidden rounded-2xl shadow-xl">
              <img
                src="/api/placeholder/600/600"
                alt="Your Name"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative Elements */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-indigo-100 rounded-full -z-10"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-pink-100 rounded-full -z-10"></div>
          </div>

          {/* Right Side - Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold text-gray-900">Your Name</h1>
              <p className="text-xl text-indigo-600">Digital Artist & Designer</p>
            </div>

            <div className="prose max-w-none">
              <p className="text-gray-600 text-lg leading-relaxed">
                Write your bio here. Share your story, passion, and what drives you 
                creatively. Discuss your journey in digital art and what makes your 
                work unique. Keep it concise but engaging.
              </p>
            </div>

            {/* Social Links */}
            <div className="flex flex-wrap gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow duration-300 text-gray-700 hover:text-indigo-600"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;