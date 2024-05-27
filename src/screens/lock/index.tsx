import { lazy, type FC, useState,} from 'react';

import styles from './style.module.css';
const PasswordLock =lazy(()=>import('./password'));

import Button from '@/ui/button';
import GetInIcon from '₹/get-in';
import type{PasswordLockPropsType} from './password';
import useSettingStore from '&/settings/src/store';

export const errorFn=(error:string)=>error.concat(" does not match")

const LockScreen: FC = () => {
  const [error,setError]= useState<string>('')
  const lockScreenText = useSettingStore(state=>state.lockScreenText)
  return (
    <div className={styles.screen}>
      <div className={styles.content}>
        {lockScreenText?<p className={styles.msg}>{lockScreenText}</p>:null}
        {
          error?
            <p className={styles.error}>{error}</p>
          :null
        } 
          <LockScreenImpl setError={setError}>
            {(disabled,onClick)=>
        <Button onClick={onClick} disabled={disabled} variant='icon'>
          <GetInIcon/> 
        </Button>
            }
            </LockScreenImpl>
      </div>
    </div>
  );
}

type LockScreenImplPropsType= PasswordLockPropsType
const LockScreenImpl:FC<LockScreenImplPropsType>=({children,setError})=>{

  return <PasswordLock setError={setError}>
    {children}
  </PasswordLock>
}

export default LockScreen;
