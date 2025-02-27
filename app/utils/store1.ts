import { createStore } from "zustand";

type MyState = {
  data: Record<string, any>;
  setData: (newData: Record<string, any>) => void;
  clearData: () => void;
};

const useStore1 = createStore<MyState>((set) => ({
  data: {},
  setData: (newData) => set({ data: newData }),
  clearData: () => set({ data: {} }),
}));

export { useStore1 };
