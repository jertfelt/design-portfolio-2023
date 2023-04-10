import styled from "styled-components";
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
color:${({theme}) => theme.textSecondary};


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
}
`
const Upperpadding = styled.div`
height:4em;`

const VideoWrapper = styled.div`
margin:2rem;
margin-left:-2rem;
max-width:100vw;
div{
  max-width:100vw;
}
`
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

const ViKanBattre = () => {
  const {t} = useTranslation()

  return (
    <Section id="VKB">
      <Upperpadding></Upperpadding>
      <h2>{t("artistpages.vikanbattre.title")}</h2>
      <p>{t("artistpages.vikanbattre.smalldescription")}
      </p>
    <Link href="http://www.diva-portal.org/smash/record.jsf?pid=diva2%3A936493&dswid=9026" target="_blank">{t("artistpages.vikanbattre.readLink")}</Link>
    <ImageWrapper>
<Zoom>
<Image src={vikan1}
className="customzoom"
alt="Part One, showing some of the paintings"
></Image>
</Zoom>
<Zoom>
<Image src={vikan2}
className="customzoom"
alt="Part One, showing some of the paintings"
></Image>
</Zoom>
<Zoom>
<Image src={vikan3}
className="customzoom"
alt="Part One, showing some of the paintings"
></Image>
</Zoom>
</ImageWrapper>
    <VideoWrapper>
    <ReactPlayer url='https://youtu.be/IfffzYAGps4' 
    />
    </VideoWrapper>
    <p>{t("artistpages.vikanbattre.material")}</p>
    <p>{t("artistpages.vikanbattre.description1")}</p>
    <Zoom>
<Image src={vikan5}
className="customzoom"
alt="Part One, showing some of the paintings"
></Image>
</Zoom>
    </Section>
    );
}
 
export default ViKanBattre;