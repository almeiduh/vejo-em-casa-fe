import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  getAllCategoriesAsync,
  getCategories,
} from 'state/categories/categoriesSlice';

import facebookSvg from '../../svg/veja_web_icons-11.svg';
import twitterSvg from '../../svg/veja_web_icons-12.svg';
import linkedinSvg from '../../svg/veja_web_icons-13.svg';
import instagramSvg from '../../svg/veja_web_icons-14.svg';

const textColor = {
  color: '#666666',
};

const Footer = () => {
  const dispatch = useDispatch();
  const categories = useSelector(getCategories);
  const hrStyle = {
    border: '0.5px solid #999999',
    opacity: '0.5',
  };

  const style = {
      minWidth: "1280px"
  }

  useEffect(() => {
    dispatch(getAllCategoriesAsync());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="vec-bg-black vec-p-8 vec-whitespace-no-wrap" style={style}>
      <div className=" vec-bg-indigo vec-text-white vec-text-2xl  vec-shadow vec-flex">
        <div className="vec-flex-1 vec-text-center vec-m-2">
          Logo
          <div>
            <div className="vec-flex">
              <div className="vec-w-1/2">
                <SocialFacebook />
              </div>
              <div>
                <SocialInstagram />
              </div>
            </div>
            <div className="vec-flex">
              <div className="vec-w-1/2">
                <SocialTwitter />
              </div>
              <div>
                <SocialLinkedin />
              </div>
            </div>
          </div>
        </div>
        <div className="vec-flex-1 vec-text-left vec-m-3">
          <Title name="Vejo em Casa" />
          <hr style={hrStyle} />
          <div className="vec-flex vec-flex-wrap">
            <div className="vec-w-1/2">
              <SubTitle subTitle="Sobre Nós" />
            </div>
            <div className="vec-w-1/2">
              <SubTitle subTitle="Equipa" />
            </div>
            <div className="vec-w-1/2">
              <SubTitle subTitle="Manifesto" />
            </div>
            <div className="vec-w-1/2">
              <SubTitle subTitle="Objetivo" />
            </div>
            <div className="vec-w-1/2">
              <SubTitle subTitle="Contactos" />
            </div>
            <div className="vec-w-1/2">
              <SubTitle subTitle="Outro" />
            </div>
          </div>
        </div>
        <div className="vec-flex-1 vec-text-left vec-m-3">
          <Title name="Categorias" />
          <hr style={hrStyle} />
          <div className="vec-flex vec-flex-wrap">
            {(categories || []).map((cat) => (
              <div key={cat.id} className="vec-w-1/2">
                <SubTitle subTitle={cat.name} />
              </div>
            ))}
          </div>
        </div>
        <div className="vec-flex-1 vec-text-left vec-m-3">
          <Title name="Criadores" />
          <hr style={hrStyle} />
          <div className="vec-flex vec-flex-wrap">
            <div className="vec-w-1/2">
              <SubTitle subTitle="Inscrever-me" />
            </div>
            <div className="vec-w-1/2">
              <SubTitle subTitle="Enviar Conteudo" />
            </div>
            <div className="vec-w-1/2">
              <SubTitle subTitle="Reportar Abuso" />
            </div>
            <div className="vec-w-1/2">
              <SubTitle subTitle="Contactos" />
            </div>
          </div>
        </div>
      </div>
      <hr className="vec-m-2 vec-mt-6" style={hrStyle} />
      <div className="vec-pt-2 vec-pl-2 vec-text-sm" style={textColor}>
        <span>
          Copyright © 2020, <span className="vec-font-bold">Vejo em Casa</span>. Projecto desenvolvido no
          âmbito do{' '}
        </span>
        <a className="vec-font-bold vec-underline" href="https://tech4covid19.org/">tech4covid19</a>
      </div>
    </div>
  );
};

const Title = ({ name }) => (
  <div className="vec-text-lg vec-mb-3 vec-text-white vec-font-medium vec-text-white">
    {name}
  </div>
);

/* const SearchInput = () => (
  <div className="vec-my-8 vec-w-full vec-block">
    <input
      className="vec-border vec-border-solid vec-border-gray-400 vec-rounded-full vec-py-2 vec-px-8 vec-my-3 vec-outline-none"
      placeholder="Pesquisa..."
      style={{ width: '100%' }}
    />
  </div>
); */

const SubTitle = ({ subTitle, link }) => (
  <a className="vec-font-light vec-text-base" href={link} style={textColor}>
    {subTitle}
  </a>
);

const SocialFacebook = () => (
  <div className="vec-mx-2 vec-my-4 vec-flex">
    <img alt="" className="vec-w-4 vec-mx-2" src={facebookSvg} />
    <SubTitle
      link="https://www.facebook.com/tech4COVID19/"
      subTitle="Facebook"
    />
  </div>
);

const SocialInstagram = () => (
  <div className="vec-mx-2 vec-my-4 vec-flex">
    <img alt="" className="vec-w-4 vec-mx-2" src={instagramSvg} />
    <SubTitle link="https://instagram.com/tech4covid19" subTitle="Instagram" />
  </div>
);

const SocialTwitter = () => (
  <div className="vec-mx-2 vec-my-4 vec-flex">
    <img alt="" className="vec-w-4 vec-mx-2" src={twitterSvg} />
    <SubTitle link="https://twitter.com/tech4covid19" subTitle="Twitter" />
  </div>
);

const SocialLinkedin = () => (
  <div className="vec-mx-2 vec-my-4 vec-flex">
    <img alt="" className="vec-w-4 vec-mx-2" src={linkedinSvg} />
    <SubTitle
      link="https://www.linkedin.com/company/movimento-tech4covid19/"
      subTitle="Linkedin"
    />
  </div>
);

export default Footer;
