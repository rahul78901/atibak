import type { FC} from 'react';

import styles from './pin.module.css';

import PinInput from '@/ui/pin';

const PinLock: FC = () => <fieldset className={styles.fieldset}>
  <PinInput/>
  <PinInput/>
  <PinInput/>
          <span className={styles.devidor} />
  <PinInput/>
  <PinInput/>
  <PinInput/>
</fieldset>

  
export default PinLock;
