import {
  type FormEvent,
  type InputHTMLAttributes,
  forwardRef,
  useCallback,
  useEffect,
  useState,
} from 'react';

import styles from './style.module.css';

// eslint-disable-next-line no-unused-vars
type fnType = (range: number) => void;

type SliderPropsType = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'min' | 'max' | 'value' | 'onInput' | 'onChange'
> & {
  value: number;
  min: number;
  max: number;
  onInput?: fnType;
  onChange?: fnType;
};

const MAXWIDTH = 100;
const DEFAULT_MAX = 0;

const Slider = forwardRef<HTMLInputElement, SliderPropsType>(
  (
    { className, onInput, onChange, value, max = DEFAULT_MAX, ...props },
    ref
  ) => {
    const [range, setRange] = useState(value);
    const _onInput = useCallback(
      (e: FormEvent<HTMLInputElement>) => {
        const _value = Number((e.target as HTMLInputElement).value);
        setRange(_value);

        onInput?.(_value);
        onChange?.(_value);
      },
      [onInput, onChange]
    );

    useEffect(() => {
      if (typeof value === 'number') {
        setRange(value);
      }
    }, [value]);

    return (
      <div className={`${styles.div} ${className}`}>
        <i
          style={{
            width: `${(range / max) * MAXWIDTH}%`,
          }}
          className={styles.track}
        />

        <input
          {...props}
          value={range}
          onInput={_onInput}
          className={styles.input}
          ref={ref}
          max={max}
          type="range"
        />
      </div>
    );
  }
);

export default Slider;
