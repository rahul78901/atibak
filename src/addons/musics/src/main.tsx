import type { FC } from 'react';

import HomeScreen from './components/home';

import styles from './style.module.css';

export const playing = false;

const MusicAddon: FC = () => (
  <div className={`${styles.music} ${playing ? styles.playing : ''}`}>
    <HomeScreen />
  </div>
);

export default MusicAddon;
