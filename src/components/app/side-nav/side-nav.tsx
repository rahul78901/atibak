"use client";

import { type FC, useCallback, useEffect } from "react";

import { setIndex, setPLayList, useSongStore } from "@/store";
import type { SongType } from "@/types";

import Player from "../player/player";
import PlayListItem from "./play-list-item";
import SideMusic from "./side-music";

import classes from "./side-nav.module.css";

type SideNavPropsType = {
  musics: SongType[];
};

const SideNav: FC<SideNavPropsType> = ({ musics }) => {
  const song = useSongStore((state) => state.songs.at(state.index));
  const songs = useSongStore((state) => state.songs);
  useEffect(() => {
    setPLayList(musics);
  }, [musics]);

  const handleIndexChange = useCallback((index: number) => setIndex(index), []);

  if (!song) {
    return null;
  }

  return (
    <SideMusic song={song}>
      <div
        className={classes.div}
        role="presentation"
      >
        <Player song={song} />
        <ul className={classes.list}>
          {songs.map((_song, index) => (
            <PlayListItem
              isActive={song._id === _song._id}
              index={index}
              onClick={handleIndexChange}
              song={_song}
              key={_song._id}
            />
          ))}
        </ul>
      </div>
    </SideMusic>
  );
};

export default SideNav;
