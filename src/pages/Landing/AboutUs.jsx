import React from 'react';

import styles from './aboutus.module.css';

import logo from 'svg/veja_web_pag_landingpage_Icons-15.svg';
import icon06 from 'svg/veja_web_pag_landingpage_Icons-06.svg';
import icon07 from 'svg/veja_web_pag_landingpage_Icons-07.svg';
import icon08 from 'svg/veja_web_pag_landingpage_Icons-08.svg';
import icon09 from 'svg/veja_web_pag_landingpage_Icons-09.svg';
import icon10 from 'svg/veja_web_pag_landingpage_Icons-10.svg';
import icon11 from 'svg/veja_web_pag_landingpage_Icons-11.svg';
import icon12 from 'svg/veja_web_pag_landingpage_Icons-12.svg';
import icon13 from 'svg/veja_web_pag_landingpage_Icons-13.svg';
import icon14 from 'svg/veja_web_pag_landingpage_Icons-14.svg';

const AboutUs = () => {
    return (
        <div className={styles.bgContainer}>

            <div className={styles.mdContainer}>
                <div className={styles.titles}>
                    <h3 className={styles.title}>Sobre nós</h3>
                    <p className={styles.subtitle}>Sabe mais sobre o nosso projecto.</p>
                </div>
                <p className={styles.text}>
                    Vejo em Casa é uma plataforma sem fins lucrativos de conteúdos diversificados em formato live streaming, de cariz solidário e desenvolvida por uma equipa de voluntários. Este projeto integra o movimento tech4COVID19, cujo propósito é a criação de soluções que atenuem as consequências desta pandemia.
                    <br /><br />
                    Sentimos que este é o momento ideal para dar a volta por cima, para conhecer talentos e conteúdos do melhor que há, para partilhar e, acima de tudo, para ajudar. Por isso, todos os nossos eventos oferecem a oportunidade ao público de apoiar diretamente não só os criadores, mas também o movimento Tech4COVID19 e as suas iniciativas.
                </p>
                <div className={styles.powered}>Powered by:</div>
                <img src={logo} alt='Logotipo do #tech4COVID19' className={styles.logo} />
            </div>

            <div className={styles.smContainer}>
                <div className={styles.icons}>
                    <div>
                        <img 
                            src={icon06} 
                            alt='icon que simboliza tecnologia' 
                            className={styles.icon}
                            style={{width: '78px'}}
                        />
                        <p style={{color: '#FD641E'}}>TECNOLOGIA</p>
                    </div>
                    <div>
                        <img 
                            src={icon07} 
                            alt='icon que simboliza música' 
                            className={styles.icon}
                            style={{width: '78px'}}
                        />
                        <p style={{color: '#EB2907'}}>MÚSICA</p>
                    </div>
                    <div>
                        <img 
                            src={icon08} 
                            alt='icon que simboliza arte e design' 
                            className={styles.icon}
                            style={{width: '67px'}}
                        />
                        <p style={{color: '#55BFD8'}}>ARTE E DESIGN</p>
                    </div>
                    <div>
                        <img 
                            src={icon09} 
                            alt='icon que simboliza ciência' 
                            className={styles.icon}
                            style={{width: '57px'}}
                        />
                        <p style={{color: '#2C5AA6'}}>CIÊNCIA</p>
                    </div>
                    <div>
                        <img 
                            src={icon10} 
                            alt='icon que simboliza desporto' 
                            className={styles.icon}
                            style={{width: '56px'}}
                        />
                        <p style={{color: '#50B9A8'}}>DESPORTO</p>
                    </div>
                    <div>
                        <img 
                            src={icon11} 
                            alt='icon que simboliza alimentação' 
                            className={styles.icon}
                            style={{width: '67px'}}
                        />
                        <p style={{color: '#65B82D'}}>ALIMENTAÇÃO</p>
                    </div>
                    <div>
                        <img 
                            src={icon14} 
                            alt='icon que simboliza cinema' 
                            className={styles.icon}
                            style={{width: '64px'}}
                        />
                        <p style={{color: '#868F8E'}}>CINEMA</p>
                    </div>
                    <div>
                        <img 
                            src={icon13} 
                            alt='icon que simboliza finanças' 
                            className={styles.icon}
                            style={{width: '63px'}}
                        />
                        <p style={{color: '#FBA820'}}>FINANÇAS</p>
                    </div>
                    <div>
                        <img 
                            src={icon12} 
                            alt='icon que simboliza moda' 
                            className={styles.icon}
                            style={{width: '89px'}}
                        />
                        <p style={{color: '#FC261D'}}>MODA</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default AboutUs;