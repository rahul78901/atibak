import type { FC } from 'react';

import BottomNav from '@/bottom-nav';

import Screen from './screen';

import styles from './style.module.css';

const App: FC = () => (
  <div className={styles.layout}>
    <main className={styles.main}>
      <Screen />
    </main>
    <BottomNav />
  </div>
);
export default App;
