import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '../redux/configureStore';

import ProfileScreen from '../pages/Profile';

function wrapperPage() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <ProfileScreen />
      </BrowserRouter>
    </Provider>
  );
}

test('Profile displayed', () => {
  render(<ProfileScreen />, { wrapper: wrapperPage });
  expect(document.querySelector('section')).toBeInTheDocument();
});
