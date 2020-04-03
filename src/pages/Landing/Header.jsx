import React from 'react';

import logo from 'svg/veja_web_logo-02.svg';
import planeIcon from 'svg/veja_web_pag_landingpage_Icons-03.svg';

import styles from './header.module.css';

const Header = () => {
  const goToSection = section => {
    const divSection = document.getElementById(section) || {};
    const btnMenu = document.getElementById('menuBtn') || {};

    // This is because the header overlaps the sections
    if (divSection.offsetTop) window.scrollTo(0, divSection.offsetTop - 80);
    // To close after click
    if (btnMenu) btnMenu.checked = false;
  };

  return (
    <header className={styles.header}>
      <a href="/" className={styles.logo}><img alt="" width="148px" height="50px" src={logo} /></a>
      <input className={styles.menuBtn} type="checkbox" id="menuBtn" />
      <label className={styles.menuIcon} htmlFor="menuBtn"><span className={styles.navicon}></span></label>
      <ul className={styles.menu}>
        <li><button onClick={() => goToSection('sobrenos')}>Sobre nós</button></li>
        <li><button onClick={() => goToSection('comofunciona')}>Como funciona</button></li>
        <li><button onClick={() => goToSection('missao')}>Missão</button></li>
        <li><button onClick={() => goToSection('contactos')}>Contactos</button></li>
        <li><button onClick={() => goToSection('parcerias')}>Parcerias</button></li>
        <li>
          <img alt="" className={styles.planeIcon} src={planeIcon} />
          <button onClick={() => goToSection('poeteapar')}>Põe-te a par</button>
        </li>
      </ul>
    </header>
  );
};

export default Header;
