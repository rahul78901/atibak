import type { FC} from 'react';

import styles from './pattern.module.css';
import Radio from '@/ui/radio';

const PatternLock: FC = () => <fieldset className={styles.fieldset}>
  <Radio/>
  <Radio/>
  <Radio/>
  
  <Radio/>
  <Radio/>
  <Radio/>
  
  <Radio/>
  <Radio/>
  <Radio/>
</fieldset>

  
export default PatternLock;
