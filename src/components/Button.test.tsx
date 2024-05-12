import { describe, expect, it, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import Button from './Button';
import { ButtonProps } from './Button';

const renderButton = ({ children, variant, onClick, disabled }: ButtonProps) =>
  render(
    <Button variant={variant} onClick={onClick} disabled={disabled}>
      {children}
    </Button>,
  );

describe('Button', () => {
  it('renders', () => {
    renderButton({
      children: 'Confirm',
      variant: 'primary',
      onClick: () => {},
    });
  });

  it('displays the children node', () => {
    renderButton({
      children: 'Test123',
      variant: 'primary',
      onClick: () => {},
    });
    screen.getByRole('button', { name: 'Test123' });
  });

  it('does not run onClick fn when disabled', () => {
    const onClickFn = vi.fn();
    renderButton({
      children: 'Test123',
      variant: 'primary',
      disabled: true,
      onClick: onClickFn,
    });
    const button = screen.getByRole('button', { name: 'Test123' });
    fireEvent.click(button);
    expect(onClickFn).toHaveBeenCalledTimes(0);
  });

  it('runs onClick fn when not disabled', () => {
    const onClickFn = vi.fn();
    renderButton({
      children: 'Test123',
      variant: 'primary',
      disabled: false,
      onClick: onClickFn,
    });
    const button = screen.getByRole('button', { name: 'Test123' });
    fireEvent.click(button);
    expect(onClickFn).toHaveBeenCalledTimes(1);
  });
});
