import styled from "styled-components"
import BgImg from "./MainElements/BackgroundImg";
import AboutMe from "./MainElements/AboutMe";
import GridWithQuotes from "./MainElements/QuotesAboutMe";
import CasesPage from "./MainElements/Cases";
import Footer from "./MainElements/Footer";
import CVFrontend from "./MainElements/CV";

const Section = styled.section`
background-color: ${({theme}) => theme.frontendcolors.background};
width:100%;
width:100vw;
margin:0;
height:100%;
min-height:100vh;
z-index:0;
@media screen and (max-width:700px){
  background-color: ${({theme}) => theme.frontendcolors.contrast};
 }`


const MainFrontend = () => {
  return ( 
    <Section>
    <BgImg/>
    <AboutMe/>
    <GridWithQuotes/>
    <CasesPage/>
    <CVFrontend/>
    <Footer/>
   </Section> );
}
 
export default MainFrontend;