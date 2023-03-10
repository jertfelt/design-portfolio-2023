import { ThemeProvider } from "styled-components";

const overallTheme = {}

export const darkTheme = {
  body: '#d5b3e6',
  text: 'rgb(11, 4, 4)',
  purple:"#483d8b",
 
}
export const lightTheme = {
  body: 'white',
  text: 'åink',
}


export const Theme = ({ children }) => (
  <ThemeProvider theme={overallTheme}>{children}</ThemeProvider>
);

export default Theme