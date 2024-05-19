// src/ducks/snackbar_redux.js

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  snackbarOpen: false,
  snackbarType: 'success',
  snackbarMessage: '',
};

const snackbarSlice = createSlice({
  name: 'snackbar',
  initialState,
  reducers: {
    setSnackbar(state, action) {
      const { snackbarOpen, snackbarMessage, snackbarType } = action.payload;
      state.snackbarOpen = snackbarOpen;
      state.snackbarType = snackbarType || 'success';
      state.snackbarMessage = snackbarMessage || '';
    },
  },
});

export const { setSnackbar } = snackbarSlice.actions;
export default snackbarSlice.reducer;
