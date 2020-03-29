import React from 'react';

import Footer from 'pages/Landing/Footer';
import Header from 'pages/Landing/Header';
import Highlight from 'pages/Landing/Hightlight';
import Newsletter from 'pages/Landing/Newsletter';

import ComoFunciona from './ComoFunciona';
import Mission from './Mission';

const LandingPage = () => {
  return (
    <>
      <Header />
      <Highlight />
      <ComoFunciona />
      <Mission />
      <Newsletter />
      <Footer />
    </>
  );
};

export default LandingPage;
