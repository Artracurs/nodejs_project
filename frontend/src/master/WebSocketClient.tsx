// import React, { useState, useEffect } from 'react';

// function WebSocketClient() {
//     const [messages, setMessages] = useState([]);
//     const [socket, setSocket] = useState(null);

//     useEffect(() => {
//         // Initialize WebSocket
//         const client = new WebSocket('ws://192.168.43.216:3001');

//         // Event listener for when the connection opens
//         client.onopen = () => {
//             console.log('WebSocket Client Connected');
//         };

//         // Event listener for when a message is received
//         client.onmessage = (message) => {
//             console.log(message.data);
            
//             setMessages(prevMessages => [...prevMessages, message.data]);
//         };

//         // Event listener for when the connection closes
//         client.onclose = () => {
//             console.log('WebSocket Client Disconnected');
//         };

//         // Set the socket in the state
//         setSocket(client);

//         // Cleanup function
//         return () => {
//             client.close();
//         };
//     }, []);

//     // Function to send a message
//     const sendMessage = (msg) => {
//         if (socket && socket.readyState === WebSocket.OPEN) {
//             socket.send(msg);
//         }
//     };

//     return (
//         <div>
//             <button onClick={() => sendMessage('Hello Server!')}>Send Message</button>
//             <div>
//                 <h2>Received Messages</h2>
//                 {messages.map((msg, index) => <p key={index}>{msg}</p>)}
//             </div>
//         </div>
//     );
// }

// export default WebSocketClient;



import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { incrementAsync, reset } from '../features/monitor/monitorSlice'


function WebSocketClient() {
    const [messages, setMessages] = useState([]);
    const [socket, setSocket] = useState(null);

    const message = useSelector((state) => state.counter.value)
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
    }, []);

    // Function to send a message
    const sendMessage = (msg) => {
        if (socket && socket.readyState === WebSocket.OPEN) {
            socket.send(msg);
        }
    };

    return (
        <div>
            <button onClick={() => sendMessage(message)}>Send Message</button>
            <div>
                {messages.map((msg, index) => <p key={index}>{msg}</p>)}
            </div>
        </div>
    );
}

export default WebSocketClient;
