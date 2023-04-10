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

// import ursakta6 from "../../../public/art/skylt--jertfelt--klimatneutral+copy.png"
// import ursakta7 from "../../../public/art/skylt--jertfelt--parken.png"
// import ursakta8 from "../../../public/art/skylt--jertfelt--pulkabacken+copy.png"

const ImageWrapper = styled.div`
margin:0;
padding:0;
margin-left:-2rem;
width:100%;
max-width:90vw;
position:relative;
img{
  width:100vw;
  height: 70vh;
}

`

const Section = styled.section`
min-height:50vh;
padding:2rem;
padding-bottom:0;
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

const Upperpadding = styled.div`
height:4em;`

const Skogen = () => {

  return ( 
  <Section id="skogen">
    <Upperpadding></Upperpadding>
  <h2>Ursäkta skogen, vi bygger om</h2>
  <p>Tema: Temporary spaces. Mitt bidrag var URSÄKTA SKOGEN VI BYGGER OM, ett verk i två delar: </p>
  <h4>URSÄKTA SKOGEN VI BYGGER OM I</h4>
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
<p>Besökaren möter en artificiell skog, en skog som fått flytta på sig efter att kommunen vill gentrifiera och bygga bort skogen. Besökaren står i den artificiella skogen, omringad av biltrafik, och lyssnar på ljudklipp från kommunen som handlar om dess storslagna planer på att värna om naturen - utan att värna om naturen - i stadsdelen Eriksberg. Kommunen har planer på att bygga hus på/i skogsområdena där så att människan kan vara nära naturen, fast ändå inte. Det blir ett kritiskt projekt, där man får förhålla sig till idén om vad som är mänskligt, naturligt, temporärt och hälsosamt. Till vilket pris? I ljudklippet bryts även in fakta om fladdermössen, som bor i Eriksbergs skogar, ljudet av artificiell fågelsång, och diverse dikter.</p>
<ImageWrapper>
<Zoom>
<Image src={ursakta1}
className="customzoom"
alt="Part One, showing some of the paintings"
></Image>
</Zoom>
</ImageWrapper>

<p>Akrylmålningar, torrpastell, ljudinstallation. 
Verken är till salu </p>
<ImageWrapper>
<Zoom>
<Image src={ursakta2}
className="customzoom"
alt="Part One, showing some of the paintings"
></Image>
</Zoom>
</ImageWrapper>
<h4>URSÄKTA SKOGEN VI BYGGER OM II</h4>
<p>I mitt verk funderar jag på temporära lösningar på samhällsomfattande problem. I en föränderlig stad som Uppsala finns en plan på att expandera sin befolkningsmängd, och det innebär att grönområden behöver krympas, till förmån för bebyggelse. I jakten på förändring och “förbättring” skapas ett stormens öga, där fina ord som hållbarhet, naturnära och grönstruktur används som dekoration. Samtidigt talar man om naturvärde, vad är mer eller mindre “önskvärt”? Skyltarnas språk, rytm och radbryt är direkt tagna från Uppsalas kommunikation, jag har manipulerat ordföljden så att kontrasten mellan intention och resultat synliggörs. Verket är ett porträtt, en parodi, och ett vittnesmål.</p>

  <ImageWrapper>
    <Image alt="Sign outside"
    quality={100}
    style={{
      objectFit: 'contain',
    }}
    src={ursakta3}/>
  </ImageWrapper>
  <p>Curator: Alba Folgado</p>
  <p>Läs mer om <a href="https://uppsalakonstnarsklubb.se/projekt-och-event/Rusmus" target="_blank"/>Rusmus</p>
  <ImageWrapper>
<Zoom>
<Image src={ursakta4}
className="customzoom"
alt="Sign outside"
></Image>
</Zoom>
<Image src={ursakta5}
className="customzoom"
alt="Sign outside"
></Image>
</ImageWrapper>

  
  </Section> );
}
 
export default Skogen;