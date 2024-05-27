import {
  ChangeEvent,
  type Dispatch,
  type FC,
  type SetStateAction,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';

import Button from '@/ui/button';
import PinInput from '@/ui/pin';

import useSettingStore, { addLock, verifyLock } from '../../store';
import { setPath } from '../../store/path';

import styles from './style.module.css';

const PinScreen: FC = () => {
  const pin = useSettingStore((state) => state.pin);
  const [oldPin, setOldPin] = useState<string>('');
  const [newPin, setNewPin] = useState<string>('');
  const [confirmPin, setConfirmPin] = useState<string>('');

  const updateValue = useCallback(
    (setValue: Dispatch<SetStateAction<string>>) => (value: string) =>
      setValue(value),
    []
  );

  const disabled = useMemo(() => {
    const length = PINS.length + PINS2.length;

    if (pin) {
      if (oldPin.length !== length) {
        return true;
      }
    }

    if (newPin.length !== length) {
      return true;
    }
    if (confirmPin.length !== length) {
      return true;
    }

    if (newPin !== confirmPin) {
      return true;
    }

    return false;
  }, [newPin, confirmPin, pin, oldPin]);

  const onClick = useCallback(() => {
    if (pin) {
      const verified = verifyLock().pin(oldPin);
      if (!verified) {
        return;
      }
    }

    addLock().pin(newPin);
    setPath('--');
  }, [newPin, oldPin, pin]);

  return (
    <div>
      <h2>{pin ? 'update' : 'create'} pin</h2>

      <div className={styles.pin}>
        {pin ? (
          <Pin
            updateValue={updateValue(setOldPin)}
            label="old pin"
          />
        ) : null}
        <Pin
          updateValue={updateValue(setNewPin)}
          label="new pin"
        />
        <Pin
          updateValue={updateValue(setConfirmPin)}
          label="repeat pin"
        />
        <Button
          disabled={disabled}
          onClick={onClick}
          className={styles.button}
        >
          {pin ? 'update' : 'Save'}
        </Button>
      </div>
    </div>
  );
};

type PinPropsType = {
  label: string;
  //eslint-disable-next-line no-unused-vars
  updateValue: (value: string) => void;
};

//eslint-disable-next-line no-magic-numbers
const PINS = [0, 1] as const;
//eslint-disable-next-line no-magic-numbers
const PINS2 = [2, 3] as const;

const Pin: FC<PinPropsType> = ({ label, updateValue }) => {
  const [value, setValue] = useState<Record<number, string>>({});
  const onInput = useCallback(
    (index: number) => (e: ChangeEvent<HTMLInputElement>) => {
      setValue((value) => ({
        ...value,
        [index]: e.target.value,
      }));
    },
    []
  );

  useEffect(() => {
    updateValue(Object.values(value).join(''));
  }, [value, updateValue]);

  return (
    <fieldset className={styles.group}>
      <legend>{label}</legend>
      {PINS.map((pin) => (
        <PinInput
          key={pin}
          value={value[pin] || ''}
          onInput={onInput(pin)}
          minLength={1}
          placeholder="a"
        />
      ))}

      <span className={styles.span} />
      {PINS2.map((pin) => (
        <PinInput
          key={pin}
          value={value[pin] || ''}
          onInput={onInput(pin)}
          minLength={1}
          placeholder="@"
        />
      ))}
    </fieldset>
  );
};

export default PinScreen;
