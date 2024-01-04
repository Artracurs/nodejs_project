// import React, { useState, useEffect } from 'react';
// import io from 'socket.io-client';

// const socket = io('<ws://192.168.43.216:3001>');

// function WebSocketClient() {
//   const [messages, setMessages] = useState([]);

//   useEffect(() => {
//     socket.on('message', (data) => {
//       setMessages((prevMessages) => [...prevMessages, data]);
//     });
//   }, []);

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const message = event.target.elements.message.value;
//     socket.emit('message', message);
//     event.target.elements.message.value = '';
//   };

//   return (
//     <div>
//       <ul>
//         {messages.map((message, index) => (
//           <li key={index}>{message}</li>
//         ))}
//       </ul>
//       <form onSubmit={handleSubmit}>
//         <input type="text" name="message" />
//         <button>Отправить</button>
//       </form>
//     </div>
//   );
// }

// export default WebSocketClient;