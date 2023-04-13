import styled from "styled-components";
import { WrapperPlayer } from "../Skogen";
import ReactPlayer from "react-player";
import { ImageWrapper} from "../ViKanBattre";
import Zoom from 'react-medium-image-zoom'
import Image from "next/image";
import { ursaktaImg } from "./Imgs";
import { TabletSectionSkogen } from "./Mobile";
import { useTranslation } from "next-i18next";

export const LessThan1040 = styled.div`
@media (min-width: 1040px){
  display:none;
}`
const Upperpadding = styled.div`
height:4em;
@media (min-width:500px){
  height:1em;
}
@media (min-width:800px){
  height:0;
}
`

const LessThan1040pxSkogen = ({ursakta1, ursakta2}) => {
  const {t} = useTranslation();

  return (
  <LessThan1040>
    <h4>{t("artistpages.forest.title1")}</h4>
    <WrapperPlayer>
      <ReactPlayer url="https://soundcloud.com/tova-jertfelt/ursakta-skogen-vi-bygger-om?si=2811fc45bf98463d99bf3583c3e89756&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"
  width="60vw"
  height="100px"
  config={{
  soundcloud:{
    options:{
      sharing:true
    }
  }
}}
/>
    </WrapperPlayer>
    
<p>{t("artistpages.forest.longdesc")}</p>
<p className="material">{t("artistpages.forest.material")} </p>
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
/>
</Zoom>
</ImageWrapper>
<Upperpadding/>
<h4 className="title2">{t("artistpages.forest.title2")}</h4>
<p>{t("artistpages.forest.desc2")}</p>
  </LessThan1040>  );
}
 
export default LessThan1040pxSkogen;

