import React from 'react';

import background from 'assets/images/landingPageHightlight@2x.png';
// import fbSvg from 'svg/veja_web_icons-11.svg';
import { ReactComponent as FbLogo } from 'svg/veja_web_icons-11.svg';
import { ReactComponent as InstagramLogo } from 'svg/veja_web_icons-14.svg';

import styles from './highlight.module.css';

const Highlight = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.overlay} />
        <img alt="" className={styles.backgroundImg} src={background} />
        <div className={styles.rightBtns}>
          <div className={styles.poeParBtn}>
            <div>Põe-te a par</div>
          </div>
          <div className={styles.social}>
            <div className={styles.fb}>
              <FbLogo className={styles.icon} color="white" height="22px" />
              <div>Facebook</div>
            </div>
            <div className={styles.instagram}>
              <InstagramLogo
                className={styles.icon}
                color="white"
                height="22px"
              />

              <div>Instagram</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Highlight;
