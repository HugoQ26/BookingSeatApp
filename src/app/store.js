import { configureStore } from '@reduxjs/toolkit';
import seatsReducer from '../features/counter/seatsSlice';

export const store = configureStore({
  reducer: {
    seatsStore: seatsReducer,
  },
});
