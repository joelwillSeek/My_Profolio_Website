import { create } from 'zustand'

interface ThemeState {
  useLightTheme: boolean;
  setLightTheme: (isLight: boolean) => void;
}

export const useThemeStore = create<ThemeState>((set) => ({
  useLightTheme: false,
  setLightTheme: (isLight: boolean) => set({ useLightTheme: isLight }),
}))
