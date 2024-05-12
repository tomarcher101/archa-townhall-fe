import { cn } from '../utils';

interface ButtonProps {
  variant: 'primary' | 'secondary' | 'danger';
  onClick: () => void;
  children: React.ReactNode;
  disabled?: boolean;
}

const Button = ({ variant, onClick, children, disabled }: ButtonProps) => {
  return (
    <button
      className={cn(
        'rounded-md px-4 py-1',
        variant === 'primary' &&
          'bg-blue-600 text-white hover:bg-blue-700 hover:shadow-md',
        variant === 'secondary' &&
          'bg-gray-200 text-gray-800 hover:bg-gray-300 hover:shadow-md',
        variant === 'danger' &&
          'bg-red-600 text-white hover:bg-red-700 hover:shadow-md',
        disabled && 'cursor-not-allowed opacity-50',
      )}
      onClick={() => {
        if (disabled) {
          return;
        }
        onClick();
      }}
    >
      {children}
    </button>
  );
};

export default Button;
