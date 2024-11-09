// File: src/App.jsx
import React from 'react';
import Layout from './components/layout/Layout';
import AppRoutes from './routes';

function App() {
  return (
    <Layout>
      <AppRoutes />
    </Layout>
  );
}

export default App;