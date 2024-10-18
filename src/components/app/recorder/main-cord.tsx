import type { FC } from "react";

import { cn } from "@/lib/utils";

import Cord from "./cord";

import classes from "./main-cord.module.css";

type MainCordPropsType = {
  isActive: boolean;
  src: string;
};

const MainCord: FC<MainCordPropsType> = ({ isActive, src }) => (
  <div
    className={cn(classes["main-cord"], {
      ["paused"]: !isActive,
    })}
    style={{
      backgroundImage: `url(${src})`,
      animationDuration: "10s",
    }}
    role="presentation"
  >
    <Cord>
      <Cord>
        <Cord>
          <Cord />
        </Cord>
      </Cord>
    </Cord>
  </div>
);

export default MainCord;
