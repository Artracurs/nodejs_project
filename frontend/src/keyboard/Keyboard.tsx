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
        // Initialize WebSocket
        const client = new WebSocket('ws://192.168.43.216:3001');

        // Event listener for when the connection opens
        client.onopen = () => {
            console.log('WebSocket Client Connected');
        };   
        
        // Event listener for when a message is received
        client.onmessage = (message) => {
            console.log(message.data);
            setMessages(prevMessages => [message.data]);
        };

        // Event listener for when the connection closes
        client.onclose = () => {
            console.log('WebSocket Client Disconnected');
        };

        // Set the socket in the state
        setSocket(client);

        // Cleanup function
        return () => {
            client.close();
    };
    }, [])

    // Function to send a message
    const sendMessage = (msg) => {
        if (socket && socket.readyState === WebSocket.OPEN) {
            socket.send(msg);
        }
    };
  
  return (
    <div className={s.container}>
        <div className={s.empty}>
        </div>
        <div className={s.bottom}>
            <div className={s.block}>
                <div  onClick={() => (sendMessage(1))} className={s.el}>1</div>
                <div  onClick={() => (sendMessage(4))} className={s.el}>4</div>
                <div  onClick={() => (sendMessage(7))} className={s.el}>7</div>
            </div>
            <div className={s.block}>
                <div  onClick={() => (sendMessage(2))} className={s.el}>2</div>
                <div  onClick={() => (sendMessage(5))} className={s.el}>5</div>
                <div  onClick={() => (sendMessage(8))} className={s.el}>8</div>
            </div>
            <div className={s.block}>
                <div  onClick={() => (sendMessage(3))} className={s.el}>3</div>
                <div  onClick={() => (sendMessage(6))} className={s.el}>6</div>
                <div  onClick={() => (sendMessage(9))} className={s.el}>9</div>
            </div>
            <div className={s.block}>
                <div className={s.el}></div>
                <div className={s.el}></div>
                <div  onClick={() => (sendMessage(0))} className={s.el}>0</div>
            </div>
        </div>
    </div>
  )
}