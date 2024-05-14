import type { FC } from 'react';

import BottomNav from '@/bottom-nav';

import MenuScreen from '#/menu';

import styles from './style.module.css';

const App: FC = () => (
  <div className={styles.layout}>
    <main className={styles.main}>
      <MenuScreen />
    </main>
    <BottomNav />
  </div>
);
export default App;
