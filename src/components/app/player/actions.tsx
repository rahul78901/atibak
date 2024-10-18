"use client";

import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  Pause,
  Play,
} from "lucide-react";
import { type FC, useCallback, useEffect } from "react";

import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  decrimentIndex,
  incrimentIndex,
  setIsPlaying,
  useAudioStore,
} from "@/store";

import classes from "./actions.module.css";

const SKIP_DURATION_IS_SECONDS = 5;

const Actions: FC = () => {
  const { audio, isPlaying } = useAudioStore();

  const handlePlayPause = useCallback(() => {
    setIsPlaying(!isPlaying);
  }, [isPlaying]);

  const handleSkip = useCallback(
    (direction: "prev" | "next" = "next") =>
      () => {
        if (!audio) {
          return;
        }

        if (direction === "prev") {
          audio.currentTime -= SKIP_DURATION_IS_SECONDS;
          return;
        }
        audio.currentTime += SKIP_DURATION_IS_SECONDS;
      },
    [audio]
  );

  const handlePrevious = useCallback(() => {
    if (!decrimentIndex()) {
      toast.warning("The most first in the playlist is playing!");
    }
  }, []);

  const handleNext = useCallback(() => {
    if (!incrimentIndex()) {
      toast.warning("The last in the playlist is playing!");
    }
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      e.preventDefault();
      const code = e.code.toLowerCase();
      const { shiftKey, ctrlKey, altKey, metaKey } = e;
      switch (code) {
        case "arrowleft":
        case "arrowright": {
          const handler = handleSkip(code === "arrowleft" ? "prev" : "next");
          handler();
          if (shiftKey || ctrlKey || altKey || metaKey) {
            handler();
          }
          break;
        }
        default:
          if (!shiftKey || !ctrlKey || !altKey || !metaKey) {
            toast(`${e.code} is not implemented yet!`, {
              description: `open an issue to "" if want to realy implemented this!`,
            });
          }
          break;
      }
    };

    document.addEventListener("keyup", handleKeyDown);
    return () => {
      document.removeEventListener("keyup", handleKeyDown);
    };
  }, [handleSkip]);

  return (
    <div
      className={classes.group}
      role="group"
    >
      <Button
        onClick={handlePrevious}
        title="play"
        variant="action"
      >
        <ChevronLeft />
      </Button>
      <Button
        onClick={handleSkip("prev")}
        title="play"
        variant="action"
      >
        <ChevronsLeft />
      </Button>
      <Button
        className={cn({
          "bg-primary": isPlaying,
        })}
        onClick={handlePlayPause}
        title="play"
        variant="action"
      >
        {isPlaying ? <Pause /> : <Play />}
      </Button>
      <Button
        onClick={handleSkip()}
        title="play"
        variant="action"
      >
        <ChevronsRight />
      </Button>
      <Button
        onClick={handleNext}
        title="play"
        variant="action"
      >
        <ChevronRight />
      </Button>
    </div>
  );
};

export default Actions;
