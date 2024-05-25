import { type FC, useCallback } from 'react';

import Button from '@/ui/button';

import useMusicStore, { setId } from '../../store';
import usePlayerStore, { closePlayList } from '../../store/player';

import styles from './style.module.css';

const PlayList: FC = () => {
  const isPlayListOpened = usePlayerStore((state) => state.isPlayListOpened);

  const { id, playlist, musics } = useMusicStore(
    ({ playlist, id, musics }) => ({
      playlist,
      id,
      musics,
    })
  );

  const onClick = useCallback((id: string) => {
    return () => {
      setId(id);
      closePlayList();
    };
  }, []);

  return (
    <section className={`${styles.section} ${isPlayListOpened && styles.open}`}>
      <header className={styles.header}>
        <b>Up next</b>
        <Button
          variant="icon"
          className="border-primary"
          onClick={closePlayList}
          title="close"
        >
          <svg
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m19.5 8.25-7.5 7.5-7.5-7.5"
            />
          </svg>
        </Button>
      </header>

      <div className={styles.list}>
        <ul className={styles.ul}>
          {playlist.map((key) => {
            const { imgUrl, name, singer } = musics[key];
            return (
              <li
                key={key}
                className={`${styles.li} ${id === key && styles.active}`}
                onClick={onClick(key)}
              >
                <picture className={styles.pic}>
                  <img
                    src={imgUrl}
                    alt={name}
                  />
                </picture>
                <div className={styles.info}>
                  <strong>{name}</strong>
                  <em>{singer}</em>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default PlayList;
