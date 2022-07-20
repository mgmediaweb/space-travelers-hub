import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';

import MissionsScreen from '../pages/Missions';

function wrapperPage() {
  return (<Provider store={store}><MissionsScreen /></Provider>);
}

test('Missiouns displayed', () => {
  render(<MissionsScreen />, { wrapper: wrapperPage });
  expect(document.querySelector('section')).toBeInTheDocument();
});
