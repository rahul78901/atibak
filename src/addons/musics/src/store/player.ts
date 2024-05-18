import { create } from 'zustand';

type PlayerStoreType = {
  miniPlayer: boolean;
};

const usePlayerStore = create<PlayerStoreType>(() => ({
  miniPlayer: true,
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

export default usePlayerStore;
