import type { FC } from 'react';

import BottomNav from '@/bottom-nav';

import SettingAddon from '&/settings';

import styles from './style.module.css';

const App: FC = () => (
  <div className={styles.layout}>
    <main className={styles.main}>
      <SettingAddon />
    </main>
    <BottomNav />
  </div>
);
export default App;
