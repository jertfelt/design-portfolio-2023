import styled from "styled-components";
import WorkInProgress from "../WorkInProgress";


const Section = styled.div`
min-height:120vh;
padding:0;
margin:0;
color: ${({theme}) => theme.primaryText};
background: ${({theme}) => theme.body};
`

const DesignMainPage = () => {
  return (<Section>
    <WorkInProgress/>
  </Section>  );
}
 
export default DesignMainPage;