// store.js
import { configureStore } from '@reduxjs/toolkit';
import imageReducer from './slices/imageSizeSlice';

export const store = configureStore({
  reducer: {
    image: imageReducer,
    // Add other reducers here if needed
  },
});
