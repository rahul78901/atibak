import { type FC, useCallback, useState } from 'react';

import Button from '@/ui/button';
import Input from '@/ui/input';

import useSettingStore, { setLockScreenText } from '../../store';
import { setPath } from '../../store/path';
import useTranslate from '../../translate';

import styles from './style.module.css';

const AddTextScreen: FC = () => {
  const { lockScreenText, language } = useSettingStore(
    ({ lockScreenText, language }) => ({
      language,
      lockScreenText,
    })
  );
  const [msg, setMsg] = useState<string>(lockScreenText || '');

  const onClick = useCallback((): void => {
    if (msg === '') {
      setLockScreenText(null);
    } else {
      setLockScreenText(msg);
    }

    setPath('--');
  }, [msg]);

  const { t } = useTranslate(language);

  return (
    <div>
      <h2>{t(lockScreenText ? 'text-screen:update' : 'text-screen:add')}</h2>
      <div className={styles.group}>
        <Input
          value={msg}
          onInput={(e) => setMsg((e.target as HTMLInputElement).value)}
          className={styles.input}
          placeholder={t('text-screen:add')}
        />

        <Button
          className={styles.button}
          onClick={onClick}
        >
          {t(lockScreenText ? 'update' : 'save')}
        </Button>
      </div>
    </div>
  );
};

export default AddTextScreen;
