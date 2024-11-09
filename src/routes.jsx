// File: src/routes.jsx
import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Loading } from './components/common/Loading';

// Lazy load components
const HomePage = React.lazy(() => import('./pages/HomePage'));
const PortfolioPage = React.lazy(() => import('./pages/PortfolioPage'));
const ProjectDetail = React.lazy(() => import('./pages/ProjectDetail'));
const AboutPage = React.lazy(() => import('./pages/AboutPage'));
const ContactPage = React.lazy(() => import('./pages/ContactPage'));
const NotFound = React.lazy(() => import('./pages/NotFound'));

const AppRoutes = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/portfolio/:slug" element={<ProjectDetail />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;