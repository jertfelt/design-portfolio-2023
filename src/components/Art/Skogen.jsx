import styled from "styled-components";
import Image from "next/image";
import ReactPlayer from "react-player";
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
import { Controlled as ControlledZoom } from 'react-medium-image-zoom'

import ursakta1 from "../../../public/art/ursakta-roran-vi-bygger-om-uppsala-tova-jertfelt-2022.png"
import ursakta2 from "../../../public/art/ursakta-roran-vi-bygger-om-uppsala-tova-jertfelt-2022-vagg2.png"
import ursakta3 from "../../../public/art/ursakta-roran-vi-bygger-om-uppsala-tova-jertfelt-2022-skylt3.png"
import ursakta4 from "../../../public/art/ursakta-roran-vi-bygger-om-uppsala-tova-jertfelt-2022-skylt1.png"
import ursakta5 from "../../../public/art/ursakta-roran-vi-bygger-om-uppsala-tova-jertfelt-2022-skylt-2.png"
import { useCallback, useState } from "react";

import ursakta6 from "../../../public/art/skylt--jertfelt--klimatneutral+copy.png"
import { ImageWrapper } from "./ViKanBattre";
import ursakta7 from "../../../public/art/skylt--jertfelt--parken-1.png"
import ursakta8 from "../../../public/art/skylt--jertfelt--pulkabacken+copy.png"

import ImageSlider from "./Slider";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";

export const ursaktaImg = [ ursakta5, ursakta4, ursakta3 ]

const Section = styled.section`
min-height:50vh;
padding:2rem;
padding-bottom:3rem;
margin-bottom:-8px;
h2{
  font-size:10vh;
  line-height:10vh;
  padding-top:0;
  margin-top:0;
  margin-bottom:0;
}
p{
  line-height:150%;
}
.curator{
  padding-bottom:2rem;
}
.link{
  padding-top:1rem;
}
`

const ZoomDiv = styled.div`
[data-rmiz] {
  position: relative;  
}
[data-rmiz-ghost] {
  position: absolute;
  pointer-events: none;
}
img [data-rmiz-btn-zoom],
[data-rmiz-btn-unzoom] {
  background-color: ${({theme}) => theme.artcolors.primaryLight};
  border-radius: 50%;
  border: none;
  box-shadow: 0 0 1px ${({theme}) => theme.artcolors.primary};;
  color: #fff;
  height: 20px;
  margin: 0;
  outline-offset: 2px;
  padding: 9px;
  touch-action: manipulation;
  width: 20px;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}
[data-rmiz-btn-zoom]:not(:focus):not(:active) {
  position: absolute;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  pointer-events: none;
  white-space: nowrap;
  width: 1px;
}
[data-rmiz-btn-zoom] {
  position: absolute;
  inset: 10px 10px auto auto;
  cursor: zoom-in;
}
[data-rmiz-btn-unzoom] {
  position: absolute;
  inset: 20px 20px auto auto;
  cursor: zoom-out;
  z-index: 1;
}
[data-rmiz-content="found"] img,
[data-rmiz-content="found"] svg,
[data-rmiz-content="found"] [role="img"],
[data-rmiz-content="found"] [data-zoom] {
  cursor: zoom-in;
}
[data-rmiz-modal]::backdrop {
  display: none;
}
[data-rmiz-modal][open] {
  position: fixed;
  width: 100vw;
  width: 100svw;
  height: 100vh;
  height: 100svh;
  max-width: none;
  max-height: none;
  margin: 0;
  padding: 0;
  border: 0;
  background: transparent;
  overflow: hidden;
}
[data-rmiz-modal-overlay] {
  position: absolute;
  inset: 0;
  transition: background-color 0.3s;
}
[data-rmiz-modal-overlay="hidden"] {
  background-color: ${({theme}) => theme.artcolors.primaryLighter};
}
[data-rmiz-modal-overlay="visible"] {
  background-color: ${({theme}) => theme.artcolors.primaryLighter};
}
[data-rmiz-modal-content] {
  position: relative;
  width: 100%;
  height: 100%;
}
[data-rmiz-modal-img] {
  position: absolute;
  cursor: zoom-out;
  image-rendering: high-quality;
  transform-origin: top left;
  transition: transform 0.3s;
}
@media (prefers-reduced-motion: reduce) {
  [data-rmiz-modal-overlay],
  [data-rmiz-modal-img] {
    transition-duration: 0.01ms;
  }
}`

