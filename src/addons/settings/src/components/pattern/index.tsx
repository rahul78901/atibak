import type { FC } from 'react';

import Button from '@/ui/button';
import Radio from '@/ui/radio';

import styles from './style.module.css';

const PatternScreen: FC = () => (
  <div>
    <h2>create pattern</h2>

    <div className={styles.pattern}>
      <fieldset className={styles.group}>
        <Radio />
        <Radio />
        <Radio />

        <Radio />
        <Radio />
        <Radio />

        <Radio />
        <Radio />
        <Radio />
      </fieldset>
      <Button className={styles.button}>Save</Button>
    </div>
  </div>
);

export default PatternScreen;
