// import React from 'react';
// import s from './Master.module.scss';
// import Keyboard from '../keyboard/Keyboard';

// type Props = {}

// export default function Master({}: Props) {
//   return (
//     <div className={s.container}>Master
//     <div className={s.value}>
//       <h1>1200</h1>
//       <h4>1200</h4>
//     </div>
//     <div className={s.buttonBlock}>
//       <button>SET</button>
//       <button>CLEAR</button>
//     </div>
//     <Keyboard />
//     </div>
//   )
// }

import React, { useState, useEffect } from 'react';
import { w3cwebsocket as W3CWebSocket } from 'websocket';

const client = new W3CWebSocket('ws://localhost:3001');

const Master = () => {
    const [value, setValue] = useState('');

    useEffect(() => {
        client.onopen = () => {
            console.log('WebSocket Client Connected');
        };
    }, []);

    const handleSetValue = () => {
        client.send(JSON.stringify({ action: 'set', value }));
    };

    const handleClearValue = () => {
        setValue('');
        client.send(JSON.stringify({ action: 'clear' }));
    };

    return (
        <div>
            {Array.from({ length: 10 }, (_, i) => (
                <button key={i} onClick={() => setValue(value + i.toString())}>{i}</button>
            ))}
            <button onClick={handleSetValue}>Set Value</button>
            <button onClick={handleClearValue}>Clear Value</button>
        </div>
    );
};

export default Master;
