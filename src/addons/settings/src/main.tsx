import { type FC, lazy } from 'react';

import SideNav from './components/side-nav';
import usePathStore, { type PathType } from './store/path';

import styles from './style.module.css';

const theme = lazy(() => import('./components/theme')),
  language = lazy(() => import('./components/language')),
  pin = lazy(() => import('./components/pin')),
  password = lazy(() => import('./components/password')),
  pattern = lazy(() => import('./components/pattern')),
  textScreen = lazy(() => import('./components/text-screen'));

const COMPONENTS = {
  '--': () => null,
  theme,
  language,
  pin,
  password,
  pattern,
  'text-screen': textScreen,
} satisfies Record<PathType, FC>;

const SettingAddon: FC = () => {
  const path = usePathStore((state) => state.path);

  const Screen = COMPONENTS[path];

  return (
    <div className={styles.setting}>
      <SideNav />

      <section className={styles.section}>
        <Screen />
      </section>
    </div>
  );
};

export default SettingAddon;
