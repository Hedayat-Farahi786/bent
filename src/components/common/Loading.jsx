// File: src/components/common/Loading.jsx
import React from 'react';

export const Loading = () => {
  return (
    <div className="flex items-center justify-center min-h-[400px]">
      <div className="relative w-20 h-20">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="w-20 h-20 rounded-full border-4 border-indigo-200 animate-ping"></div>
        </div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="w-20 h-20 rounded-full border-4 border-indigo-600 border-t-transparent animate-spin"></div>
        </div>
      </div>
    </div>
  );
};

export const LoadingSpinner = () => {
  return (
    <div className="inline-block w-6 h-6 border-2 border-indigo-600 border-t-transparent rounded-full animate-spin"></div>
  );
};