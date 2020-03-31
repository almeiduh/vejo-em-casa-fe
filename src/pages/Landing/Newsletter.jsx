import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { subscribeUserAsync, getMessage } from 'state/landingpage/landingSlice';
import { ReactComponent as Focus } from 'svg/veja_web_pag_landingpage_Icons-26.svg';
import { ReactComponent as Mail } from 'svg/veja_web_pag_landingpage-02.svg';

import styles from './newsletter.module.css';

const Newsletter = () => {
  const dispatch = useDispatch();
  const message = useSelector(getMessage);

  const [email, setEmail] = useState('');
  const [isSubscribeEnabled, setIsSubscribeEnabled] = useState(true);
  const handleClick = (event) => setIsSubscribeEnabled(event.target.checked);

  const handleSubscribeClick = () => {
    if (email.length === 0) return;
    dispatch(subscribeUserAsync(email));
  };

  return (
    <>
      <div className={styles.container} id="poeteapar">
        <div className={styles.mailIcon}>
          <Mail />
        </div>
        <div>
          <div className={styles.title}>Fica a par de tudo!</div>
          <div className={styles.subtitle}>Subscreve a nossa newsletter</div>
        </div>
        <div className="vec-flex vec-justify-between vec-mt-10">
          <div className="vec-w-1/2 vec-mr-2">
            <div className={styles.text}>
              Esta é a melhor altura para descobrir coisas novas, aprender e
              evoluir. É também a melhor altura para ajudar.
            </div>
            <div className={`${styles.text} vec-mt-8`}>
              Fica a par de tudo! Agenda, novas confirmações e eventos. Deixa o
              teu email para ficarmos mais próximos!
            </div>
          </div>
          <div className="vec-w-1/2">
            <div className={styles.subscribe}>
              <input
                placeholder="Insere o teu email..."
                type="email"
                value={email}
                onChange={({ target: { value } }) => setEmail(value)}
              />
              <button
                disabled={!isSubscribeEnabled}
                type="button"
                onClick={handleSubscribeClick}
              >
                Subscrever
              </button>
            </div>
            {message.length > 0 && (
              <div className={styles.message}>{message}</div>
            )}
            <div
              className={`vec-flex vec-items-center ${styles.checkboxContainer}`}
            >
              <input
                checked={isSubscribeEnabled}
                type="checkbox"
                onChange={handleClick}
              />
              <div className={styles.checkboxLabel}>
                LI E ACEITO A POLÍTICA DE PRIVACIDADE.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.focusbc} id="parcerias">
        <div className={styles.iconContainer}>
          <Focus height="auto" width="auto" />
        </div>
      </div>
    </>
  );
};

export default Newsletter;
