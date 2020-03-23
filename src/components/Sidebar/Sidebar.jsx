import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  getAllCategoriesAsync,
  getCategories,
} from 'state/categories/categoriesSlice';

const Sidebar = () => {
  const dispatch = useDispatch();
  const categories = useSelector(getCategories);

  useEffect(() => {
    dispatch(getAllCategoriesAsync());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <div>
        <b>categories:</b>
      </div>
      {(categories || []).map((cat) => (
        <div key={cat.id}>{cat.name}</div>
      ))}
    </div>
  );
};

export default Sidebar;
