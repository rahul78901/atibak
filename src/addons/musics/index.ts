import { lazy } from 'react';

const MusicAddon = lazy(() => import('./src/main'));

export const name = 'music';

export { default as onBackPressed } from './src/onBackPressed';

export { default as Logo } from './src/icons/logo';

export default MusicAddon;
