// store.ts
import create from 'zustand';

interface State {
  value: string;
  setValue: (newValue: string) => void;
  clearValue: () => void;
}

const useStore = create<State>(set => ({
  value: '0',
  setValue: (newValue: string) => {
    // Если сообщение содержит 'X', сбросить значение в '0'
    if (newValue.includes('X')) {
      set({ value: '0' });
    } else {
      // В противном случае обновить значение
      set(state => ({
        value: state.value === '0' ? newValue : state.value + newValue
      }));
    }
  },
  clearValue: () => set({ value: '0' }),
}));

export default useStore;
