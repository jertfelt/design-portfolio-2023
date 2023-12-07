import styled from "styled-components";
import { flex} from "@component/components/stylings/Stylings";
import { Container } from "@component/components/stylings/Containers";

import { work, education, courses, erfarenhet, work_ENG, education_ENG, courses_ENG, erfarenhet_ENG } from "@component/data/frontendCV";

import Link from "next/link";
import Arbete from "./CV/Arbete";
import Education from "./CV/Education";
import Erfarenhet from "./CV/Erfarenhet";
import { useTranslation } from "next-i18next";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const Content = styled.section`
min-height:130vh;
position: relative;
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
  background-color:${({theme}) => theme.frontendcolors.contrast};
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
  const {t} = useTranslation();
  const router= useRouter();
  const {locales, locale: activeLocale} = router;
  const language = activeLocale;
  const [coursesDb, setCourses] = useState("")
  const [workDb, setWork] = useState("")
  const [educationDb, setEducation] = useState("")
  const [erfarenhetDb, setErfarenhet] = useState("")

  useEffect(() => {

    if(language !== "en"){
      setCourses(courses)
      setWork(work)
      setEducation(education)
      setErfarenhet(erfarenhet)
    }
    else{
      setCourses(courses_ENG)
      setWork(work_ENG)
      setEducation(education_ENG)
      setErfarenhet(erfarenhet_ENG)
    }

  },[language])


  return (  
  <Container xlarge>
    <Content>
      <Heading>
      <Title>CV</Title>
        <IntroParagraph>{t("cv.info")}<Link href="https://www.linkedin.com/in/tovajertfelt/"> Linkedin.</Link></IntroParagraph>
        </Heading>
        <Arbete 
        work={workDb}
        />
        <Education 
        courses={coursesDb}
        education={educationDb}/>
        <Erfarenhet
        erfarenhet={erfarenhetDb}/>
        </Content>
        </Container> );
}
 
export default CVFrontend;