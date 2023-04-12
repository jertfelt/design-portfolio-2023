import { useTranslation } from "next-i18next";
import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";
import Exhibitions from "./Exhibitions";
import Links from "./Links";
import Skogen from "./Skogen";
import { useState } from "react";
import ViKanBattre, { ImageWrapper } from "./ViKanBattre";
import NotLikeA from "./NotLikeA";
import Tree from "./Tree";
import Dreams from "./Dreams";
import Image from "next/image";
import survivor from "../../../public/art/survivor-tova-jertfelt.jpg"
import fire from "../../../public/art/qqww.jpg"
import three from "../../../public/art/fire-color-jertfelt copy.png"

const Section = styled.div`
padding-top:450px;
color:${({theme}) => theme.textPrimary};
`
const Content = styled.div`
padding:2rem;
max-width:100%;
padding-top:10rem;
@media (min-width:800px){
  padding:5rem;
}
p{
  line-height:1.5rem;
  @media (min-width:500px){
    max-width:80vw;
    word-spacing:3px;
    font-size:1.2rem;
    line-height:1.8rem;
  }
  
  @media (min-width:900px){
    max-width:70vw;
  }
  @media (min-width:1040px){
    max-width:60vw;
  }
}
a{
  color:${({theme}) => theme.artcolors.primaryLightest};
  font-style:italic;
}
hr{
  color:${({theme}) => theme.artcolors.primaryLighter};
  @media (min-width:1040px){
    max-width:60vw;
    margin-left:0;
  }
}
.margin{
  margin-top:2rem;
  @media (min-width:800px){
  
    margin-top:5rem;
  }
}

`
const WrapperExhibitions = styled.div`
background: ${({theme}) => theme.artcolors.primaryLightest};
color: ${({theme}) => theme.textSecondary};
padding:2rem;
padding-bottom:5rem;

.desc{
   font-family:JetBrains Mono;
   padding-left:3rem;
  @media (min-width:500px){
   padding-left:3.5rem;
  }
  @media (min-width:750px){
    font-size:1.5rem;
    line-height:1.8rem;
    padding-left:6rem;
  }
  @media (min-width:900px){
    padding:0;
    font-size:1rem;
  }
}
.pub{
  @media (min-width:500px){
    font-size:1.2rem;
    line-height:1.8rem;
  }
  @media (min-width:750px){
    font-size:2rem;
    line-height:2.2rem;
    max-width:60%;
  }
  @media (min-width:900px){
    max-width:80%;
    margin-top:0;
    font-size:1.8rem;
  }
}
.publ{
  @media (min-width:900px){
    padding-top:4rem;
  }
}
h2{
  color:${({theme}) => theme.artcolors.primary};
  font-size:2rem;
  @media (min-width:750px){
    font-size:4rem;
    margin-bottom:1rem;
   }
   @media (min-width:900px){
    margin-top:-8rem;
  }
}

@media (min-width:900px){
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap:2rem;
  padding-top:10rem;
  padding-left:2rem;
  row-gap:2rem;
}
`

const WrapperFooter = styled.footer`
background:${({theme}) => theme.artcolors.primary};
color: ${({theme}) => theme.artcolors.primaryLightest};
height:10vh;
padding:1rem;
padding-top:2rem;
margin-top:-2rem;
display:flex;
flex-direction:row;
gap:1rem;
align-items:center;
justify-content:center;
@media (min-width:900px){
  justify-content:space-between;
}
@media(min-width:900px){
  line-height:2rem;
  padding-right:2rem;
}
button{
  font-family: JetBrains Mono;
  background: ${({theme}) => theme.artcolors.primaryLightest};
color: ${({theme}) => theme.textSecondary};
border-radius:19px;
border:none;
height:2rem;
padding:8px;
&:hover{
  font-weight:bold;
  background: ${({theme}) => theme.artcolors.primary};
  color:${({theme}) => theme.artcolors.primaryLightest};
}

}
`

const Standalones = styled.div`
margin:0;
padding:0;
display:flex;
flex-direction:column;
img{
  width:100%;
  margin-left:0;
  height:100%;
  margin-bottom:0;
}
padding-bottom:1rem;
`

const Body = () => {
const router= useRouter();
const {locale: activeLocale} = router;
const language = activeLocale;
const {t} = useTranslation();
const [skogenIsTrue, setSkogen] = useState(false)
const [vKB, setVKB] = useState(false)
const [tree, setTree] = useState(false)
const [dream, setDream] = useState(false)
const [bedbug, setBedBug] = useState(false)
const [linksOnTop, setLinksOnTop] = useState(true)

  return (
  <Section>
    <Content>
    <p>
    {t("artistpages.main.first")}</p>
    <p>{t("artistpages.main.second")}</p>
    <p>
    {t("artistpages.main.third")}<Link href="https://www.omkonst.com/16-konstfackskolan-varsutstallning.shtml"> &quot;{t("artistpages.main.linkOmKonst")}&quot;</Link>{t("artistpages.main.thirdpart2")}
    </p>

    <hr className="margin"></hr>
    {linksOnTop && 
    <Links
    skogenIsTrue = {skogenIsTrue}
    setSkogen = {setSkogen}
    vKB = {vKB}
    setVKB = {setVKB}
    tree = {tree}
    setTree = {setTree}
    dream = {dream}
    setDream = {setDream}
    bedbug = {bedbug}
    setBedBug={setBedBug}
    setLinksOnTop={setLinksOnTop}
    
    // STPLN = {STPLN}
    // setSTPLN = {setSTPLN}
    //inferno = {inferno}
    //setInferno = {setInferno}
    />}
    
    </Content>
    
    {skogenIsTrue && <Skogen id="skogen"/>}
    {vKB && <ViKanBattre id="VKB"></ViKanBattre>}
    {bedbug && <NotLikeA id="bedbug"></NotLikeA>}
    {tree && <Tree id="tree"/>}
    {dream && <Dreams id="dreams"/>}

    {!linksOnTop && 
    <Links 
    skogenIsTrue = {skogenIsTrue}
    setSkogen = {setSkogen}
    vKB = {vKB}
    setVKB = {setVKB}
    tree = {tree}
    setTree = {setTree}
    dream = {dream}
    setDream = {setDream}
    bedbug = {bedbug}
    setBedBug={setBedBug}
    setLinksOnTop={setLinksOnTop}
    outsideContent="yes"
    // STPLN = {STPLN}
    // setSTPLN = {setSTPLN}
    //inferno = {inferno}
    //setInferno = {setInferno}
    />
    }
    <WrapperExhibitions>
    <h2 className="heading">{t("artistpages.main.h2U")}</h2>
    <div>
    <Exhibitions language={language}/>
    </div>
    <div className="publ">
    <h2 className="heading">{t("artistpages.main.h2P")}</h2><div>
    <h3 className="pub">
      Not Like a Bedbug
    </h3>
    <h4 className="desc">{t("artistpages.main.h4MAL")}</h4></div>
    </div>
   
    </WrapperExhibitions>
    <Standalones>
      <Image src={three} alt="Three phases of burning out, digital art 2018"/>
    </Standalones>


    <WrapperFooter>
    <a href="https://www.instagram.com/jertfelt/"
    target="_blank">
    <button>Instagram</button>
    </a>
    <p>{t("artistpages.main.footerInfo")}<br/>
    Tova Jertfelt 2023</p>
    </WrapperFooter>
    </Section> );
}
 
export default Body;