const TextInEnglish = styled.div`
padding-top:3rem;
padding-bottom:5rem;`
const Upperpadding = styled.div`
height:4em;`

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
  <h4>{t("artistpages.forest.title1")}</h4>
  <ReactPlayer url="https://soundcloud.com/tova-jertfelt/ursakta-skogen-vi-bygger-om?si=2811fc45bf98463d99bf3583c3e89756&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"
width="100%"
height="100px"
config={{
  soundcloud:{
    options:{
      sharing:true
    }
  }
}}
/>
<p>{t("artistpages.forest.longdesc")}</p>
<p>{t("artistpages.forest.material")} </p>
<ImageWrapper horizontal>
<Zoom>
<Image src={ursakta1}
className="customzoom"
alt="Part One, showing some of the paintings"
></Image>
</Zoom>
</ImageWrapper>


<ImageWrapper horizontal>
<Zoom>
<Image src={ursakta2}
className="customzoom"
alt="Part One, showing some of the paintings"
></Image>
</Zoom>
</ImageWrapper>
<Upperpadding></Upperpadding>


<h4>{t("artistpages.forest.title2")}</h4>
<p>{t("artistpages.forest.desc2")}</p>
<br/>
<Zoom>
  <ImageWrapper>
    <Image alt="Sign outside text"
    quality={100}
    style={{
      objectFit: 'contain',
    }}
    src={ursakta6}/>
  </ImageWrapper>
</Zoom>
{language !== "sv" && 
<TextInEnglish>
  <p>Translation: <br></br></p>
  <h3>
<b>We strive to a <br/> growing city</b><br/></h3>
<p> 
  In 2030 the municipality will become climate neutral.<br/>
  Noone knows how it will happen.<br/>
  Our vision is business focus,<br></br>
  traffic and population growth,<br></br>
  and straight lines,<br></br>
  everything from the human point of view.<br></br>
  Everything in the town shall have a purpose. <br></br>
  Unproductivity does not belong. <br></br>
  Ineffectiveness is extinct.<br></br>
  We want to make our mark. <br></br>
  Clean away the weed. <br></br>
  We have new ideals now. <br></br>
  History does not repeat itself.<br></br>
  We are taking the nature into consideration.
</p>
</TextInEnglish>}
<Zoom>
  <ImageWrapper>
    <Image alt="Sign outside text"
    quality={100}
    style={{
      objectFit: 'contain',
    }}
    src={ursakta7}/>
  </ImageWrapper>
</Zoom>
{language !== "sv" && 
<TextInEnglish>
  
  <h3>
<b>This park will be <br/> replaced</b><br/></h3>
<p> 
  At the municipality&#39;s inventory<br/>
  it was decided that it<br/>
  does not follow our vision for<br></br>
  green structure. <br/>
  It no longer fits in with <br/>
  our new street ideals,<br/>
  does not match our <br/>
  fresh urban landscape architecture,<br/>
  it does not either contribute to<br/>
  any profit.<br/>
  We will therefore replace the <br/>
  bushes, gravel paths, <br/>
  trees, bird nests and <br/>
  the ant hill in the southwest corner <br/>
  with a circular, sustainable <br/>
  partly underground <br/>
  parking space that will <br/>
  have room for nine cars.
</p>
</TextInEnglish>}

<Zoom>
  <ImageWrapper>
    <Image alt="Sign outside text"
    quality={100}
    style={{
      objectFit: 'contain',
    }}
    src={ursakta8}/>
  </ImageWrapper>
</Zoom>
{language !== "sv" && 
<TextInEnglish>
  
  <h3>
<b>Here we will build <br/> new living spaces</b><br/></h3>
<p> 
  350 new apartments <br/>
  four to sex floors <br/>
  with a modern touch, <br/>
  green electricity and <br/>
  accessible to everyone. <br/>
  Taking into account the conditions of the area<br/>
  that is to say current housings<br/>
  we sadly have to evict<br/>
  the bats, the aphids, and the vipers. <br/>
  They have been offered to participate in <br/>
  the municipality&#39;s planning program<br/>
  for urban development<br/>
  but they cannot afford the <br/>
  down payment.<br/>
  The sledding hill will remain, <br/>
  so that the children may play in wintertime.
</p>
</TextInEnglish>}
  <p className="curator">Curator: Alba Folgado</p>
  <ImageSlider slides={ursaktaImg}
  format=""
  type="light"
></ImageSlider>
<p className="link">{t("artistpages.forest.linktxt")} <a href="https://uppsalakonstnarsklubb.se/projekt-och-event/Rusmus" target="_blank">Rusmus</a> {t("artistpages.forest.linktxt2")}</p>

  </Section> );
}
 
export default Skogen;