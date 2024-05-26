import { type FC, useCallback, useEffect, useState } from 'react';

import Button from '@/ui/button';
import Radio from '@/ui/radio';

import useSettingStore, { ThemeType, setTheme } from '../../store';

import styles from './style.module.css';

type ThemeItemPropsType = {
  item: ThemeType;
  checked: boolean;
  //eslint-disable-next-line no-unused-vars
  onChecked: (checked: boolean, theme: ThemeType) => void;
};

const ThemeItem: FC<ThemeItemPropsType> = ({ item, checked, onChecked }) => (
  <label className={styles.label}>
    <Radio
      checked={checked}
      onChange={(e) => onChecked(e.target.checked, item)}
      sm
    />
    <span>{item}</span>
  </label>
);

const ThemeScreen: FC = () => {
  const theme = useSettingStore((state) => state.theme);

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

  return (
    <div>
      <h2>chose your theme</h2>

      <div className={styles.group}>
        <ThemeItem
          onChecked={onChecked}
          checked={checkedTheme === 'light'}
          item="light"
        />
        <ThemeItem
          onChecked={onChecked}
          checked={checkedTheme === 'blue'}
          item="blue"
        />
        <ThemeItem
          onChecked={onChecked}
          checked={checkedTheme === 'rose'}
          item="rose"
        />
        <ThemeItem
          onChecked={onChecked}
          checked={checkedTheme === 'green'}
          item="green"
        />

        <Button
          disabled={theme === checkedTheme}
          onClick={onSave}
          className={styles.button}
        >
          Save
        </Button>
      </div>
    </div>
  );
};

export default ThemeScreen;
