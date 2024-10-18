import type { FC, PropsWithChildren } from "react";

import { Header, SideNav } from "@/components/app";
import { request } from "@/helper/fetch";
import type { SongType, User } from "@/types";

import classes from "./layout.module.css";

type AppLayoutPropsType = PropsWithChildren;

const user = {
  _id: "1234",
  uname: "raat",
  profileUrl: "https://github.com/shadcn.png",
} satisfies User;

const AppLayout: FC<AppLayoutPropsType> = async ({ children }) => {
  const { musics } = (await request("/api/musics")) as {
    musics: SongType[];
  };

  return (
    <div
      className={classes.root}
      role="presentation"
    >
      <Header user={user} />

      <div
        className={classes["main-div"]}
        role="presentation"
      >
        <main className={classes.main}>{children}</main>
        <SideNav musics={musics} />
      </div>
    </div>
  );
};

export default AppLayout;
