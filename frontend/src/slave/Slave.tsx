import React from 'react'
import s from './Slave.module.scss'

type Props = {}

export default function Slave({}: Props) {
  return (
    <div className={s.container}>
      Slave
      <div className={s.value}>
      <h1>1200</h1>
    </div>
    <div className={s.buttonBlock}>
      <button>DONE</button>
      <button>CLEAR</button>
    </div>
    </div>
  )
}