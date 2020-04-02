import React from 'react';

// import icons from 'svg/veja_web_pag_landingpage_Icons-16.svg';

import criadores from '../../svg/howItWorks/criadores.svg';
import calendario from '../../svg/howItWorks/calendario.svg';
import notificacoes from '../../svg/howItWorks/notificacoes.svg';
import stream from '../../svg/howItWorks/stream.svg';
import apoiar from '../../svg/howItWorks/apoiar.svg';
import icons from 'svg/icons-and-text.svg';

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
      </div>

      <div className={styles.smContainerMobile}>
        <div className={styles.wrapper}>
          <img alt="" className={styles.icon} src={criadores} />
          <span className={styles.text}>Os criadores associam-se à Vejo Em Casa</span>
        </div>
        <div className={styles.wrapper}>
          <img alt="" className={styles.icon} src={calendario} />
          <span className={styles.text}>Definimos o calendário dos eventos sugeridos pelos criadores</span>
        </div>
        <div className={styles.wrapper}>
          <img alt="" className={styles.icon} src={notificacoes} />
          <div className={styles.text}>Tens uma agenda sempre atualizada onde podes subscrever os eventos que
          mais te interessam</div>
        </div>
        <div className={styles.wrapper}>
          <img alt="" className={styles.icon} src={stream} />
          <div className={styles.text}>Show Time!</div>
        </div>
        <div className={styles.wrapper}>
          <img alt="" className={styles.icon} src={apoiar} />
          <span className={styles.text}>Achaste o conteúdo incrível? Apoia o criador através de MBWAY,
          PAYPAL...</span>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
