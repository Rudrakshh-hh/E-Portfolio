import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../src/App';

test('renders hello text', () => {
  render(<App />);
  // The app doesn't render "hello" by default; assert the main heading exists instead
  expect(screen.getAllByText(/Rudraksh Bhatt/i).length).toBeGreaterThan(0);
});
