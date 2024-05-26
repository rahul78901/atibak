import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

export type ThemeType = 'light' | 'green' | 'rose' | 'blue';

type SettingStoreType = {
  theme: ThemeType;
};

const useSettingStore = create(
  persist<SettingStoreType>(
    () => ({
      theme: 'light',
    }),
    {
      name: 'setting',
      storage: createJSONStorage(() => localStorage),
    }
  )
);

const { setState } = useSettingStore;

export const setTheme = (theme: ThemeType): void =>
  setState({
    theme,
  });

export default useSettingStore;
