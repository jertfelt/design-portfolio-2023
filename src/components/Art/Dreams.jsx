import styled from "styled-components";
import ReactPlayer from 'react-player/lazy'
import Image from "next/image";
import {death} from "../../../public/art/death-bride-jertfelt.png"
import {dreamsGIF} from "../../../public/art/dreams--2.gif"
import {dreamsGIF2} from "../../../public/art/dreams--3.gif"
import {bald} from "../../../public/art/dreams-tova-jertfelt-bald.png"
import {palmyra} from "../../../public/art/dreams-tova-jertfelt-palmyra.png"
import {dreams3} from "../../../public/art/dreams-tova-jertfelt.png"
import {dreams4} from "../../../public/art/dreams-tova-jertfelt+(4).png"
import {pillow} from "../../../public/art/tova_jertfelt_pillow1.png"
import {pillow2} from "../../../public/art/tova_jertfelt_vila_i_frid.png"
import { useTranslation } from "next-i18next";
import { ImageWrapper, Upperpadding, VideoWrapper } from "./ViKanBattre";


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
`

const Dreams = () => {
  return ( 
  <Section id="dreams">
      <VideoWrapper first>
      <ReactPlayer url="https://www.youtube.com/watch?v=ppg8aZ8snZ8"/>
    </VideoWrapper>
    <Upperpadding/>
    <h2>When I dream, I dream about <i>you</i>.</h2>
    
    <p>Textilkonst, digitalt collage/måleri och animation, 2015.</p>

    <Image src={bald} alt=""/>

    <p>Uställt på JUSTE Gallery 2015 och Hornhuset, 2015.</p>
  
    <p>Återkommande i mitt liv har jag intensiva drömmar. När jag var på utbyte i Riga så drömde jag intensivt, nästan varje natt. Jag bestämde mig för att göra konst utifrån dessa drömmar. Det är subjektivt, men det är också något allmänt i känslan av skräck, stress, hemlängtan och längtan. </p>
    <p>I det här projektet jobbade jag med textilkonst, jag tryckte batik och sydde ihop lapptäcke och kuddar som en slags drömbädd. Vidare animerade jag och gjorde stora digitala målningar utifrån avfotograferade textilbitar.</p>
  
    <ImageWrapper horizontal>
    <Image src={dreamsGIF} alt=""></Image>
    <Image src={dreamsGIF2} alt=""></Image>
    </ImageWrapper>
  </Section> );
}
 
export default Dreams;