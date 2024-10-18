import type { SongType } from "@/types";

const START_INDEX = 1;
const END_INDEX = 5;
const ID_START = 2;
const ID_END = 8;

// eslint-disable-next-line require-await
const GET = async () => {
  const musics: SongType[] = [];

  for (let i = START_INDEX; i <= END_INDEX; i++) {
    const music = {
      _id: String(Math.random()).substring(ID_START),
      src: `/musics/s${i}.mp3`,
      img: "https://github.com/shadcn.png",
      title: `title ${i}`,
      badges: [String(Math.random()).substring(ID_START, ID_END)],
    } satisfies SongType;
    musics.push(music);
  }

  return Response.json({
    success: true,
    data: {
      musics,
    },
  });
};

export { GET };
