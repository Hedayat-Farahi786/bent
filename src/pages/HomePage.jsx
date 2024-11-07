// File: src/pages/HomePage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import { projects } from '../data/dummyData';

const HomePage = () => {
  const featuredProjects = projects.slice(0, 3);

  return (
    <div className="h-[calc(100vh-4rem)] flex items-center bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Hero Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 leading-tight">
                Creative
                <span className="block text-indigo-600">Digital Artist</span>
              </h1>
              <p className="text-xl text-gray-600">
                Bringing imagination to life through digital art, concept design, and creative technology.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/portfolio"
                className="inline-flex items-center px-6 py-3 rounded-md bg-indigo-600 text-white hover:bg-indigo-700 transition-colors"
              >
                View Portfolio
                <ArrowRightIcon className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center px-6 py-3 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors"
              >
                Get in Touch
              </Link>
            </div>
          </div>

          {/* Right Side - Featured Work Grid */}
          <div className="grid grid-cols-2 gap-4">
            {featuredProjects.slice(0, 3).map((project, index) => (
              <Link
                key={project.id}
                to={`/portfolio/${project.slug}`}
                className={`group ${index === 2 ? 'col-span-2' : ''}`}
              >
                <div className="relative overflow-hidden rounded-lg shadow-lg h-48">
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                    <div className="p-4 text-white">
                      <h3 className="text-lg font-semibold">{project.title}</h3>
                      <p className="text-sm text-gray-200">{project.category}</p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;