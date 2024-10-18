import { CircleUserRound, Cog, LogOut } from "lucide-react";
import type { FC } from "react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Separator } from "@/components/ui/separator";
import type { User } from "@/types";

import PopoverItem from "./item";
import Nav from "./nav";

import classes from "./header.module.css";

const START = 0;
const END = 2;

type HeaderPropsType = {
  user: User;
};

const Header: FC<HeaderPropsType> = ({ user }) => {
  return (
    <header className={classes.header}>
      <Nav />

      <div role="presentation">
        <Popover>
          <PopoverTrigger asChild>
            <Avatar className="cursor-pointer">
              {user.profileUrl ? <AvatarImage src={user.profileUrl} /> : null}
              <AvatarFallback>{user.uname.slice(START, END)}</AvatarFallback>
            </Avatar>
          </PopoverTrigger>
          <PopoverContent
            className={classes.content}
            align="end"
            asChild
          >
            <div
              className={classes.group}
              role="group"
            >
              <PopoverItem
                href="/profile"
                icon={CircleUserRound}
              >
                profile
              </PopoverItem>
              <PopoverItem
                href="/settings"
                icon={Cog}
              >
                settings
              </PopoverItem>
              <Separator />
              <PopoverItem
                href="/logout"
                icon={LogOut}
              >
                logout
              </PopoverItem>
            </div>
          </PopoverContent>
        </Popover>
      </div>
    </header>
  );
};

export default Header;
