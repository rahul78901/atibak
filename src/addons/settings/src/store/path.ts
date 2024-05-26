import { create } from 'zustand';

export type PathType =
  | '--'
  | 'theme'
  | 'language'
  | 'pin'
  | 'password'
  | 'pattern'
  | 'text to lock screen';

type PathStoreType = {
  path: PathType;
};

const usePathStore = create<PathStoreType>(() => ({
  path: '--',
}));

const { setState } = usePathStore;

export const setPath = (path: PathType): void =>
  setState({
    path,
  });

export default usePathStore;
