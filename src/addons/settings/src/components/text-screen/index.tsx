import type { FC } from 'react';

import Button from '@/ui/button';
import Input from '@/ui/input';

import styles from './style.module.css';

const AddTextScreen: FC = () => (
  <div>
    <h2>add text to lock screen</h2>

    <div className={styles.group}>
      <Input
        className={styles.input}
        placeholder="add text to lock screen"
      />

      <Button className={styles.button}>Save</Button>
    </div>
  </div>
);

export default AddTextScreen;
