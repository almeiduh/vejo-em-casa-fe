import { configureStore } from '@reduxjs/toolkit';
import categoriesReducer from 'state/categories/categoriesSlice';
import creatorsReducer from 'state/creators/creatorsSlice';
import eventsReducer from 'state/events/eventsSlice';

export default configureStore({
  reducer: {
    categories: categoriesReducer,
    events: eventsReducer,
    creators: creatorsReducer,
  },
});
