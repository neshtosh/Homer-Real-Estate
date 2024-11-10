// LoadingScreen.jsx
import React from 'react';
import './LoadingScreen.css'; // optional, for custom styles

function LoadingScreen() {
  return (
    <div className="loading-screen">
      <div className="spinner"></div>
      <p>Loading...</p>
    </div>
  );
}

export default LoadingScreen;
