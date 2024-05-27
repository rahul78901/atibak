import {useState, type FC, type ReactNode, useMemo, useCallback, type Dispatch, type SetStateAction} from 'react';

import Input from '@/ui/input';
import {verifyLock} from '&/settings/src/store';
import {setLock} from '$/index';
import {errorFn} from '.';

export type PasswordLockPropsType={
  //eslint-disable-next-line no-unused-vars
  children:(disabled:boolean,onClick:()=>void)=>ReactNode
  setError: Dispatch<SetStateAction<string>>
}

const MINIMUM_PASSWORD_LENGTH=8

const PasswordLock:FC<PasswordLockPropsType> =({children,setError})=>{
  const [password,setPassword] = useState<string>('')

  const disabled = useMemo(():boolean=> password.length < MINIMUM_PASSWORD_LENGTH ?true:false, [password.length])

  const onClick =useCallback(()=>{
    setError('')
    const verified= verifyLock().password(password)
    if(!verified){
      setError(errorFn('password'))
      return 
    }

    setLock(false)

  },[password,setError])

  return (
    <>
      <Input value={password} onInput={(e)=>setPassword((e.target as HTMLInputElement).value)} placeholder='Enter Password To Unlock' />
      {children(disabled,onClick)}
    </>
  )
}

export default PasswordLock;
