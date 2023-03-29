import styled from "styled-components";
import { flex} from "@component/components/stylings/Stylings";
import { Container } from "@component/components/stylings/Containers";

import { work, education, courses, erfarenhet } from "@component/data/frontendCV";

import Link from "next/link";
import Arbete from "./CV/Arbete";
import Education from "./CV/Education";
import Erfarenhet from "./CV/Erfarenhet";

const Content = styled.section`
min-height:130vh;
position: relative;
background-color:rgba(50, 57, 57, 0.1);
width:100vw;
height:100%;
z-index:10;
${flex}
padding-bottom:10em;
@media (max-width:700px){
  background: ${({theme}) => theme.frontendcolors.background};
  padding-bottom:0;
}
`
const IntroParagraph = styled.p`
line-height:150%;
width:50%;
`
const Heading = styled.div`
${flex({align:"center", justify:"space-around"})}
z-index:99;
color:${({theme}) => theme.white};
padding:1rem;
width:100%;
height:50%;

a{
color:${({theme}) => theme.frontendcolors.lightblue};
font-weight:bold;

&:hover{
border-radius: ${({theme}) => theme.borderradius.fourth};
background-color:${({theme}) => theme.frontendcolors.alternativecontrast}; }
text-decoration:none;}
`
const Title = styled.h2`
font-family: Arya;
font-size:72px;
line-height:1rem;
  border-radius: ${({theme}) => theme.borderradius.first};
  background-color:${({theme}) => theme.frontendcolors.background};
  padding:3rem;
  color:${({theme}) => theme.frontendcolors.lightblue}
padding:2rem;
margin-bottom:2rem;
&:hover{
  border-radius: ${({theme}) => theme.borderradius.second};
}
@media (max-width:700px){
  background: ${({theme}) => theme.frontendcolors.contrast};
}

`


const CVFrontend = () => {
  return (  
  <Container xlarge>
    <Content>
      <Heading>
      <Title>CV</Title>
        <IntroParagraph>Här följer relevant urval av jobb, utbildningar och erfarenheter som har med frontend att göra. Se gärna hela mitt cv på <Link href="https://www.linkedin.com/in/tovajertfelt/">Linkedin.</Link></IntroParagraph>
        </Heading>
        <Arbete 
        work={work}
        />
        <Education 
        courses={courses}
        education={education}/>
        <Erfarenhet
        erfarenhet={erfarenhet}/>
        </Content>
        </Container> );
}
 
export default CVFrontend;