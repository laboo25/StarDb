import React from 'react';
import { css } from '@emotion/react';
import { ClipLoader } from 'react-spinners';

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

const Preloader = () => {
  return (
    <div className="preloader flex justify-center items-center h-screen">
      <ClipLoader color="#36D7B7" loading={true} css={override} size={150} />
    </div>
  );
};

export default Preloader;
