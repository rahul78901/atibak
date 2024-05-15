import type { FC, PropsWithChildren } from 'react';

import Button from '@/ui/button';

import styles from './style.module.css';

const SideNav: FC = () => (
  <aside className={styles.aside}>
    <div className={styles.card}>
      <h2 className={styles.h2}>display</h2>
      <SideNavItem>theme</SideNavItem>
      <SideNavItem>language</SideNavItem>
    </div>

    <div className={styles.card}>
      <h2 className={styles.h2}>security</h2>
      <SideNavItem>pin</SideNavItem>
      <SideNavItem>password</SideNavItem>
      <SideNavItem>pattern</SideNavItem>
      <SideNavItem>lock screen text</SideNavItem>
    </div>
  </aside>
);

type SideNavItemPropsType = PropsWithChildren;

const SideNavItem: FC<SideNavItemPropsType> = ({ children }) => (
  <Button className={`${styles.button}`}>{children}</Button>
);

export default SideNav;
