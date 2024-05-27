import { type FC, lazy, useEffect } from 'react';

import BottomNav from '@/bottom-nav';

import useSettingStore from '&/settings/src/store';

import { useAddonStore } from '$/addon';

import Screen from './screen';

import styles from './style.module.css';

const LockScreen = lazy(() => import('#/lock'));

const App: FC = () => {
  const isLocked = useAddonStore((state) => state.isLocked);

  if (isLocked) {
    return <LockScreen />;
  }

  return (
    <div className={styles.layout}>
      <Theme />
      <main className={styles.main}>
        <Screen />
      </main>
      <BottomNav />
    </div>
  );
};

const Theme: FC = () => {
  const theme = useSettingStore((state) => state.theme);
  useEffect(() => {
    document.body.className = theme === 'light' ? '' : theme;
  }, [theme]);
  return null;
};

export default App;
