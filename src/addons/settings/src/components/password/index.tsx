import type { FC } from 'react';

import Button from '@/ui/button';
import Input from '@/ui/input';

import styles from './style.module.css';

const PasswordScreen: FC = () => (
  <div>
    <h2>create password</h2>

    <div className={styles.group}>
      <Input
        className={styles.input}
        placeholder="old password"
      />
      <Input
        className={styles.input}
        placeholder="new password"
      />
      <Input
        className={styles.input}
        placeholder="repeat password"
      />
      <Button className={styles.button}>Save</Button>
    </div>
  </div>
);

export default PasswordScreen;
