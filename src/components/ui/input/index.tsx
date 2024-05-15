import { type InputHTMLAttributes, forwardRef } from 'react';

import styles from './style.module.css';

type ButtonPropsType = InputHTMLAttributes<HTMLInputElement>;

const Input = forwardRef<HTMLInputElement, ButtonPropsType>(
  ({ className, ...props }, ref) => (
    <input
      className={`${styles.input} ${className}`}
      ref={ref}
      {...props}
    />
  )
);

export default Input;
