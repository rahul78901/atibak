"use client";

import { useEffect, useState } from "react";

// eslint-disable-next-line no-unused-vars
type UseMediaQueryType = (query: string) => boolean;

const useMediaQuery: UseMediaQueryType = (query: string) => {
  const [value, setValue] = useState(false);

  useEffect(() => {
    const onChange = (event: MediaQueryListEvent) => {
      setValue(event.matches);
    };

    const result = matchMedia(query);
    result.addEventListener("change", onChange);
    setValue(result.matches);

    return () => result.removeEventListener("change", onChange);
  }, [query]);

  return value;
};

export default useMediaQuery;
