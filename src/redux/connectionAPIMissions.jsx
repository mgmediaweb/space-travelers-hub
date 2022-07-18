import { createAsyncThunk } from '@reduxjs/toolkit';

const createMissionList = (obj) => {
  let result = {};

  obj.forEach((item) => {
    result = {
      ...result,
      [item.id]:
      {
        description: item.description,
        title: item.mission_name,
      },
    };
  });

  return result;
};

const getMissions = createAsyncThunk(
  'mission/getMissions',
  async () => {
    const response = await fetch('https://api.spacexdata.com/v3/missions', {
      method: 'GET',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    const data = await response.json();
    return createMissionList(data);
  },
);

export default getMissions;
