import styled from "styled-components";
import { useTranslation } from "next-i18next";
import ReactPlayer from "react-player";
import { ImageWrapper,} from "./ViKanBattre";
import Image from "next/image";
import tree1 from "../../../public/art/jag-ar-ett-trad-liten-eld--tova-jertfelt-2021.png"
import tree2 from "../../../public/art/jag-ar-ett-trad-liten-eld--tova-jertfelt-2021--2.png"
import tree3 from "../../../public/art/jag-ar-ett-trad-liten-eld--tova-jertfelt-2021--3.png"
import tree4 from "../../../public/art/jag-ar-ett-trad-liten-eld--tova-jertfelt-2021--4.png"
import tree5 from "../../../public/art/jag-ar-ett-trad-liten-eld--tova-jertfelt-2021--5.png"
import tree6 from "../../../public/art/jag-ar-ett-trad-liten-eld--tova-jertfelt-2021--6.png"
import { WrapperPlayer } from "./Skogen";
import Zoom from 'react-medium-image-zoom'

const Section=styled.section`
min-height:50vh;
padding:2rem;
background: ${({theme}) => theme.artcolors.primaryLighter};
h2{
  font-size:10vh;
  line-height:10vh;
  margin-bottom:0;
  @media(min-width:800px){
    padding-left:4rem;
  }
}
p{
  line-height:150%;
  @media (min-width:500px){
    max-width:80vw;
    word-spacing:3px;
  }
  @media (min-width:800px){
    padding-left:4rem;
  }
  
}
.desc{
  padding-top:4rem;
  @media (min-width:900px){
    padding:5rem;
    padding-bottom:2rem;
  }
}
color:${({theme}) => theme.textPrimary};
`
const NotMobileRow = styled.div`
@media (min-width:800px){
display:flex;
flex-direction:row;
width:90vw;
align-items:center;
justify-content:space-between;
}
@media (min-width:900px){
  max-width:80vw;
  padding:1rem;
  padding-bottom:0;
  margin:0;
}
`
const Tree = () => {
  const {t} = useTranslation()
  return (<Section id="tree">
    <NotMobileRow>
      <div>
    <h2>{t("artistpages.tree.h2")}</h2>
    <p>{t("artistpages.tree.p1")}</p>
    </div>
    <div>
    <ReactPlayer url="https://soundcloud.com/tova-jertfelt/jag-ar-ett-trad?si=3bcaf94b301446aebdf2c14b4c8b4b06&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" width="100%" height="100px" config={{soundcloud:{
      options:{
        sharing:true
      }
    }}}/>
    </div>
    </NotMobileRow>
    <ImageWrapper horizontal>
      <Zoom>
    <Image src={tree1} alt="Jag är ett träd"></Image></Zoom>
    <Image src={tree2} alt="Jag är ett träd"></Image>
    <Image src={tree3} alt="Jag är ett träd"></Image>
    <Image src={tree4} alt="Jag är ett träd"></Image>
    <Image src={tree5} alt="Jag är ett träd"></Image>
    <Image src={tree6} alt="Jag är ett träd"></Image>
    </ImageWrapper>
        <p className="desc">
        {t("artistpages.tree.desc")}

    </p>
    


  </Section>  );
}
 
export default Tree;