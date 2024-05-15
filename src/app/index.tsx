import type { FC } from 'react';

import BottomNav from '@/bottom-nav';

import MusicAddon from '&/musics';

import styles from './style.module.css';

const App: FC = () => (
  <div className={styles.layout}>
    <main className={styles.main}>
      <MusicAddon />
    </main>
    <BottomNav />
  </div>
);
export default App;
