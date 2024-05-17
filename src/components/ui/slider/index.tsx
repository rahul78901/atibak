import {
  type FormEvent,
  type InputHTMLAttributes,
  forwardRef,
  useCallback,
  useState,
} from 'react';

import styles from './style.module.css';

const DEFAULTVALUE = 0;

// eslint-disable-next-line no-unused-vars
type fnType = (range: number) => void;

type SliderPropsType = InputHTMLAttributes<HTMLInputElement> & {
  defaultValue?: number;
  onInput?: fnType;
  onChange?: fnType;
};

const Slider = forwardRef<HTMLInputElement, SliderPropsType>(
  (
    { className, onInput, onChange, defaultValue = DEFAULTVALUE, ...props },
    ref
  ) => {
    const [range, setRange] = useState(defaultValue);

    const _onInput = useCallback(
      (e: FormEvent<HTMLInputElement>) => {
        const _value = Number((e.target as HTMLInputElement).value);
        setRange(_value);

        onInput?.(_value);
        onChange?.(_value);
      },
      [onInput, onChange]
    );

    return (
      <div className={`${styles.div} ${className}`}>
        <i
          style={{
            width: `${range}%`,
          }}
          className={styles.track}
        />
        <input
          {...props}
          value={range}
          onInput={_onInput}
          className={styles.input}
          ref={ref}
          type="range"
        />
      </div>
    );
  }
);

export default Slider;
