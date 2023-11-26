// FullScreenComponent.js

import React, { useEffect } from 'react';

const FullScreenComponent = () => {
  useEffect(() => {
    const makeFullScreen = () => {
      const element = document.documentElement;

      if (element.requestFullscreen) {
        element.requestFullscreen();
      } else if (element.mozRequestFullScreen) {
        element.mozRequestFullScreen();
      } else if (element.webkitRequestFullscreen) {
        element.webkitRequestFullscreen();
      } else if (element.msRequestFullscreen) {
        element.msRequestFullscreen();
      }
    };

    makeFullScreen(); // Trigger full-screen on component mount

    return () => {
      // Exit full-screen on component unmount
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }
    };
  }, []); // empty dependency array ensures that the effect runs only once

  return (
    <div>
      <h1>Your Full-Screen Website Content</h1>
      {/* Add your website content here */}
    </div>
  );
};

export default FullScreenComponent;
