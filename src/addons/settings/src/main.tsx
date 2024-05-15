import type { FC } from 'react';

import PatternScreen from './components/pattern';
import SideNav from './components/side-nav';

import styles from './style.module.css';

const SettingAddon: FC = () => (
  <div className={styles.setting}>
    <SideNav />

    <section className={styles.section}>
      <PatternScreen />
    </section>
  </div>
);

export default SettingAddon;
