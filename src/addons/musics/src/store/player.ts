import { create } from 'zustand';

type PlayerStoreType = {
  miniPlayer: boolean;
  isPlayListOpened: boolean;
};

const usePlayerStore = create<PlayerStoreType>(() => ({
  miniPlayer: true,
  isPlayListOpened: false,
}));

const { setState } = usePlayerStore;

export const openPlayer = (): void =>
  setState({
    miniPlayer: false,
  });

export const closePlayer = (): void =>
  setState({
    miniPlayer: true,
  });

export const openPlayList = (): void =>
  setState({
    isPlayListOpened: true,
  });
export const closePlayList = (): void =>
  setState({
    isPlayListOpened: false,
  });

export default usePlayerStore;
