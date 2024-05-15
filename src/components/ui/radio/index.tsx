import { type InputHTMLAttributes, forwardRef } from 'react';

import styles from './style.module.css';

type ButtonPropsType = InputHTMLAttributes<HTMLInputElement>;

const Radio = forwardRef<HTMLInputElement, ButtonPropsType>(
  ({ className, ...props }, ref) => (
    <input
      type="radio"
      className={`${styles.input} ${className}`}
      ref={ref}
      {...props}
    />
  )
);

export default Radio;
