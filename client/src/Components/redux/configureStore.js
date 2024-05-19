import { configureStore } from '@reduxjs/toolkit';
import snackbarReducer from './ducks/snackbar_redux';

const store = configureStore({
  reducer: {
    snackbar: snackbarReducer,
  },
});

export default store;