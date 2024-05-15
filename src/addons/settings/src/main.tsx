import type { FC } from 'react';

import LanguageScreen from './components/language';
import SideNav from './components/side-nav';

import styles from './style.module.css';

const SettingAddon: FC = () => (
  <div className={styles.setting}>
    <SideNav />

    <section className={styles.section}>
      <LanguageScreen />
    </section>
  </div>
);

export default SettingAddon;
