import { type FC, useMemo } from 'react';

import Button from '@/ui/button';

import { useAddonStore } from '$/addon';

import styles from './style.module.css';

const MenuScreen: FC = () => {
  const { addons } = useAddonStore(({ addons }) => ({ addons }));

  const addonList = useMemo(() => Object.keys(addons).sort(), [addons]);

  return (
    <div className={styles.div}>
      <ul className={styles.menu}>
        {addonList.map((key, index) => {
          const addon = addons[key];
          return (
            <li key={index}>
              <Button
                title="addon"
                variant="icon"
              >
                <addon.Logo />
              </Button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default MenuScreen;
