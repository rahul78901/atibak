import type { FC } from 'react';

import SideNav from './components/side-nav';

import styles from './style.module.css';

const SettingAddon: FC = () => (
  <div className={styles.setting}>
    <SideNav />

    <section className={styles.section}></section>
  </div>
);

export default SettingAddon;
