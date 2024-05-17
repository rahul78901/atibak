import type { FC } from 'react';

import Button from '@/ui/button';

import {
  onBackButtonPressed,
  onHomeButtonPressed,
  onRecentButtonPressed,
} from '$/index';

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
        onClick={onRecentButtonPressed}
      >
        <RecentIcon />
      </Button>

      <Button
        variant="icon"
        title="home"
        onClick={onHomeButtonPressed}
      >
        <HomeIcon />
      </Button>

      <Button
        variant="icon"
        title="back"
        onClick={onBackButtonPressed}
      >
        <BackIcon />
      </Button>
    </nav>
  </div>
);
export default BottomNav;
