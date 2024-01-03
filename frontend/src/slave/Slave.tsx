import React, { useEffect, useState } from 'react'
import s from './Slave.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { reset, incrementAsync } from '../features/monitor/monitorSlice'

type Props = {
}

export default function Slave({ }: Props) {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch();

  const [messages, setMessages] = useState([]);
  const [socket, setSocket] = useState(null);

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
        dispatch(incrementAsync(message.data))
        // setMessages(prevMessages => [message.data]);
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
}, [messages]);

    // Function to send a message
    const sendMessage = (msg) => {
      if (socket && socket.readyState === WebSocket.OPEN) {
        dispatch(reset())
          socket.send(msg);
      }
  };

  return (
    <div className={s.container}>
      <div className={s.value}>
        <h1>{count.includes("X") ? '0' : count}</h1>
      </div>
      <div className={s.buttonBlock}>
      {/* <button onClick={() => {sendMessage('X'), dispatch(reset())}}>DONE</button> */}
      </div>
    </div>
  )
}
