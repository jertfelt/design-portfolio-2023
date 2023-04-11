import styled,{css} from "styled-components";
import Image from "next/image";
import vikan1 from "../../../public/art/vi-kan-battre-tova-jertfelt-kandidatexamen-2016-konstfack--2.png"
import vikan2 from "../../../public/art/vi-kan-battre-tova-jertfelt-kandidatexamen-2016-konstfack--3.png"
import vikan3 from "../../../public/art/vi-kan-battre-tova-jertfelt-kandidatexamen-2016-konstfack--4.png"
import vikan4 from "../../../public/art/vi-kan-battre-tova-jertfelt-kandidatexamen-2016-konstfack--5.png"
import vikan5 from "../../../public/art/vi-kan-battre-tova-jertfelt-kandidatexamen-2016-konstfack--print.png"
import vikan6 from "../../../public/art/vi-kan-battre-tova-jertfelt-kandidatexamen-2016-konstfack--print2.png"
import vikan7 from "../../../public/art/vi-kan-battre-tova-jertfelt-kandidatexamen-2016-konstfack.png"
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
import { useTranslation } from "next-i18next";
import Link from "next/link";
import ReactPlayer from 'react-player/lazy'

const Section = styled.section`
min-height:50vh;
background: ${({theme}) => theme.artcolors.primaryLighter};
padding:2rem;
color:${({theme}) => theme.textPrimary};


h2{
  color:${({theme}) => theme.textPrimary};
  font-size:10vh;
  line-height:10vh;
  padding-top:0;
  margin-top:0;
  margin-bottom:0;
}
p{
  line-height:150%;
  padding-bottom:1rem;
}
a{
  line-height:150%;
  background-color:${({theme}) => theme.artcolors.primaryLightest};
  padding:4px;
  border-radius:19px;
}
`
export const Upperpadding = styled.div`
height:2em;`

export const VideoWrapper = styled.div`
margin:2rem;
margin-bottom:0;
margin-left:-2rem;
max-width:100vw;
div{
  max-width:100vw;
}
${props => 
  props.first && 
  css` {  
    margin-top:-2rem;

  }`}
`
export const ImageWrapper = styled.div`
margin:0;
padding:0;
margin-left:-2rem;
width:100%;
max-width:90vw;
position:relative;
img{
  margin-top:-.5rem;
  width:100vw;
  height: 70vh;
}
${props => 
  props.horizontal && 
  css`  
 img{
  min-width:100vw;
  width:100%;
  height:100%;
 }
 margin-top:2rem;
 margin-bottom:-2.5rem;
 margin-left:-2rem;
 `
}
${props => 
  props.horizontal_gallery && 
  css`  
 img{
  min-width:100vw;
  width:100%;
  height:100%;
 }
 margin:1rem;
 margin-left:-2rem;
 `
}
${props => 
  props.horizontal_first && 
  css`  
 img{
  min-width:100vw;
  width:100%;
  height:100%;
 }
 margin-top:-3rem;
 margin-left:-2rem;
 `
}
`

const ViKanBattre = () => {
  const {t} = useTranslation()

  return (
    <Section id="VKB">
        <ImageWrapper 
    horizontal_first>
    <Zoom>
<Image src={vikan7}
className="customzoom"
alt="The entrance"
></Image>
</Zoom>
</ImageWrapper>
      <Upperpadding></Upperpadding>
      
      <h2>{t("artistpages.vikanbattre.title")}</h2>
      <p>{t("artistpages.vikanbattre.smalldescription")}
      </p>
      <p>{t("artistpages.vikanbattre.material")}</p>
      <VideoWrapper>
    <ReactPlayer url='https://youtu.be/IfffzYAGps4' 
    />
    </VideoWrapper>

<ImageWrapper>
<Zoom>
<Image src={vikan1}
className="customzoom"
alt="The cube"
></Image>
</Zoom>
<Zoom>
<Image src={vikan2}
className="customzoom"
alt="The cube"
></Image>
</Zoom>
<Zoom>
<Image src={vikan3}
className="customzoom"
alt="The cube"
></Image>
</Zoom>
</ImageWrapper>

 
  
    <p>{t("artistpages.vikanbattre.description1")}</p>
    <Link href="http://www.diva-portal.org/smash/record.jsf?pid=diva2%3A936493&dswid=9026" target="_blank"  >{t("artistpages.vikanbattre.readLink")}</Link>
    <ImageWrapper 
    horizontal>
    <Zoom>
<Image src={vikan5}
className="customzoom"
alt="Detail from the wall, a boy slapping another boy"
></Image>
</Zoom>
</ImageWrapper>
<ImageWrapper 
    horizontal>
    <Zoom>
<Image src={vikan6}
className="customzoom"
alt="Detail from the wall, girl chased by wolves"
></Image>
</Zoom>
</ImageWrapper>

    </Section>
    );
}
 
export default ViKanBattre;