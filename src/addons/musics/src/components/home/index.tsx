import type { FC } from 'react';

import { playing } from '../../main';
import MusicItem from '../item';

import styles from './style.module.css';

const defaultItems = 10;

const HomeScreen: FC = () => (
  <div className={`${styles.div} ${playing ? styles.playing : ''}`}>
    <ul className={styles.ul}>
      {Array(defaultItems)
        .fill(null)
        .map((_, index) => (
          <MusicItem key={index} />
        ))}
    </ul>
  </div>
);

export default HomeScreen;
