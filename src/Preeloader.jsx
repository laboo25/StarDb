import React, { useEffect, useState } from 'react';
// import { css } from '@emotion/react';
// import { ClipLoader } from 'react-spinners';



const Preloader = () => {


  return (
    <div className="preloader flex justify-center items-center h-screen" style={{backgroundImage: 'url(https://raw.githubusercontent.com/laboo25/mag-imgs/main/imgs/LenaAnderson/mio―01.jpg)', backgroundSize: 'cover', backgroundPosition: 'center'}}>
      
            {/*  <ClipLoader color="red" loading={true} css={override} size={150} /> */}
    </div>
  );
};

export default Preloader;
