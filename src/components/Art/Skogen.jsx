import styled, {css} from "styled-components";
import 'react-medium-image-zoom/dist/styles.css'
import ursakta1 from "../../../public/art/ursakta-roran-vi-bygger-om-uppsala-tova-jertfelt-2022.png"
import ursakta2 from "../../../public/art/ursakta-roran-vi-bygger-om-uppsala-tova-jertfelt-2022-vagg2.png"
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import MobileSectionSkogen, { TabletSectionSkogen } from "./Skogen/Mobile";
import { ursaktaImg } from "./Skogen/Imgs";
import LessThan1040pxSkogen, { LessThan1040} from "./Skogen/Lessthan1040";
import GridFrom1040px, { GridFrom1200px } from "./Skogen/Gridfrom1040";
import LaptopViewSkogen from "./Skogen/Laptop";
import FlipSign from "./Skogen/FlippablePictures";
import { LoadingSection } from "../utils/loading";
import { useEffect, useState } from "react";
import Modal from "../utils/ModalLoader";

export const WrapperPlayer = styled.div`
padding-top:1rem;
@media (min-width:800px){
  padding-left:5rem;
}
`

const Section = styled.section`
padding:2rem;
padding-bottom:0;
.material{
  font-size:1rem;
}
hr{
  color:${({theme}) => theme.artcolors.primaryLighter};
  margin-top:2rem;
  
}
h2{
  font-size:10vh;
  line-height:10vh;
  padding-top:0;
  margin-top:0;
  margin-bottom:0;
  max-width:80vw;

  @media (min-width:800px){
    padding-bottom:2rem;
    max-width:80%;
    padding-left:5rem;
  }
  @media (min-width:1040px){
    padding-left:3rem;
    font-size:16vh;
    line-height:14vh;
    max-width:70vw;
    margin-top:-4rem;
  }
  @media (min-width:1200px){
   
   margin-bottom:-1rem;
  }
}
h4{
  color: ${({theme}) => theme.artcolors.primaryLightest};
  @media (min-width:500px){
    max-width:80vw;
    font-size:2.2rem;
    line-height:2.8rem;
    margin-bottom:4px;
  }
  @media (min-width:800px){
    padding-left:5rem;
    padding-right:5rem;
  }
}
p{
  line-height:150%;
  @media (min-width:500px){
    max-width:80vw;
    font-size:1.2rem;
    line-height:1.8rem;
  }
  @media (min-width:800px){
    padding-left:5rem;
    padding-right:5rem;
   }
  @media (min-width:1040px){
    padding-left:3rem;
    max-width:60vw;
  }
  @media (min-width:1200px){
    font-size:1rem;
    word-spacing:2px;
    max-width:80vw;
  }
}
.curator{
  text-align:center;
  padding-top:1rem;
  @media (min-width:550px){
   padding-top:2rem;
  }
  @media(min-width:1040px){
    text-align:left;
  }
}
.link{
  margin-bottom:0;
  text-align:center;
 
  @media(min-width:1040px){
    text-align:right;
  }
}
.title2{
  @media (min-width:800px){
    padding-top:3rem;
  }
}
`


export const TextInEnglish = styled.div`
padding-top:3rem;
padding-bottom:5rem;
@media (min-width:500px){
  p{max-width:70vw;}
  h3{
    font-size:30px;
  }
}
@media (min-width:800px){
  h3{
    font-size:1rem;
  }
  p{font-size:1rem;
    line-height:1.2rem;
  padding-left:0;
@media(min-width:1040px){
  font-size:1rem;
  line-height:1.5rem;
  padding-bottom:1rem;
  
  
}
}
  padding:0;
  margin:0;
}

`
const Upperpadding = styled.div`
height:4em;
@media (min-width:500px){
  height:1em;
}
@media (min-width:800px){
  height:0;
}
`

export const GridArt = styled.div`
${props => 
  props.attahundra && css`{
    @media (max-width:800px){
      padding-top:2rem;
      padding-bottom:0;
      margin-bottom:-1rem;
    }
    @media (min-width:800px){
      display:grid;
      grid-template-columns: repeat(2, 1fr);
      gap:2rem;
      padding-left:5rem;
      row-gap:2rem;
      align-items:center;
      padding-top:1rem;
      padding-bottom:5rem;
    }
    @media (min-width:900px){
      padding-left:5rem;
      padding-right:5rem;
      padding-bottom:0;
      padding-top:0;

    }
  }` }
  ${props => 
  props.threeRepeat && css`{
      display:grid;
      padding:5rem;
      grid-template-columns: repeat(3, 1fr);
      gap:2rem;
     
  }` }
  
  ${props => 
    props.sjuhundra && css`{
      @media (max-width:800px){
        padding-top:2rem;
        padding-bottom:0;
        margin-bottom:-1rem;
      }
      @media (min-width:700px){
        display:grid;
        grid-template-columns: repeat(3, 1fr);
        gap:2rem;
        padding-left:5rem;
        row-gap:2rem;
        align-items:center;
        padding-top:1rem;
        padding-bottom:2rem;

      }
          @media (min-width:900px){
      padding-left:3rem;
      padding-right:3rem;
      padding-bottom:0;
      padding-top:0;

    }
    }` }
    
`



export const Row1040 = styled.div`

display:grid;
grid-template-columns: repeat(2, 2fr);
gap:3rem;
padding:4rem;
row-gap:5rem;
img{
  margin-top:-2rem;
}

h4{
  padding:0;
  margin:0;
  font-size:1.5rem;
  line-height:1.8rem;
  margin-bottom:1rem;
  
}
p{
  padding:0;
  margin:0;
  padding-top:1rem;
  width:100%;
  max-width:40vw;
}

.frame {
  z-index: 1;
  position: relative;
  height: 100%;
  width: 100%;
}

.image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  background-repeat: no-repeat;
  background-size: cover;
}

.image_0 {
  z-index: 0;
  background-image: url(${ursakta1});
}

.image_1 {
  z-index: 1;
  background-image: url(${ursakta2});
}
`



const Skogen = () => {
  const router= useRouter();
  const {t} = useTranslation()
  const {locale: activeLocale} = router;
  const language = activeLocale;

  return ( 
  <Section id="skogen">

    <Upperpadding></Upperpadding>
    <h2>{t("artistpages.forest.h2")}</h2>
    <p>{t("artistpages.forest.desc")} </p>
<LaptopViewSkogen ursakta1={ursakta1} ursakta2={ursakta2} language={language}/>
<LessThan1040pxSkogen ursakta1={ursakta1} ursakta2={ursakta2}/>  
<LessThan1040>
  <TabletSectionSkogen ursaktaImg={ursaktaImg}/>
</LessThan1040>
<GridFrom1040px language={language}/>

<MobileSectionSkogen ursaktaImg={ursaktaImg}/>
<p className="curator">Curator: Alba Folgado</p>
<p className="link">{t("artistpages.forest.linktxt")} <a href="https://uppsalakonstnarsklubb.se/projekt-och-event/Rusmus" target="_blank">Rusmus</a> {t("artistpages.forest.linktxt2")}</p>

<hr></hr>

  </Section> );
}
 
export default Skogen;