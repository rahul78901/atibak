import type { ElementType, FC } from "react";

import Link from "next/link";

import { Button } from "@/components/ui/button";

import classes from "./item.module.css";

type PopoverItemPropsType = {
  icon: ElementType;
  children: string;
  href: string;
};

const PopoverItem: FC<PopoverItemPropsType> = ({
  icon: Icon,
  children,
  href,
}) => {
  return (
    <Link href={href}>
      <Button
        className={classes.button}
        variant="outline"
      >
        <Icon size={20} />
        <span className={classes.span}>{children}</span>
      </Button>
    </Link>
  );
};

export default PopoverItem;
