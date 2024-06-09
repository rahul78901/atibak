import sha256 from 'crypto-js/sha256';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

import type { LanguageType } from '../components/language';

export type ThemeType = 'light' | 'green' | 'rose' | 'blue';

type SettingStoreType = {
  theme: ThemeType;
  pin: string | null;
  password: string | null;
  pattern: string | null;
  lockScreenText: string | null;

  language: LanguageType;
};

const useSettingStore = create(
  persist<SettingStoreType>(
    () => ({
      theme: 'light',
      pin: null,
      password: null,
      pattern: null,
      lockScreenText: null,

      language: 'en',
    }),
    {
      name: 'setting',
      storage: createJSONStorage(() => localStorage),
    }
  )
);

const { setState, getState } = useSettingStore;

export const setTheme = (theme: ThemeType): void =>
  setState({
    theme,
  });

export const setLockScreenText = (lockScreenText: string | null): void =>
  setState({ lockScreenText });

const setPassword = (password: string): void =>
  setState({ password, pin: null, pattern: null });
const setPin = (pin: string): void =>
  setState({ pin, pattern: null, password: null });
const setPattern = (pattern: string): void =>
  setState({ pattern, pin: null, password: null });

//eslint-disable-next-line no-unused-vars
type FnType<ValueType = string> = (value: ValueType) => void;

type AddLockReturnType = {
  password: FnType;
  pin: FnType;
  pattern: FnType<number[]>;
};

const encrypt = (value: string): string => sha256(value).toString();

export const encryptPattern = (pattern: number[]): string =>
  encrypt(
    pattern.sort().reduce((acc, current) => acc.concat(current.toString()), '')
  );

export const addLock = (): AddLockReturnType => {
  const password = (value: string): void => setPassword(encrypt(value));

  const pin = (value: string): void => setPin(encrypt(value));

  const pattern = (value: number[]): void => setPattern(encryptPattern(value));
  return {
    password,
    pin,
    pattern,
  };
};

//eslint-disable-next-line no-unused-vars
type VerifyFnType<ValueType = string> = (value: ValueType) => boolean;

type VerifyLockReturnType = {
  password: VerifyFnType;
  pin: VerifyFnType;
  pattern: VerifyFnType<number[]>;
};

export const verifyLock = (): VerifyLockReturnType => {
  const password = (value: string): boolean =>
    getState().password === encrypt(value);
  const pin = (value: string): boolean => getState().pin === encrypt(value);
  const pattern = (value: number[]): boolean =>
    getState().pattern === encryptPattern(value);
  return {
    password,
    pin,
    pattern,
  };
};

export const setLanguage = (language: LanguageType): void =>
  setState({
    language,
  });

export default useSettingStore;
