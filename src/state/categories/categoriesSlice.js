/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { apiCategories } from 'api';

export const slice = createSlice({
  name: 'categories',
  initialState: {
    categories: [],
    isLoading: false,
    error: null,
  },
  reducers: {
    getAllCategoriesSuccess: (state, action) => {
      state.categories = action.payload;
      state.isLoading = false;
      state.error = null;
    },
    getAllCategoriesError: (state, error) => {
      state.categories = [];
      state.isLoading = false;
      state.error = error;
    },
    getAllCategoriesStart: (state) => {
      state.isLoading = true;
    },
  },
});

const {
  getAllCategoriesSuccess,
  getAllCategoriesError,
  getAllCategoriesStart,
} = slice.actions;

export const getAllCategoriesAsync = () => async (dispatch) => {
  try {
    dispatch(getAllCategoriesStart());
    const categories = await apiCategories.getAllCategories();

    dispatch(getAllCategoriesSuccess(categories));
  } catch (err) {
    dispatch(getAllCategoriesError(err.toString()));
  }
};

export const getCategories = (state) => state.categories.categories;

export default slice.reducer;
