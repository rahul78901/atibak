import { type PropsWithChildren, forwardRef } from 'react';

import styles from './style.module.css';

type ButtonPropsType = PropsWithChildren & {
  className?: string;
  variant: 'outline';
};

const Button = forwardRef<HTMLButtonElement, ButtonPropsType>(
  ({ className, children, variant }, ref) => (
    <button
      className={`${styles.button} ${variant === 'outline' && styles.outline} ${className}`}
      ref={ref}
    >
      {children}
    </button>
  )
);

export default Button;
