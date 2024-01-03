import React from 'react';
import s from './Master.module.scss';
import Keyboard from '../keyboard/Keyboard';
import { useDispatch, useSelector } from 'react-redux';
import { incrementAsync, reset } from '../features/monitor/monitorSlice'

type Props = {
}

export default function Master({ }: Props) {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch();

  return (
    <div className={s.container}>
      <div className={s.value}>
        <h1>{count}</h1>
      </div>
      <Keyboard />
      <div className={s.buttonBlock}>
        {/* <button onClick={() => dispatch(reset())}>CLEAR</button> */}
      </div>
    </div>
  )
}

