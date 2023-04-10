import { useTranslation } from "next-i18next";
import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";
import Exhibitions from "./Exhibitions";
import Links from "./Links";
import Skogen from "./Skogen";
import { useState } from "react";
import ViKanBattre from "./ViKanBattre";


const Section = styled.div`
padding-top:450px;
color:${({theme}) => theme.textPrimary};
`
const Content = styled.div`
padding:2rem;
max-width:100%;
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
  Jag är en multidisciplinär konstnär baserad i Sverige. Min body of work är bl.a. grafiska blad, taktila collage, linjeteckning, aktrylmålningar, samt digitalt måleri och collage.</p>
    <p> I mitt konstnärskap så orienterar jag mig främst med ord och bild, gärna i korrelation, antingen i form av spoken word eller text. Genom att kombinera bildkonst, i antingen målning, animation eller torrpastell, med mina texter i form av ljud eller skriven text, söker jag ett samspel mellan det visuella och det språkliga. Det finns varken en under- eller överordning mellan bild och text, utan det är sammanhangen som spelar roll i mina verk. </p>
    <p>
    Jag rör mig mellan det indignerade, känslokraftiga och det observerande. Mitt manér när det kommer till teckning <Link href="https://www.omkonst.com/16-konstfackskolan-varsutstallning.shtml"> &quot;hämtar bildidéer och uttryck från tecknarna som var talrika för ett knappt tiotal år sedan&quot;</Link> och jag jobbar gärna med platsspecifika fenomen. Jag bearbetar psykologi, livet, döden, samhällsfrågor och mänsklig relation till varandra och annat. Jag ställer ut, kodar hemsidor, står på open poetry slams, och testar improteater där det finns möjlighet.
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

    />
    
    </Content>
    
    {skogenIsTrue && <Skogen id="skogen"/>}
    {vKB && <ViKanBattre id="VKB"></ViKanBattre>}
    <WrapperExhibitions>
    <h2>Utställningar</h2>
   
    <Exhibitions language={language}/>
    <h2>Publiceringar</h2>
    <h3>
      Not Like a Bedbug
    </h3>
    <h4>Serie publicerad i MAL magasin 2021</h4>
   
    </WrapperExhibitions>
   


    <WrapperFooter>
    <a href="https://www.instagram.com/jertfelt/"
    target="_blank">
    <button>Instagram</button>
    </a>
    <p>Hemsidan är byggd av <br/>
    Tova Jertfelt 2023</p>
    </WrapperFooter>
    </Section> );
}
 
export default Body;