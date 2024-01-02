import React from 'react';
import s from './Master.module.scss';
import Keyboard from '../keyboard/Keyboard';

type Props = {}

export default function Master({}: Props) {
  return (
    <div className={s.container}>Master
    <div className={s.value}>
      <h1>1200</h1>
      <h4>1200</h4>
    </div>
    <div className={s.buttonBlock}>
      <button>SET</button>
      <button>CLEAR</button>
    </div>
    <Keyboard />
    </div>
  )
}