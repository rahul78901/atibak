import { type FC, Suspense } from 'react';

import BottomNav from '@/bottom-nav';

import Screen from './screen';

import styles from './style.module.css';

const App: FC = () => (
  <div className={styles.layout}>
    <main className={styles.main}>
      <Suspense>
        <Screen />
      </Suspense>
    </main>
    <BottomNav />
  </div>
);
export default App;
