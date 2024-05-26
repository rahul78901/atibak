import { create } from 'zustand';

import config, { type ResponseType } from '../../../../config';

const SKIP_NUMBER = 1;
const START_NUMBER = 0;

export type MusicType = {
  _id: string;
  name: string;
  singer: string;
  year: Date;
  src: string;
  imgUrl: string;
};

type ModeType = 'one' | 'repeat' | 'none';

type MusicStoreType = {
  id: MusicType['_id'] | null;
  ids: string[]; // for home page

  playlist: string[];

  musics: Record<MusicType['_id'], MusicType>;

  error: string | null;

  mode: ModeType;

  loading: boolean;
};

const useMusicStore = create<MusicStoreType>(() => ({
  id: null,

  playlist: [],

  ids: [],
  musics: {},
  error: null,
  mode: 'none',
  loading: false,
}));

const { setState, getState } = useMusicStore;

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
        setPlayList([data.data.video as MusicType, ...suggestions]);
      })
      .catch((e: Error) => setError(e.message));
  }
};

export const setError = (error: string | null): void =>
  setState({
    error,
  });

export const setLoading = (loading: boolean): void => setState({ loading });

export const setMusics = (list: MusicType[]): void => {
  const ids: MusicStoreType['ids'] = [];
  const musics: MusicStoreType['musics'] = {};

  for (const item of list) {
    ids.push(item._id);
    item.year = new Date(item.year);
    musics[item._id] = item;
  }

  setState({
    musics,
    ids: [...new Set(ids)],
    error: null,
  });
};

export const setPlayList = (list: MusicType[]): void => {
  const ids = new Set<string>();

  const musics: MusicStoreType['musics'] = {};

  for (const item of list) {
    ids.add(item._id);
    item.year = new Date(item.year);
    musics[item._id] = item;
  }

  setState((state) => {
    return {
      musics: {
        ...state.musics,
        ...musics,
      },
      ids: [...new Set(state.ids.concat([...ids]))],
      playlist: [...ids],
    };
  });
};

export const changeMode =
  (mode: ModeType): (() => void) =>
  (): void =>
    setState({
      mode,
    });

export const prev = (): void => {
  const { playlist, id, mode } = getState();
  const _index = playlist.findIndex((key) => key === id);
  const newIndex = playlist[_index - SKIP_NUMBER];
  if (newIndex) {
    setId(newIndex);
    return;
  }

  if (mode === 'repeat') {
    setId(playlist[playlist.length - SKIP_NUMBER]);
    return;
  }

  console.log('already first playing!');
};

export const next = (): void => {
  const { playlist, id, mode } = getState();
  const _index = playlist.findIndex((key) => key === id);

  const newIndex = playlist[_index + SKIP_NUMBER];

  if (newIndex) {
    setId(newIndex);
    return;
  }

  if (mode === 'repeat') {
    setId(playlist[START_NUMBER]);
    return;
  }

  console.log('already last playing!');
};

export default useMusicStore;
