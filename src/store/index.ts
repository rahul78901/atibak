import type { AddonType } from '../addon';
import { useAddonStore } from './addon';

const { log } = console;

const { setState: setAddonStore, getState: getAddonStore } = useAddonStore;

export const onBackButtonPressed = (): void => {
  const { isMenuOpened, current, addons } = getAddonStore();

  if (current) {
    const addon = addons[current];
    if (addon.onBackPressed()) {
      setAddonStore({
        current: null,
      });
    }

    return;
  }

  if (isMenuOpened) {
    setAddonStore({
      isMenuOpened: false,
    });
    return;
  }

  log('nothing to back');
};

export const onHomeButtonPressed = (): void =>
  setAddonStore({
    isMenuOpened: false,
    isRecentOpened: false,
    current: null,
  });

export const onRecentButtonPressed = (): void => {
  log(`recent pressed`);
};

export const openMenu = (): void => {
  setAddonStore({
    isMenuOpened: true,
  });
};

export const loadAddon =
  (name: AddonType['name']): (() => void) =>
  (): void => {
    const addon = getAddonStore().addons[name];

    if (addon) {
      setAddonStore({
        current: name,
      });
    }
  };
