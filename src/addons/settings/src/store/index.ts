import { create } from 'zustand';

export type PathType =
  | '--'
  | 'theme'
  | 'language'
  | 'pin'
  | 'password'
  | 'pattern'
  | 'text to lock screen';

type SettingStoreType = {
  path: PathType;
};

const useSettingStore = create<SettingStoreType>(() => ({
  path: '--',
}));

const { setState } = useSettingStore;

export const setPath = (path: PathType): void =>
  setState({
    path,
  });

export default useSettingStore;
