import { ThemeProvider } from "styled-components";

const overallTheme = {

}

export const darkTheme = {
  body: "rgb(43, 42, 51)",
  contrast: "#edf1f2",
  accent:"#2e43cf",
  accentTwo:"#d5b3e6",
  accentpink: "#ff2768",
  startbody: "#2e43cf",
  startcontrast: "#d5b3e6",
  textPrimary: 'white',
  textSecondary: "black",
  startaccent: "#483d8b",
  black: 'rgb(11, 4, 4)',
  white: "#f2f2f2",
  borderradius: {
    first:"86% 14% 52% 48% / 50% 52% 48% 50%",
    second:"45% 55% 52% 48% / 50% 25% 75% 50%",
    third: "45% 55% 52% 48% / 50% 25% 75% 50%",
    fourth: "55% 25% 42% 98% / 90% 95% 5% 60%"
  },
  lightblue: "#bee5f5",
  purple: "#483d8b",
  vividblue: "#414870",
  darkblue: "#5f8898",
  black: "black",
  brown: "#766c5a",
  lavendel: "#867794",
  yellow:"#856530",
  frontendcolors:{
    background:  "#414870",
    contrast: "#867794",
    accent:"red",
   },
}
export const lightTheme = {
  body: "#edf1f2",
  contrast: "#050606",
  accent:"#d5b3e6",
  accentTwo:"#2e43cf",
  accentpink: "#ff2768",
  startbody: '#d5b3e6',
  startcontrast: "#2e43cf",
  black: 'rgb(11, 4, 4)',
  startaccent:"#483d8b",
  white: "#f2f2f2",
  textPrimary: "black",
  textSecondary: "white",
  borderradius: {
    first:"86% 14% 52% 48% / 50% 52% 48% 50%",
    second:"45% 55% 52% 48% / 50% 25% 75% 50%",
    third: "45% 55% 52% 48% / 50% 25% 75% 50%",
    fourth: "55% 25% 42% 98% / 90% 95% 5% 60%"
   },
   frontendcolors:{
    background:  "#867794",
    contrast: "#414870",
    accent:"red",
   },
   lightblue: "#bee5f5",
   purple: "#483d8b",
   vividblue: "#414870",
   darkblue: "#5f8898",
   black: "black",
   brown: "#766c5a",
   lavendel: "#867794",
   yellow:"#856530"
}

// --font: 'Magra', sans-serif;
// --arya: 'Arya', sans-serif;
// --mono:    'JetBrains Mono', monospace;
// --merri:  'Merriweather Sans', sans-serif;
// --tilt:   'Tilt Warp', cursive;
// --foreground: rgb(11, 4, 4);
// --background: #d5b3e6;
// --purple: #483d8b;
// --lightblue: #bee5f5;
// --blue: #344ce6;

// --black: #282828;
// --fontblack: #000;
// --white: #f4f4f4;


export const Theme = ({ children }) => (
  <ThemeProvider theme={overallTheme}>{children}</ThemeProvider>
);

export default Theme