import { AudioLines } from "lucide-react";
import type { FC } from "react";

import Image from "next/image";

import { Badge } from "@/components/ui/badge";
import type { SongType } from "@/types";

import classes from "./play-list-item.module.css";

const SONG_SIZE = 50;

type PlayListItemPropsType = {
  song: SongType;
  index: number;
  // eslint-disable-next-line no-unused-vars
  onClick: (index: number) => void;
  isActive?: boolean;
};

const PlayListItem: FC<PlayListItemPropsType> = ({
  song,
  index,
  onClick,
  isActive = false,
}) => (
  <li
    onClick={() => onClick(index)}
    className={classes.item}
    role="button"
  >
    <div
      className={classes.group}
      role="presentation"
    >
      <picture className={classes.picture}>
        <Image
          width={SONG_SIZE}
          height={SONG_SIZE}
          src={song.img}
          alt={song.title}
        />
      </picture>
      <div
        className={classes.content}
        role="presentation"
      >
        <h3>{song.title}</h3>
        <Bagdes bagdes={song.badges} />
      </div>
    </div>
    {isActive && <AudioLines />}
  </li>
);

type BagdesPropsType = {
  bagdes: string[];
};

const Bagdes: FC<BagdesPropsType> = ({ bagdes }) => {
  if (!bagdes.length) {
    return null;
  }

  return (
    <div role="presentation">
      {bagdes.map((badge) => (
        <button key={badge}>
          <Badge>{badge}</Badge>
        </button>
      ))}
    </div>
  );
};

export default PlayListItem;
