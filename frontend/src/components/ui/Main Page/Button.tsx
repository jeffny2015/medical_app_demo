import React, { type ButtonHTMLAttributes, type ReactNode } from 'react';

// Define the specific literal types for variant and size
type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'link';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: ReactNode;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  variant = 'primary', // Default variant
  size = 'md',         // Default size
  children,
  className = '',
  ...props
}) => {
  const baseStyle = 'font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-md transition-colors duration-150 ease-in-out';

  const variants: Record<ButtonVariant, string> = {
    primary: 'bg-blue-600 hover:bg-blue-700 text-white focus:ring-blue-500',
    secondary: 'bg-gray-200 hover:bg-gray-300 text-gray-800 focus:ring-gray-400',
    outline: 'border border-blue-600 text-blue-600 hover:bg-blue-50 focus:ring-blue-500',
    ghost: 'hover:bg-gray-100 text-gray-800 focus:ring-gray-400',
    link: 'text-blue-600 hover:text-blue-700 hover:underline focus:ring-blue-500',
  };

  const sizes: Record<ButtonSize, string> = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  };

  // Construct className string carefully
  const classNames = [
    baseStyle,
    variants[variant], // variant is guaranteed to be a ButtonVariant due to default
    sizes[size],       // size is guaranteed to be a ButtonSize due to default
    className
  ].filter(Boolean).join(' ');

  return (
    <button
      type="button"
      className={classNames}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button; 