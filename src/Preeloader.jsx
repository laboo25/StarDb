import React from 'react';
import React, { useState, useEffect } from 'react';
// import { css } from '@emotion/react';
// import { ClipLoader } from 'react-spinners';

const MyComponent = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // empty dependency array ensures that the effect runs only once
// const override = css`
//   display: block;
//   margin: 0 auto;
//   border-color: red;
// `;

const Preloader = () => {
  return (
    <div className="preloader flex justify-center items-center h-screen">
      {isMobile ? (
        <div className='w-full h-screen' style={{
  backgroundImage: "url(https://raw.githubusercontent.com/laboo25/mag-imgs/main/index/sophiaLeone.jpg)",
  backgroundSize: "cover",
  backgroundPosition: "center"
}}></div>
      ) : (
        <div className='w-full h-screen' style={{
  backgroundImage: "url(https://raw.githubusercontent.com/laboo25/mag-imgs/main/index/toriBlack.jpg)",
  backgroundSize: "cover",
  backgroundPosition: "center"
}}></div>
      )}
{/*       <ClipLoader color="red" loading={true} css={override} size={150} /> */}
    </div>
  );
};

export default Preloader;
