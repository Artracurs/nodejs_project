import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
const socket = new WebSocket('wss://192.168.43.216:8081');


interface CounterState {
  value: string;
}

const initialState: CounterState = { value: '0' }

export const incrementAsync = createAsyncThunk(
  'counter/increment',
  async (amount: string) => {
    return amount;
  }
);

socket.onmessage = (event) => {
  const data = JSON.parse(event.data);
  if (data.type === 'UPDATE_COUNTER') {
    store.dispatch(updateCounterValue(data.value));
  }
};

// Function to send messages to the server
function sendCounterUpdate(value) {
  socket.send(JSON.stringify({ type: 'UPDATE_COUNTER', value }));
}

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    reset: (state) => {
      state.value = '0';
      sendCounterUpdate('0')
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(incrementAsync.fulfilled, (state, action: PayloadAction<string>) => {   
        if (state.value.includes("X")) {
          state.value = '0'
        }
        if (parseInt(state.value) === 0) {
          state.value = ''
        }
          state.value += action.payload
      })
  }
})

export const { reset } = counterSlice.actions;
export default counterSlice.reducer;

