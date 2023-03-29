import styled from "styled-components";
import { Container } from "@component/components/stylings/Containers";
import { fonts } from "@component/components/stylings/Stylings";
import { Grid } from "@component/components/stylings/Grids";
import Link from "next/link";
import CountingUp from "./Counter";
import {useTranslation } from "next-i18next";

const MainSection = styled.section`
margin-bottom:3rem;
z-index:3;
`
const About = styled.div`
h2{
  font-family: Arya;
  font-size: 42px;
  color: ${({theme}) => theme.white};
  text-transform: uppercase;
  line-height: 100%;
  border-radius: ${({theme}) => theme.borderradius.third};
  background-color:${({theme}) => theme.frontendcolors.contrast};
  padding:2rem;
  transition: all .8s ease-out;
  max-width:200px;
}
`

const Numbers = styled.section`
color:${({theme}) => theme.textPrimary};
font-size:18px;
line-height:1.8rem;
position:relative;
left: 10%;

padding:2rem;
padding-left:4rem;
padding-bottom:5rem;
@media (max-width:1000px){
  left:0%;
}
text-align:center;
`
const BigNumber = styled.h3`
font-size:70px;
line-height:1em;
color:${({theme}) => theme.white};
font-family: Arya;
font-weight: 500;
padding:2rem;
background-color: ${({theme}) => theme.frontendcolors.contrast};
border-radius: ${({theme}) => theme.borderradius.first};
max-width:300px;
text-align:center;
@media (max-width:1000px){
 padding:1rem;
}

`
const Text = styled.p`
color:${({theme}) => theme.textPrimary};
font-size:${fonts.fontSizes.medium};
margin-top:-3em;
padding-left:1rem;
padding-right:1rem;
text-align:center;
width:80%;
line-height:150%;
@media (max-width:900px){
  font-size:${fonts.fontSizes.mediumsmall};
}
`
const Row = styled.div`
display:flex;
flex-direction:row;
gap:16px;`


export const ContactButton = styled.button`
background:transparent;

color: ${({theme}) => theme.frontendcolors.contrast};
padding:1rem;
border-radius:29px;
border:solid 2px;
font-size:18px;
&:hover, &:active {
  border-color:none;
  border-radius: ${({theme}) => theme.borderradius.third};
}
a{
  text-decoration:none;
  color: ${({theme}) => theme.textPrimary};

}
a:visited{
  color: ${({theme}) => theme.textPrimary};
}
a:focus{
  color:${({theme}) => theme.white};
  border-radius: ${({theme}) => theme.borderradius.first};
}
`

const Emphasis = styled.span`
color: ${({theme}) => theme.frontendcolors.lightblue};
`

const LookingForJob= styled.div`
padding:2rem;
font-size:1.2rem;
color: ${({theme}) => theme.textPrimary};
line-height:1.8rem;
p{
  width:80%;
}
@media screen and (max-width:700px){
}
`

const AboutMe = () => {
  let date =  new Date().getFullYear();
  let experience = date - 2011;
  const {t} = useTranslation();
  return ( 
  <MainSection>
    <Container xlargegreyslantedafter>
    <Grid 
      about>
        <About><h2>{t("frontendpage.aboutme")}</h2>
        <p>{t("frontendpage.aboutmetxt1")}<br/>
         <Emphasis>{t("frontendpage.emphasis1")}</Emphasis> </p></About>
          <p>{t("frontendpage.aboutmetxt2")}</p>
          <div>
          <p>{t("frontendpage.aboutmetxt3")}<br/></p>
          </div>
      </Grid>
      <LookingForJob>
        <p>
      <Emphasis>{t("frontendpage.emphasis2")}
          </Emphasis><br/>
           <br/>{t("frontendpage.aboutmetxt4")}
          </p>
          <Row>
          <ContactButton><Link href="https://www.linkedin.com/in/tovajertfelt/">Linkedin</Link></ContactButton>
          <ContactButton><Link href="/contact">{t("frontendpage.contactbtn")}</Link></ContactButton>
          </Row>
      </LookingForJob>
      <Numbers>
      <Container
      xlarge>
      <Grid numbers>
        <CountingUp
          number = {experience}
          text = {t("frontendpage.countinguptxt")}
        />
        <div>
        <BigNumber>2021</BigNumber>
        <Text>{t("frontendpage.bignrtxt")}</Text>
        </div>
      </Grid>
    </Container>
      </Numbers>
    </Container>
  </MainSection> );
}
 
export default AboutMe;