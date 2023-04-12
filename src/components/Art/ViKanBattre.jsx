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
import ImageSlider from "./Slider";
import { GridArt } from "./Skogen";

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
  z-index:10;
  margin-bottom:0;
  @media (min-width:800px){
    padding-left:5rem;
    padding-right:5rem;
    max-width:70vw;
    padding-bottom:2rem;
  }
  @media(min-width:800px){
   
   
  }
}
p{
  line-height:150%;
  padding-bottom:1rem;
  @media (min-width:500px){
    max-width:80vw;
    font-size:1.2rem;
    line-height:1.8rem;
  }
  @media (min-width:800px){
    padding-left:5rem;
    padding-right:5rem;
    max-width:70vw;
  }
}
a{
  line-height:150%;
  background-color:${({theme}) => theme.artcolors.primary};
  padding:6px;
  border-radius:19px;
  @media (min-width:800px){
    
    max-width:70vw;
  }
}
`
export const Upperpadding = styled.div`
height:2em;
@media (min-width:800px){
  height:0;
}
`

export const VideoWrapper = styled.div`
margin:2rem;
margin-bottom:5rem;
margin-left:-2rem;
max-width:100vw;
div{
  max-width:100vw;
}
@media(min-width:650px){
  div{
    width:100%;
    min-width:100vw;
  }
}
@media (min-width:800px){
  div{
    min-width:80vw;
    padding-left:2rem;
  }
}
${props => 
  props.first && 
  css` {  
    margin-top:-2rem;
    @media (min-width:800px){
   margin:0;
   padding:0;
   
  }
    
  }`}
`
export const ImageWrapper = styled.div`
margin:0;
padding:0;
margin-left:-2rem;
width:100%;
max-width:90vw;
position:relative;
z-index:2;
img{
  margin-top:-.5rem;
  width:100vw;
  height: 70vh;
  @media (min-width:500px){
    height:100%;
    width:100vw;
  }
  @media (min-width:880px){
    width:80vw;
    max-width:700px;
    padding-left:5rem;
    margin:2rem;
  }
}

${props => 
  props.comic && 
  css`
  @media (min-width:800px){
    img{
      max-width:70vw;
    }
    padding-left:6rem;

  }@media (min-width:900px){

    padding:0;
    margin:0;
  }
  
  `}

${props => 
  props.max900 && 
  css` margin:0;
padding:0;
margin-left:-2rem;
width:100%;
max-width:90vw;
position:relative;
img{
  margin-top:-.5rem;
  width:100vw;
  height: 70vh;
  @media (min-width:500px){
    height:100%;
    width:100vw;
  }
}
@media (min-width:800px){
  img{
    width:50vw;
    max-width:800px;
    padding-left:20%;
  }

}
 @media(min-width:900px){
    img{
      padding-left:2rem;
      max-width:100%;
      padding-top:0;
      
      
    }
   
    } `}

${props => 
  props.grid && 
  css`  
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
    @media (min-width:500px){
      height:100%;
      width:100vw;
    }
    @media(min-width:800px){
      width:100%;
      max-width:50vw;
      padding:0;
      margin:1rem;
    }
    
  }
 `
}


${props => 
  props.horizontal && 
  css`  
 img{
  min-width:100vw;
  width:100%;
  height:100%;
  @media (min-width:800px){
    min-width:500px;
    width:100%;
    max-width:700px;
    height:50%;
    padding-left:5rem;
    }
    
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
const Mobile= styled.div`
@media (min-width:800px){
  display:none;
}
`
const NotMobile = styled.div`
@media (max-width:800px){
  display:none;
}`
const ViKanBattre = () => {
  const {t} = useTranslation()
  const images = [vikan7,vikan1,vikan5,vikan6]
  return (
<Section id="VKB">
  <Mobile>
<ImageWrapper 
    horizontal_first>
    <Zoom>
<Image src={vikan7}
className="customzoom"
alt="The entrance"
></Image>
</Zoom>
</ImageWrapper>
</Mobile>
      <Upperpadding></Upperpadding>
      
      <h2 >{t("artistpages.vikanbattre.title")}</h2>
      <p>{t("artistpages.vikanbattre.smalldescription")}
      </p>
  
      <p>{t("artistpages.vikanbattre.material")}</p>
      <VideoWrapper>
    <ReactPlayer url='https://youtu.be/IfffzYAGps4' 
    />
    </VideoWrapper>

<ImageWrapper>
<NotMobile>
        <GridArt sjuhundra>
          
          <ImageWrapper grid>
            <Zoom>
          <Image src={vikan3}

alt="The cube"
></Image></Zoom>
          </ImageWrapper>
          <ImageWrapper grid>
            <Zoom>
          <Image src={vikan2}

alt="The cube"
></Image></Zoom>
          </ImageWrapper>
          <ImageWrapper grid>
            <Zoom>
          <Image src={vikan4}

alt="The cube"
></Image></Zoom>
          </ImageWrapper>
        </GridArt>
      </NotMobile>
  <Mobile>
<Zoom>
<Image src={vikan1}
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
<Zoom>
<Image src={vikan2}
className="customzoom"
alt="The cube"
></Image>
</Zoom>

<Zoom>
<Image src={vikan4}
className="customzoom"
alt="The cube"
></Image>
</Zoom>
</Mobile>
</ImageWrapper>
    <p>{t("artistpages.vikanbattre.description1")}</p>

<NotMobile>
<ImageSlider slides={images}
format="horizontal"
type="light"/>
</NotMobile>

<Link href="http://www.diva-portal.org/smash/record.jsf?pid=diva2%3A936493&dswid=9026" target="_blank"  >{t("artistpages.vikanbattre.readLink")}</Link>
<Mobile>
<ImageWrapper 
    horizontal>
    <Zoom>
<Image src={vikan5}
alt="Detail from the wall, a boy slapping another boy"
></Image>
</Zoom>
</ImageWrapper>
<ImageWrapper 
    horizontal>
    <Zoom>
<Image src={vikan6}
alt="Detail from the wall, girl chased by wolves"
></Image>
</Zoom>
</ImageWrapper>
</Mobile>
    </Section>
    );
}
 
export default ViKanBattre;