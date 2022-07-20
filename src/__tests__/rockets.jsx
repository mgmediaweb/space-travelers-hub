import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';

import RocketsScreen from '../pages/Rockets';

function wrapperPage() {
  return (<Provider store={store}><RocketsScreen /></Provider>);
}

test('Rockets displayed', () => {
  render(<RocketsScreen />, { wrapper: wrapperPage });
  expect(document.querySelector('section')).toBeInTheDocument();
});
