import React from 'react';

import target from '../../svg/target.svg';
import styles from './mission.module.css';

const Mission = () => {
  return (
    <div className={styles.contentContainer} id='missao'>
      <div className={styles.wrapper}>
        <div className={styles.image}>
          <img alt="Mission target" src={target} />
        </div>
        <div className={styles.titleBlock}>
          <div className={styles.title}>A Nossa Missão</div>
        </div>
        <div className={styles.text}>
          <p className={styles.paragraph}>
            Queremos apoiar o sector da Cultura através do reforço de conteúdos online que conectem artistas e público, oferecendo conteúdos de qualidade que sirvam de plataforma de apoio a estes profissionais.
          </p>
          <p className={styles.paragraph}>
            Faz parte deste movimento solidário de apoio à Cultura nacional. 
            Estamos todos no mesmo barco, porque não dar mais sentido à viagem?
          </p>
        </div>
      </div>
    </div>
  );
};

export default Mission;
