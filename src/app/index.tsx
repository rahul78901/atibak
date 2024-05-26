import { type FC, useEffect } from 'react';

import BottomNav from '@/bottom-nav';

import useSettingStore from '&/settings/src/store';

import Screen from './screen';

import styles from './style.module.css';

const App: FC = () => (
  <div className={styles.layout}>
    <Theme />
    <main className={styles.main}>
      <Screen />
    </main>
    <BottomNav />
  </div>
);

const Theme: FC = () => {
  const theme = useSettingStore((state) => state.theme);
  useEffect(() => {
    document.body.className = theme === 'light' ? '' : theme;
  }, [theme]);
  return null;
};

export default App;
