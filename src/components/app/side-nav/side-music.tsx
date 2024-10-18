"use client";

import { type FC, type ReactNode, useCallback, useEffect } from "react";

import { useMediaQuery } from "@/hooks";
import {
  destroyAnalyser,
  incrimentIndex,
  setAnalyser,
  setCurrentTime,
  setDuration,
  setIsPlaying,
  setSrc,
  useAnalyserStore,
  useAudioStore,
} from "@/store";
import { SongType } from "@/types";

import MobileNav from "./mobile-music";

import classes from "./side-music.module.css";

const MAX_VOLUME = 1;
const DEFAULT_VOLUME = 0.4;

type SideMusicPropsType = { children: ReactNode; song: SongType };

const SideMusic: FC<SideMusicPropsType> = ({ children, song }) => {
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const { audio, duration, isPlaying } = useAudioStore();
  const analyser = useAnalyserStore();

  const handleLoadedMetadata = useCallback(() => {
    if (!audio) {
      return;
    }
    if (audio.volume === MAX_VOLUME) {
      audio.volume = DEFAULT_VOLUME;
    }
    setDuration(audio.duration);
    destroyAnalyser();
    setAnalyser(audio);
  }, [audio]);

  const handleTimeUpdate = useCallback(() => {
    if (!audio) {
      return;
    }
    if (!duration) {
      setDuration(audio.duration);
    }
    setCurrentTime(audio.currentTime);
  }, [audio, duration]);

  const handlePlay = useCallback(() => {
    setIsPlaying(true);
  }, []);

  const handlePause = useCallback(() => {
    setIsPlaying(false);
  }, []);

  const handleEnded = useCallback(() => {
    if (!incrimentIndex()) {
      setIsPlaying(false);
    }
  }, []);

  useEffect(() => {
    setSrc(song.src);
  }, [song.src]);

  useEffect(() => {
    if (!audio) {
      return;
    }

    if (!isPlaying) {
      audio.pause();
      return;
    }
    if (audio.paused) {
      audio.play();
    }
    analyser?.context?.resume();
  }, [isPlaying, analyser, audio]);

  useEffect(() => {
    if (audio?.paused) {
      audio.play();
    }
    return () => {
      audio?.pause();
      audio?.remove();
    };
  }, [audio]);

  useEffect(() => {
    if (!audio) {
      return;
    }

    audio.addEventListener("play", handlePlay);
    audio.addEventListener("pause", handlePause);
    audio.addEventListener("ended", handleEnded);
    audio.addEventListener("timeupdate", handleTimeUpdate);
    audio.addEventListener("loadedmetadata", handleLoadedMetadata);

    return () => {
      audio.removeEventListener("play", handlePlay);
      audio.removeEventListener("pause", handlePause);
      audio.removeEventListener("ended", handleEnded);
      audio.removeEventListener("timeupdate", handleTimeUpdate);
      audio.removeEventListener("loadedmetadata", handleLoadedMetadata);
    };
  }, [
    audio,
    handlePlay,
    handlePause,
    handleTimeUpdate,
    handleLoadedMetadata,
    handleEnded,
  ]);

  if (isDesktop) {
    return <div className={classes.wrapper}>{children}</div>;
  }
  return <MobileNav>{children}</MobileNav>;
};

export default SideMusic;
