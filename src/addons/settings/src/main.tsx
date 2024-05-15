import type { FC } from 'react';

import PinScreen from './components/pin';
import SideNav from './components/side-nav';

import styles from './style.module.css';

const SettingAddon: FC = () => (
  <div className={styles.setting}>
    <SideNav />

    <section className={styles.section}>
      <PinScreen />
    </section>
  </div>
);

export default SettingAddon;
