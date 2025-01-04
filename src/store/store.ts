import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
const store = create(
  persist(
    (set) => {
      set((state) => {
        return {
          ...state,
        };
      });
    },
    {
      name: "globalStore",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
export default store;
