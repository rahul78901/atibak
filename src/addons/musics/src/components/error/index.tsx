import type { FC } from 'react';

import Button from '@/ui/button';

import styles from './style.module.css';

type ErrorScreenPropsType = {
  error: string;
};

const ErrorScreen: FC<ErrorScreenPropsType> = ({ error }) => (
  <div className={styles.screen}>
    <h2 className={styles.h2}>{error}</h2>
    <Button>re Freash</Button>
  </div>
);

export default ErrorScreen;
