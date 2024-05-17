import type { FC } from 'react';

import HomeScreen from './components/home';
import MusicPlayerScreen from './components/music-player';

import styles from './style.module.css';

export const playing = true;

const MusicAddon: FC = () => (
  <div className={`${styles.music} ${playing ? styles.playing : ''}`}>
    <HomeScreen />
    <MusicPlayerScreen />
  </div>
);

export default MusicAddon;
