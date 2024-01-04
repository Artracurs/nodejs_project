import React, { useEffect } from 'react';
import useStore from '../features/store';

const Slavezus = () => {
  const value = useStore(state => state.value);
  const setValue = useStore(state => state.setValue);

  useEffect(() => {
    const socket = new WebSocket('ws://192.168.43.216:3001');

    socket.onmessage = (event) => {
      setValue(event.data);
    };

    return () => socket.close();
  }, [setValue]);

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div>{value}</div>
    </div>
  );
};

export default Slavezus;
