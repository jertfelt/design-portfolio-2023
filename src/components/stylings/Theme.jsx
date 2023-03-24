import { ThemeProvider } from "styled-components";

const overallTheme = {

}

export const darkTheme = {
  body: "#2e43cf",
  contrast: "#d5b3e6",
  textPrimary: 'white',
  textSecondary: "black",
  accent: "#483d8b",
  black: 'rgb(11, 4, 4)',
  white: "#f2f2f2",
  borderradius: {
    first:"86% 14% 52% 48% / 50% 52% 48% 50%",
    second:"45% 55% 52% 48% / 50% 25% 75% 50%",
    third: "45% 55% 52% 48% / 50% 25% 75% 50%",
    fourth: "55% 25% 42% 98% / 90% 95% 5% 60%"
   },
}
export const lightTheme = {
  body: '#d5b3e6',
  contrast: "#2e43cf",
  black: 'rgb(11, 4, 4)',
  accent:"#483d8b",
  white: "#f2f2f2",
  textPrimary: "black",
  textSecondary: "white",
  borderradius: {
    first:"86% 14% 52% 48% / 50% 52% 48% 50%",
    second:"45% 55% 52% 48% / 50% 25% 75% 50%",
    third: "45% 55% 52% 48% / 50% 25% 75% 50%",
    fourth: "55% 25% 42% 98% / 90% 95% 5% 60%"
   },
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