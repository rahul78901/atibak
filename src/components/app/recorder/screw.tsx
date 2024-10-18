import type { FC } from "react";

import { cn } from "@/lib/utils";

import classes from "./screw.module.css";

const Screw: FC = () => (
  <>
    <span
      className={cn(classes.screw, classes.big, classes.top, classes.left)}
      role="presentation"
    />
    <span
      className={cn(classes.screw, classes.top, classes.left, classes.middle)}
      role="presentation"
    />
    <span
      className={cn(classes.screw, classes.big, classes.top, classes.right)}
      role="presentation"
    />

    <span
      className={cn(classes.screw, classes.one, classes.left)}
      role="presentation"
    />
    <span
      className={cn(classes.screw, classes.two, classes.left)}
      role="presentation"
    />

    <span
      className={cn(classes.screw, classes.mid, classes.right)}
      role="presentation"
    />

    <span
      className={cn(classes.screw, classes.big, classes.bottom, classes.left)}
      role="presentation"
    />
    <span
      className={cn(
        classes.screw,
        classes.bottom,
        classes.left,
        classes.middle
      )}
      role="presentation"
    />
    <span
      className={cn(classes.screw, classes.big, classes.bottom, classes.right)}
      role="presentation"
    />
  </>
);

export default Screw;
