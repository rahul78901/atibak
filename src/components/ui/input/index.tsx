import { type InputHTMLAttributes, forwardRef } from 'react';

import styles from './style.module.css';

type InputPropsType = InputHTMLAttributes<HTMLInputElement>;

const Input = forwardRef<HTMLInputElement, InputPropsType>(
  ({ className, ...props }, ref) => (
    <input
      className={`${styles.input} ${className}`}
      ref={ref}
      {...props}
    />
  )
);

export default Input;
