import { CirclePower } from "lucide-react";
import type { FC } from "react";

import { cn } from "@/lib/utils";

import Bar from "./bar";
import Cord from "./cord";
import MainCord from "./main-cord";
import Screw from "./screw";

import classes from "./recorder.module.css";

type RecorderPropsType = {
  src: string;
  isActive?: boolean;
  // eslint-disable-next-line no-unused-vars
  onInput: (isActive: boolean) => void;
};
const Recorder: FC<RecorderPropsType> = ({ isActive = true, onInput, src }) => (
  <div
    className={classes.recorder}
    style={{
      gridTemplateColumns: "3fr 1fr",
    }}
    role="presentation"
  >
    <MainCord
      src={src}
      isActive={isActive}
    />
    <div
      className={classes.right}
      role="presentation"
    >
      <Cord
        className={cn(classes.cord, {
          "rotate-[30deg]": isActive,
        })}
      >
        <Cord>
          <Cord>
            <span
              className={classes.tip}
              role="presentation"
            />
          </Cord>
        </Cord>
        <Bar />
      </Cord>

      <label>
        <input
          onChange={(e) => {
            onInput((e.target as HTMLInputElement).checked);
          }}
          checked={isActive}
          type="checkbox"
          className={classes.input}
        />
        <span className={classes.switch}>
          <CirclePower className="h-[70%] w-[70%]" />
        </span>
      </label>
    </div>
    <Screw />
  </div>
);

export default Recorder;
