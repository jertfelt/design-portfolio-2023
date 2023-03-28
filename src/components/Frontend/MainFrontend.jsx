import styled from "styled-components"
import BgImg from "./MainElements/BackgroundImg";
import AboutMe from "./MainElements/AboutMe";
import GridWithQuotes from "./MainElements/QuotesAboutMe";
import CasesPage from "./MainElements/Cases";

const Section = styled.section`
background-color: ${({theme}) => theme.frontendcolors.background};
width:100%;
width:100vw;
margin:0;
height:100%;
min-height:100vh;
z-index:0;`


const MainFrontend = () => {
  return ( <Section>
    <BgImg/>
    <AboutMe/>
    <GridWithQuotes/>
    <CasesPage/>
   </Section> );
}
 
export default MainFrontend;