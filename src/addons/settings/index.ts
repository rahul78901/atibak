import { lazy } from 'react';

const SettingAddon = lazy(() => import('./src/main'));

export const name = 'setting';

export { default as onBackPressed } from './src/onBackPressed.ts';

export { default as Logo } from './src/icons/logo.tsx';

export default SettingAddon;
