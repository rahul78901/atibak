import type { FC } from 'react';

import useMusicStore from '../../store';
import MusicItem from '../item';

import styles from './style.module.css';

const HomeScreen: FC = () => {
  const { id, ids, musics } = useMusicStore(({ id, ids, musics }) => ({
    id,
    ids,
    musics,
  }));

  const playing = id !== null;

  return (
    <div className={`${styles.div} ${playing ? styles.playing : ''}`}>
      <ul className={styles.ul}>
        {ids.map((_id) => (
          <MusicItem
            music={musics[_id]}
            key={_id}
          />
        ))}
      </ul>
    </div>
  );
};
export default HomeScreen;
