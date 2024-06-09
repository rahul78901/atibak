import type { FC } from 'react';

import Button from '@/ui/button';

import useSettingStore from '../../store';
import usePathStore, { type PathType, setPath } from '../../store/path';
import useTranslate from '../../translate';

import styles from './style.module.css';

const SideNav: FC = () => {
  const language = useSettingStore(({ language }) => language);

  const { t } = useTranslate(language);

  return (
    <aside className={styles.aside}>
      <div className={styles.card}>
        <h2 className={styles.h2}>{t('sidenav:display')}</h2>
        <SideNavItem
          label={t('sidenav:theme')}
          path="theme"
        />
        <SideNavItem
          label={t('sidenav:language')}
          path="language"
        />
      </div>

      <div className={styles.card}>
        <h2 className={styles.h2}>security</h2>
        <SideNavItem
          label={t('sidenav:pin')}
          path="pin"
        />
        <SideNavItem
          label={t('sidenav:password')}
          path="password"
        />
        <SideNavItem
          label={t('sidenav:pattern')}
          path="pattern"
        />
        <SideNavItem
          label={t('sidenav:text-screen')}
          path="text-screen"
        />
      </div>
    </aside>
  );
};

type SideNavItemPropsType = {
  path: PathType;
  label: string;
};

const SideNavItem: FC<SideNavItemPropsType> = ({ path, label }) => {
  const pathname = usePathStore((state) => state.path);

  const isActive = path === pathname;

  return (
    <Button
      onClick={() => setPath(path)}
      className={`${styles.button} ${isActive ? styles.active : ''}`}
    >
      {label}
    </Button>
  );
};

export default SideNav;
