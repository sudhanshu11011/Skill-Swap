import { create } from "zustand";

export const useAppStore = create((set) => ({
  theme: "light",
  setTheme: (theme) => set({ theme }),
}));