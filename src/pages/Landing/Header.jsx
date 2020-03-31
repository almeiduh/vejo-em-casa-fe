import React from 'react';

import logo from 'svg/veja_web_logo-02.svg';
import { ReactComponent as PlaneIcon } from 'svg/veja_web_pag_landingpage_Icons-03.svg';

import styles from './header.module.css';

const Header = () => {
  return (
    <div className={styles.header}>
      <div>
        <img alt="" className={styles.logo} src={logo} />
      </div>
      <div className={styles.menus}>
        <div className={styles.menu}>
          <a href="#sobrenos">Sobre nós</a>
          </div>
        <div className={styles.menu}>
          <a href="#comofunciona">Como funciona</a>
        </div>
        <div className={styles.menu}>
          <a href="#missao">Missão</a>
        </div>
        <div className={styles.menu}>
          <a href="#contactos">Contactos</a>
        </div>
        <div className={styles.menu}>
          <a href="#parcerias">Parcerias</a>
        </div>
        <div className={styles.menu}>
          <PlaneIcon height="18px" width="28px" />
          <span className="vec-ml-3">
            <a href="#poeteapar">Põe-te a par</a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Header;
