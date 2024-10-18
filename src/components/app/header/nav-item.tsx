import type { ElementType, FC } from "react";

import Link from "next/link";

import { Button } from "@/components/ui/button";

import classes from "./nav-item.module.css";

type NavLinkPropsType = {
  icon: ElementType;
  children: string;
  href: string;
};
const NavLink: FC<NavLinkPropsType> = ({ children, icon: Icon, href }) => {
  return (
    <Button
      className={classes.button}
      variant="ghost"
      asChild
    >
      <Link
        className={classes.link}
        href={href}
      >
        <Icon size={20} />
        <span>{children}</span>
      </Link>
    </Button>
  );
};

export default NavLink;
