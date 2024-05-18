import type { FC } from 'react';

import HomeScreen from './components/home';
import MusicPlayerScreen from './components/music-player';
import useMusicStore from './store';

import styles from './style.module.css';

const MusicAddon: FC = () => {
  const id = useMusicStore((state) => state.id);

  const playing = id !== null;

  return (
    <div className={`${styles.music} ${playing ? styles.playing : ''}`}>
      <HomeScreen />
      {playing ? <MusicPlayerScreen /> : null}
    </div>
  );
};

export default MusicAddon;
