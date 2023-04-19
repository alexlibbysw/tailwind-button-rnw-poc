import * as Colors from "../../Tokens/dist/variables.ts";

const webTheme = {
  colors: {
    transparent: "transparent",
    current: "currentColor",
    white: Colors.ColorMonoPrimaryLight, // "#fffefeff",
    mono: {
      primaryDark: Colors.ColorMonoPrimaryDark, // "#333333ff",
      dark: Colors.ColorMonoDark, // "#7d7d7dff",
      mid: Colors.ColorMonoMid, // "#bdbdbdff",
      light: Colors.ColorMonoLight, // "#dededeff",
      veryLight: Colors.ColorMonoVeryLight, // "#efefefff",
      primaryLight: Colors.ColorMonoPrimaryLight, // "#fffefeff",
      warm: Colors.ColorMonoWarm, // "#faf6f4ff",
    },
    tone: {
      primaryDark: Colors.ColorTonePrimaryDark, // "#000000cc",
      dark: Colors.ColorToneDark, // "#0000008f",
      mid: Colors.ColorToneMid, // "#0000003d",
      light: Colors.ColorToneLight, // "#00000029",
      VeryLight: Colors.ColorToneVeryLight, // "#00000014",
    },
    brand: {
      primary: Colors.ColorBrandPrimary, // "#b70624ff",
    },
    red: {
      100: Colors.ColorRed100, // "#ffebefff",
      200: "#fdced6ff",
      400: Colors.ColorRed400, // "#d3072aff"
      500: Colors.ColorRed500, // "#b70624ff"
      600: "#a20520ff",
    },
    teal: {
      100: Colors.ColorTeal100, // "#eef8f8ff",
      200: "#b7e2e0ff",
      400: Colors.ColorTeal400, // "#0d9c95ff",
      500: Colors.ColorTeal400, // "#0a7e76ff",
      600: "#08605aff",
    },
    green: {
      100: Colors.ColorGreen100, // "#eef8eeff",
      200: Colors.ColorGreen200, // "#d9f3d8ff",
      400: Colors.ColorGreen400, // "#36aa32ff",
      500: Colors.ColorGreen500, // "#0d7912ff",
      600: "#0a5c0eff",
    },
    blue: {
      100: Colors.ColorBlue100, // "#f2f3fdff",
      200: Colors.ColorBlue200, // "#d4daf7ff",
      400: Colors.ColorBlue400, // "#4d66e0ff",
      500: Colors.ColorBlue500, // "#1039c1ff",
      600: "#0c2b93ff",
    },
    pink: {
      100: Colors.ColorPink100, // "#fef2f8ff",
      200: "#ffcae0ff",
      400: Colors.ColorPink400, // "#d2286dff",
      500: Colors.ColorPink500, // "#b82360ff",
      600: "#b82360ff",
    },
    purple: {
      100: Colors.ColorPurple100, // "#f9f1f6ff",
      200: Colors.ColorPurple200, // "#f8d3f0ff",
      400: Colors.ColorPurple400, // "#a01b84ff",
      500: Colors.ColorPurple500, // "#901877ff",
      600: "#7a1564ff",
    },
    orange: {
      100: Colors.ColorOrange100, // "#fff6ebff",
      200: Colors.ColorOrange200, // "#ffe2ccff",
      400: Colors.ColorOrange400, // "#ec6500ff",
      500: Colors.ColorOrange500, // "#d13800ff",
      600: "#9f2b00ff",
    },
    yellow: {
      100: "#fffbe5ff",
      200: "#fff4b3ff",
      400: "#feda00ff",
      500: "#998300ff",
    },
  },
  fontFamily: {
    sans: ["Roboto", "sans-serif"],
  },
  extend: {
    transitionDuration: {
      4000: "0.4s",
    },
    minHeight: {
      56: "56px",
    },
  },
};
export default webTheme;
