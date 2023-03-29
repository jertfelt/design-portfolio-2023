import { Container } from "@component/components/stylings/Containers";
import styled from "styled-components";
import { useState, useEffect, useCallback,} from "react";
import Link from "next/link";
import { flex, device, fonts } from "@component/components/stylings/Stylings";
import { getDb } from "@component/components/api/getDb";
import CasefItem, { CaseHeader, Description, Subtitle } from "./CasefItem";
import Image from "next/image";
import TechStack from "./TechStack";
import { CaseContainer } from "./CasefItem";

const CaseImage = styled(Image)`
`

const Content = styled.div`
min-height:130vh;
div{
  ${flex };
  }
background-color: ${({theme}) => theme.frontendcolors.alternative};
position: relative;
z-index:10;
padding-bottom:15rem;
@media screen and ${device.maxtablet}{ padding:3rem;}
@media screen and ${device.maxmobile}{ padding:1rem;}
&::before {
  top: 0;
  -webkit-transform: skewY(-4deg);
  transform: skewY(-4deg);
  -webkit-transform-origin: 0% 0;
  transform-origin: 0% 0;
  background: inherit;
  content: "";
  display: block;
  height: 100%;
  width:100%;
  left: 0;
  position: absolute;
  right: 0;
  z-index: -2;
}
`
const Desc = styled.p`
font-family: Merriweather Sans;
color:${({theme}) => theme.white};
  flex-wrap:wrap;
  line-height:150%;
  max-width:50%;
  text-align:center;
  font-size: ${fonts.fontSizes.medium};
  padding-bottom:2rem;

  a{
    color:${({theme}) => theme.vividblue};
    text-decoration:none;
    font-weight:bold;
    &:hover{
      background-color: ${({theme}) => theme.frontendcolors.lightblue};
      border-radius: ${({theme}) => theme.borderradius.first};
    }
  }
`

const Headline = styled.h2`
color: ${({theme}) => theme.frontendcolors.lightblue};
font-family:Arya;
font-size:${fonts.fontSizes.xlarge};
text-transform: uppercase;
background-color: ${({theme}) => theme.frontendcolors.alternativecontrast};
border-radius: ${({theme}) => theme.borderradius.fourth};
padding:1rem;
margin-bottom:0;
`

const Wrapper = styled.div`
${flex}
`
const CaseList = styled.article`
display:grid;
grid-template-columns: repeat(2, 1fr);
column-gap:4rem;
p{
  font-family:Merriweather Sans;
  line-height:1.8rem;
  flex-wrap:wrap;
}
max-width:900px;
margin: 0 auto;
@media screen and (max-width:900px){
  grid-template-columns: repeat(1, 1fr);
  padding:1rem;
  gap:1rem;

}
`

const SocietyIcon = styled.article`
padding:3rem;
max-width:900px;
margin: 0 auto;
p{
  line-height:1.8rem;
}
h3{
  font-family: JetBrains Mono;
}
@media screen and (max-width:900px){
  padding:1rem;
}
`



const Tech = styled.div`
background:${({theme}) => theme.frontendcolors.contrast};
border-radius: ${({theme}) => theme.borderradius.second};
padding:1rem;
`

const CasesPage = () => {
  const [cases, setCases] = useState("")
  const [featuredCases, setFeatured] = useState("");
  const [randomCase, setRandom] = useState("")
  const {data, error, loading} = getDb("/cases/")
  const [imageSize, setSmageSize] = useState({
    width: 300,
    height: 300
   });

  const randomize = (cases) => {
    setRandom(cases[Math.floor(Math.random()*cases.length)])
  }

  useEffect(() => {
    if(data){
      setCases(data)
      let featured = []
      featured.push(data.filter(item => item.featured === true))
      const doubled = featured.map(nested => nested.map(element => element))
      setFeatured(doubled[0])
      randomize(data)
    }
  },[data])

  return (
      <Container
      xlarge>
        <Content>
        <div>
        <Headline>Cases</Headline>
        <Desc>Här finns ett urval av olika saker jag kodat.<br/> En del är från praktiken, andra är studentarbeten, andra är egna experiment.
         {/* <br/>För att se alla mina projekt, och filtrera på sökord, gå till <Link href="/cases/"> CASES</Link>. */}
        </Desc>
        </div>
      {error && <p>Kan inte ladda från databasen, försök igen senare.</p>}
      {loading ? <p>Laddar...</p>: <Wrapper>
        <CaseList>
        {featuredCases && featuredCases.map((c) => 
              (
              <CasefItem
              key={c.id}
              item= {c}
              index={c.id}
              />
              ) 
        )}
        </CaseList>
        </Wrapper>}
       
        
        <SocietyIcon>
          <CaseContainer>
          <CaseHeader>    
         Society Icon
         </CaseHeader> 
          <Subtitle>Praktik Frontend Januari - Mars 2023</Subtitle> 
          <Description>
            Under min praktikperiod på företaget Society Icon så tog jag över frontenden för deras adminportal, en custom CMS byggt i React där företag kan registrera varumärken, kan skapa kampanjer, välja ut ikoner till kampanjer, m.m. När jag började på praktiken var det en buggig frontend-sida som ingen rört på drygt två års tid. I projektet har jag och en till praktikant som enda frontendare på företaget projektlett och planerat sprints, där fokus har varit att refaktorisera kod, städa i node, städa i CSS, se över API-anropen, och byta ut komponenter som varit obsolete eller direkt felaktiga. Till exempel bytte vi ut onödig jQuery-kod, skrev om buggiga komponenter, bröt upp långa komponenter, uppgraderade node, och lade in context för att öka optimering. Vi var också UX-orienterade i detta projekt där vi gjorde designändringar i formulär, sidomenyer och på knappar enligt UX/UI och tillgänglighetstänk, så att sidan i framtiden även skulle kunna användas på mobil/tablet.
            <br></br>
            Vill du veta mer?<br/> Society Icon har gått i konkurs i mars 2023, så projektet är inte längre tillgängligt på webben.
            <br/>
          
          </Description>

          <Tech>
          <Subtitle>React + NODE</Subtitle>
          </Tech>
    
          </CaseContainer>
        </SocietyIcon>
        </Content>
      </Container>
    );
  }
  
  export default CasesPage;