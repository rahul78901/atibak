import type { FC } from 'react';

import SideNav from './components/side-nav';
import ThemeScreen from './components/theme';

import styles from './style.module.css';

const SettingAddon: FC = () => (
  <div className={styles.setting}>
    <SideNav />

    <section className={styles.section}>
      <ThemeScreen />
    </section>
  </div>
);

export default SettingAddon;
