import { createAsyncThunk } from '@reduxjs/toolkit';

const createRocketList = (obj) => {
  let result = {};

  obj.forEach((item) => {
    result = {
      ...result,
      [item.id]:
      {
        description: item.description,
        imagen: item.flickr_images[0],
        reserved: false,
        title: item.rocket_name,
      },
    };
  });

  return result;
};

export const getMissions = createAsyncThunk(
  'rockets/getMissions',
  async () => {
    // your code here
  },
);

export const getRockets = createAsyncThunk(
  'rockets/getRockets',
  async () => {
    const response = await fetch('https://api.spacexdata.com/v3/rockets', {
      method: 'GET',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    const data = await response.json();
    return createRocketList(data);
  },
);
