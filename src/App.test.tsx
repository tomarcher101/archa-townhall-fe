import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from './App';

const renderApp = () => render(<App />);

describe('App', () => {
  it('renders the App component', () => {
    renderApp();
  });

  it('should show title', () => {
    renderApp();
    screen.getByRole('heading', { name: 'Townhall' });
  });

  it('should show name selector popup', () => {
    renderApp();
    screen.getByPlaceholderText('Enter name');
  });
});
