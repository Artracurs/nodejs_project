import React from 'react'
import s from './Keyboard.module.scss'

type Props = {}

export default function Keyboard({}: Props) {
  return (
    <div className={s.container}>
        <div className={s.empty}>
        </div>
        <div className={s.bottom}>
            <div className={s.block}>
                <div className={s.el}>1</div>
                <div className={s.el}>4</div>
                <div className={s.el}>7</div>
            </div>
            <div className={s.block}>
                <div className={s.el}>2</div>
                <div className={s.el}>5</div>
                <div className={s.el}>8</div>
            </div>
            <div className={s.block}>
                <div className={s.el}>3</div>
                <div className={s.el}>6</div>
                <div className={s.el}>9</div>
            </div>
            <div className={s.block}>
                <div className={s.el}></div>
                <div className={s.el}></div>
                <div className={s.el}>0</div>
            </div>
        </div>
    </div>
  )
}