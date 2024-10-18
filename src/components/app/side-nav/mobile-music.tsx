import { Music2 } from "lucide-react";
import type { FC, ReactNode } from "react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";

import classes from "./mobile-music.module.css";

type MobileNavPropsType = {
  children: ReactNode;
};

const MobileNav: FC<MobileNavPropsType> = ({ children }) => {
  return (
    <Sheet defaultOpen>
      <SheetTrigger
        className={classes.button}
        asChild
      >
        <Button
          size="icon"
          variant="menu"
        >
          <Music2 />
        </Button>
      </SheetTrigger>
      <SheetContent
        className={classes.content}
        side="right"
      >
        <SheetHeader className={classes.header}>Aribak</SheetHeader>
        {children}
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
