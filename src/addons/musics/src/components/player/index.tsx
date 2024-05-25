import { type FC, useCallback, useEffect } from 'react';

import Button from '@/ui/button';
import Slider from '@/ui/slider';

import Backword from '../../icons/backword';
import Forward from '../../icons/forward';
import Left from '../../icons/left';
import Lock from '../../icons/lock';
import Musics from '../../icons/musics';
import Mute from '../../icons/mute';
import Pause from '../../icons/pause';
import Play from '../../icons/play';
import Repeat from '../../icons/repeat';
import Right from '../../icons/right';
import Shuffle from '../../icons/shuffle';
import Volume from '../../icons/volume';
import useMusicStore, { changeMode, next, prev } from '../../store';
import useAudioStore, {
  onLoaded,
  onPause,
  onPlay,
  onUpdate,
  onVolume,
  pause,
  play,
  seek,
  skip,
} from '../../store/audio';
import usePlayerStore, { openPlayList } from '../../store/player';
import { formateTime } from '../../utils';

import styles from './style.module.css';

const VOLUME_STEP = 0.1,
  MIN = 0,
  VOLUME_MAX = 1;

const Player: FC = () => {
  const miniPlayer = usePlayerStore((state) => state.miniPlayer);

  const audioRef = useAudioStore((state) => state.audioRef);

  const { playing, duration, currentTime, volume } = useAudioStore(
    ({ playing, duration, currentTime, volume }) => ({
      playing,
      duration,
      currentTime,
      volume,
    })
  );

  const mode = useMusicStore((state) => state.mode);

  const music = useMusicStore(({ musics, id }) => musics[id!]);
  const { src } = music;

  const onEnded = useCallback(() => {
    if (mode === 'one') {
      audioRef.current?.play();
      return;
    }
    next();
  }, [mode, audioRef]);

  useEffect(() => {
    audioRef.current!.volume = volume;
  }, [volume, audioRef]);

  return (
    <footer className={`${styles.footer} ${!miniPlayer ? styles.open : ''}`}>
      <audio
        hidden
        onPlay={onPlay}
        onPause={onPause}
        onLoadedMetadata={onLoaded}
        onTimeUpdate={onUpdate}
        src={src}
        onEnded={onEnded}
        autoPlay
        ref={audioRef}
      />
      <div className={styles['volume-div']}>
        {volume > VOLUME_STEP ? <Volume /> : <Mute />}

        <Slider
          min={MIN}
          value={volume}
          step={VOLUME_STEP}
          max={VOLUME_MAX}
          onInput={onVolume}
        />

        <Button
          onClick={openPlayList}
          variant="icon"
          title="up comming musics"
        >
          <Musics />
        </Button>
      </div>

      <div className={styles['range-div']}>
        <span>{formateTime(currentTime)}</span>
        <Slider
          min={MIN}
          value={currentTime}
          max={duration}
          onInput={seek}
        />
        <span>{formateTime(duration)}</span>
      </div>

      <div className={styles['controler-div']}>
        <Button
          disabled
          variant="icon"
          title="shuffle"
        >
          <Shuffle />
        </Button>

        <div>
          <Button
            variant="icon"
            title="previous"
            onClick={prev}
          >
            <Left />
          </Button>

          <Button
            variant="icon"
            title="skip backword"
            onClick={skip('backword')}
          >
            <Backword />
          </Button>

          {playing ? (
            <Button
              variant="icon"
              title="pause"
              onClick={pause}
            >
              <Pause />
            </Button>
          ) : (
            <Button
              variant="icon"
              title="play"
              onClick={play}
            >
              <Play />
            </Button>
          )}

          <Button
            variant="icon"
            title="skip forward"
            onClick={skip('forward')}
          >
            <Forward />
          </Button>

          <Button
            variant="icon"
            title="next"
            onClick={next}
          >
            <Right />
          </Button>
        </div>

        {mode === 'none' ? (
          <Button
            variant="icon"
            title="loop"
            onClick={changeMode('repeat')}
          >
            <Repeat />
          </Button>
        ) : mode === 'repeat' ? (
          <Button
            variant="icon"
            title="lock"
            onClick={changeMode('one')}
          >
            <Lock />
          </Button>
        ) : (
          <Button
            variant="icon"
            title="no repeat"
            onClick={changeMode('none')}
          >
            none
          </Button>
        )}
      </div>
    </footer>
  );
};

export default Player;
