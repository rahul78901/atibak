import { type FC, useEffect } from 'react';

import Loader from '@/loader';

import config, { type ResponseType } from '../../../config';
import HomeScreen from './components/home';
import MusicPlayerScreen from './components/music-player';
import useMusicStore, {
  type MusicType,
  setError,
  setLoading,
  setMusics,
} from './store';

import styles from './style.module.css';

const MusicAddon: FC = () => {
  const { id, error, loading } = useMusicStore(({ id, error, loading }) => ({
    id,
    error,
    loading,
  }));

  const playing = id !== null;

  useEffect(() => {
    const controller = new AbortController();

    const fetchMusics = async () => {
      const url = new URL('videos', config.BACKEND_URL);

      setLoading(false);
      setError(null);
      try {
        const res = await fetch(url);
        const data: ResponseType = await res.json();

        if (!data.success) {
          throw new Error(data.message);
        }

        setMusics(data.data as MusicType[]);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
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

  if (loading) {
    return <Loader />;
  }

  return (
    <div className={`${styles.music} ${playing ? styles.playing : ''}`}>
      <HomeScreen />
      {playing ? <MusicPlayerScreen /> : null}
    </div>
  );
};

export default MusicAddon;
