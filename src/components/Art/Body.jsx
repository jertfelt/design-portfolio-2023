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
p{
  line-height:1.5rem;
}
hr{
  color:${({theme}) => theme.artcolors.primaryLighter};
}
.margin{
  margin-top:2rem;
}
`
const WrapperExhibitions = styled.div`
background: ${({theme}) => theme.artcolors.primaryLightest};
color: ${({theme}) => theme.textSecondary};
padding:2rem;
padding-bottom:5rem;
`

const WrapperFooter = styled.footer`
background:${({theme}) => theme.textPrimary};
color: ${({theme}) => theme.artcolors.primary};
height:10vh;
padding:1rem;
margin-top:-2rem;
display:flex;
flex-direction:row;
gap:1rem;
align-items:center;
justify-content:center;
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
const {locales, locale: activeLocale} = router;
const language = activeLocale;
const {t} = useTranslation();
const [skogenIsTrue, setSkogen] = useState(false)
const [vKB, setVKB] = useState(false)
const [tree, setTree] = useState(false)
const [dream, setDream] = useState(false)
const [bedbug, setBedBug] = useState(false)

  return (<Section>
    <Content>
    <p>
    {t("artistpages.main.first")}</p>
    <p>{t("artistpages.main.second")}</p>
    <p>
    {t("artistpages.main.third")}<Link href="https://www.omkonst.com/16-konstfackskolan-varsutstallning.shtml"> &quot;{t("artistpages.main.linkOmKonst")}n&quot;</Link>{t("artistpages.main.thirdpart2")}
    </p>

    <hr className="margin"></hr>
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
    // STPLN = {STPLN}
    // setSTPLN = {setSTPLN}
    //inferno = {inferno}
    //setInferno = {setInferno}
    />
    
    </Content>
    
    {skogenIsTrue && <Skogen id="skogen"/>}
    {vKB && <ViKanBattre id="VKB"></ViKanBattre>}
    {bedbug && <NotLikeA id="bedbug"></NotLikeA>}
    {tree && <Tree id="tree"/>}
    {dream && <Dreams id="dreams"/>}
    <WrapperExhibitions>

    <h2>{t("artistpages.main.h2U")}</h2>
   
    <Exhibitions language={language}/>
    <h2>{t("artistpages.main.h2P")}</h2>
    <h3>
      Not Like a Bedbug
    </h3>
    <h4>{t("artistpages.main.h4MAL")}</h4>
   
    </WrapperExhibitions>
    {/* <Standalones>
  
      <Image src={survivor} alt=""/>
      <Image src={three} alt=""/>

    </Standalones> */}


    <WrapperFooter>
      
    <a href="https://www.instagram.com/jertfelt/"
    target="_blank">
    <button>Instagram</button>
    </a>
    <p>{t("artistpages.main.footerinfo")}<br/>
    Tova Jertfelt 2023</p>
    </WrapperFooter>
    </Section> );
}
 
export default Body;