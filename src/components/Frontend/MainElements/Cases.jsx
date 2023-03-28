import { Container } from "@component/components/stylings/Containers";
import styled from "styled-components";
import { useState, useEffect, useCallback,} from "react";
import Link from "next/link";
import { flex, device, fonts } from "@component/components/stylings/Stylings";
import { getDb } from "@component/components/api/getDb";
import CasefItem from "./CasefItem";


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
display: grid;


`


const CasesPage = () => {
  const [cases, setCases] = useState("")
  const [featuredCases, setFeatured] = useState("");
  const {data, error, loading} = getDb("/cases/cases/")

  useEffect(() => {
    if(data){
      setCases(data)
      let featured = []
      featured.push(data.filter(item => item.featured === true))
      const doubled = featured.map(nested => nested.map(element => element))
      setFeatured(doubled[0])
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
        </Content>
      </Container>
    );
  }
  
  export default CasesPage;