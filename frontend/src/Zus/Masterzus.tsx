import React from 'react';
import useStore from '../features/store';
import Slavezus from './Slavezus';

const Masterzus = () => {
  const setValue = useStore(state => state.setValue);
  const clearValue = useStore(state => state.clearValue);
  

  const socket = new WebSocket('ws://192.168.43.216:3001');

  const handleButtonClick = (number) => {
    const newValue = number.toString();
    setValue(newValue);
    socket.send(newValue);
  };

  const handleClearClick = () => {
      clearValue();
      socket.send('X');
  };

  const buttons = Array.from({ length: 10 }, (_, i) => (
    <button key={i} onClick={() => handleButtonClick(i)}>
      {i}
    </button>
  ));

  return <div>
    {buttons}
    <button onClick={handleClearClick}>Clear</button>
  </div>;
};

export default Masterzus;
