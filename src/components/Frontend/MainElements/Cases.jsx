import { Container } from "@component/components/stylings/Containers";
import styled from "styled-components";
import { useState, useEffect} from "react";
import { flex, device, fonts } from "@component/components/stylings/Stylings";

import CasefItem, { CaseHeader, Description, Subtitle } from "./CasefItem";
import Image from "next/image";
import casesENG from "../../../data/cases_EN.json"
import { useTranslation } from "next-i18next";
import { CaseContainer } from "./CasefItem";
import cases from "../../../data/cases.json"
import { useRouter } from "next/router";


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
  const router = useRouter();
  const { locales, locale: activeLocale } = router;

  const {t} = useTranslation();
  const [casesT, setCases] = useState("")
  const [featuredCases, setFeatured] = useState("");
  const [randomCase, setRandom] = useState("")
  // const {data, error, loading} = GetDb("/cases/")
  const randomize = (cases) => {
    setRandom(cases[Math.floor(Math.random()*cases.length)])
  }
  
    const language = activeLocale;

  

console.log(cases.cases, cases)
  useEffect(() => {
    
    if(language === "sv"){
      if(cases){
        setCases(cases.cases)
    
        let featured = []
        featured.push(cases.cases.filter(item => item.featured === true))
        console.log(featured, "featured")
        const doubled = featured.map(nested => nested.map(element => element))
        setFeatured(doubled[0])

      }
    }
    else if (language === "en"){
      if(casesENG){
        setCases(casesENG.casesENG)
        let featured = []
        featured.push(casesENG.casesENG.filter(item => item.featured === true))
        const doubled = featured.map(nested => nested.map(element => element))
        setFeatured(doubled[0])
        
      }
    }
    else{
     
      console.log("Another language")
    }

  },[language])



  return (
      <Container
      xlarge>
        <Content>
        <div>
        <Headline>Cases</Headline>
        <Desc>{t("casespage.desc")}
        </Desc>
        </div>
      {/* {error && <p>Kan inte ladda från databasen, försök igen senare.</p>} */}
      {/* {loading ? <p>Laddar...</p>: <></>} */}
      <Wrapper>
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
        </Wrapper>
        <SocietyIcon>
          <CaseContainer>
          <CaseHeader>    
         Society Icon
         </CaseHeader> 
          <Subtitle>{t("casespage.caseSI")}</Subtitle> 
          <Description>
            {t("casespage.description Society")}
            <br></br>
            {t("casespage.wannaknowmore")}
            <br/>
          
          </Description>

          <Tech>
          <Subtitle>React NODE <br/>React Context <br/>Redux CSS/SASS Axios<br/> Postman Linear</Subtitle>
          </Tech>
    
          </CaseContainer>
        </SocietyIcon>
        </Content>
      </Container>
    );
  }
  
  export default CasesPage;