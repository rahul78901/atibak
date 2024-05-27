import { useMemo, type FC, useState, useCallback, type ChangeEvent} from 'react';

import styles from './pin.module.css';

import PinInput from '@/ui/pin';
import type{PasswordLockPropsType} from './password';
import {verifyLock} from '&/settings/src/store';
import {errorFn} from '.';
import {setLock} from '$/index';

 //eslint-disable-next-line no-magic-numbers
const PINS = [0,1] as const
 //eslint-disable-next-line no-magic-numbers
const PINS2 =[2,3] as const

const PIN_LENGTH= PINS.length + PINS2.length


const PinLock: FC<PasswordLockPropsType> = ({setError,children}) =>{

  const [pins,setPins]=useState<Record<number,string>>({})

  const disable = useMemo(():boolean=>Object.keys(pins).length !==PIN_LENGTH, [pins])


  const updatePin=useCallback((index:number)=>(e:ChangeEvent<HTMLInputElement>):void=> setPins(state=>({
      ...state,
      [index]:e.target.value
    }))
  ,[])

const onClick =useCallback(()=>{
  setError('')

  const isVerified = verifyLock().pin(Object.values(pins).join(''))

  if(!isVerified){
    setError(errorFn('pin'))
    return
  }

  setLock(false)
},[pins,setError])

  return<>
<fieldset className={styles.fieldset}>
  {
    PINS.map((pin)=>
  <PinInput
    key={pin}
    value={pins[pin]||''}
    onInput={updatePin(pin)}
    minLength={1}
  />)}

          <span className={styles.devidor} />
  {PINS2.map((pin)=>
    <PinInput
      key={pin}
      value={pins[pin]||''}
      onInput={updatePin(pin)}
      minLength={1}
  />
  )}
</fieldset>
    {children(disable,onClick)}
  </>
}

export default PinLock;
