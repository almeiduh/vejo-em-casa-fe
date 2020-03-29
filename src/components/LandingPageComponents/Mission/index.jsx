import React from 'react';

import target from '../../../svg/target.svg';
import './index.css';

const Mission = () => {
  return (
    <div className="contentContainer">
      <div className="wrapper">
        <div className="image">
          <img alt="Mission target" src={target} />
        </div>
        <div className="titleBlock">
          <div className="title">Missão</div>
          <div>Apoia à a cultura nacional.</div>
        </div>
        <div className="text">
          Por causa da pandemia COVID-19, muitos criadores vivem atualmente uma
          situação de precariedade imprevista.
          <p className="paragraph">
            A Vejo em Casa surge com a missão de conectar criadores e público,
            dando acesso a conteúdo de qualidade e apoiando estes profissionais.
          </p>
          <p className="paragraph">
            Estamos todos no mesmo barco se podemos dar mais sentido à viagem,
            porque não fazê-lo? Faz parte deste movimento solidário de apoio à
            cultura nacional!
          </p>
        </div>
        <p className="moreInfo">Sabe mais sobre esta missão:</p>
      </div>
    </div>
  );
};

export default Mission;
