import styled from "styled-components";
import ReactPlayer from 'react-player/youtube'
import Image from "next/image";
import pillow1 from "../../../public/art/tova_jertfelt_vila_i_frid.png"
import pillow2 from "../../../public/art/tova_jertfelt_pillow1.png"
import deathbride from "../../../public/art/death-bride-jertfelt.png"
import bald from "../../../public/art/dreams-tova-jertfelt-bald.png"
import palmyra from "../../../public/art/dreams-tova-jertfelt-palmyra.png"
import homesick from "../../../public/art/dreams-tova-jertfelt+(4).png"
import dance from "../../../public/art/dreams-tova-jertfelt.png"
import { useTranslation } from "next-i18next";
import {Upperpadding, VideoWrapper } from "./ViKanBattre";
import ImageSlider from "./Slider";

export const images1=[pillow1, pillow2]
export const images2=[bald,palmyra,dance,homesick,deathbride]

const Section = styled.section`
min-height:50vh;
padding:2rem;
h2{
  color:${({theme}) => theme.textPrimary};
  font-size:10vh;
  line-height:10vh;
  letter-spacing:-2px;
  padding-top:0;
  margin-top:0;
  margin-bottom:0;
}
p{
  padding-bottom:2rem;
}
`
const Dreams = () => {
  const {t} = useTranslation()
  return ( 
  <Section id="dreams">
      <VideoWrapper first>
      <ReactPlayer url="https://www.youtube.com/watch?v=ppg8aZ8snZ8"/>
    </VideoWrapper>
    <Upperpadding/>
    <h2>When I dream, I dream about <i>you</i>.</h2>
    <p>{t("artistpages.dreams.desc")}</p><br/>
    <ImageSlider 
    slides={images1}
    format="horizontal"
    type="dark"/>
   
    <p>{t("artistpages.dreams.desc2")}</p>
    
    <p>{t("artistpages.dreams.longerdesc")}</p>
    
    <ImageSlider 
    slides={images2}
    format=""
    type="light"/>
    <br/>
    <p>{t("artistpages.dreams.longerdesc2")}</p>
  
  </Section> );
}
 
export default Dreams;