import React from 'react';
import { render } from '@testing-library/react';
import Start from './components/Start/Start';

test('renders Start button text', () => {
  const { getByText } = render(<Start />);
  const linkElement = getByText(/Start/i);
  expect(linkElement).toBeInTheDocument();
});
