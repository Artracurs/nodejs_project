import React from 'react';
import s from './Master.module.scss';
import Keyboard from '../keyboard/Keyboard';
import { useDispatch, useSelector } from 'react-redux';
import { incrementAsync, reset } from '../features/monitor/monitorSlice'


type Props = {
}

export default function Master({}: Props) {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch();

  return (
    <div className={s.container}>Master
    <div className={s.value}>
      <h1>{count}</h1>
    </div>
    <div className={s.buttonBlock}>
      {/* <button onClick={() => dispatch(incrementAsync(1))}>SET</button> */}
      <button  onClick={()=> dispatch(reset())}>CLEAR</button>
    </div>
    <Keyboard />
    </div>
  )
}

