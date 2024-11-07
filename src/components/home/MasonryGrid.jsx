// File: src/components/home/MasonryGrid.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const MasonryGrid = ({ projects }) => {
  return (
    <div className="masonry-grid">
      {projects.map((project) => (
        <div key={project.id} className="masonry-item hover-scale">
          <Link to={`/project/${project.slug}`} className="block">
            <div className="card">
              <img
                src={project.thumbnail}
                alt={project.title}
                className="w-full h-auto rounded-t-lg"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900">
                  {project.title}
                </h3>
                {project.category && (
                  <p className="text-sm text-gray-500">{project.category}</p>
                )}
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default MasonryGrid;