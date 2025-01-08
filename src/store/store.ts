import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { themeState, themeStateType } from "./themeSlice/slice";

// Define the store state type
interface StoreState {
  themeState: themeStateType;
  toggleTheme: () => void;
  setSidebar: (val: 0 | 1) => void;
}

// Create the store
const store = create<StoreState>()(
  persist(
    (set) => ({
      themeState: themeState,
      toggleTheme: () =>
        set((state) => ({
          themeState: {
            ...state.themeState,
            theme: state.themeState.theme === "light" ? "dark" : "light",
          },
        })),
      setSidebar: (val) =>
        set((state) => ({
          themeState: {
            ...state.themeState,
            sidebar: val,
          },
        })),
    }),
    {
      name: "globalStore",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default store;
