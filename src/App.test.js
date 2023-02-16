import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/load app to azure web app/i);
  expect(linkElement).toBeInTheDocument();
});
