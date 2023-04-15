import styled from "styled-components";
import WorkInProgress from "../WorkInProgress";
import ImgMenu from "./ImageMenu";


const Section = styled.div`
min-height:120vh;
padding:0;
margin:0;
color: ${({theme}) => theme.primaryText};
background: ${({theme}) => theme.body};
`

const DesignMainPage = () => {
  return (
  <Section>
  <ImgMenu></ImgMenu>  
  </Section>  );
}
 
export default DesignMainPage;