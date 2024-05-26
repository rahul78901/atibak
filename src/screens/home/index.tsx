import type { FC } from 'react';

import Button from '@/ui/button';

import { Logo as SettingLogo, name as settingName } from '&/settings';

import { loadAddon, openMenu } from '$/index';

import MenuIcon from '₹/menu';

import styles from './style.module.css';

const HomeScreen: FC = () => (
  <div className={styles.div}>
    <div className={styles.grid}>
      <div className={styles.up}></div>

      <div className={styles.bottom}>
        <Button
          title={settingName}
          variant="icon"
          onClick={loadAddon(settingName)}
        >
          <SettingLogo />
        </Button>
        <Button
          title="menu"
          variant="icon"
          onClick={openMenu}
        >
          <MenuIcon />
        </Button>
      </div>
    </div>
  </div>
);

export default HomeScreen;
