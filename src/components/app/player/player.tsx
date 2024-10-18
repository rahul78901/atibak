"use client";

import { Star } from "lucide-react";
import { type FC, useCallback, useEffect, useRef } from "react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { formateTime } from "@/lib/utils";
import { useAnalyserStore, useAudioStore } from "@/store";
import type { SongType } from "@/types";

import Recorder from "../recorder/recorder";
import Actions from "./actions";

import classes from "./player.module.css";

const BAR_HEIGHT_MODIFIER = 0.6;
const INITIAL = 0;

type PlayerPropsType = {
  song: SongType;
};

const Player: FC<PlayerPropsType> = ({ song }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { audio, current, duration, isPlaying } = useAudioStore();
  const analyser = useAnalyserStore();

  const handleOnSeek = useCallback(
    ([value]: number[]) => {
      if (!audio) {
        return;
      }

      if (!isPlaying) {
        audio.play();
      }

      audio.currentTime = value;
    },
    [audio, isPlaying]
  );

  const handleStartStop = useCallback(
    (isActive: boolean) => {
      if (!audio) {
        return;
      }
      if (isActive) {
        audio.play();
      } else {
        audio.pause();
      }
    },
    [audio]
  );

  useEffect(() => {
    if (!analyser?.node || !canvasRef.current) {
      return;
    }
    const canvas = canvasRef.current;
    const { node } = analyser;

    const ctx = canvas.getContext("2d");

    if (!ctx) {
      return;
    }

    const { height, width } = canvas;

    node.fftSize = 256;

    const length = node.frequencyBinCount;
    const array = new Uint8Array(length);

    const barWidth = width / length;

    let frameId: number;

    const drow = (): void => {
      ctx.clearRect(INITIAL, INITIAL, width, height);
      ctx.fillStyle = "transparent";
      ctx.fillRect(INITIAL, INITIAL, width, height);

      let x = 0;
      node.getByteFrequencyData(array);

      for (let i = 0; i < length; i++) {
        const _barHeight = array[i];
        const barHeight = _barHeight * BAR_HEIGHT_MODIFIER;

        ctx.fillStyle = "hsl(346.8 77.2% 49.8%)";
        ctx.fillRect(x, height - barHeight, barWidth, barHeight);

        let _x = barWidth;
        x += ++_x;
      }

      frameId = requestAnimationFrame(drow);
    };

    if (isPlaying) {
      frameId = requestAnimationFrame(drow);
    }

    return () => {
      cancelAnimationFrame(frameId);
    };
  }, [analyser, canvasRef, isPlaying]);

  return (
    <div
      className={classes.player}
      role="presentation"
    >
      <Recorder
        src={song.img}
        isActive={isPlaying}
        onInput={handleStartStop}
      />
      <h2 className={classes.title}>{song.title}</h2>
      <div
        className={classes.info}
        role="presentation"
      >
        <div
          className={classes.badges}
          role="presentation"
        >
          {song.badges.map((badge) => (
            <Badge key={0}>{badge}</Badge>
          ))}
        </div>

        <div
          className={classes.right}
          role="presentation"
        >
          <Button
            className={classes["right-button"]}
            variant="ghost"
          >
            <span>200</span>
            <Star size={16} />
          </Button>
        </div>
      </div>

      <canvas
        ref={canvasRef}
        className={classes.canvas}
        role="presentation"
      />

      <div
        className={classes.seek}
        role="presentation"
      >
        <span>{formateTime(current)}</span>
        <Slider
          className={classes.slider}
          value={[current]}
          onValueChange={handleOnSeek}
          min={0}
          max={duration}
          step={0.1}
        />
        <span>{formateTime(duration)}</span>
      </div>

      <Actions />
    </div>
  );
};

export default Player;
