import type { FC } from 'react';

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
import { isOpen } from '../music-player';

import styles from './style.module.css';

const Player: FC = () => (
  <footer className={`${styles.footer} ${isOpen ? styles.open : ''}`}>
    <div className={styles['volume-div']}>
      <Volume />

      <Mute />

      <Slider />

      <Button
        variant="icon"
        title="up comming musics"
      >
        <Musics />
      </Button>
    </div>

    <div className={styles['range-div']}>
      <span>00:00</span>
      <Slider />
      <span>00:00</span>
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
        >
          <Left />
        </Button>

        <Button
          variant="icon"
          title="skip backword"
        >
          <Backword />
        </Button>

        <Button
          variant="icon"
          title="pause"
        >
          <Pause />
        </Button>

        <Button
          variant="icon"
          title="play"
        >
          <Play />
        </Button>

        <Button
          variant="icon"
          title="skip forward"
        >
          <Forward />
        </Button>

        <Button
          variant="icon"
          title="next"
        >
          <Right />
        </Button>
      </div>

      <Button
        variant="icon"
        title="loop"
      >
        <Repeat />
      </Button>

      <Button
        variant="icon"
        title="lock"
      >
        <Lock />
      </Button>
    </div>
  </footer>
);

export default Player;
