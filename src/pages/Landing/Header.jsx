import React from 'react';

import logo from 'svg/veja_web_logo-02.svg';
import { ReactComponent as PlaneIcon } from 'svg/veja_web_pag_landingpage_Icons-03.svg';

import styles from './header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <a href="" className={styles.logo}><img alt="" width="148px" height="50px" src={logo} /></a>
      <input className={styles.menuBtn} type="checkbox" id="menuBtn" />
      <label className={styles.menuIcon} htmlFor="menuBtn"><span className={styles.navicon}></span></label>
      <ul className={styles.menu}>
        <li><a href="#work">Sobre nós</a></li>
        <li><a href="#about">Como funciona</a></li>
        <li><a href="#careers">Missão</a></li>
        <li><a href="#contact">Contactos</a></li>
        <li><a href="#contact">Parcerias</a></li>
        <li>
          <PlaneIcon height="18px" width="28px" />
          <a href="#poeteapar">Põe-te a par</a>
        </li>
      </ul>
    </header>
  );
};

export default Header;
