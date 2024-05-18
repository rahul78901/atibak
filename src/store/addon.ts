import { create } from 'zustand';

import { type AddonType, addons } from '../addon';

type AddonStoreType = {
  current: AddonType['name'] | null;
  isMenuOpened: boolean;
  isRecentOpened: boolean;

  addons: Record<AddonType['name'], AddonType>;
};

export const useAddonStore = create<AddonStoreType>(() => ({
  current: 'music', // null,
  isMenuOpened: false,
  isRecentOpened: false,

  addons,
}));
