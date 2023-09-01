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
      },
      fontSize: {
        s: "0.72rem",
      },
    },
  },
  plugins: [],
} satisfies Config;
