import { useTranslation } from "next-i18next";
import Link from "next/link";
import styled, { css } from "styled-components";
import { linksArt } from "@component/data/linksInArt";

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
  @media (min-width:650px){
    max-width:80%;
    flex-wrap:wrap;
  }
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
${props => 
  props.first && css`{
    padding:2rem;
   
  }` }
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
  setBedBug,
  setLinksOnTop,
  outsideContent
}) => {
  const {t} = useTranslation()
  const changeView = (e) => {

    let id=e.target.parentElement.id;
    switch (e.target.parentElement.id){
      case "skogen2":
        setSkogen(!skogenIsTrue)
        setVKB(false)
        setTree(false)
        setDream(false)
        setBedBug(false)
        setLinksOnTop(false)
        break;
      case "vKB2":
        setVKB(!vKB)
        setTree(false)
        setDream(false)
        setBedBug(false)
        setSkogen(false)
        setLinksOnTop(false)
        break;
        case "bedbugid":
          setVKB(false)
        setTree(false)
        setDream(false)
        setBedBug(!bedbug)
        setSkogen(false)
        setLinksOnTop(false)
        break;
        case "treeid":
          setVKB(false)
        setTree(!tree)
        setDream(false)
        setBedBug(false)
        setSkogen(false)
        setLinksOnTop(false)
          break;
        case "dreamid":
        setVKB(false)
        setTree(false)
        setDream(!dream)
        setBedBug(false)
        setSkogen(false)
        setLinksOnTop(false)
          break;
        default:
        setVKB(false)
        setTree(false)
        setDream(false)
        setBedBug(false)
        setSkogen(false)
        setLinksOnTop(true)
          break;
    }
  }

  return ( 
    <>{outsideContent === "yes" ? 
    <LinkDiv first>
      {/* {linksArt.map(item => {
        <div id={item.idDiv}>
          <a href={item.href} id={item.id} onClick={(e) => changeView(e)}>
            <h2>
              {item.translation && <>{t(`"${item.on_click}"`)}</>}
              {item.translation !== true && <>{item.on_click} </>}
            </h2>
          </a>
        </div>
      })} */}
    <a href="#skogen" 
    id="skogen2"
    onClick={(e) => changeView(e)}><h2>{t("artistpages.h1")}</h2></a>
    <hr></hr>
    <Link href="#VKB" 
    id="vKB2"
    onClick={(e) => changeView(e)}><h2>{t("artistpages.h2")}</h2></Link>
    <hr></hr>
    <Link href="#bedbug" 
    id="bedbugid"
    onClick={(e) => changeView(e)}><h2>Not like a bedbug</h2></Link>
    <hr></hr>
    <Link href="#tree" 
    id="treeid"
    onClick={(e) => changeView(e)}><h2>{t("artistpages.h3")}</h2></Link>
    <hr></hr>
    <Link href="#dreams"
    id="dreamid" onClick={(e) => changeView(e)}><h2>When I dream, I dream about you</h2></Link>
    </LinkDiv>

    : <LinkDiv>
    <a href="#skogen" 
    id="skogen2"
    onClick={(e) => changeView(e)}><h2>{t("artistpages.h1")}</h2></a>
    <hr></hr>
    <Link href="#VKB" 
    id="vKB2"
    onClick={(e) => changeView(e)}><h2>{t("artistpages.h2")}</h2></Link>
    <hr></hr>
    <Link href="#bedbug" 
    id="bedbugid"
    onClick={(e) => changeView(e)}><h2>Not like a bedbug</h2></Link>
    <hr></hr>
    <Link href="#tree" 
    id="treeid"
    onClick={(e) => changeView(e)}><h2>{t("artistpages.h3")}</h2></Link>
    <hr></hr>
    <Link href="#dreams"
    id="dreamid" onClick={(e) => changeView(e)}><h2>When I dream, I dream about you</h2></Link>
  </LinkDiv>}
  </>);
}
 
export default Links;