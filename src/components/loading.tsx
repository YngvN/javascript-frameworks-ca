// LoadingScreen.jsx

import React from 'react';
import './LoadingScreen.css'; // Assuming you want to style it

const LoadingScreen = () => {
  return (
    <div className="loading-screen">
      <div className="loading-spinner">
        {/* You can use a CSS animation or an image/gif for the spinner */}
        Loading...
      </div>
    </div>
  );
};

export default LoadingScreen;
