import styled from "styled-components";
import Image from "next/image";
import ReactPlayer from "react-player";
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
import ursakta1 from "../../../public/art/ursakta-roran-vi-bygger-om-uppsala-tova-jertfelt-2022.png"
import ursakta2 from "../../../public/art/ursakta-roran-vi-bygger-om-uppsala-tova-jertfelt-2022-vagg2.png"
import ursakta3 from "../../../public/art/ursakta-roran-vi-bygger-om-uppsala-tova-jertfelt-2022-skylt3.png"
import ursakta4 from "../../../public/art/ursakta-roran-vi-bygger-om-uppsala-tova-jertfelt-2022-skylt1.png"
import ursakta5 from "../../../public/art/ursakta-roran-vi-bygger-om-uppsala-tova-jertfelt-2022-skylt-2.png"
import ursakta6 from "../../../public/art/skylt--jertfelt--klimatneutral+copy.png"
import { ImageWrapper } from "./ViKanBattre";
import ursakta7 from "../../../public/art/skylt--jertfelt--parken-1.png"
import ursakta8 from "../../../public/art/skylt--jertfelt--pulkabacken+copy.png"
import ImageSlider from "./Slider";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";

export const ursaktaImg = [ ursakta5, ursakta4, ursakta3 ]

const Section = styled.section`
min-height:50vh;
padding:2rem;
@media (min-width:900px){
  padding-top:10rem;
}
padding-bottom:3rem;
margin-bottom:-8px;
h2{
  font-size:10vh;
  line-height:10vh;
  padding-top:0;
  margin-top:0;
  margin-bottom:0;
}
h4{
  @media (min-width:500px){
    max-width:80vw;
    font-size:2.2rem;
    line-height:2.8rem;
    margin-bottom:4px;
  }
}
p{
  line-height:150%;
  @media (min-width:500px){
    max-width:80vw;
    font-size:1.2rem;
    line-height:1.8rem;
  }
}
.curator{
  padding-bottom:2rem;
  @media (min-width:550px){
    padding-top:0;
    margin-top:0;
    padding-bottom:4rem;
  }
}
.link{
  padding-top:1rem;
  margin-bottom:0;
  text-align:center;
  @media (min-width:550px){
    padding-top:3rem;
  }
}
`


const TextInEnglish = styled.div`
padding-top:3rem;
padding-bottom:5rem;
@media (min-width:500px){
  p{max-width:70vw;}
  h3{
    font-size:30px;
  }
}
@media (min-width:800px){
  h3{
    font-size:1.5rem;
  }
  p{font-size:1rem;}
  padding:0;
}

`
const Upperpadding = styled.div`
height:4em;`

const Grid800 = styled.div`
@media (min-width:800px){
  display:grid;
  grid-template-columns: repeat(2, 1fr);
  gap:2rem;
  padding-left:2rem;
  row-gap:2rem;
  align-items:center;
}

`

const Skogen = () => {
  const router= useRouter();
  const {t} = useTranslation()
  const {locale: activeLocale} = router;
  const language = activeLocale;
  return ( 
  <Section id="skogen">
    <Upperpadding></Upperpadding>
  <h2>{t("artistpages.forest.h2")}</h2>
  <p>{t("artistpages.forest.desc")} </p>
  <h4>{t("artistpages.forest.title1")}</h4>
  <ReactPlayer url="https://soundcloud.com/tova-jertfelt/ursakta-skogen-vi-bygger-om?si=2811fc45bf98463d99bf3583c3e89756&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"
  width="80vw"
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
<p>{t("artistpages.forest.material")} </p>
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
></Image>
</Zoom>
</ImageWrapper>
<Upperpadding></Upperpadding>
<h4>{t("artistpages.forest.title2")}</h4>
<p>{t("artistpages.forest.desc2")}</p>
<br/>
<Grid800>
<Zoom>
  <ImageWrapper grid>
    <Image alt="Sign outside text"
    quality={100}
    style={{
      objectFit: 'contain',
    }}
    src={ursakta6}/>
  </ImageWrapper>
</Zoom>
{language !== "sv" && 
<TextInEnglish>
  <p>Translation: <br></br></p>
  <h3>
<b>We strive to a <br/> growing city</b><br/></h3>
<p> 
  In 2030 the municipality will become climate neutral.<br/>
  Noone knows how it will happen.<br/>
  Our vision is business focus,<br></br>
  traffic and population growth,<br></br>
  and straight lines,<br></br>
  everything from the human point of view.<br></br>
  Everything in the town shall have a purpose. <br></br>
  Unproductivity does not belong. <br></br>
  Ineffectiveness is extinct.<br></br>
  We want to make our mark. <br></br>
  Clean away the weed. <br></br>
  We have new ideals now. <br></br>
  History does not repeat itself.<br></br>
  We are taking the nature into consideration.
</p>
</TextInEnglish>}
<Zoom>
  <ImageWrapper grid>
    <Image alt="Sign outside text"
    quality={100}
    style={{
      objectFit: 'contain',
    }}
    src={ursakta7}/>
  </ImageWrapper>
</Zoom>
{language !== "sv" && 
<TextInEnglish>
  
  <h3>
<b>This park will be <br/> replaced</b><br/></h3>
<p> 
  At the municipality&#39;s inventory<br/>
  it was decided that it<br/>
  does not follow our vision for<br></br>
  green structure. <br/>
  It no longer fits in with <br/>
  our new street ideals,<br/>
  does not match our <br/>
  fresh urban landscape architecture,<br/>
  it does not either contribute to<br/>
  any profit.<br/>
  We will therefore replace the <br/>
  bushes, gravel paths, <br/>
  trees, bird nests and <br/>
  the ant hill in the southwest corner <br/>
  with a circular, sustainable <br/>
  partly underground <br/>
  parking space that will <br/>
  have room for nine cars.
</p>
</TextInEnglish>}

<Zoom>
  <ImageWrapper grid>
    <Image alt="Sign outside text"
    quality={100}
    style={{
      objectFit: 'contain',
    }}
    src={ursakta8}/>
  </ImageWrapper>
</Zoom>
{language !== "sv" && 
<TextInEnglish>
  
  <h3>
<b>Here we will build <br/> new living spaces</b><br/></h3>
<p> 
  350 new apartments <br/>
  four to sex floors <br/>
  with a modern touch, <br/>
  green electricity and <br/>
  accessible to everyone. <br/>
  Taking into account the conditions of the area<br/>
  that is to say current housings<br/>
  we sadly have to evict<br/>
  the bats, the aphids, and the vipers. <br/>
  They have been offered to participate in <br/>
  the municipality&#39;s planning program<br/>
  for urban development<br/>
  but they cannot afford the <br/>
  down payment.<br/>
  The sledding hill will remain, <br/>
  so that the children may play in wintertime.
</p>
</TextInEnglish>}
</Grid800>
  <p className="curator">Curator: Alba Folgado</p>
  <ImageSlider slides={ursaktaImg}
  format=""
  type="light"
></ImageSlider>
<p className="link">{t("artistpages.forest.linktxt")} <a href="https://uppsalakonstnarsklubb.se/projekt-och-event/Rusmus" target="_blank">Rusmus</a> {t("artistpages.forest.linktxt2")}</p>

  </Section> );
}
 
export default Skogen;