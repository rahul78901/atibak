import { create } from 'zustand';

import config, { type ResponseType } from '../../../../config';

export type MusicType = {
  _id: string;
  name: string;
  singer: string;
  year: Date;
  src: string;
  imgUrl: string;
};

type MusicStoreType = {
  id: MusicType['_id'] | null;
  ids: string[]; // for home page

  playlist: string[];

  musics: Record<MusicType['_id'], MusicType>;

  error: string | null;
};

const useMusicStore = create<MusicStoreType>(() => ({
  id: null,

  playlist: [],

  ids: [],
  musics: {},
  error: null,
}));

const { setState } = useMusicStore;

export const setId = (id: string, requestForPlayList = false): void => {
  setState({
    id,
  });

  if (requestForPlayList) {
    const url = new URL(`videos/${id}`, config.BACKEND_URL);

    fetch(url)
      .then((res) => res.json())
      .then((data: ResponseType) => {
        if (!data.success) {
          throw new Error(data.message);
        }
        const suggestions = data.data.suggestions as MusicType[];
        setPlayList(suggestions);
      })
      .catch((e: Error) => setError(e.message));
  }
};

export const setError = (error: string): void =>
  setState({
    error,
  });

export const setMusics = (list: MusicType[]): void => {
  const ids: MusicStoreType['ids'] = [];
  const musics: MusicStoreType['musics'] = {};

  for (const item of list) {
    ids.push(item._id);
    musics[item._id] = item;
  }

  setState({
    musics,
    ids,
    error: null,
  });
};

export const setPlayList = (list: MusicType[]): void => {
  const ids: MusicStoreType['ids'] = [];

  const musics: MusicStoreType['musics'] = {};

  for (const item of list) {
    ids.push(item._id);
    musics[item._id] = item;
  }

  setState((state) => {
    return {
      musics: {
        ...state.musics,
        ...musics,
      },
      ids: [...new Set(state.ids.concat(ids))],
      playlist: ids,
    };
  });
};

export default useMusicStore;
