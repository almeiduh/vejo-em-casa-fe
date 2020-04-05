import React from 'react';

import styles from './footer.module.css';

const Footer = () => {
  return (
    <div
      className={`vec-flex vec-justify-between vec-items-center vec-bg-black ${styles.footer}`}
    >
      <div>
        Copyright © 2020,{' '}
        <span>
          <a href="/"> Vejo em Casa.</a>
        </span>{' '}
        Projecto desenvolvido no âmbito do
        <span>
          <a href="https://tech4covid19.org/"> tech4covid19</a>
        </span>
      </div>
      <div>
        <span>
          <a href="/politica-privacidade" target="_blank" rel="noopener noreferrer">
            Politica de Privacidade
          </a>
        </span>
      </div>
    </div>
  );
};

export default Footer;
