import React from 'react';

import Header from 'pages/Landing/Header';
import Highlight from 'pages/Landing/Hightlight';

import Mission from '../../components/LandingPageComponents/Mission';
import ComoFunciona from './ComoFunciona';

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
