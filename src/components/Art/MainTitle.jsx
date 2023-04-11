import artmadethis1 from "../../../public/art/hel_artmadethis_tovajertfelt.png"
import ursaktaSign from "../../../public/art/ursakta-roran-vi-bygger-om-uppsala-tova-jertfelt-2022-skylt1.png"
import ocean from "../../../public/art/_60A1364.png"
import gifVKB from "../../../public/art/ba_gdi_tova_jertfelt_01.gif"
import viKanBetter from "../../../public/art/vi-kan-battre-tova-jertfelt-kandidatexamen-2016-konstfack--3.png"
import dreams1 from "../../../public/art/dreams-tova-jertfelt.png"
import dreams2 from "../../../public/art/dreams-tova-jertfelt-bald.png"
import fire from "../../../public/art/fire-color-jertfelt copy.png"
import survivor from "../../../public/art/survivor-tova-jertfelt.jpg"
import stones from "../../../public/art/stones_tovajertfelt-litografi.jpg"

import styled from "styled-components";
import Image from "next/image";
import About from "./About";
import { useCallback, useEffect, useState } from "react"
import { useRouter } from "next/router"


const Wrapper = styled.div`
padding-top:10rem;
z-index:0;
.mobile{
  @media (min-width:900px){
    display:none;
  }
}
.notMobile{
  @media (max-width:900px){
    display:none;
  }
}
`
const TitleOverWrapper = styled.div`
z-index:1;
position:absolute;
top:50vh;
@media (max-width:900px){
  top:-5rem;
  width:100%;
  max-width:100vw;
}
display:flex;
flex-direction:column;`


const MainTitle = () => {
  const router= useRouter();
  const {locale: activeLocale} = router;
  const language = activeLocale;
  const [newName, setnewName] = useState("");
  const [newPic, setPic] = useState(fire)
  
const shuffle = useCallback(() => {
  const pics = [artmadethis1, ocean, gifVKB, viKanBetter, survivor, dreams2, fire, ursaktaSign, stones]
  const index = Math.floor(Math.random() * pics.length);
  setPic(pics[index]);
  const names = ["tankeväckande",  "vacker", "kritisk", "utforskande", "audiovisuell", "taktil",  "multidisciplinär", "digital"]
  const engnames = [ "beautiful", "thought-provoking", "critical", "experimential", "audiovisual", "tactile",  "multidisciplinary", "digital"]

  if(language === "sv"){
    const index = Math.floor(Math.random() * names.length);
    setnewName(names[index]);
  }
  else{
    const index = Math.floor(Math.random() * names.length);
    setnewName(engnames[index]);
  }

},[])

  useEffect(() => {
    const intervalID = setInterval(shuffle, 2000);
    return () => clearInterval(intervalID);
  }, [shuffle])

  return ( <>
    <Wrapper>
    <Image 
    className="mobile"
    alt="Various images of art" 
    src={newPic}
    priority={true}
    quality={100}
    fill
    style={{
      objectFit: 'cover',
    }}
    />
    <Image 
    className="notMobile"
    alt="ArtMadeThis Sollentuna 2017" 
    src={artmadethis1}
    quality={100}
    style={{
      objectFit: 'contain',
    }}
    />
    </Wrapper>
    <TitleOverWrapper>
    <About
    newName={newName}
    />
    </TitleOverWrapper>
    </> );
}
 
export default MainTitle;