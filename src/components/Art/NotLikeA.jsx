import styled from "styled-components";
import Image from "next/image";
import { UseTranslation, useTranslation } from "next-i18next";
import n1 from "../../../public/art/notlikea-bedbug--mal-tovajertfelt-2021.png"
import n2 from "../../../public/art/notlikea-bedbug--mal-tovajertfelt-2021--2.png"
import n3 from "../../../public/art/notlikea-bedbug--mal-tovajertfelt-2021--3.png"
import n4 from "../../../public/art/notlikea-bedbug--mal-tovajertfelt-2021--4.png"
import n5 from "../../../public/art/notlikea-bedbug--mal-tovajertfelt-2021--5.png"
import n6 from "../../../public/art/notlikea-bedbug--mal-tovajertfelt-2021--6.png"
import { ImageWrapper } from "./ViKanBattre";
import { useRouter } from "next/router";

const Section = styled.section`
min-height:50vh;
background: ${({theme}) => theme.artcolors.primaryLightest};
padding:2rem;
@media (min-width:1040px){
  display:flex;
  flex-direction:column;
  width:100%;
  padding-left:10%;
}
color:${({theme}) => theme.textSecondary};
p{
  line-height:150%;
  padding-bottom:2rem;
  @media (min-width:500px){
    max-width:80vw;
    font-size:1.2rem;
    line-height:1.8rem;
  }
  @media (min-width:800px){
    padding-top:2rem;
    line-height:2rem;
    padding-left:5rem;
    max-width:70vw;
  }
  @media (min-width:900px){
    padding-left:7rem;
    margin-top:0;
    max-width:50%;
  }
}
.explanation{
  font-size:12px;
  @media (min-width:500px){
    max-width:60vw;
    font-size:1rem;
    line-height:1.5rem;
  }
}
h2{
  font-size:10vh;
  line-height:10vh;
  margin-bottom:0;
  @media (min-width:800px){
    margin-bottom:0;
    padding-left:5rem;
  }
  @media (min-width:900px){
    padding-left:7rem;
    
  }
}
`



const NotLikeA = () => {
  const router= useRouter();
  const {t} = useTranslation()
  const {locale: activeLocale} = router;
  const language = activeLocale;
  return (
  <Section id="bedbug">
    <h2>Not Like a BedBug</h2>
    <p>{t("artistpages.bedbug")} &quot;<i>{t("artistpages.bedbug2")}</i>&quot; 2021.</p>
    <ImageWrapper comic>
    <Image src={n1} alt="Page 1"/>
    </ImageWrapper>
    {language !== "sv" && <p>
      Translation: <br/>
      &quot;I&#39;m not a believer anymore.&quot;
      <br></br>
      <i>-We still don&#39;t know how many who has perished..<br/></i>
      &quot;Not since the disco fire in Gothenburg*&quot;<br/>
      &quot;Wasn&#39;t that interested in being loyal to a God that burns children alive.&quot;  </p>}
      <ImageWrapper comic>
    <Image src={n2} alt="Page 2"/>
    </ImageWrapper>
    {language !== "sv" && <p>
    &quot;The older I get...&quot;
      <br></br>
      &quot;..the less I believe there&#39;s any meaning to life...&quot;<br/>
      &quot;...only pain and chaos.&quot;  </p>}
      <ImageWrapper comic>
    <Image src={n3} alt="Page 3"/>
    </ImageWrapper>
    {language !== "sv" && <p>
    &quot;Hear me out:&quot;
      <br></br>
      &quot;If there is someone who has created this experiment that we call <i>life</i>&quot;<br/>
      &quot;Then I wonder how this someone thought...&quot; </p>}
      <ImageWrapper comic>
    <Image src={n4} alt="Page 4"/>
    </ImageWrapper>
    {language !== "sv" && <p>
    &quot;...Because who in the whole fucking hell wants to have bedbugs?&quot;
      <br></br>
      &quot;Why are children dying in wars and not these repulsive cretins?&quot;<br/>
      &quot;No I don&#39;t believe in God. Not that everything has to live.&quot;  </p>}
      <ImageWrapper comic>
    <Image src={n5} alt="Page 5"/>
    </ImageWrapper>
    {language !== "sv" && <p>
    &quot;I think we are being shaped to survive and that there is no justice or reason.&quot;
      <br></br><i>
      &quot;John Hron was murdered by nazis, Selena Quintanilla was murdered by a groupe, Martin Luther King was shot, Billie Holiday died because of drugs, and unknown man was probably murdered in 1989.&quot;<br/></i>
      &quot;I know that we all are going to die. One by one. It is fine.&quot;  </p>}
      <ImageWrapper comic>
    <Image src={n6} alt="Page 6"/>
    </ImageWrapper>
    {language !== "sv" && <p>
    &quot;But when my time comes:&quot;
      <br></br>
      &quot;Not in a freak accident. Not in a fire or in an ocean. Not full of fear and anxiety.&quot;<br/>
      &quot;Let me pass away like the sunset.&quot; </p>}
      {language !== "sv" && <p className="explanation"> 
      *The disco fire in Gothenburg occured in 1998, during a Halloween party. 398 children/youth with the ages of 12-25 years were at the disco, 63 of them died and 214 was hurt by the fire. This disco fire affected the whole country of Sweden when this happened. </p>}
  </Section>  );
}
 
export default NotLikeA;