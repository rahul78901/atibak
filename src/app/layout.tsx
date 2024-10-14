import type { FC, PropsWithChildren } from "react";

import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Atibak",
  description: "Atibak is a next gen music player application",
};

type RootLayoutPropsType = PropsWithChildren;

const _x = 0;
// const __x = 0;
// const ___x = 0;
// const ___ = 0;
// const __ = 0;
const _ = 0;

const RootLayout: FC<RootLayoutPropsType> = ({ children }) => {
  console.log(_x);

  return (
    <html lang="en">
      <body className="h-screen w-screen overflow-hidden">{children}</body>
    </html>
  );
};

export default RootLayout;
