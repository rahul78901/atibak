import { type RefObject, createRef } from 'react';

import { create } from 'zustand';

const BACKWORD_MULTIPLAYER = -1;
const SKIP_DURATION = 5;

type AudioStoreType = {
  audioRef: RefObject<HTMLAudioElement>;
  playing: boolean;

  duration: number;
  currentTime: number;
  volume: number;
};

const useAudioStore = create<AudioStoreType>(() => ({
  audioRef: createRef<HTMLAudioElement>(),
  playing: true,

  duration: 0,
  currentTime: 0,
  volume: 0.5,
}));

const { setState, getState } = useAudioStore;

const onPlay = (): void => setState({ playing: true });

const onPause = (): void => setState({ playing: false });

const play = (): void => {
  getState().audioRef.current?.play();
};

const pause = (): void => getState().audioRef.current?.pause();

const onLoaded = (): void => {
  const { audioRef } = getState();

  setState({
    currentTime: 0,
    duration: audioRef.current?.duration,
  });
};

const onUpdate = (): void => {
  const { audioRef, duration } = getState();
  if (!duration) {
    setState({
      duration: audioRef.current?.duration,
    });
  }

  setState({
    currentTime: audioRef.current?.currentTime,
  });
};

const seek = (range: number): void => {
  const { audioRef, playing } = getState();

  if (!audioRef.current) {
    return;
  }

  audioRef.current.currentTime = range;

  if (!playing) {
    audioRef.current.play();
    setState({
      playing: true,
    });
  }
};

const onVolume = (volume: number): void => setState({ volume });

const skip =
  (direction: 'backword' | 'forward'): (() => void) =>
  (): void => {
    const { audioRef } = getState();

    audioRef.current!.currentTime +=
      direction === 'forward'
        ? SKIP_DURATION
        : SKIP_DURATION * BACKWORD_MULTIPLAYER;
  };

export {
  onPlay,
  onPause,
  onLoaded,
  onUpdate,
  play,
  pause,
  seek,
  onVolume,
  skip,
};

export default useAudioStore;
