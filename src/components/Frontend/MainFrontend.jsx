import styled from "styled-components"
import BgImg from "./MainElements/BackgroundImg";

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
    hej</Section> );
}
 
export default MainFrontend;