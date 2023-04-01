import styled from "styled-components";
import WorkInProgress from "../WorkInProgress";


const Section = styled.div`
min-height:120vh;
padding:0;
margin:0;
color: ${({theme}) => theme.primaryText};
background: ${({theme}) => theme.designcolors.primary};

`


const IlluMainPage = () => {
  return (<Section>
    <WorkInProgress></WorkInProgress>
  </Section>  );
}
 
export default IlluMainPage;