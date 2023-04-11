import { useTranslation } from "next-i18next";
import Link from "next/link";
import styled from "styled-components";

const LinkDiv = styled.div`

font-size: 5vh;
line-height:7.5vh;
@media (max-width:800px){
  font-size:4vh;
}
h2{
  font-family: JetBrains Mono;
  letter-spacing: -0.5px;
  word-spacing: -8.5px;
  margin-bottom: 26px;
  margin-top:6px;
}
a{
  
  &:hover{
    color:${({theme}) => theme.artcolors.primaryLightest};
    font-style:italic;
  }
}
hr{
  color:${({theme}) => theme.artcolors.primaryLighter};
}
`

const Links = ({
  skogenIsTrue,
  setSkogen,
  vKB,
  setVKB,
  tree,
  setTree,
  dream,
  setDream,
  bedbug,
  setBedBug
}) => {
  const {t} = useTranslation()
  return ( 
  <LinkDiv>
    <a href="#skogen" onClick={() => setSkogen(!skogenIsTrue)}><h2>{t("artistpages.h1")}</h2></a>
    <hr></hr>
    <Link href="#VKB" onClick={() =>setVKB(!vKB)}><h2>{t("artistpages.h1")}</h2></Link>
    <hr></hr>
    <Link href="#bedbug" onClick={() => setBedBug(!bedbug)}><h2>Not like a bedbug</h2></Link>
    <hr></hr>
    <Link href="#tree" onClick={() => setTree(!tree)}><h2>{t("artistpages.h1")}</h2></Link>
    <hr></hr>
    <Link href="#dreams" onClick={() => setDream(!dream)}><h2>When I dream, I dream about you</h2></Link>
  </LinkDiv> );
}
 
export default Links;