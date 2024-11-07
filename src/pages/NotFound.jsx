// File: src/pages/NotFound.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="text-center space-y-4">
      <h1 className="text-4xl font-bold text-gray-900">404 - Page Not Found</h1>
      <p className="text-gray-600">The page you're looking for doesn't exist.</p>
      <Link to="/" className="text-indigo-600 hover:text-indigo-500">
        Return to Home
      </Link>
    </div>
  );
};

export default NotFound;
