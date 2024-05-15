import type { FC } from 'react';

import Button from '@/ui/button';
import Radio from '@/ui/radio';

import styles from './style.module.css';

type ThemeItemPropsType = {
  item: 'light';
};

const ThemeItem: FC<ThemeItemPropsType> = ({ item }) => (
  <label className={styles.label}>
    <Radio sm />
    <span>{item}</span>
  </label>
);

const ThemeScreen: FC = () => (
  <div>
    <h2>chose your theme</h2>

    <div className={styles.group}>
      <ThemeItem item="light" />

      <Button className={styles.button}>Save</Button>
    </div>
  </div>
);

export default ThemeScreen;
