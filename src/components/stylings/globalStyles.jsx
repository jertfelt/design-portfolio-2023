import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
body{
  margin: 0;
  background: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
  transition: all 0.50s linear;
  font-family: Merriweather Sans;
}
h1,h2{
  font-family: Arya;
}
a{
  font-family: JetBrains Mono;
  color: inherit;
  text-decoration: none;
}
` 

export default GlobalStyle;