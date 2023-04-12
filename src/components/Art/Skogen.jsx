import styled, {css} from "styled-components";
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
import { SkogenSignswithTranslations } from "@component/data/exhibitions";
import Grid from "./Grid";

export const ursaktaImg = [ ursakta5, ursakta4, ursakta3 ]

export const WrapperPlayer = styled.div`
padding-top:1rem;
@media (min-width:800px){
  padding-left:5rem;
}
`
const Mobile = styled.div`
@media (min-width:700px){
  display:none;
}
`

const NotMobile = styled.div`
@media (max-width:700px){
  display:none;
}
`

const Section = styled.section`
padding:2rem;
padding-bottom:0;
.material{
  font-size:1rem;
}
hr{
  color:${({theme}) => theme.artcolors.primaryLighter};
  margin-top:2rem;
}
h2{
  font-size:10vh;
  line-height:10vh;
  padding-top:0;
  margin-top:0;
  margin-bottom:0;
  max-width:80vw;

  @media (min-width:800px){
    padding-bottom:2rem;
    max-width:80%;
    padding-left:5rem;
  }
  @media (min-width:1040px){
    padding-left:3rem;
    font-size:16vh;
    line-height:14vh;
    max-width:70vw;
    margin-top:-4rem;
  }
}
h4{
  color: ${({theme}) => theme.artcolors.primaryLightest};
  @media (min-width:500px){
    max-width:80vw;
    font-size:2.2rem;
    line-height:2.8rem;
    margin-bottom:4px;
  }
  @media (min-width:800px){
    padding-left:5rem;
    padding-right:5rem;
  }
}
p{
  line-height:150%;
  @media (min-width:500px){
    max-width:80vw;
    font-size:1.2rem;
    line-height:1.8rem;
  }
  @media (min-width:800px){
    padding-left:5rem;
    padding-right:5rem;
   }
  @media (min-width:1040px){
    padding-left:3rem;
    max-width:60vw;
  }
}
.curator{
  text-align:center;
  padding-top:1rem;
  @media (min-width:550px){
   padding-top:2rem;
  }
}
.link{
  margin-bottom:0;
  text-align:center;
  @media (min-width:550px){
   
  }
}
.title2{
  @media (min-width:800px){
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
    font-size:1rem;
  }
  p{font-size:1rem;
    line-height:1.2rem;
  padding-left:0;}
  padding:0;
  margin:0;
}

`
const Upperpadding = styled.div`
height:4em;
@media (min-width:500px){
  height:1em;
}
@media (min-width:800px){
  height:0;
}
`

export const GridArt = styled.div`
${props => 
  props.attahundra && css`{
    @media (max-width:800px){
      padding-top:2rem;
      padding-bottom:0;
      margin-bottom:-1rem;
    }
    @media (min-width:800px){
      display:grid;
      grid-template-columns: repeat(2, 1fr);
      gap:2rem;
      padding-left:5rem;
      row-gap:2rem;
      align-items:center;
      padding-top:1rem;
      padding-bottom:5rem;
    }
    @media (min-width:900px){
      padding-left:5rem;
      padding-right:5rem;
      padding-bottom:0;
      padding-top:0;

    }
  }` }
  ${props => 
    props.sjuhundra && css`{
      @media (max-width:800px){
        padding-top:2rem;
        padding-bottom:0;
        margin-bottom:-1rem;
      }
      @media (min-width:700px){
        display:grid;
        grid-template-columns: repeat(3, 1fr);
        gap:2rem;
        padding-left:5rem;
        row-gap:2rem;
        align-items:center;
        padding-top:1rem;
        padding-bottom:2rem;
        // // grid-template-columns: auto auto auto;
        // // grid-template-rows: repeat(10, 1fr);
        // // .item_0 { grid-column: 1 / 2; grid-row: 1 / 4; }
    
 
        
      }
          @media (min-width:900px){
      padding-left:3rem;
      padding-right:3rem;
      padding-bottom:0;
      padding-top:0;

    }
    }` }
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

  <WrapperPlayer>
  <ReactPlayer 
  url="https://soundcloud.com/tova-jertfelt/ursakta-skogen-vi-bygger-om?si=2811fc45bf98463d99bf3583c3e89756&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"
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
></Image>
</Zoom>
</ImageWrapper>
<Upperpadding></Upperpadding>
<h4 className="title2">{t("artistpages.forest.title2")}</h4>
<p>{t("artistpages.forest.desc2")}</p>
<>
<NotMobile>
<Grid imgs={ursaktaImg}
type="skogen"/>

</NotMobile>
{SkogenSignswithTranslations.map(item => (
  <GridArt attahundra key={item.sys.id}>
    {language !== "sv" ? <>
      <ImageWrapper grid>
      <Zoom>
        {item.sys.id === "ursakta6" && 
        <Image alt={item.img.fields.alt} quality={100} style={{objectFit:"contain",}} src={ursakta6}/>
        }
        {item.sys.id === "ursakta7" && 
        <Image alt={item.img.fields.alt} quality={100} style={{objectFit:"contain",}} src={ursakta7}/>
        }
        {item.sys.id === "ursakta8" && 
        <Image alt={item.img.fields.alt} quality={100} style={{objectFit:"contain",}} src={ursakta8}/>
        }
      </Zoom>
      </ImageWrapper>

    
    <TextInEnglish>
      <p>Translation:</p>
      <h3>
        {item.translation.first}<br/>{item.translation.second}
      </h3>
      <p>
        {item.translation.text}
      </p>
    </TextInEnglish>
    </>:
    <>
    <ImageWrapper grid>
      <Zoom>
        {item.sys.id === "ursakta6" && 
        <Image alt={item.img.fields.alt} quality={100} style={{objectFit:"contain",}} src={ursakta6}/>
        }
      </Zoom>
    </ImageWrapper>
    <ImageWrapper grid>
      <Zoom>
    {item.sys.id === "ursakta7" && 
        <Image alt={item.img.fields.alt} quality={100} style={{objectFit:"contain",}} src={ursakta7}/>
        }
           </Zoom>
    </ImageWrapper>
    <ImageWrapper grid>
      <Zoom>
        {item.sys.id === "ursakta8" && 
        <Image alt={item.img.fields.alt} quality={100} style={{objectFit:"contain",}} src={ursakta8}/>
        }
        </Zoom>
        </ImageWrapper>
    </>
    }
  </GridArt>
))}

</>
<Mobile>
<ImageSlider 
slides={ursaktaImg}
  format=""
  type="light"
/></Mobile>

<p className="curator">Curator: Alba Folgado</p>
<p className="link">{t("artistpages.forest.linktxt")} <a href="https://uppsalakonstnarsklubb.se/projekt-och-event/Rusmus" target="_blank">Rusmus</a> {t("artistpages.forest.linktxt2")}</p>
<hr></hr>
  </Section> );
}
 
export default Skogen;