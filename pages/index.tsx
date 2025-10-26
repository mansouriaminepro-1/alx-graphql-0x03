// pages/index.tsx (TEST VERSION)
import React from 'react';
import ErrorBoundary from '../components/ErrorBoundary';
import ErrorProneComponent from '../components/ErrorProneComponent';

export default function Home() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>ALX25 ErrorBoundary Test</h1>
      <ErrorBoundary>
        <ErrorProneComponent />
      </ErrorBoundary>
    </div>
  );
}