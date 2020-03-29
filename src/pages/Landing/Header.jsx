import React from 'react';

import logo from 'svg/veja_web_logo-02.svg';

import styles from './header.module.css';

const Header = () => {
  return (
    <div className={styles.header}>
      <div>
        <img alt="" className={styles.logo} src={logo} />
      </div>
      <div className={styles.menus}>
        <div className={styles.menu}>Sobre nós</div>
        <div className={styles.menu}>Como funciona</div>
        <div className={styles.menu}>Missão</div>
        <div className={styles.menu}>Contactos</div>
        <div className={styles.menu}>Parcerias</div>
        <div className="vec-cursor-pointer">Põe-te a par</div>
      </div>
    </div>
  );
};

export default Header;
