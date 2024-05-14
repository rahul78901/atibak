import type { FC } from 'react';

import Button from '@/ui/button';

import MenuIcon from '₹/menu';

import styles from './style.module.css';

const HomeScreen: FC = () => (
  <div className={styles.div}>
    <div className={styles.grid}>
      <div className={styles.up}></div>

      <div className={styles.bottom}>
        <Button
          title="menu"
          variant="icon"
        >
          <MenuIcon />
        </Button>
      </div>
    </div>
  </div>
);

export default HomeScreen;
