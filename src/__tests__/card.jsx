import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';

import Card from '../components/card/Card';

const cardRender = () => {
  const cardProps = {
    id: 'C3PO',
    title: 'Rocket 1',
  };

  return (
    <Provider store={store}>
      <Card id={cardProps.id} title={cardProps.title} />
    </Provider>
  );
};

test('Card displayed', () => {
  render(<Card />, { wrapper: cardRender });
  expect(screen.getByText('Rocket 1')).toBeInTheDocument();
});
