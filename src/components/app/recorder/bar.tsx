import type { FC } from "react";

import classes from "./bar.module.css";

const Bar: FC = () => (
  <div
    className={classes.div}
    role="presentation"
  >
    <span
      className={classes.span}
      role="presentation"
    />
  </div>
);

export default Bar;
