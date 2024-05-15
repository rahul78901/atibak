import type { FC } from 'react';

import SideNav from './components/side-nav';
import AddTextScreen from './components/text-screen';

import styles from './style.module.css';

const SettingAddon: FC = () => (
  <div className={styles.setting}>
    <SideNav />

    <section className={styles.section}>
      <AddTextScreen />
    </section>
  </div>
);

export default SettingAddon;
