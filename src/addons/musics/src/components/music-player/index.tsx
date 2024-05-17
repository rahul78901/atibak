import type { FC } from 'react';

import music from '../../assets/music.png';
import Up from '../../icons/up';
import Player from '../player';

import styles from './style.module.css';

export const isOpen = true;

const MusicPlayerScreen: FC = () => (
  <div className={`${styles.player} ${isOpen ? styles.open : ''}`}>
    <div className={styles.div}>
      <button className={styles.up}>
        <Up />
      </button>
      <picture className={styles.picture}>
        <img
          className={styles.img}
          src={music}
          alt="music name"
        />
      </picture>

      <div className={styles.info}>
        <strong className={styles.name}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
          nostrum aperiam cumque blanditiis neque voluptas minima, maiores
          incidunt error odit!
        </strong>
        <em className={styles.singer}>arijit</em>
        <time className={styles.time}>00/00/2000</time>
      </div>
    </div>

    <Player />
  </div>
);

export default MusicPlayerScreen;
