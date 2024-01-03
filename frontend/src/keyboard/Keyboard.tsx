import React, { useEffect, useState } from 'react'
import s from './Keyboard.module.scss'
import { useDispatch, useSelector } from 'react-redux';
import { incrementAsync, reset } from '../features/monitor/monitorSlice'

type Props = {}

export default function Keyboard({}: Props) {
    const [messages, setMessages] = useState([]);
    const [socket, setSocket] = useState(null);

    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch();

    useEffect(() => {
        const client = new WebSocket('ws://192.168.43.216:3001');

        client.onopen = () => {
            console.log('WebSocket Client Connected');
        };   
        
        client.onmessage = (message) => {
            console.log(message.data);
            dispatch(incrementAsync(count))
            setMessages(prevMessages => [message.data]);
        };

        client.onclose = () => {
            console.log('WebSocket Client Disconnected');
        };

        setSocket(client);

        return () => {
            client.close();
    };
    }, [])

    const sendMessage = (msg) => {
        if (socket && socket.readyState === WebSocket.OPEN) {
            socket.send(msg);
        }
    };

    const resetMessage = () => {
        if (socket && socket.readyState === WebSocket.OPEN) {
            socket.send("X");
            dispatch(reset());  
        }
    };
  
  return (
    <div className={s.container}>
        <div className={s.empty}>
        </div>
        <div className={s.bottom}>
            <div className={s.block}>
                <div  onClick={() => {dispatch(incrementAsync(1)); sendMessage(1)}} className={s.el}>1</div>
                <div  onClick={() => {dispatch(incrementAsync(4)); sendMessage(4)}} className={s.el}>4</div>
                <div  onClick={() => {dispatch(incrementAsync(7)); sendMessage(7)}} className={s.el}>7</div>
            </div>
            <div className={s.block}>
                <div  onClick={() => {dispatch(incrementAsync(2)); sendMessage(2)}} className={s.el}>2</div>
                <div  onClick={() => {dispatch(incrementAsync(5)); sendMessage(5)}} className={s.el}>5</div>
                <div  onClick={() => {dispatch(incrementAsync(8)); sendMessage(8)}} className={s.el}>8</div>
            </div>
            <div className={s.block}>
                <div  onClick={() => {dispatch(incrementAsync(3)); sendMessage(3)}} className={s.el}>3</div>
                <div  onClick={() => {dispatch(incrementAsync(6)); sendMessage(6)}} className={s.el}>6</div>
                <div  onClick={() => {dispatch(incrementAsync(9)); sendMessage(9)}} className={s.el}>9</div>
            </div>
            <div className={s.block}>
                <div className={s.el}>+</div>
                <div className={s.el}>-</div>
                <div  onClick={() => {dispatch(incrementAsync(0)); sendMessage(0)}} className={s.el}>0</div>
            </div>
        </div>
        <button  onClick={() => resetMessage()} className={s.button}>CLEAR</button>
    </div>
  )
}