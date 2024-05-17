import {
  type ButtonHTMLAttributes,
  type PropsWithChildren,
  forwardRef,
} from 'react';

import styles from './style.module.css';

type ButtonPropsType = PropsWithChildren &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    className?: string;
    variant?: 'outline' | 'icon';
    title?: string;
  };

const Button = forwardRef<HTMLButtonElement, ButtonPropsType>(
  ({ className, title, children, variant = 'outline', ...props }, ref) => (
    <button
      className={`${styles.button} ${variant === 'outline' ? styles.outline : variant === 'icon' ? styles.icon : ''} ${className}`}
      title={title}
      ref={ref}
      {...props}
    >
      {children}
    </button>
  )
);

export default Button;
