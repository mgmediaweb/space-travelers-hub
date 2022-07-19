import { configureStore } from '@reduxjs/toolkit';
import missions from './missions/missions';
import rockets from './rockets/rockets';

const reducer = {
  missions,
  rockets,
};

const store = configureStore({
  reducer,
});

export default store;
