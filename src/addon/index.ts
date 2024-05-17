import type { FC } from 'react';

import MusicApp, {
  Logo as MusicLogo,
  name as musicName,
  onBackPressed as musicOnBackPressed,
} from '&/musics';
import SettingApp, {
  Logo as SettingLogo,
  name as settingName,
  onBackPressed as settingOnBackPressed,
} from '&/settings';

export type AddonType = {
  name: string;
  onBackPressed: () => boolean;
  App: FC;
  Logo: FC;
};

const setting = addon(
  settingName,
  SettingLogo,
  SettingApp,
  settingOnBackPressed
);

const music = addon(musicName, MusicLogo, MusicApp, musicOnBackPressed);

export const addons = {
  [setting.name]: setting,
  [music.name]: music,
} satisfies Record<AddonType['name'], AddonType>;

function addon(
  name: AddonType['name'],
  Logo: AddonType['Logo'],
  App: AddonType['App'],
  onBackPressed: AddonType['onBackPressed']
): AddonType {
  return {
    name,
    Logo,
    App,
    onBackPressed,
  };
}
