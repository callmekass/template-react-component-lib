import React from 'react';

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant: 'primary' | 'danger' | 'secondary';
  fontWeight?: 'bold';
  pill?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant,
  fontWeight,
  pill,
  ...props
}) => {
  const classNames = `btn btn-${variant}${
    fontWeight ? ` btn-${fontWeight}` : ''
  }${pill ? ' pill' : ''}`;
  //`btn btn-${variant} btn-${fontWeight}${
  //  pill ? ' pill' : ''
  //}`;
  return (
    <button className={classNames} {...props}>
      {children}
    </button>
  );
};
