import { type FC, useCallback } from 'react';

import defaultImg from '../../assets/music.png';
import Up from '../../icons/up';
import useMusicStore from '../../store';
import usePlayerStore, { closePlayer, openPlayer } from '../../store/player';
import Player from '../player';

import styles from './style.module.css';

const MusicPlayerScreen: FC = () => {
  const miniPlayer = usePlayerStore((state) => state.miniPlayer);
  const { musics, id } = useMusicStore(({ musics, id, playlist }) => ({
    id,
    musics,
    playlist,
  }));

  const onUpClick = useCallback(() => {
    if (miniPlayer) {
      openPlayer();
    } else {
      closePlayer();
    }
  }, [miniPlayer]);

  if (!id) {
    return null;
  }

  const { name, imgUrl, singer, year } = musics[id];

  return (
    <div className={`${styles.player} ${!miniPlayer ? styles.open : ''}`}>
      <div className={styles.div}>
        <button
          onClick={onUpClick}
          className={styles.up}
        >
          <Up />
        </button>
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
      </div>

      <Player />
    </div>
  );
};

export default MusicPlayerScreen;
