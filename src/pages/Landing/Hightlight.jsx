/* eslint-disable jsx-a11y/media-has-caption */
import React from 'react';

import fallBackVideoImg from 'assets/images/Vejo_em_Casa_header_fallback.jpg';
import videoMp4 from 'assets/videos/Vejo_em_Casa_video_header.mp4';
import videoWebm from 'assets/videos/Vejo_em_Casa_video_header.webm';
// import fbSvg from 'svg/veja_web_icons-11.svg';
import { ReactComponent as FbLogo } from 'svg/veja_web_icons-11.svg';
import { ReactComponent as InstagramLogo } from 'svg/veja_web_icons-14.svg';
import { ReactComponent as PlaneIcon } from 'svg/veja_web_pag_landingpage_Icons-03.svg';

import styles from './highlight.module.css';

const Highlight = () => {
  return (
    <>
      <div className={styles.container}>
        <video autoPlay loop className={styles.backgroundImg}>
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
        <div className={styles.rightBtns}>
          <div className={styles.poeParBtn}>
            <PlaneIcon height="26px" width="40px" />
            <div className="vec-ml-4">Põe-te a par</div>
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
