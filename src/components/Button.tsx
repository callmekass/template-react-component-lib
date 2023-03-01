import React from 'react';

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant: 'primary' | 'danger';
  fontWeight?: 'bold';
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant,
  fontWeight,
  ...props
}) => {
  const classNames = 'btn btn-${variant} btn-${fontWeight}';
  return (
    <button className={classNames} {...props}>
      {children}
    </button>
  );
};
