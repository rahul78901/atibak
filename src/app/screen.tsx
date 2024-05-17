import { type FC, Suspense, lazy } from 'react';

import { useAddonStore } from '$/addon';

const Home = lazy(() => import('#/home'));
const Menu = lazy(() => import('#/menu'));

const ScreenImpl: FC = () => {
  const { isMenuOpened } = useAddonStore(({ isMenuOpened }) => ({
    isMenuOpened,
  }));

  if (isMenuOpened) {
    return <Menu />;
  }

  return <Home />;
};

const Screen: FC = () => (
  <Suspense>
    <ScreenImpl />
  </Suspense>
);

export default Screen;
