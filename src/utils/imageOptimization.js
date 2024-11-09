// File: src/utils/imageOptimization.js
export const getOptimizedImage = (url, options = {}) => {
    const { width = 800, quality = 75 } = options;
    if (!url) return '';
    
    // Check if it's already a transformed URL
    if (url.includes('?')) return url;
    
    // Add optimization parameters
    return `${url}?nf_resize=fit&w=${width}&q=${quality}`;
  };