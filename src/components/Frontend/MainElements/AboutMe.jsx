import styled from "styled-components";
import { Container } from "@component/components/stylings/Containers";
import { Grid } from "@component/components/stylings/Grids";
import Link from "next/link";
import CountingUp from "./Counter";

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
p{
  
}
`

const Numbers = styled.section`
color:${({theme}) => theme.textPrimary};
font-size:18px;
line-height:1.8rem;
position:relative;
left: 30%;
max-width:50%;
padding:2rem;
padding-left:4rem;
padding-bottom:5rem;

`
const BigNumber = styled.h3`
font-size:70px;
line-height:1em;
color:${({theme}) => theme.white};
font-family: Arya;
font-weight: 500;
padding:2rem;
background-color: ${({theme}) => theme.frontendcolors.contrast};
border-radius: ${({theme}) => theme.borderradius.fourth};
max-width:300px;

`
const Text = styled.p`
color:${({theme}) => theme.textPrimary};
font-size:18px;
margin-top:-3em;
padding-left:1rem;
padding-right:1rem;
text-align:left;
width:80%;
line-height:150%;
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

const AboutMe = () => {
  return ( 
  <MainSection>
    <Container xlargegreyslantedafter>
    <Grid 
      about>
        <About><h2>OM MIG</h2>
        <p>Jag har en kandidatexamen från Konstfack i Grafisk Design & Illustration, och har sedan dess jobbat med bland annat webb, copy, kommunikation, som digital producent, som webb- & bildredaktör, fotograf, skribent, layoutare och som frilansande grafisk formgivare, projektledare, konstnär, illustratör och ibland animatör. Jag har till exempel formgivit grafiska profiler (med UX-perspektiv), gjort logotyper, skapat mallar åt sociala medier, formgett årsrapporter, ritat serier & illustrerat nyheter i tidningar.<br/>
         <Emphasis>Trots kreativa, utmanande och roliga yrkesroller så fann jag mig själv sökandes. Till slut hittade jag hem: jag älskar programmering!</Emphasis> </p></About>
          <p>Som person är jag driven, och gillar att problemlösa. Jag försöker att se vägen framåt i alla situationer, och jag tycker om att experimentera. Efter många års erfarenhet av att både få, och ge, feedback upplever jag att jag är en bra team-medarbetare och jag uppskattar att få jobba i team där jag får bli hörd. Jag är väldigt självständig som person, och känner att tillit är oerhört viktigt. Under min studietid har jag jobbat hybrid, mestadels hemifrån, och när jag jobbar så är det med disciplin. Faktum är att jag kan ha så roligt när jag kodar att jag har svårt att sluta jobba för dagen! Jag är också nyfiken och lär mig gärna mer, det finns en särskild njutning i att upptäcka nya saker till exempel. Här tror jag att mitt personliga intresse för improvisationsteater kan spela in: att vara flexibel och tänka snabbt är bra när man felsöker och när man jobbar i agila projekt, men också att våga testa saker känns som A och O. Jag har höga krav på mitt arbete, men gillar inte prestige, jag föredrar ärlighet och ödmjukhet. Jag tycker om att bolla idéer och kod, vill vara transparent, och har inte problem med att be om hjälp när jag behöver den. Samma sak med att ge hjälp!</p>
          <div>
          <p>Vidare är jag analytisk. Jag ser mönster i allt det jag gör, och kan därför någorlunda lätt bedöma vart jag är på väg och varför, samt se risker med pågående projekt. Efter mina tidigare år som formgivare har jag också kännedom kring tillgänglighet, färg och form. Jag föredrar att förstå saker på djupet - och gör gärna saker från början, grundligt, för att förstå helt och hållet. Det gör att jag lär mig, även om det tar tid. Då jag även sitter på kunskaper inom design är det därför både ett lätt, och roligt, val att göra saker på egen hand. <br/><Emphasis>Min utbildning tar slut i maj 2023. Tills dess vill jag börja jobba! 
          </Emphasis><br/>
          Jag letar efter en arbetsplats som kan ta emot mig som junior frontendare, som har högt i tak, som låter mig växa både självständigt och i ett team. Jag kan idag React, Next, och javascript. Jag har även tittat på node.js, mongoose, CMS-system, hosting, jest, och Google firebase som databas. <br/>
          </p>
          <Row>
          <ContactButton><Link href="https://www.linkedin.com/in/tovajertfelt/">Linkedin</Link></ContactButton>
          <ContactButton><Link href="/contact">Kontakta mig</Link></ContactButton>
          </Row>
      
          </div>

      </Grid>
      <Numbers>

      <Container
    xlarge>
      <Grid numbers>
        <CountingUp
          number = {11}
          text = {"års erfarenhet som digital formgivare, både som frilans och anställd."}
        />
        <div>
        <BigNumber>2021</BigNumber>
        <Text>började jag studera frontendprogrammering genom Nackademin.</Text>
        </div>
      </Grid>
    </Container>
      </Numbers>
    </Container>
  </MainSection> );
}
 
export default AboutMe;