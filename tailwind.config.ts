import { type Config } from "tailwindcss";

enum ColorTheme {
  BLACK_200 = "black-200",
  BLACK_250 = "black-250",
  BLACK_300 = "black-300",
  BLACK_350 = "black-350",
  BLACK_400 = "black-400",
  BLACK_600 = "black-600",
  BLACK_700 = "black-700",
  BLUE_500 = "blue-500",
  BLUE_600 = "blue-600",
  PURPLE_600 = "purple-600",
  PURPLE_800 = "purple-800",
}

export enum Animations {
  SHOW = "animate-show",
  HIDE = "animate-hide",
  FADESHOW = "animate-fadeShow",
  FADEHIDE = "animate-fadeHide",
}

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        [ColorTheme.BLACK_200]: "#8c8989",
        [ColorTheme.BLACK_250]: "#3f3f57",
        [ColorTheme.BLACK_300]: "#252e47",
        [ColorTheme.BLACK_350]: "#242F3D",
        [ColorTheme.BLACK_400]: "#17212B",
        [ColorTheme.BLACK_600]: "#0E1621",
        [ColorTheme.BLACK_700]: "#0E1621",
        [ColorTheme.BLUE_500]: "#9ac4fc",
        [ColorTheme.BLUE_600]: "#1abced",
        [ColorTheme.PURPLE_600]: "#8774E1",
        [ColorTheme.PURPLE_800]: "#6d5ac4",
      },
      fontSize: {
        s: "0.72rem",
      },
    },
    screens: {
      phoneS: "375px",
      phoneM: "425px",
    },
    animation: {
      show: "show .5s ease-in-out",
      fade: "fade .3s ease-in-out",
      showRight: "showRight .4s ease-in-out",
      showTop: "showTop .4s  ease-in-out",
    },
    keyframes: {
      showRight: {
        from: { transform: "translateX(50%)", opacity: "0" },
        to: { transform: "translateX(0)", opacity: "1" },
      },
      showTop: {
        from: { transform: "-translateY(50%)", opacity: "0" },
        to: { transform: "translateY(0)", opacity: "1" },
      },
      fade: {
        from: { opacity: "0" },
        to: { opacity: "1" },
      },
      show: {
        from: { transform: "translateX(-100%)" },
        to: { transform: "translateX(0)" },
      },
      hide: {
        from: { transform: "translateX(0)" },
        to: { transform: "translateX(-100%)" },
      },
    },
  },
  plugins: [],
} satisfies Config;
