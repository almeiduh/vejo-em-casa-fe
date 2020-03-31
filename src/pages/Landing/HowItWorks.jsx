import React from 'react';

import icons from 'svg/veja_web_pag_landingpage_Icons-16.svg';

import styles from './howitworks.module.css';

const HowItWorks = () => {
  return (
    <div className={styles.bgContainer} id='comofunciona'>
      <div className={styles.titles}>
        <h3 className={styles.title}>Como é que funciona?</h3>
        <p className={styles.subtitle}>
          Assim pretendemos que seja o projecto.
        </p>
      </div>

      <div className={styles.smContainer}>
        <img alt="" className={styles.icons} src={icons} />

        <p className={styles.step1}>Os criadores associam-se à Vejo Em Casa</p>
        <p className={styles.step2}>
          Definimos o calendário dos eventos sugeridos pelos criadores
        </p>
        <p className={styles.step3}>
          Tens uma agenda sempre atualizada onde podes subscrever os eventos que
          mais te interessam
        </p>
        <p className={styles.step4}>Show Time!</p>
        <p className={styles.step5}>
          Achaste o conteúdo incrível? Apoia o criador através de MBWAY,
          PAYPAL...
        </p>
      </div>
    </div>
  );
};

export default HowItWorks;
