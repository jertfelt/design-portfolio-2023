import styled from "styled-components";
import { UseTranslation } from "next-i18next";
import ReactPlayer from "react-player";
import { ImageWrapper, Upperpadding } from "./ViKanBattre";
import Image from "next/image";
import tree1 from "../../../public/art/jag-ar-ett-trad-liten-eld--tova-jertfelt-2021.png"
import tree2 from "../../../public/art/jag-ar-ett-trad-liten-eld--tova-jertfelt-2021--2.png"
import tree3 from "../../../public/art/jag-ar-ett-trad-liten-eld--tova-jertfelt-2021--3.png"
import tree4 from "../../../public/art/jag-ar-ett-trad-liten-eld--tova-jertfelt-2021--4.png"
import tree5 from "../../../public/art/jag-ar-ett-trad-liten-eld--tova-jertfelt-2021--5.png"
import tree6 from "../../../public/art/jag-ar-ett-trad-liten-eld--tova-jertfelt-2021--6.png"

const Section=styled.section`
min-height:50vh;
padding:2rem;
background: ${({theme}) => theme.artcolors.primaryLighter};
h2{
 
  font-size:10vh;
  line-height:10vh;
  margin-bottom:0;
}
p{
  line-height:150%;
}
.desc{
  padding-top:4rem;
}
color:${({theme}) => theme.textPrimary};
`

const Tree = () => {
  return (<Section id="tree">
    <h2>Jag är ett träd</h2>
    <p>Utställning September 2021</p>
    <ReactPlayer url="https://soundcloud.com/tova-jertfelt/jag-ar-ett-trad?si=3bcaf94b301446aebdf2c14b4c8b4b06&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" width="100%" height="100px" config={{soundcloud:{
      options:{
        sharing:true
      }
    }}}/>
        <ImageWrapper horizontal>
    <Image src={tree1} alt="Jag är ett träd"></Image>
    <Image src={tree2} alt="Jag är ett träd"></Image>
    <Image src={tree3} alt="Jag är ett träd"></Image>
    <Image src={tree4} alt="Jag är ett träd"></Image>
    <Image src={tree5} alt="Jag är ett träd"></Image>
    <Image src={tree6} alt="Jag är ett träd"></Image>
    </ImageWrapper>
        <p className="desc">
    “Jag är ett träd” är en utställning om mindfulness, om att vara sjukskriven, och om mänsklighetens behov av “ordning”. 
Med torrpastellmålningar, föreställandes tallar, så har jag skapat en skog i utställningsytan. Sedan, genom att spela upp ljudverket, så utsätter jag besökaren för en övning i mindfulness - som sakta med säkert urartar i en storm av känslor och panik. Ljudinspelningen är en blandning av open source, mitt eget sjungande, dagbokstexter, övningsmaterial och ljud jag plockat upp runtom i Uppsala.Jag skapade ungefär 50 stycken träd i olika storlekar som, var för sig eller tillsammans, med eller utan ljudverket, har en egen personlighet. På ett sätt är utställningen därför i allra högsta grad personligt, nästan som ett abstrakt självporträtt.

    </p>



  </Section>  );
}
 
export default Tree;