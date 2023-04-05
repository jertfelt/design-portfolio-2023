import styled from "styled-components"
import LinksToPages from "@component/components/Homepage/Links"
import {useTranslation } from "next-i18next";

import HeadIndex, { HeadHome } from "@component/components/Head";
import withTranslation, {getStaticProps} from "@component/components/utils/getStaticProps";
import Head from "next/head";


const HomepageComponent = styled.section`
max-width: 100vw;
width:100vw;
padding-top:2rem;
display:flex;
flex-direction: column;
box-sizing: border-box;
color: ${({ theme }) => theme.textPrimary};
@media (max-width: 700px){
  margin-left:-1rem;
  margin-top:-1rem;
  max-width:100%;
}
@media (max-width:500px){
  margin:0;
  padding:0;
  max-width:100%;
}
`
const TextContainer = styled.div`
padding:2rem;
padding-left:5rem;
h1{
font-size:4.5rem;
line-height:4rem;
color: ${({ theme }) => theme.accentTwo};
}
h2{
  width:100%;
  font-size:2rem;
  line-height:2rem;
  }
  @media (max-width:500px){
    margin:0;
    padding:0.5rem;
    max-width:100%;
  }
`


const ThreeColumnGrid= styled.div`
margin: 0;
display:grid;
@media (max-width:500px){
  grid-template-columns: repeat(1, 1fr);
}
@media (min-width: 700px){
  padding-top:5rem;
  grid-template-columns: repeat(2, 1fr);
  row-gap:1rem;
  grid-template-rows: 1fr;
}
` 

const Column = styled.div`
display:flex;
flex-direction:column;
gap:2rem;
@media (min-width:1050px){
  gap:30vh;
}
div{
  h3{
    font-size:1.3rem;
    line-height:1.8rem;
    color:${({ theme }) => theme.accentTwo};
    padding-bottom:.5rem;
    }
  p{
    line-height:1.5rem;
    font-size:1rem;
    @media (min-width:1050px){
      max-width:550px;
    }
    word-spacing:3px;
  }
}
`
const Footer = styled.footer`
background:${({ theme }) => theme.body};
div{
  display:flex;
  gap:16px;
  justify-content:center;
  padding:4rem;
  align-items:center;
}
margin: 0;
margin-left:-2rem;
margin-right:-2rem;
margin-bottom:-2rem;

hr{
  color:${({ theme }) => theme.accentTwo};
}


button{
background: ${({ theme }) => theme.accentTwo};
  font-weight:bold;
  border:none;
  padding:10px;

  color:${({ theme }) => theme.textSecondary};
  
  &:hover{
   color:${({ theme }) => theme.accent};
   background:${({ theme }) => theme.contrast};
 
  }
 
}
`

const Homepage = () => {
  const {t} = useTranslation();
  return ( 
  <>
  <Head>
  <title>Tova Jertfelt || Frontend, art, design || Home</title>
  <meta name="title" content="Tova Jertfelt || Frontend, art, design"/>
<meta name="description" content="Multidisciplinär frontendare, konstnär, formgivare och illustratör. Högpresterande och kreativ, kärt barn har många yrken!"/>   
<meta property="og:type" content="website"/>
<meta property="og:url" content="https://www.tovajertfelt.se/"/>
<meta property="og:title" content="Tova Jertfelt || 2023"/>
<meta property="og:description" content="Multidisciplinär frontendare, konstnär, formgivare och illustratör. Högpresterande och kreativ, kärt barn har många yrken!"/>
<meta property="og:image" content="./publishing-priset-2.png"/>

<meta property="twitter:card" content="summary_large_image"/>
<meta property="twitter:url" content="https://www.tovajertfelt.se/"/>
<meta property="twitter:title" content="Tova Jertfelt || 2023"/>
<meta property="twitter:description" content="Multidisciplinär frontendare, konstnär, formgivare och illustratör. Högpresterande och kreativ, kärt barn har många yrken!"/>
<meta property="twitter:image" content="/publishing-priset-2.png"/>

<meta name="author" content="Tova Jertfelt"></meta>
  </Head>
  <HomepageComponent>
  <ThreeColumnGrid>
  <TextContainer>
  <Column>
  <div>
    <h1>Tova Jertfelt</h1>
    <h2>{t("startsida.h2")}</h2>
    </div>
  <div>
  <h3>{t("startsida.h3")}</h3>
  <p>{t("startsida.par1")}</p>
  </div>
  </Column>
  </TextContainer>
  <LinksToPages/>
  <div>
  </div>
  </ThreeColumnGrid>
  </HomepageComponent> 
  <Footer>
    <div>
    <button><a href="https://www.linkedin.com/in/tovajertfelt/" target="_blank">LinkedIn</a></button>
    <button className="second"><a href="https://www.instagram.com/jertfelt/" target="_blank">Instagram</a></button>
    </div>
  </Footer>
  </>
);
}
 
export {getStaticProps}
export default withTranslation(Homepage);