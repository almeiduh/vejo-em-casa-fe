import React from 'react';

import Header from 'pages/Landing/Header';
import Highlight from 'pages/Landing/Hightlight';

import ComoFunciona from './ComoFunciona';
import Mission from './Mission';

const LandingPage = () => {
  return (
    <>
      <Header />
      <Highlight />
      <ComoFunciona />
      <Mission />
    </>
  );
};

export default LandingPage;
