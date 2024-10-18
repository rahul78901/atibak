import type { FC } from "react";

import Link from "next/link";

const NotFound: FC = () => (
  <div
    className="mx-auto flex h-full w-full max-w-[35ch] flex-col items-center justify-center gap-6 text-pretty"
    role="presentation"
  >
    <h2 className="text-3xl text-primary">UH OH! You&apos;re lost.</h2>
    <p className="text-center text-sm capitalize">
      The page you are looking for does not exist. How you got here is a{" "}
      <span className="text-primary">mystery</span>. But you can click the
      button below to go back to the homepage.
    </p>
    <Link
      className="rounded-3xl border-2 border-primary px-8 py-1.5 underline-offset-2 hover:underline"
      href="/"
    >
      Home
    </Link>
  </div>
);

export default NotFound;
