import styled from "styled-components"
import LinksToPages from "@component/components/Homepage/Links"
import {useTranslation } from "next-i18next";
import {serverSideTranslations} from "next-i18next/serverSideTranslations"
export async function getStaticProps({locale}){
  return{
    props:{
      ...(await serverSideTranslations(locale, ["common"]))
    }
  }
}

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
`
const Explanation = styled.div`
font-size:.8rem;
width:100%;
display:flex;
flex-direction:column;
align-items:flex-start;
padding:.5rem;
`
const TextContainerRight = styled.div`
padding-right:2rem;
h3{
font-size:.8rem;
}
display:flex;
flex-direction:column;
justify-content:flex-end;
align-items:flex-end;
p{
  line-height:1rem;
  font-size:.8rem;
  width:400px;
}
`
const ThreeColumnGrid= styled.div`
margin: 0;
display:grid;
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
    text-align: justify;
    text-justify: inter-word;
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

    <button><a href="https://www.linkedin.com/in/tovajertfelt/">LinkedIn</a></button>
    <button className="second"><a href="https://www.instagram.com/jertfelt/">Instagram</a></button>
    </div>
  </Footer>
  </>
);
}
 
export default Homepage;