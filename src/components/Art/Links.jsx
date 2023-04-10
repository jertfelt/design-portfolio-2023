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
  return ( 
  <LinkDiv>
    <a href="#skogen" onClick={() => setSkogen(!skogenIsTrue)}><h2>Ursäkta skogen, vi bygger om</h2></a>
    <hr></hr>
    <Link href="#VKB" onClick={() =>setVKB(!vKB)}><h2>Vi kan bättre</h2></Link>
    <hr></hr>
    <Link href="/art/cases/2"><h2>Not like a bedbug</h2></Link>
    <hr></hr>
    <Link href="/art/cases/2"><h2>Jag är ett träd</h2></Link>
    <hr></hr>
    <Link href="/art/cases/3"><h2>When I dream, I dream about you</h2></Link>
  </LinkDiv> );
}
 
export default Links;