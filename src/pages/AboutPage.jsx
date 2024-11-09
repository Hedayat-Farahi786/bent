// File: src/pages/AboutPage.jsx
import React from 'react';
import { usePageData } from '../hooks/useCmsData';
import { Loading } from '../components/common/Loading';

const AboutPage = () => {
  const { data: aboutData, loading, error } = usePageData('about');

  if (loading) {
    return (
      <div className="h-[calc(100vh-4rem)] flex items-center justify-center">
        <Loading />
      </div>
    );
  }

  // Use data or fallback
  const content = aboutData || {
    name: 'Your Name',
    title: 'Digital Artist',
    bio: 'Welcome to my portfolio.',
    socialLinks: []
  };

  return (
    <div className="h-[calc(100vh-4rem)] flex items-center bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Image or Decorative Element */}
          <div className="relative">
            <div className="aspect-square overflow-hidden rounded-2xl shadow-xl">
              {content.image ? (
                <img
                  src={content.image}
                  alt={content.name}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-indigo-100 to-purple-100" />
              )}
            </div>
            {/* Decorative Elements */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-indigo-100 rounded-full -z-10" />
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-purple-100 rounded-full -z-10" />
          </div>

          {/* Right Side - Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold text-gray-900">
                {content.name}
              </h1>
              <p className="text-xl text-indigo-600">
                {content.title}
              </p>
            </div>

            <div className="prose max-w-none">
              <p className="text-gray-600 text-lg leading-relaxed">
                {content.bio}
              </p>
            </div>

            {content.socialLinks && content.socialLinks.length > 0 && (
              <div className="flex flex-wrap gap-4">
                {content.socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow duration-300 text-gray-700 hover:text-indigo-600"
                  >
                    {link.platform}
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Debug Panel - Only shown in development */}
        {process.env.NODE_ENV === 'development' && (
          <div className="mt-8 p-4 bg-gray-100 rounded-lg">
            <details>
              <summary className="cursor-pointer text-sm font-medium text-gray-700">
                Debug Information
              </summary>
              <pre className="mt-2 text-xs overflow-auto">
                {JSON.stringify({ loading, error, data: aboutData }, null, 2)}
              </pre>
            </details>
          </div>
        )}
      </div>
    </div>
  );
};

export default AboutPage;