import React from 'react';
import s from './Master.module.scss';
import Keyboard from '../keyboard/Keyboard';

type Props = {}

export default function Master({}: Props) {
  return (
    <div className={s.container}>Master
      <Keyboard />
    </div>
  )
}