import { configureStore } from '@reduxjs/toolkit';
// import logger from 'redux-logger';
import rockets from './rockets/rockets';
import missions from './missions/missions';

const reducer = {
  rockets,
  missions,
};

const store = configureStore({
  reducer,
});

export default store;
