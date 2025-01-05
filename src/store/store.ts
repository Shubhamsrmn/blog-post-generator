import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

// Define the store state type
interface StoreState {
  // Add your state properties here
  counter: number;
  setCounter: (count: number) => void;
  increment: () => void;
  decrement: () => void;
}

// Create the store
const store = create<StoreState>()(
  persist(
    (set) => ({
      counter: 0, // initial state
      setCounter: (count: number) => set({ counter: count }),
      increment: () => set((state) => ({ counter: state.counter + 1 })),
      decrement: () => set((state) => ({ counter: state.counter - 1 })),
    }),
    {
      name: "globalStore", // Name of the localStorage key
      storage: createJSONStorage(() => localStorage), // Use localStorage as the storage
    }
  )
);

export default store;
