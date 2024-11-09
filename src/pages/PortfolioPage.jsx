// File: src/pages/PortfolioPage.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useProjects } from '../hooks/useCmsData';
import { Loading } from '../components/common/Loading';
import ErrorBoundary from '../components/common/ErrorBoundary';

const PortfolioPage = () => {
  const { projects, loading, error } = useProjects();
  const [selectedCategory, setSelectedCategory] = useState('all');

  if (loading) return <Loading />;
  if (error) throw new Error(error);

  const categories = ['all', ...new Set(projects.map(p => p.category))];
  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <div className="space-y-8 py-12">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-gray-900">Portfolio</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Explore my collection of digital art, including concept designs, 
          illustrations, and 3D models.
        </p>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-2 pb-8">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full ${
              selectedCategory === category
                ? 'bg-indigo-600 text-white'
                : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
            }`}
          >
            {category === 'all' ? 'All Works' : category}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <Link
            key={project.slug}
            to={`/portfolio/${project.slug}`}
            className="group"
          >
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 group-hover:scale-105">
              <div className="aspect-w-4 aspect-h-3">
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-sm text-indigo-600 mb-3">
                  {project.category}
                </p>
                <p className="text-gray-600 line-clamp-2">
                  {project.description}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default function PortfolioWithErrorBoundary() {
  return (
    <ErrorBoundary>
      <PortfolioPage />
    </ErrorBoundary>
  );
}