import type { FC } from 'react';

import HomeScreen from './screens/home';

import styles from './layout.module.css';

const AppLayout: FC = () => (
  <div className={styles.layout}>
    <HomeScreen />
  </div>
);
export default AppLayout;
