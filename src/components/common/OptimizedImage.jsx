// File: src/components/common/OptimizedImage.jsx
import React, { useState } from 'react';
import { getOptimizedImage } from '../../utils/imageOptimization';

const OptimizedImage = ({ 
  src, 
  alt, 
  className = '', 
  width = 800,
  quality = 75,
  placeholder = 'blur' 
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const optimizedSrc = getOptimizedImage(src, { width, quality });

  return (
    <div className={`relative ${className}`}>
      {isLoading && placeholder === 'blur' && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse" />
      )}
      <img
        src={optimizedSrc}
        alt={alt}
        className={`${className} transition-opacity duration-300 ${
          isLoading ? 'opacity-0' : 'opacity-100'
        }`}
        onLoad={() => setIsLoading(false)}
        loading="lazy"
      />
    </div>
  );
};

export default OptimizedImage;