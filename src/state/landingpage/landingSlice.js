/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { apiSubscribe } from 'api';

export const slice = createSlice({
  name: 'landing',
  initialState: {
    isSubscribing: false,
    messageSuccess: '',
    messageError: '',
  },
  reducers: {
    subscribeSuccess: (state) => {
      return {
        ...state,
        isLoading: false,
        messageSuccess: 'Subscrição realizada com sucesso.',
      };
    },
    subscribeError: (state) => {
      return {
        ...state,
        isLoading: false,
        messageError:
          'Ocorreu um erro a subscrever. Tente novamente mais tarde.',
      };
    },
    subscribeErrorStart: (state) => {
      return {
        ...state,
        isLoading: true,
        messageError: '',
        messageSuccess: '',
      };
    },
  },
});

const { subscribeSuccess, subscribeError, subscribeErrorStart } = slice.actions;

export const subscribeUserAsync = (email) => async (dispatch) => {
  try {
    dispatch(subscribeErrorStart());
    const response = await apiSubscribe.subscribeUser(email);

    dispatch(subscribeSuccess(response));
  } catch (err) {
    dispatch(subscribeError(err.toString()));
  }
};

export const getMessage = (state) =>
  state.landing.messageSuccess || state.landing.messageError;

export default slice.reducer;
