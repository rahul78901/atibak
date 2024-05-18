const { floor } = Math;

const MINUTES = 60;
const DEFAULT_LENGTH = 2;

export const formateTime = (duration: number): string => {
  if (!duration) {
    return '00:00';
  }

  const hr = floor(duration / (MINUTES * MINUTES)),
    mn = floor(duration / MINUTES)
      .toString()
      .padStart(DEFAULT_LENGTH, '0'),
    sc = floor(duration % MINUTES)
      .toString()
      .padStart(DEFAULT_LENGTH, '0');

  const mnsc = `${mn}:${sc}`;

  if (hr) {
    return `${hr.toString().padStart(DEFAULT_LENGTH, '0')}:${mnsc}`;
  }

  return mnsc;
};
