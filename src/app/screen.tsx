import { type FC, Suspense, lazy } from 'react';

import Loader from '@/loader';

import { useAddonStore } from '$/addon';

const Home = lazy(() => import('#/home'));
const Menu = lazy(() => import('#/menu'));

const ScreenImpl: FC = () => {
  const { isMenuOpened, current, addons } = useAddonStore(
    ({ isMenuOpened, current, addons }) => ({
      isMenuOpened,
      current,
      addons,
    })
  );

  if (current) {
    const { App } = addons[current];
    return <App />;
  }

  if (isMenuOpened) {
    return <Menu />;
  }

  return <Home />;
};

const Screen: FC = () => (
  <Suspense fallback={<Loader />}>
    <ScreenImpl />
  </Suspense>
);

export default Screen;
