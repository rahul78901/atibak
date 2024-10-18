import type { FC, PropsWithChildren } from "react";

import type { Metadata } from "next";

import { Toaster } from "@/components/ui/sonner";

import "./globals.css";
import classes from "./layout.module.css";

export const metadata: Metadata = {
  title: "Atibak",
  description: "Atibak is a next gen music player application",
};

type RootLayoutPropsType = PropsWithChildren;

const RootLayout: FC<RootLayoutPropsType> = ({ children }) => {
  return (
    <html lang="en">
      <body className={classes.body}>
        {children}
        <Toaster closeButton />
      </body>
    </html>
  );
};

export default RootLayout;
