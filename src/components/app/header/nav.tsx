import { Compass, Home, ListMusic, Menu, Search } from "lucide-react";
import type { FC } from "react";

import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";

import NavLink from "./nav-item";

import classes from "./nav.module.css";

const Nav: FC = () => {
  return (
    <div
      className={classes.wraper}
      role="presentation"
    >
      <Sheet>
        <SheetTrigger asChild>
          <Button
            size="icon"
            variant="menu"
          >
            <Menu />
          </Button>
        </SheetTrigger>
        <SheetContent
          className={classes.content}
          side="left"
        >
          <SheetHeader className={classes.header}>
            <Link
              className="select-none"
              href="/"
            >
              Atibak
            </Link>
          </SheetHeader>
          <nav className={classes.nav}>
            <NavLink
              href="/"
              icon={Home}
            >
              home
            </NavLink>
            <NavLink
              href="/explore"
              icon={Compass}
            >
              Explore
            </NavLink>
            <NavLink
              href="/search"
              icon={Search}
            >
              Search
            </NavLink>
            <NavLink
              href="/play-list"
              icon={ListMusic}
            >
              play list
            </NavLink>
          </nav>
        </SheetContent>
      </Sheet>
      <Link
        href="/"
        className={classes.link}
      >
        Atibak
      </Link>
    </div>
  );
};

export default Nav;
