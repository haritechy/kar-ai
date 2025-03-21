import { configureStore } from '@reduxjs/toolkit';
import contactReducer from './contactSlice';

const store = configureStore({
  reducer: {
    contact: contactReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export default store;
