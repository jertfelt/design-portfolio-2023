import styled from "styled-components";
import MainTitle from "./MainTitle";

import Body from "./Body";


const Section = styled.section`
min-height:120vh;
padding:0;
margin:0;
color: ${({theme}) => theme.primaryText};
background: ${({theme}) => theme.artcolors.primary};
`


const ArtMain = () => {
  return (
  <Section>
  <MainTitle/>
  <Body/>
  </Section>  );
}
 
export default ArtMain;