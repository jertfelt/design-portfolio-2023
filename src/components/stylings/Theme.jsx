import { ThemeProvider } from "styled-components";

const sharedTheme = {
  fonts: {
    frontendheader: {
      primary: "'Armata', sans-serif",
      fallback: "'Magra', sans-serif",
    },
    frontendbread: {
      primary: "'Merriweather Sans', sans-serif",
    },
    frontendquotes: {
      primary: "'Arya', sans-serif",
    },
    stats: {
      primary: "'JetBrains Mono', sans-serif",
    },
  },
  mobile: {
    frontend: {
      h1: "40px",
      h2: "32px",
      h3: "24px",
      lineheight: "150%",
      bread: "20px",
      smalldetail: "12px",
      details: "16px",
    },
  },
  padding: {
    lg: "5rem",
    m: "3rem",
    s: "1rem",
    xs: "10px",
  },
  borderradius: {
    first: "86% 14% 52% 48% / 50% 52% 48% 50%",
    second: "45% 55% 52% 48% / 50% 25% 75% 50%",
    third: "45% 55% 52% 48% / 50% 25% 75% 50%",
    fourth: "55% 25% 42% 98% / 90% 95% 5% 60%",
    simple: "39px",
    right: "0% 90% 0 0",
  },
  frontendcolors: {
    background: "#414870",
    contrast: "#867794",
    accent: "#856530",
    lightblue: "#bee5f5",
    alternative: "rgb(135,125,101)",
    alternativecontrast: "#5e6c71",
  },
  artcolors: {
    secondary: "#E1D3DD",
    primary: "#d3e1d7",
    secondaryLighter: "#AD88A3",
    secondaryLightest: "#6c4a63",
    primaryLighter: "#88AD92",
    primaryLightest: "#4a6c53",
    black: "#041809",
    white: "#e5fdec",
  },
  designcolors: {
    primary: "#fcbe03",
    primarydarker: "#fcad03",
    primarydarkest: "#b07902",
    secondary: "#011064",
    secondarydarker: "##010c4b",
    secondarydarkest: "#000418",
    button: "#c90d03",
    buttonhighlight: "#fc281d",
    pink: "#d03fee",
  },
  lightblue: "#bee5f5",
  purple: "#483d8b",
  vividblue: "#414870",
  darkblue: "#5f8898",
  black: "black",
  brown: "#766c5a",
  lavendel: "#867794",
  primaryblue: "#2F44D1",
  yellow: "#856530",
  spaceorange: "#fe6b16",
  spaceyellow: "#eedc48",
  spacepink: "#d03fee",
  spaceblue: "#707BFD",
};

export const darkTheme = {
  ...sharedTheme,
  mode: "dark",
  body: "rgb(43, 42, 51)",
  contrast: "#edf1f2",
  accent: "#2e43cf",
  startbody: "#2e43cf",
  startcontrast: "#d5b3e6",
  textPrimary: "white",
  textSecondary: "black",
  startaccent: "#483d8b",
  black: "rgb(11, 4, 4)",
  white: "#f2f2f2",
  opacity: "rgba(1,1,1,.5)",

  frontendnew: {
    backgroundone: "#1f3541",
    backgroundtwo: "#f7f7ff",
    backgroundlinear: "linear-gradient(180deg, #1f3541 0%, #2F44D1 100%);",
    backgroundcontrast: "#eedc48",
    txtprimary: "#f7f7ff",
    txtlink: "#35abfd",
    txtsecondary: "#1f3541",
    txthighlight: "#eedc48",
    txtcolorheader2: "#f38947",
    txtcolorheader3: "#fe6b16",
  },
};

export const lightTheme = {
  ...sharedTheme,
  mode: "light",
  body: "#edf1f2",
  contrast: "#050606",
  accent: "#d5b3e6",
  startbody: "#d5b3e6",
  startcontrast: "#2e43cf",
  textPrimary: "black",
  textSecondary: "white",
  opacity: "rgba(1,1,1,.5)",

  frontendnew: {
    backgroundtwo: "#1f3541",
    backgroundone: "#f7f7ff",
    backgroundcontrast: "#eedc48",
    backgroundlinear: "linear-gradient(180deg, #F7F7FF 0%, #D4B2E6 100%);",
    txtprimary: "#1f3541",
    txtlink: "#35abfd",
    txtsecondary: "#f7f7ff",
    txthighlight: "#f00",
    txtcolorheader2: "#2f44d1",
    txtcolorheader3: "#2f44d1",
  },
};

export const Theme = ({ children }) => (
  <ThemeProvider theme={sharedTheme}>{children}</ThemeProvider>
);

export default Theme;
