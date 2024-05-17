import type { FC } from 'react';

import Button from '@/ui/button';

import useSettingStore, { PathType, setPath } from '../../store';

import styles from './style.module.css';

const SideNav: FC = () => (
  <aside className={styles.aside}>
    <div className={styles.card}>
      <h2 className={styles.h2}>display</h2>
      <SideNavItem path="theme" />
      <SideNavItem path="language" />
    </div>

    <div className={styles.card}>
      <h2 className={styles.h2}>security</h2>
      <SideNavItem path="pin" />
      <SideNavItem path="password" />
      <SideNavItem path="pattern" />
      <SideNavItem path="text to lock screen" />
    </div>
  </aside>
);

type SideNavItemPropsType = {
  path: PathType;
};

const SideNavItem: FC<SideNavItemPropsType> = ({ path }) => {
  const pathname = useSettingStore((state) => state.path);

  const isActive = path === pathname;

  return (
    <Button
      onClick={() => setPath(path)}
      className={`${styles.button} ${isActive ? styles.active : ''}`}
    >
      {path}
    </Button>
  );
};

export default SideNav;
