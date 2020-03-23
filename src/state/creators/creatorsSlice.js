/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { apiCreators } from 'api';

export const slice = createSlice({
  name: 'creators',
  initialState: {
    creators: [],
    isLoading: false,
    error: null,
    creatorDetail: {
      isLoading: false,
      detail: {},
      error: null,
    },
  },
  reducers: {
    getAllCreatorsSuccess: (state, { payload: creators }) => {
      state.creators = creators;
      state.isLoading = false;
      state.error = null;
    },
    getAllCreatorsError: (state, error) => {
      state.creators = [];
      state.isLoading = false;
      state.error = error;
    },
    getAllCreatorsStart: (state) => {
      state.isLoading = true;
    },

    getCreatorDetailSuccess: (state, { payload: event }) => {
      state.creatorDetail.detail = event;
      state.creatorDetail.isLoading = false;
      state.creatorDetail.error = null;
    },
    getCreatorDetailError: (state, error) => {
      state.creatorDetail.detail = {};
      state.creatorDetail.isLoading = false;
      state.creatorDetail.error = error;
    },
    getCreatorDetailStart: (state) => {
      state.creatorDetail.isLoading = true;
    },
  },
});

const {
  getCreatorDetailSuccess,
  getCreatorDetailError,
  getCreatorDetailStart,
} = slice.actions;

export const getCreatorDetailAsync = (creatorId) => async (dispatch) => {
  try {
    dispatch(getCreatorDetailStart());
    const events = await apiCreators.getCreator(creatorId);

    dispatch(getCreatorDetailSuccess(events));
  } catch (err) {
    dispatch(getCreatorDetailError(err.toString()));
  }
};

export const getCreatorDetail = (state) => state.creators.creatorDetail.detail;

export default slice.reducer;
