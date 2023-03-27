import styled from "styled-components"
import BgImg from "./MainElements/BackgroundImg";
import AboutMe from "./MainElements/AboutMe";

const Section = styled.section`
background-color: ${({theme}) => theme.frontendcolors.background};
width:100%;
margin:-2rem;
height:100%;
min-height:100vh;
z-index:0;`


const MainFrontend = () => {
  return ( <Section>
    <BgImg/>
    <AboutMe/>
   </Section> );
}
 
export default MainFrontend;