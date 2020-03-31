import React from 'react';

import target from '../../svg/target.svg';
import styles from './mission.module.css';

const Mission = () => {
  return (
    <div className={styles.contentContainer}>
      <div className={styles.wrapper}>
        <div className={styles.image}>
          <img alt="Mission target" src={target} />
        </div>
        <div className={styles.titleBlock}>
          <div className={styles.title}>Missão</div>
          <div className={styles.subTitle}>Apoia à a cultura nacional.</div>
        </div>
        <div className={styles.text}>
          Por causa da pandemia COVID-19, muitos criadores vivem atualmente uma
          situação de precariedade imprevista.
          <p className={styles.paragraph}>
            A Vejo em Casa surge com a missão de conectar criadores e público,
            dando acesso a conteúdo de qualidade e apoiando estes profissionais.
          </p>
          <p className={styles.paragraph}>
            Estamos todos no mesmo barco se podemos dar mais sentido à viagem,
            porque não fazê-lo? Faz parte deste movimento solidário de apoio à
            cultura nacional!
          </p>
        </div>
        <p className={styles.moreInfo}>Sabe mais sobre esta missão:</p>
      </div>
    </div>
  );
};

export default Mission;
