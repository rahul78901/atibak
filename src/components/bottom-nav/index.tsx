import type { FC } from 'react';

import Button from '@/ui/button';

import BackIcon from '₹/back';
import HomeIcon from '₹/home';
import RecentIcon from '₹/recent';

import styles from './style.module.css';

const BottomNav: FC = () => (
  <div className={styles.div}>
    <nav className={styles.nav}>
      <Button
        variant="icon"
        title="recent"
      >
        <RecentIcon />
      </Button>

      <Button
        variant="icon"
        title="home"
      >
        <HomeIcon />
      </Button>

      <Button
        variant="icon"
        title="back"
      >
        <BackIcon />
      </Button>
    </nav>
  </div>
);
export default BottomNav;
