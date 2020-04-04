/* eslint-disable jsx-a11y/media-has-caption */
import React from 'react';

import fallBackVideoImg from 'assets/images/Vejo_em_Casa_header_fallback.jpg';
import videoMp4 from 'assets/videos/Vejo_em_Casa_video_header.mp4';
import videoWebm from 'assets/videos/Vejo_em_Casa_video_header.webm';
// import fbSvg from 'svg/veja_web_icons-11.svg';
import { ReactComponent as FbLogo } from 'svg/veja_web_icons-11.svg';
import { ReactComponent as InstagramLogo } from 'svg/veja_web_icons-14.svg';
import vejaEmCasa from 'svg/veja_web_pag_landingpage_Icons-02.svg';
import planeIcon from 'svg/veja_web_pag_landingpage_Icons-03.svg';

import styles from './highlight.module.css';

const Highlight = () => {
  return (
    <>
      <div className={styles.container}>
        <img alt="Logo" className={styles.logo} src={vejaEmCasa} />
        <video autoPlay loop muted className={styles.backgroundImg}>
          <source
            src={videoMp4}
            type='video/mp4; codecs="avc1.42E0 1E, mp4a.40.2"'
          />
          <source src={videoWebm} type='video/webm; codecs="vp8, vorbis"' />
          <img
            alt="video"
            src={fallBackVideoImg}
            title="Your browser does not support the <video> tag"
          />
        </video>
        <div className={styles.buttonsContainer}>
          <div className={styles.socialButtons}>
            <div className={styles.ctaBlock}>
              <a className={styles.button} href="#poeteapar">
                <img alt="" className={styles.planeIcon} src={planeIcon} />
                <span className="vec-ml-4">Põe-te a par</span>
              </a>
            </div>
            <div className={styles.social}>
              <div className={styles.fb}>
                <FbLogo className={styles.icon} />
                <div>
                  <a href="https://www.facebook.com/vejoemcasa/">Facebook</a>
                </div>
              </div>
              <div className={styles.instagram}>
                <InstagramLogo className={styles.icon} />
                <div>
                  <a href="https://www.instagram.com/vejo.em.casa/">
                    Instagram
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.buttonsContainerMobile}>
          <div className={styles.ctaBlock}>
            <a className={styles.button} href="#poeteapar">
              <img alt="" className={styles.planeIcon} src={planeIcon} />
              <span>Põe-te a par</span>
            </a>
          </div>
          <div className="vec-flex">
            <a href="https://www.facebook.com/vejoemcasa/">
              <FbLogo className={styles.icon} />
            </a>
            <a href="https://www.instagram.com/vejo.em.casa/">
              <InstagramLogo className={styles.icon} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Highlight;
