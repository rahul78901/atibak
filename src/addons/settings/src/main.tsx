import type { FC } from 'react';

import PasswordScreen from './components/password';
import SideNav from './components/side-nav';

import styles from './style.module.css';

const SettingAddon: FC = () => (
  <div className={styles.setting}>
    <SideNav />

    <section className={styles.section}>
      <PasswordScreen />
    </section>
  </div>
);

export default SettingAddon;
