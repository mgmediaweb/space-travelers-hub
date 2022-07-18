import { configureStore } from '@reduxjs/toolkit';
// import logger from 'redux-logger';
import rockets from './rockets/rockets';

const reducer = {
  rockets,
};

const store = configureStore({
  reducer,
});

export default store;
