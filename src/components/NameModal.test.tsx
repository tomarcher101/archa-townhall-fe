import { describe, expect, it, vi } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import NameModal from './NameModal';

const renderNameModal = (fn: () => void) =>
  render(<NameModal submitUsername={fn} />);

describe('NameModal', () => {
  it('renders', () => {
    renderNameModal(() => {});
  });

  it('should show title', () => {
    renderNameModal(() => {});
    screen.getByRole('heading', { name: 'Welcome to Townhall!' });
  });

  it('name input updates on change', () => {
    renderNameModal(() => {});
    const searchInput: HTMLInputElement =
      screen.getByPlaceholderText('Enter name');
    fireEvent.change(searchInput, { target: { value: 'Bob' } });
    expect(searchInput.value).toBe('Bob');
  });

  it('should call submitUsername on confirm click', async () => {
    const submitUsernameFn = vi.fn();
    renderNameModal(submitUsernameFn);
    const nameInput = screen.getByPlaceholderText('Enter name');
    fireEvent.change(nameInput, { target: { value: 'Bob' } });
    const confirmButton = screen.getByRole('button', { name: 'Confirm' });
    fireEvent.click(confirmButton);
    await waitFor(() => {
      expect(submitUsernameFn).toHaveBeenCalledTimes(1);
    });
  });

  it('should not allow submitUsername to run if input is empty', async () => {
    const submitUsernameFn = vi.fn();
    renderNameModal(submitUsernameFn);
    const nameInput = screen.getByPlaceholderText('Enter name');
    fireEvent.change(nameInput, { target: { value: '' } });
    const confirmButton = screen.getByRole('button', { name: 'Confirm' });
    fireEvent.click(confirmButton);
    await waitFor(() => {
      expect(submitUsernameFn).toHaveBeenCalledTimes(0);
    });
  });
});
