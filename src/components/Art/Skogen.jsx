import styled from "styled-components";
import Image from "next/image";

import ursakta1 from "../../../public/art/ursakta-roran-vi-bygger-om-uppsala-tova-jertfelt-2022.png"
import ursakta2 from "../../../public/art/ursakta-roran-vi-bygger-om-uppsala-tova-jertfelt-2022-vagg2.png"
import ursakta3 from "../../../public/art/ursakta-roran-vi-bygger-om-uppsala-tova-jertfelt-2022-skylt3.png"
import ursakta4 from "../../../public/art/ursakta-roran-vi-bygger-om-uppsala-tova-jertfelt-2022-skylt1.png"
import ursakta5 from "../../../public/art/ursakta-roran-vi-bygger-om-uppsala-tova-jertfelt-2022-skylt-2.png"

// import ursakta6 from "../../../public/art/skylt--jertfelt--klimatneutral+copy.png"
// import ursakta7 from "../../../public/art/skylt--jertfelt--parken.png"
// import ursakta8 from "../../../public/art/skylt--jertfelt--pulkabacken+copy.png"

const ImageWrapper = styled.div`
margin:0;
padding:0;
margin-top:-2rem;
margin-left:-2rem;
width:100%;
max-width:90vw;
position:relative;
img{
  width:100vw;
}
`

const Section = styled.section`
min-height:50vh;
padding:2rem;
padding-bottom:10rem;
h2{
  font-size:10vh;
  line-height:10vh;
  padding-top:0;
  margin-top:0;
  margin-bottom:0;
}

`

const Skogen = () => {


  return ( 
  <Section id="skogen">
  <h2>Ursäkta skogen, vi bygger om</h2>
  <p>Tema: Temporary spaces. Mitt bidrag var URSÄKTA SKOGEN VI BYGGER OM, ett verk i två delar: </p>
  <h4>URSÄKTA SKOGEN VI BYGGER OM I</h4>
<ImageWrapper>
    <Image alt="Sign outside"
    quality={100}
    style={{
      objectFit: 'contain',
    }}
    src={ursakta2}/>

  </ImageWrapper>

<p>Akrylmålningar, torrpastell, ljudinstallation. 
Verken är till salu </p>
<p>Besökaren möter en artificiell skog, en skog som fått flytta på sig efter att kommunen vill gentrifiera och bygga bort skogen. Besökaren står i den artificiella skogen, omringad av biltrafik, och lyssnar på ljudklipp från kommunen som handlar om dess storslagna planer på att värna om naturen - utan att värna om naturen - i stadsdelen Eriksberg. Kommunen har planer på att bygga hus på/i skogsområdena där så att människan kan vara nära naturen, fast ändå inte. Det blir ett kritiskt projekt, där man får förhålla sig till idén om vad som är mänskligt, naturligt, temporärt och hälsosamt. Till vilket pris? I ljudklippet bryts även in fakta om fladdermössen, som bor i Eriksbergs skogar, ljudet av artificiell fågelsång, och diverse dikter.</p>
  <ImageWrapper>
    <Image alt="Sign outside"
    quality={100}
    style={{
      objectFit: 'contain',
    }}
    src={ursakta3}/>

  </ImageWrapper>
<h4>URSÄKTA SKOGEN VI BYGGER OM II</h4>
<p>I mitt verk funderar jag på temporära lösningar på samhällsomfattande problem. I en föränderlig stad som Uppsala finns en plan på att expandera sin befolkningsmängd, och det innebär att grönområden behöver krympas, till förmån för bebyggelse. I jakten på förändring och “förbättring” skapas ett stormens öga, där fina ord som hållbarhet, naturnära och grönstruktur används som dekoration. Samtidigt talar man om naturvärde, vad är mer eller mindre “önskvärt”? Skyltarnas språk, rytm och radbryt är direkt tagna från Uppsalas kommunikation, jag har manipulerat ordföljden så att kontrasten mellan intention och resultat synliggörs. Verket är ett porträtt, en parodi, och ett vittnesmål.</p>


  <p>Curator: Alba Folgado</p>
  <p>Läs mer om <a href="https://uppsalakonstnarsklubb.se/projekt-och-event/Rusmus" target="_blank"/>Rusmus</p>
  
  </Section> );
}
 
export default Skogen;