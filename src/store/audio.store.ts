import { create } from "zustand";

const AUTO_PLAY = true;

type AudioStoreType = {
  // ref: RefObject<HTMLAudioElement>
  duration: number;
  current: number;
  isPlaying: boolean;
  audio?: HTMLAudioElement;
};

const useAudioStore = create<AudioStoreType>(() => ({
  duration: 0,
  current: 0,
  isPlaying: AUTO_PLAY,
}));

const { setState: set, getState: get } = useAudioStore;

const setDuration = (duration: number) =>
  set({
    duration,
    current: 0,
  });

const setSrc = (src: string): HTMLAudioElement => {
  destroy();
  const audio = new Audio(src);
  audio.autoplay = AUTO_PLAY;
  set({
    audio,
  });

  return audio;
};

const destroy = () => {
  const audio = get().audio;
  if (audio) {
    audio.pause();
    audio.remove();
  }
  set({
    audio: undefined,
  });
};

const setCurrentTime = (current: number) =>
  set({
    current,
  });

const setIsPlaying = (isPlaying: boolean) =>
  set({
    isPlaying,
  });

export { setDuration, setSrc, destroy, setCurrentTime, setIsPlaying };

export default useAudioStore;
