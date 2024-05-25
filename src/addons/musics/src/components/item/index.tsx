import type { FC } from 'react';

import defaultImg from '../../assets/music.png';
import { MusicType, setId } from '../../store';

import styles from './style.module.css';

type MusicItemPropsType = {
  music: Omit<MusicType, 'src'>;
};

const MusicItem: FC<MusicItemPropsType> = ({
  music: { _id, name, singer, year, imgUrl },
}) => (
  <li
    onClick={() => setId(_id, true)}
    className={styles.item}
  >
    <picture className={styles.picture}>
      <img
        className={styles.img}
        src={imgUrl || defaultImg}
        alt={name}
      />
    </picture>

    <div className={styles.info}>
      <strong className={styles.name}>{name}</strong>

      <em className={styles.singer}>{singer}</em>

      <time className={styles.time}>{String(year)}</time>
    </div>
  </li>
);

export default MusicItem;
