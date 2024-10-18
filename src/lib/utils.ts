import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

const MINUTE = 60;
const MIN_LENGTH = 2;
const LEADING = "0";

const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

const formateTime = (time: number): string => {
  const sc = String(parseInt((time % MINUTE).toString())).padStart(
    MIN_LENGTH,
    LEADING
  );

  const mn = String(parseInt(((time / MINUTE) % MINUTE).toString())).padStart(
    MIN_LENGTH,
    LEADING
  );

  const hr = parseInt((time / (MINUTE * MINUTE)).toString());

  if (hr) {
    return `${String(hr).padStart(MIN_LENGTH, LEADING)}:${mn}:${sc}`;
  }

  return `${mn}:${sc}`;
};

export { cn, formateTime };
