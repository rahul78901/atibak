import type { FC } from 'react';

import styles from './style.module.css';

const Loader: FC = () => (
  <div className={styles.loader}>
    <div className={styles.ripple}>
      <div className={styles.div} />
      <div className={`${styles.div} ${styles.div2}`} />
    </div>
  </div>
);

export default Loader;
