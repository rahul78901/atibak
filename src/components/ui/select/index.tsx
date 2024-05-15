import {
  type PropsWithChildren,
  type SelectHTMLAttributes,
  forwardRef,
} from 'react';

import styles from './style.module.css';

type SelectPropsType = PropsWithChildren &
  SelectHTMLAttributes<HTMLSelectElement>;

const Select = forwardRef<HTMLSelectElement, SelectPropsType>(
  ({ children, className, ...props }, ref) => (
    <select
      className={`${styles.select} ${className}`}
      ref={ref}
      {...props}
    >
      {children}
    </select>
  )
);

export default Select;
