/** @type {import('tailwindcss').Config} */
import webTheme from "./src/components/themes/webTheme";

//let platform: string = "web";

module.exports = {
  content: ["./src/**/**/*.{html,js,tsx}"],
  theme: webTheme,
  plugins: [],
};
