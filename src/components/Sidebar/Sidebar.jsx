import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  getAllCategoriesAsync,
  getCategories,
} from 'state/categories/categoriesSlice';

import noteSvg from '../../svg/veja_web_icons-03.svg';
import timerSvg from '../../svg/veja_web_icons-04.svg';

const Sidebar = () => {
  const dispatch = useDispatch();
  const categories = useSelector(getCategories);
  const hrStyle = {
    border: '0.5px solid #999999',
    opacity: '0.5',
  };

  useEffect(() => {
    dispatch(getAllCategoriesAsync());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      className="vec-items-center vec-w-1/3 vec-justify-between vec-p-12 vec-bg-gray vec-max-h-screen"
      style={{ backgroundColor: '#F5F5F5' }}
    >
      <Title name="Agenda" />
      <hr style={hrStyle} />
      <div className="vec-my-8">
        <div className="vec-flex vec-items-center">
          <SvgTimer />
          <SubTitle subTitle="Hoje" />
        </div>
        <div className="vec-flex vec-items-center">
          <SvgTimer />
          <SubTitle subTitle="Amanhã" />
        </div>
      </div>

      {/*
        <hr style={hrStyle} />
        
        <SearchInput />
         */}

      <Title name="Categorias" />
      <hr style={hrStyle} />
      <div className="vec-my-8">
        {(categories || []).map((cat) => (
          <div key={cat.id} className="vec-flex vec-items-center">
            <SvgNote />
            <SubTitle subTitle={cat.name} />
          </div>
        ))}
      </div>
    </div>
  );
};

const Title = ({ name }) => (
  <div className="vec-text-lg vec-my-4 vec-font-medium">{name}</div>
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

const SubTitle = ({ subTitle }) => (
  <p className="vec-font-light vec-text-sm">{subTitle}</p>
);

const SvgTimer = () => (
  <div className="vec-mx-2 vec-my-4">
    <img alt="" className="vec-w-4" src={timerSvg}/>
  </div>
);

const SvgNote = () => (
  <div className="vec-mx-2 vec-my-4">
    <img alt="" className="vec-w-4" src={noteSvg}/>
  </div>
);

export default Sidebar;
