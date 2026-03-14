// app/lib/constants.ts
export const COLORS = {
  primary: "#F3F4F1",
  secondary: "#013220",
  tertiary: "#A3AD9E",
  accent: "#E67E22",
} as const;

export type ColorKey = keyof typeof COLORS;
