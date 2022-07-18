import { createSlice } from '@reduxjs/toolkit';
import getMissions from '../connectionAPIMissions';

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
      mission: {
        ...state.missions,
        [action.payload]: {
          ...state.mission[action.payload],
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
      rockets: action.payload,
    }),
    [getMissions.rejected]: (state) => ({
      ...state,
      status: 'failed',
    }),
  },
});

export const { updateMission } = missions.actions;
export default missions.reducer;
