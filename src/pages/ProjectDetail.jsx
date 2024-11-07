// File: src/pages/ProjectDetail.jsx
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { projects } from '../data/dummyData';

const ProjectDetail = () => {
  const { slug } = useParams();
  const project = projects.find(p => p.slug === slug);

  if (!project) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-bold text-gray-900">Project not found</h2>
        <Link to="/" className="text-indigo-600 hover:text-indigo-500 mt-4 inline-block">
          Return to Home
        </Link>
      </div>
    );
  }

  return (
    <article className="max-w-4xl mx-auto">
      <div className="space-y-8">
        {/* Header */}
        <header className="text-center space-y-4">
          <Link
            to={`/category/${project.categorySlug}`}
            className="text-indigo-600 hover:text-indigo-500"
          >
            {project.category}
          </Link>
          <h1 className="text-4xl font-bold text-gray-900">{project.title}</h1>
          <p className="text-xl text-gray-600">{project.description}</p>
        </header>

        {/* Images */}
        <div className="space-y-8">
          {project.images.map((image, index) => (
            <div key={index} className="rounded-lg overflow-hidden shadow-lg">
              <img
                src={image}
                alt={`${project.title} - Image ${index + 1}`}
                className="w-full h-auto"
              />
            </div>
          ))}
        </div>

        {/* Content */}
        <div className="prose max-w-none">
          <p className="text-lg text-gray-700 leading-relaxed">
            {project.content}
          </p>
        </div>

        {/* Metadata */}
        <div className="border-t border-gray-200 pt-8 mt-8">
          <div className="flex justify-between items-center text-sm text-gray-500">
            <time dateTime={project.createdAt}>
              Created on {new Date(project.createdAt).toLocaleDateString()}
            </time>
            <Link
              to={`/category/${project.categorySlug}`}
              className="text-indigo-600 hover:text-indigo-500"
            >
              View more in {project.category}
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
};

export default ProjectDetail;