import styled from "styled-components";
import ReactPlayer from "react-player";
import { useTranslation } from "next-i18next";
import { Row1040 } from "../Skogen";
import { ImageWrapper } from "../ViKanBattre";
import Image from "next/image";
import { ursaktaImg } from "./Imgs";
import ImageSlider from "../Slider";
import { Grid1200px, GridSkogen1200pxMin, Max1200px } from "./Gridfrom1040";

export const MoreThan1040 = styled.div`
@media (max-width:1040px){
  display:none;
}`


const LaptopViewSkogen = ({ursakta1, ursakta2, language}) => {
  const {t} = useTranslation()
  return (
<MoreThan1040>
<Row1040>
<div className="column">
      <h4>{t("artistpages.forest.title1")}</h4>

  <ReactPlayer 
  url="https://soundcloud.com/tova-jertfelt/ursakta-skogen-vi-bygger-om?si=2811fc45bf98463d99bf3583c3e89756&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"
  width="30vw"
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
</div>

<div className="column">
<ImageWrapper largeformat>
      <Image src={ursakta1}
className="customzoom"
alt="Part One, showing some of the paintings"
></Image>
      </ImageWrapper>
      <ImageWrapper largeformat>
      <Image src={ursakta2}
className="animated"
alt="Part One, showing some of the paintings"
></Image>
      </ImageWrapper> 
      </div>
      <div className="column">
    <ImageSlider slides={ursaktaImg}
    format="row"/>
    </div>
    

    <div className="column">
    <h4>{t("artistpages.forest.title2")}</h4>
    <p>{t("artistpages.forest.desc2")}</p>
    </div>

    
</Row1040>
<GridSkogen1200pxMin language={language}/>
</MoreThan1040>


    );
}
 
export default LaptopViewSkogen;