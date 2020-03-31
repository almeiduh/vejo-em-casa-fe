import React from 'react';

import events from '../../svg/events_contact_section.svg';
import facebook from '../../svg/facebook-contacts-section.svg';
import instagram from '../../svg/instagram-contacts-section.svg';
import legal from '../../svg/legal_contacts_section.svg';
import marketing from '../../svg/marketing_contacts_section.svg';
import info from '../../svg/moreInfo_contacts_section.svg';
import partners from '../../svg/partners_contacts_section.svg';
import styles from './contacts.module.css';

const Contacts = () => {
  return (
    <div className={styles.wrapper} id='contactos'>
      <div className={styles.contentContainer}>
        <div className={styles.titleBlock}>
          <div className={styles.title}>Contactos</div>
          <div className={styles.subTitle}>
            Fala connosco, somos todos ouvidos.
          </div>
        </div>
        <div className={styles.columnsContainer}>
          <div className={styles.leftColumn}>
            <div className={styles.imagesBlock}>
              <div className={styles.info}>
                <div className={styles.icon}>
                  <img alt="Mission target" src={events} />
                </div>
                <div>
                  <p className={styles.description}>Cria eventos connosco</p>
                  <p className={styles.email}>
                    <a href="mailto:curadoria@vejoemcasa.pt">
                      curadoria@vejoemcasa.pt
                    </a>
                  </p>
                </div>
              </div>
              <div className={styles.info}>
                <div className={styles.icon}>
                  <img alt="Mission target" src={partners} />
                </div>
                <div>
                  <p className={styles.description}>
                    Torna-te nosso parceiro ou patrocinador
                  </p>
                  <p className={styles.email}>
                    <a href="mailto:parcerias@vejoemcasa.pt">
                      parcerias@vejoemcasa.pt
                    </a>
                  </p>
                </div>
              </div>
              <div className={styles.info}>
                <div className={styles.icon}>
                  <img alt="Mission target" src={marketing} />
                </div>
                <div>
                  <p className={styles.description}>Questões de Marketing</p>
                  <p className={styles.email}>
                    <a href="mailto:marketing@vejoemcasa.pt">
                      marketing@vejoemcasa.pt
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.rightColumn}>
            <div className={styles.imagesBlock}>
              <div className={styles.info}>
                <div className={styles.icon}>
                  <img alt="Mission target" src={info} />
                </div>
                <div>
                  <p className={styles.description}>
                    Obtém mais informações sobre o projeto
                  </p>
                  <p className={styles.email}>
                    <a href="mailto:hello@vejoemcasa.pt">hello@vejoemcasa.pt</a>
                  </p>
                </div>
              </div>
              <div className={styles.info}>
                <div className={styles.icon}>
                  <img alt="Mission target" src={legal} />
                </div>
                <div>
                  <p className={styles.description}>Questões de Legais</p>
                  <p className={styles.email}>
                    <a href="mailto:legal@vejoemcasa.pt">legal@vejoemcasa.pt</a>
                  </p>
                </div>
              </div>
              <div className={styles.info}>
                <div className={styles.social}>
                  <a
                    href="https://www.facebook.com/vejoemcasa"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <img
                      alt="Mission target"
                      className={styles.svg}
                      src={facebook}
                    />
                  </a>
                  <a
                    href="https://www.instagram.com/vejo.em.casa/"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <img
                      alt="Mission target"
                      className={styles.svg}
                      src={instagram}
                    />
                  </a>
                  <div />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
