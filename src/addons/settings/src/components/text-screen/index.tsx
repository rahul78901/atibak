import { type FC, useCallback, useState } from 'react';

import Button from '@/ui/button';
import Input from '@/ui/input';

import useSettingStore, { setLockScreenText } from '../../store';
import { setPath } from '../../store/path';

import styles from './style.module.css';

const AddTextScreen: FC = () => {
  const lockScreenText = useSettingStore((state) => state.lockScreenText);
  const [msg, setMsg] = useState<string>(lockScreenText || '');

  const onClick = useCallback((): void => {
    if (msg === '') {
      setLockScreenText(null);
    } else {
      setLockScreenText(msg);
    }

    setPath('--');
  }, [msg]);

  return (
    <div>
      <h2>{lockScreenText ? 'update' : 'add'} text to lock screen</h2>

      <div className={styles.group}>
        <Input
          value={msg}
          onInput={(e) => setMsg((e.target as HTMLInputElement).value)}
          className={styles.input}
          placeholder="add text to lock screen"
        />

        <Button
          className={styles.button}
          onClick={onClick}
        >
          {lockScreenText ? 'update' : 'save'}
        </Button>
      </div>
    </div>
  );
};

export default AddTextScreen;
