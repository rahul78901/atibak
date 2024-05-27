import { type FC, useCallback, useMemo, useState } from 'react';

import Button from '@/ui/button';
import Radio from '@/ui/radio';

import { addLock } from '../../store';
import { setPath } from '../../store/path';

import styles from './style.module.css';

const NUMBER_OF_DOTS = 9;
const MINIMUM_PATTERN_LENGTH = 4;
const DOTS = Array(NUMBER_OF_DOTS)
  .fill(null)
  //eslint-disable-next-line no-unused-vars
  .map((_, index) => index);

const PatternScreen: FC = () => {
  const [pattern, setPattern] = useState<number[]>([]);

  const onInput = useCallback(
    (index: number) => (): void => {
      setPattern((pattern) => {
        if (pattern.includes(index)) {
          return [...pattern.filter((item) => item !== index)];
        }
        return [...pattern, index];
      });
    },
    []
  );

  const disabled = useMemo(
    (): boolean => pattern.length < MINIMUM_PATTERN_LENGTH,
    [pattern]
  );

  const onClick = useCallback((): void => {
    addLock().pattern(pattern);
    setPath('--');
  }, [pattern]);

  return (
    <div>
      <h2>create pattern</h2>

      <div className={styles.pattern}>
        <fieldset className={styles.group}>
          {DOTS.map((index) => (
            <Radio
              checked={pattern.includes(index)}
              onChange={onInput(index)}
            />
          ))}
        </fieldset>
        <Button
          onClick={onClick}
          disabled={disabled}
          className={styles.button}
        >
          Save
        </Button>
      </div>
    </div>
  );
};

export default PatternScreen;
