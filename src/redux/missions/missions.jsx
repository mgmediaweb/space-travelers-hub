import { createSlice } from '@reduxjs/toolkit';
import { getMissions } from '../connectionAPI';

const initialState = {
  missions: [],
  status: null,
};

const missions = createSlice({
  name: 'missions',
  initialState,
  reducers: {
    updateMission: (state, action) => ({
      ...state,
      missions: {
        ...state.missions,
        [action.payload]: {
          ...state.missions[action.payload],
          reserved: !state.missions[action.payload].reserved,
        },
      },
    }),
  },
  extraReducers: {
    [getMissions.pending]: (state) => ({
      ...state,
      status: 'loading',
    }),
    [getMissions.fulfilled]: (state, action) => ({
      ...state,
      status: 'success',
      missions: action.payload,
    }),
    [getMissions.rejected]: (state) => ({
      ...state,
      status: 'failed',
    }),
  },
});

export const { updateMission } = missions.actions;
export default missions.reducer;
