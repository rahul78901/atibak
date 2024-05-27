import { useCallback, type FC, useState, useMemo} from 'react';

import styles from './pattern.module.css';
import Radio from '@/ui/radio';
import type {PasswordLockPropsType} from './password';
import {setError} from '&/musics/src/store';
import {verifyLock} from '&/settings/src/store';
import {errorFn} from '.';
import {setLock} from '$/index';

const MINIMUM_PATTERN_LENGTH = 4
const NUMBER_OF_DOTS=9
  const DOTS = Array(NUMBER_OF_DOTS).fill(null)
//eslint-disable-next-line no-unused-vars
.map((_,index)=>index)

const PatternLock: FC<PasswordLockPropsType> = ({children}) =>{
  const [pattern,setPattern]= useState<number[]>([])
  const onChange = useCallback((index:number)=>():void=>{
    setPattern(pattern=>{
      if(pattern.includes(index)){
        return [...pattern.filter(item=>index!==item)]
      }
      return [...pattern,index]
    })
  },[])

  const disabled = useMemo(():boolean=>pattern.length < MINIMUM_PATTERN_LENGTH, [pattern])

  const onClick=useCallback(()=>{
    setError('')

  const isVerified = verifyLock().pattern(pattern)

  if(!isVerified){
    setError(errorFn('pin'))
    return
  }

  setLock(false)
  }, [pattern])
  return(
    <>
      <fieldset className={styles.fieldset}>
      {
        DOTS.map((index)=>
          <Radio
            key={index}
            checked={
              pattern.includes(index)
            }
            onChange={onChange(index)}
        />
        )
      }
      </fieldset>
      {children(disabled,onClick)}
    </>
  )
}

  
export default PatternLock;
