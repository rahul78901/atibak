import { type FC, useCallback, useState } from 'react';

import Button from '@/ui/button';
import Select from '@/ui/select';

import useSettingStore, { setLanguage } from '../../store';
import useTranslate from '../../translate';

import styles from './style.module.css';

const LANGUAGES = [
  {
    value: 'en',
    label: 'English',
  },
  {
    value: 'es',
    label: 'Spanish',
  },
  {
    value: 'hi',
    label: 'Hindi',
  },
  {
    value: 'bn',
    label: 'Bengali',
  },
  {
    value: 'pt',
    label: 'Portuguese',
  },
  {
    value: 'ru',
    label: 'Russian',
  },
  {
    value: 'ja',
    label: 'Japanese',
  },
  {
    value: 'pa',
    label: 'Punjabi',
  },
  {
    value: 'de',
    label: 'German',
  },
  {
    value: 'fr',
    label: 'French',
  },
  {
    value: 'te',
    label: 'Telugu',
  },
  {
    value: 'ta',
    label: 'Tamil',
  },
  {
    value: 'mr',
    label: 'Marathi',
  },
  {
    value: 'gu',
    label: 'Gujarati',
  },
  {
    value: 'ko',
    label: 'Korean',
  },
  {
    value: 'vi',
    label: 'Vietnamese',
  },
  {
    value: 'it',
    label: 'Italian',
  },
  {
    value: 'zh',
    label: 'Chinese',
  },
] as const;

const languages = LANGUAGES.map(({ value }) => value);

export type LanguageType = (typeof languages)[number];

const LanguageScreen: FC = () => {
  const language = useSettingStore((state) => state.language);
  const [selectedLanguage, setSelectedLanguage] = useState(language);

  const { t } = useTranslate(selectedLanguage);

  const disabled = language === selectedLanguage;

  const onSave = useCallback(() => {
    setLanguage(selectedLanguage);
  }, [selectedLanguage]);

  return (
    <div>
      <h2>{t('language')}</h2>

      <div className={styles.group}>
        <Select
          value={selectedLanguage}
          onChange={(e) => setSelectedLanguage(e.target.value as LanguageType)}
        >
          {LANGUAGES.map(({ value, label }) => (
            <option
              key={value}
              value={value}
            >
              {label}
            </option>
          ))}
        </Select>

        <Button
          disabled={disabled}
          onClick={onSave}
          className={styles.button}
        >
          {t('save')}
        </Button>
      </div>
    </div>
  );
};
export default LanguageScreen;
