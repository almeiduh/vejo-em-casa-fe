import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  getAllCategoriesAsync,
  getCategories,
} from 'state/categories/categoriesSlice';

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
      className="vec-items-center vec-w-full vec-justify-between vec-p-12 vec-bg-gray vec-max-h-screen"
      style={{ backgroundColor: '#F5F5F5' }}
    >
      
        <Title name="Agenda" />
        <hr style={hrStyle} />
        <div className="vec-my-8">
          <div className="vec-flex vec-items-center">
            <SvgRect />
            <SubTitle subTitle="Hoje" />
          </div>
          <div className="vec-flex vec-items-center">
            <SvgRect />
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
              <SvgRect />
              <SubTitle subTitle={cat.name} />
            </div>
          ))}
        </div>
      </div>
  );
};

const Title = ({ name }) => (
  <div
    className="vec-text-lg vec-my-4 vec-font-bold"
    style={{ fontFamily: 'Rubik, sans-serif' }}
  >
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

const SubTitle = ({ subTitle }) => <p className="vec-text-base">{subTitle}</p>;

const SvgRect = () => (
  <div className="vec-mx-2 vec-my-4">
    <svg height="10" width="10">
      <rect height="10" style={{ fill: 'rgb(0,0,0)' }} width="100" />
    </svg>
  </div>
);

export default Sidebar;
