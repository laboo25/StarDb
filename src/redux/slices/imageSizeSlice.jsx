// imageSlice.js
import { createSlice } from '@reduxjs/toolkit';

const imageSizeSlice = createSlice({
  name: 'image',
  initialState: {
    imagesProcessed: false,
  },
  reducers: {
    setImagesProcessed: (state, action) => {
      state.imagesProcessed = action.payload;
    },
  },
});

export const { setImagesProcessed } = imageSizeSlice.actions;

export const selectImagesProcessed = (state) => state.image.imagesProcessed;

export default imageSizeSlice.reducer;
