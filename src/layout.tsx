import type { FC } from 'react';

import BottomNav from '@/bottom-nav';

import HomeScreen from '#/home';

import styles from './layout.module.css';

const AppLayout: FC = () => (
  <div className={styles.layout}>
    <main className={styles.main}>
      <HomeScreen />
    </main>
    <BottomNav />
  </div>
);
export default AppLayout;
