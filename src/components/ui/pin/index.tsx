import { type InputHTMLAttributes, forwardRef } from 'react';

import Input from '../input';

import styles from './style.module.css';

type PinInputPropsType = InputHTMLAttributes<HTMLInputElement>;

const PinInput = forwardRef<HTMLInputElement, PinInputPropsType>(
  ({ className, ...props }, ref) => (
    <Input
      className={`${styles['pin-input']} ${className}`}
      ref={ref}
      maxLength={1}
      {...props}
    />
  )
);

export default PinInput;
