import { create } from "zustand";

import type { SongType } from "@/types";

const DEFAULT_INDEX = 0;

const INCRIMENT = 1;
const FIRST_INDEX = 0;

type SongStoreType = {
  index: number;
  songs: SongType[];
  id?: SongType["_id"];
};

const useSongStore = create<SongStoreType>(() => ({
  index: DEFAULT_INDEX,
  songs: [],
}));

const { setState: set, getState: get } = useSongStore;

const setPLayList = (songs: SongType[]) =>
  set({
    songs,
    index: DEFAULT_INDEX,
    id: songs.at(DEFAULT_INDEX)?._id,
  });

const setIndex = (index: number) =>
  set({
    index,
    id: get().songs.at(index)?._id,
  });

const incrimentIndex = () => {
  const {
    index: oldIndex,
    songs: { length },
  } = get();
  const index = oldIndex + INCRIMENT;

  if (index < length) {
    setIndex(index);
    return true;
  }
  return false;
};

const decrimentIndex = () => {
  const { index: oldIndex } = get();
  const index = oldIndex - INCRIMENT;

  if (index >= FIRST_INDEX) {
    setIndex(index);
    return true;
  }
  return false;
};

export { setIndex, setPLayList, incrimentIndex, decrimentIndex };

export default useSongStore;
