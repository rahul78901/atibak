import type { FC } from 'react';

import Button from '@/ui/button';
import Input from '@/ui/input';

import styles from './style.module.css';

const PinScreen: FC = () => (
  <div>
    <h2>create pin</h2>

    <div className={styles.pin}>
      <fieldset className={styles.group}>
        <legend>old pin</legend>
        <Input
          minLength={1}
          maxLength={1}
          className={styles.input}
          placeholder="a"
        />
        <Input
          minLength={1}
          maxLength={1}
          className={styles.input}
          placeholder="1"
        />
        <Input
          minLength={1}
          maxLength={1}
          className={styles.input}
          placeholder="@"
        />
        <span className={styles.span} />
        <Input
          minLength={1}
          maxLength={1}
          className={styles.input}
          placeholder="a"
        />
        <Input
          minLength={1}
          maxLength={1}
          className={styles.input}
          placeholder="1"
        />
        <Input
          minLength={1}
          maxLength={1}
          className={styles.input}
          placeholder="@"
        />
      </fieldset>

      <fieldset className={styles.group}>
        <legend>new pin</legend>
        <Input
          minLength={1}
          maxLength={1}
          className={styles.input}
          placeholder="a"
        />
        <Input
          minLength={1}
          maxLength={1}
          className={styles.input}
          placeholder="1"
        />
        <Input
          minLength={1}
          maxLength={1}
          className={styles.input}
          placeholder="@"
        />
        <span className={styles.span} />
        <Input
          minLength={1}
          maxLength={1}
          className={styles.input}
          placeholder="a"
        />
        <Input
          minLength={1}
          maxLength={1}
          className={styles.input}
          placeholder="1"
        />
        <Input
          minLength={1}
          maxLength={1}
          className={styles.input}
          placeholder="@"
        />
      </fieldset>

      <fieldset className={styles.group}>
        <legend>repeat pin</legend>
        <Input
          minLength={1}
          maxLength={1}
          className={styles.input}
          placeholder="a"
        />
        <Input
          minLength={1}
          maxLength={1}
          className={styles.input}
          placeholder="1"
        />
        <Input
          minLength={1}
          maxLength={1}
          className={styles.input}
          placeholder="@"
        />
        <span className={styles.span} />
        <Input
          minLength={1}
          maxLength={1}
          className={styles.input}
          placeholder="a"
        />
        <Input
          minLength={1}
          maxLength={1}
          className={styles.input}
          placeholder="1"
        />
        <Input
          minLength={1}
          maxLength={1}
          className={styles.input}
          placeholder="@"
        />
      </fieldset>
      <Button className={styles.button}>Save</Button>
    </div>
  </div>
);

export default PinScreen;
