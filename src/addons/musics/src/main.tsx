import { type FC, useEffect } from 'react';

import config, { type ResponseType } from '../../../config';
import HomeScreen from './components/home';
import MusicPlayerScreen from './components/music-player';
import useMusicStore, { type MusicType, setError, setMusics } from './store';

import styles from './style.module.css';

const MusicAddon: FC = () => {
  const { id, error } = useMusicStore(({ id, error }) => ({ id, error }));

  const playing = id !== null;

  useEffect(() => {
    const controller = new AbortController();

    const fetchMusics = async () => {
      const url = new URL('videos', config.BACKEND_URL);

      try {
        const res = await fetch(url);
        const data: ResponseType = await res.json();

        if (!data.success) {
          throw new Error(data.message);
        }

        setMusics(data.data as MusicType[]);
      } catch (err) {
        setError((err as Error).message);
      }
    };
    fetchMusics();
    return () => {
      controller?.abort();
    };
  }, []);

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className={`${styles.music} ${playing ? styles.playing : ''}`}>
      <HomeScreen />
      {playing ? <MusicPlayerScreen /> : null}
    </div>
  );
};

export default MusicAddon;
