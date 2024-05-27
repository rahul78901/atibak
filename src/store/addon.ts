import { create } from 'zustand';

import useSettingStore from '&/settings/src/store';

import { type AddonType, addons } from '../addon';

type AddonStoreType = {
  current: AddonType['name'] | null;
  isMenuOpened: boolean;
  isRecentOpened: boolean;

  addons: Record<AddonType['name'], AddonType>;

  isLocked: boolean;
};

const { password, pin, pattern } = useSettingStore.getState();

const isLocked = password || pattern || pin ? true : false;

export const useAddonStore = create<AddonStoreType>(() => ({
  isLocked,

  current: null,
  isMenuOpened: false,
  isRecentOpened: false,

  addons,
}));
