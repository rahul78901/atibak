import {
  type ChangeEvent,
  type Dispatch,
  type FC,
  type SetStateAction,
  useCallback,
  useMemo,
  useState,
} from 'react';

import Button from '@/ui/button';
import Input from '@/ui/input';

import useSettingStore, { addLock, verifyLock } from '../../store';
import useTranslate from '../../translate';

import styles from './style.module.css';

const MINIMUM_PASSWORD_LENGTH = 8;

const PasswordScreen: FC = () => {
  const { password, language } = useSettingStore(({ password, language }) => ({
    password,
    language,
  }));
  const [newPassword, setNewPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [oldPassword, setOldPassword] = useState<string>('');

  const onInput = useCallback((setState: Dispatch<SetStateAction<string>>) => {
    return (e: ChangeEvent<HTMLInputElement>): void => {
      const { value } = e.target;
      setState(value);
    };
  }, []);

  const disabled = useMemo((): boolean => {
    if (password && oldPassword.length < MINIMUM_PASSWORD_LENGTH) {
      return true;
    }

    if (
      newPassword.length < MINIMUM_PASSWORD_LENGTH ||
      newPassword !== confirmPassword
    ) {
      return true;
    }

    return false;
  }, [newPassword, confirmPassword, password, oldPassword]);

  const onClick = useCallback(() => {
    if (password) {
      const isVerified = verifyLock().password(oldPassword);
      if (!isVerified) {
        return;
      }
    }

    addLock().password(newPassword);
    setNewPassword('');
    setOldPassword('');
    setConfirmPassword('');
  }, [newPassword, password, oldPassword]);

  const { t } = useTranslate(language);

  return (
    <div>
      <h2>{t(password ? 'password:update' : 'password:create')}</h2>

      <div className={styles.group}>
        {password ? (
          <Input
            value={oldPassword}
            onInput={onInput(setOldPassword)}
            className={styles.input}
            placeholder={t('password:old')}
          />
        ) : null}
        <Input
          value={newPassword}
          onInput={onInput(setNewPassword)}
          className={styles.input}
          placeholder={t('password:new')}
        />
        <Input
          value={confirmPassword}
          onInput={onInput(setConfirmPassword)}
          className={styles.input}
          placeholder={t('password:repeat')}
        />
        <Button
          onClick={onClick}
          disabled={disabled}
          className={styles.button}
        >
          {t(password ? 'save' : 'chenge')}
        </Button>
      </div>
    </div>
  );
};

export default PasswordScreen;
