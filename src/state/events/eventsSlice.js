/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { apiEvents } from 'api';

export const slice = createSlice({
  name: 'events',
  initialState: {
    events: [],
    isLoading: false,
    error: null,
    eventDetail: {
      isLoading: false,
      detail: {},
      error: null,
    },
  },
  reducers: {
    getAllEventsSuccess: (state, { payload: events }) => {
      state.events = events;
      state.isLoading = false;
      state.error = null;
    },
    getAllEventsError: (state, error) => {
      state.events = [];
      state.isLoading = false;
      state.error = error;
    },
    getAllEventsStart: (state) => {
      state.isLoading = true;
    },

    getEventDetailSuccess: (state, { payload: event }) => {
      state.eventDetail.detail = event;
      state.eventDetail.isLoading = false;
      state.eventDetail.error = null;
    },
    getEventDetailError: (state, error) => {
      state.eventDetail.detail = {};
      state.eventDetail.isLoading = false;
      state.eventDetail.error = error;
    },
    getEventDetailStart: (state) => {
      state.eventDetail.isLoading = true;
    },
  },
});

const {
  getAllEventsSuccess,
  getAllEventsError,
  getAllEventsStart,
  getEventDetailSuccess,
  getEventDetailError,
  getEventDetailStart,
} = slice.actions;

export const getAllEventsAsync = (categoryId, creatorId) => async (
  dispatch
) => {
  try {
    dispatch(getAllEventsStart());
    const events = await apiEvents.getAllEvents(categoryId, creatorId);

    dispatch(getAllEventsSuccess(events));
  } catch (err) {
    dispatch(getAllEventsError(err.toString()));
  }
};

export const getEventDetailAsync = (eventId) => async (dispatch) => {
  try {
    dispatch(getEventDetailStart());
    const eventDetail = await apiEvents.getEvent(eventId);

    dispatch(getEventDetailSuccess(eventDetail));
  } catch (err) {
    dispatch(getEventDetailError(err.toString()));
  }
};

export const getEventDetail = (state) => state.events.eventDetail.detail;
export const getEvents = (state) => state.events.events;

export default slice.reducer;
