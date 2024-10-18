import type { FC, PropsWithChildren } from "react";

import { cn } from "@/lib/utils";

import classes from "./cord.module.css";

type CordPropsType = PropsWithChildren & {
  className?: string;
};

const Cord: FC<CordPropsType> = ({ children, className }) => (
  <div
    className={cn(classes.cord, className)}
    role="presentation"
  >
    {children}
  </div>
);
export default Cord;
