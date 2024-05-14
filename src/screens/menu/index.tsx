import type { FC } from 'react';

import Button from '@/ui/button';

import MenuIcon from '₹/menu';

import styles from './style.module.css';

const ADDONS = 100;

const MenuScreen: FC = () => (
  <div className={styles.div}>
    <ul className={styles.menu}>
      {Array(ADDONS)
        .fill(null)
        .map((_, index) => (
          <li key={index}>
            <Button
              title="addon"
              variant="icon"
            >
              <MenuIcon />
            </Button>
          </li>
        ))}
    </ul>
  </div>
);

export default MenuScreen;
