import type { FC } from 'react';

import music from '../../assets/music.png';

import styles from './style.module.css';

const MusicItem: FC = () => (
  <li className={styles.item}>
    <picture className={styles.picture}>
      <img
        className={styles.img}
        src={music}
        alt="music name"
      />
    </picture>

    <div className={styles.info}>
      <strong className={styles.name}>song name</strong>

      <em className={styles.singer}>singer</em>

      <time className={styles.time}>12/12/2000</time>
    </div>
  </li>
);

export default MusicItem;
