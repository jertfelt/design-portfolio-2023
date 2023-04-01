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
    accent:"#856530",
    lightblue:"#bee5f5",
    alternative: "rgb(135,125,101)",
    alternativecontrast: "#5e6c71",
   },
  artcolors:{
    primary: "#6c4a63",
    secondary:"#4a6c53",
    primaryLighter:"#AD88A3",
    primaryLightest:"#E1D3DD",
    secondaryLighter:"#88AD92",
    secondaryLightest:"#d3e1d7",
 
  },
  designcolors:{
    secondary: "#fcbe03",
    secondarydarker: "#fcad03",
    secondarydarkest: "#b07902",
    primary: "#011064",
    primarydarker: "##010c4b",
    primarydarkest: "#000418",
    button: "#c90d03",
    buttonhighlight: "#fc281d",
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
    accent:"#856530",
    lightblue:"#bee5f5",
    alternative: "#766c5a",
    alternativecontrast: "#5f8898",
   },
   artcolors:{
    secondary: "E1D3DD",
    primary:"#d3e1d7",
    secondaryLighter:"#AD88A3",
    secondaryLightest:"#6c4a63",
    primaryLighter:"#88AD92",
    primaryLightest:"#4a6c53",
  },
  designcolors:{
    primary: "#fcbe03",
    primarydarker: "#fcad03",
    primarydarkest: "#b07902",
    secondary: "#011064",
    secondarydarker: "##010c4b",
    secondarydarkest: "#000418",
    button:"#c90d03",
    buttonhighlight: "#fc281d",
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