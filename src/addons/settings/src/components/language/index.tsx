import type { FC } from 'react';

import Button from '@/ui/button';
import Select from '@/ui/select';

import styles from './style.module.css';

const LanguageScreen: FC = () => (
  <div>
    <h2>chose your language</h2>

    <div className={styles.group}>
      <Select>
        <option value="en">English</option>
      </Select>

      <Button className={styles.button}>Save</Button>
    </div>
  </div>
);

export default LanguageScreen;
