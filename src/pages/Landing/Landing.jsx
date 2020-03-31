import React from 'react';

import AboutUs from 'pages/Landing/AboutUs';
import Footer from 'pages/Landing/Footer';
import Header from 'pages/Landing/Header';
import Highlight from 'pages/Landing/Hightlight';
import Newsletter from 'pages/Landing/Newsletter';
import HowItWorks from 'pages/Landing/HowItWorks';
import Contacts from './Contacts';
import Mission from './Mission';

const LandingPage = () => {
  return (
    <>
      <Header />
      <Highlight />
      <AboutUs />
      <HowItWorks />
      <Mission />
      <Contacts />
      <Newsletter />
      <Footer />
    </>
  );
};

export default LandingPage;
