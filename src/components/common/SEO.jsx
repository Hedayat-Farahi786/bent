// File: src/components/common/SEO.jsx
import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ 
  title, 
  description, 
  image, 
  url,
  type = 'website'
}) => {
  const siteName = 'Your Portfolio Name';
  const defaultDescription = 'Digital Artist & Designer Portfolio';
  const defaultImage = '/images/default-og.jpg';  // Add a default OG image
  
  return (
    <Helmet>
      {/* Basic */}
      <title>{title ? `${title} | ${siteName}` : siteName}</title>
      <meta name="description" content={description || defaultDescription} />

      {/* OpenGraph */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title || siteName} />
      <meta property="og:description" content={description || defaultDescription} />
      <meta property="og:image" content={image || defaultImage} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content={siteName} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title || siteName} />
      <meta name="twitter:description" content={description || defaultDescription} />
      <meta name="twitter:image" content={image || defaultImage} />

      {/* Additional tags */}
      <link rel="canonical" href={url} />
    </Helmet>
  );
};

export default SEO;