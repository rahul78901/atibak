import { create } from 'zustand';

export type MusicType = {
  _id: string;
  name: string;
  singer: string;
  date: Date;
  src: string;
  imgUrl: string;
};

type MusicStoreType = {
  id: MusicType['_id'] | null;
  ids: string[]; // for home page

  playlist: string[];

  musics: Record<MusicType['_id'], MusicType>;
};

const musics = {
  '66384de3259bda2293a18cd5': {
    _id: '66384de3259bda2293a18cd5',
    name: 'Jhoome Jo Pathaan Song | Shah Rukh Khan, Deepika | Vishal & Sheykhar, Arijit Singh, Sukriti, Kumaar',
    imgUrl: 'https://i.ytimg.com/vi/YxWlaYCA8MU/hqdefault.jpg',
    singer: 'Arijit',
    src: 'https://firebasestorage.googleapis.com/v0/b/aide-frist-b72c7.appspot.com/o/YxWlaYCA8MU.mp3?alt=media&token=503fb569-d6b1-4e04-9dbb-6be7c9c24e8f',
    date: new Date(),
  },
  '66384de3259bda2293a18cd6': {
    _id: '66384de3259bda2293a18cd6',
    name: 'Not Like Us',
    imgUrl: 'https://i.ytimg.com/vi/T6eK-2OQtew/hqdefault.jpg',
    singer: "I don't know",
    src: 'https://firebasestorage.googleapis.com/v0/b/aide-frist-b72c7.appspot.com/o/2QiFl9Dc7D0.mp3?alt=media&token=f3f63513-fb8f-4d90-855b-6d514d25efdf',
    date: new Date(),
  },
} satisfies MusicStoreType['musics'];

const ids = Object.keys(musics);

const useMusicStore = create<MusicStoreType>(() => ({
  id: null,

  playlist: [],

  ids,
  musics,
}));

const { setState } = useMusicStore;

export const setId = (id: string): void =>
  setState({
    id,
  });

export default useMusicStore;
