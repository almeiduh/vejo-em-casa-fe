import React from 'react';

import criadores from '../../svg/howItWorks/criadores.svg';
import calendario from '../../svg/howItWorks/calendario.svg';
import notificacoes from '../../svg/howItWorks/notificacoes.svg';
import stream from '../../svg/howItWorks/stream.svg';
import apoiar from '../../svg/howItWorks/apoiar.svg';
import icons from '../../svg/icons-and-text.svg';

import styles from './howitworks.module.css';

const HowItWorks = () => {
  return (
    <div className={styles.bgContainer} id='comofunciona'>
      <div className={styles.titles}>
        <h3 className={styles.title}>Como é que funciona?</h3>
      </div>

      <div className={styles.smContainer}>
        <img alt="" className={styles.icons} src={icons} />
      </div>

      <div className={styles.smContainerMobile}>
        <div className={styles.wrapper}>
          <div className={styles.row}>
            <div className={styles.icon}>
              <img width="100" alt="" src={criadores} />
            </div>
            <div className={styles.text}>
              <span>Os criadores associam-se à Vejo Em Casa</span>
            </div>
          </div>
          <div className={styles.row}>
            <div className={styles.icon}>
              <img width="100" alt="" src={calendario} />
            </div>
            <div className={styles.text}>
              <span>Definimos o calendário dos eventos sugeridos pelos criadores</span>
            </div>
          </div>
          <div className={styles.row}>
            <div className={styles.icon}>
              <img width="100" alt="" src={notificacoes} />
            </div>
            <div className={styles.text}>
              <span>Tens uma agenda sempre atualizada onde podes subscrever os eventos que
          mais te interessam</span>
            </div>
          </div>
          <div className={styles.row}>
            <div className={styles.icon}>
              <img width="100" alt="" src={stream} />
            </div>
            <div className={styles.text}>
              <span>Show Time!</span>
            </div>
          </div>
          <div className={styles.row}>
            <div className={styles.icon}>
              <img width="100" alt="" src={apoiar} />
            </div>
            <div className={styles.text}>
              <span>Achaste o conteúdo incrível? Apoia o criador através de MBWAY,
          PAYPAL...</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
