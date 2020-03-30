import React from 'react';

import Footer from 'pages/Landing/Footer';
import Header from 'pages/Landing/Header';
import Highlight from 'pages/Landing/Hightlight';
import Newsletter from 'pages/Landing/Newsletter';

import HowItWorks from 'components/LandingPageComponents/HowItWorks/HowItWorks';

import Contacts from './Contacts';
import Mission from './Mission';

const LandingPage = () => {
  return (
    <>
      <Header />
      <Highlight />
      <HowItWorks />
      <Mission />
      <Contacts />
      <Newsletter />
      <Footer />
    </>
  );
};

export default LandingPage;
