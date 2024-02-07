import { ThemeProvider } from "styled-components";

const sharedTheme = {
  startpage: {
    body: "rgb(43, 42, 51)",
    konstaccent: "#4a6c53",
    konstaccentTwo: "#d3e1d7",
    white: "white",
  },
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
    size: {
      lineheightCommon: "175%",
      lineHeightLarge: "200%",
      lineHeightSmall: "150%",
      whiteSpace: "wrap",
      mobile: {
        frontend: {
          h1: "48px",
          h2: "30px",
          bread: "16px",
          h3: "20px",
        },
      },
      desktop: {
        frontend: {
          bread: "14px",
          h2: "32px",
          h1: {
            size: "128px",
            letterSpace: "-5%",
          },
          h3: "20px",
          h4: "24px",
          button: "16px",
        },
      },
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
  start: {
    accent: "rgb(213, 179, 230)",
  },
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
  illustrationContrast: "yellow",
  designprimer: "gray",

  frontendnew: {
    pink: "#d03fee",
    gray: "#e0e6e1",
    bgSecondary: "#031117",
    bgPrimary: "#2f44d1",
    primaryTxt: "white",
    headerOne: "#EEDC48",
    headerTwo: "#d03fee",
    altTxt: "black",
  },
};

export const lightTheme = {
  ...sharedTheme,
  mode: "light",
  start: {
    accent: "rgb(46, 67, 207)",
  },
  body: "#edf1f2",
  contrast: "#050606",
  accent: "#d5b3e6",
  startbody: "#d5b3e6",
  startcontrast: "#2e43cf",
  textPrimary: "black",
  textSecondary: "white",
  opacity: "rgba(1,1,1,.5)",
  illustrationContrast: "yellow",
  designprimer: "gray",

  frontendnew: {
    bgSecondary: "#f7f7ff",
    bgPrimary: "#d4b2e6",
    primaryTxt: "black",
    pink: "#d03fee",
    gray: "#e0e6e1",
    headerOne: "#2F44D1",
    headerTwo: "#FF0000",
    altTxt: "white",
  },
};

export const Theme = ({ children }) => (
  <ThemeProvider theme={sharedTheme}>{children}</ThemeProvider>
);

export default Theme;
