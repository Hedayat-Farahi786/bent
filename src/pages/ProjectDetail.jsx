// File: src/pages/ProjectDetail.jsx
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useProject } from '../hooks/useCmsData';
import { Loading } from '../components/common/Loading';

const ProjectDetail = () => {
  const { slug } = useParams();
  const { project, loading, error } = useProject(slug);

  if (loading) return <Loading />;
  if (error || !project) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-bold text-gray-900">Project not found</h2>
        <Link to="/portfolio" className="text-indigo-600 hover:text-indigo-500 mt-4 inline-block">
          Return to Portfolio
        </Link>
      </div>
    );
  }

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="space-y-8">
        <header className="text-center space-y-4">
          <div className="text-sm text-indigo-600">{project.category}</div>
          <h1 className="text-4xl font-bold text-gray-900">{project.title}</h1>
          <p className="text-xl text-gray-600">{project.description}</p>
        </header>

        {project.images && (
          <div className="space-y-8">
            {project.images.map((image, index) => (
              <div key={index} className="rounded-lg overflow-hidden shadow-lg">
                <img
                  src={image}
                  alt={`${project.title} - Image ${index + 1}`}
                  className="w-full h-auto"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        )}

        <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: project.content }} />

        <div className="border-t border-gray-200 pt-8 mt-8">
          <div className="flex justify-between items-center text-sm text-gray-500">
            <time dateTime={project.createdAt}>
              {new Date(project.createdAt).toLocaleDateString()}
            </time>
            <Link
              to="/portfolio"
              className="text-indigo-600 hover:text-indigo-500"
            >
              Back to Portfolio
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
};

export default ProjectDetail;