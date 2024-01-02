import React from 'react'
import s from './Keyboard.module.scss'

type Props = {}

export default function Keyboard({}: Props) {
  return (
    <div className={s.container}>
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
        <div>6</div>
        <div>7</div>
        <div>8</div>
        <div>9</div>
        <div>0</div>
    </div>
  )
}