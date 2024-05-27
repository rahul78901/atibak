import { type InputHTMLAttributes, forwardRef } from 'react';

import styles from './style.module.css';

type RadioPropsType = InputHTMLAttributes<HTMLInputElement> & {
  sm?: boolean;
};

const Radio = forwardRef<HTMLInputElement, RadioPropsType>(
  ({ sm = false, className, ...props }, ref) => (
    <input
      type="checkbox"
      className={`${styles.input} ${sm ? styles.sm : ''} ${className}`}
      ref={ref}
      {...props}
    />
  )
);

export default Radio;
