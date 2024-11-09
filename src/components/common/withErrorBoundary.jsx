// File: src/components/common/withErrorBoundary.jsx
import React from 'react';
import ErrorBoundary from './ErrorBoundary';

const withErrorBoundary = (WrappedComponent, fallbackUI) => {
  return function WithErrorBoundaryWrapper(props) {
    return (
      <ErrorBoundary fallback={fallbackUI}>
        <WrappedComponent {...props} />
      </ErrorBoundary>
    );
  };
};

export default withErrorBoundary;