import React from 'react'
import s from './Slave.module.scss'
import { useDispatch, useSelector } from 'react-redux'

type Props = {
}

export default function Slave({}: Props) {
  const count = useSelector((state) => state.counter.value)

  return (
    <div className={s.container}>
      Slave
      <div className={s.value}>
      <h1>{count}</h1>
    </div>
    <div className={s.buttonBlock}>
      <button>CLEAR</button>
    </div>
    </div>
  )
}
