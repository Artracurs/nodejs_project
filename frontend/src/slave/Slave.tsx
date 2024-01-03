// import React from 'react'
// import s from './Slave.module.scss'

// type Props = {}

// export default function Slave({}: Props) {
//   return (
//     <div className={s.container}>
//       Slave
//       <div className={s.value}>
//       <h1>1200</h1>
//     </div>
//     <div className={s.buttonBlock}>
//       <button>DONE</button>
//       <button>CLEAR</button>
//     </div>
//     </div>
//   )
// }

import React, { useState, useEffect } from 'react';
import { w3cwebsocket as W3CWebSocket } from 'websocket';

const client = new W3CWebSocket('ws://localhost:3001');

const Slave = () => {
    const [value, setValue] = useState('');

    useEffect(() => {
        client.onmessage = (message) => {
            const { sharedValue } = JSON.parse(message.data);
            setValue(sharedValue);
        };
    }, []);

    const clearValue = () => {
        client.send(JSON.stringify({ action: 'clear' }));
    };

    return (
        <div>
            <h1>{value}</h1>
            <button onClick={clearValue}>Clear</button>
        </div>
    );
};

export default Slave;
