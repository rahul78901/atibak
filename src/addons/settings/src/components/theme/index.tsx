import { type FC, useCallback, useEffect, useState } from 'react';

import Button from '@/ui/button';
import Radio from '@/ui/radio';

import useSettingStore, { type ThemeType, setTheme } from '../../store';
import useTranslate from '../../translate';

import styles from './style.module.css';

type ThemeItemPropsType = {
  item: ThemeType;
  label: string;
  checked: boolean;
  //eslint-disable-next-line no-unused-vars
  onChecked: (checked: boolean, theme: ThemeType) => void;
};

const ThemeItem: FC<ThemeItemPropsType> = ({
  label,
  item,
  checked,
  onChecked,
}) => (
  <label className={styles.label}>
    <Radio
      checked={checked}
      onChange={(e) => onChecked(e.target.checked, item)}
      sm
    />
    <span>{label}</span>
  </label>
);

const ThemeScreen: FC = () => {
  const { theme, language } = useSettingStore(({ theme, language }) => ({
    theme,
    language,
  }));

  const [checkedTheme, setCheckedTheme] = useState<ThemeType>(theme);

  const onChecked = useCallback((checked: boolean, theme: ThemeType) => {
    if (checked) {
      setCheckedTheme(theme);
    }
  }, []);

  const onSave = useCallback(() => {
    setTheme(checkedTheme);
  }, [checkedTheme]);

  useEffect(() => {
    document.body.className = checkedTheme === 'light' ? '' : checkedTheme;
    return () => {
      document.body.className = theme === 'light' ? '' : theme;
    };
  }, [checkedTheme, theme]);

  const { t } = useTranslate(language);

  return (
    <div>
      <h2>{t('theme')}</h2>

      <div className={styles.group}>
        <ThemeItem
          onChecked={onChecked}
          checked={checkedTheme === 'light'}
          item="light"
          label={t('theme:light')}
        />
        <ThemeItem
          onChecked={onChecked}
          checked={checkedTheme === 'blue'}
          item="blue"
          label={t('theme:blue')}
        />
        <ThemeItem
          onChecked={onChecked}
          checked={checkedTheme === 'rose'}
          item="rose"
          label={t('theme:rose')}
        />
        <ThemeItem
          onChecked={onChecked}
          checked={checkedTheme === 'green'}
          item="green"
          label={t('theme:green')}
        />

        <Button
          disabled={theme === checkedTheme}
          onClick={onSave}
          className={styles.button}
        >
          {t('save')}
        </Button>
      </div>
    </div>
  );
};

export default ThemeScreen;
