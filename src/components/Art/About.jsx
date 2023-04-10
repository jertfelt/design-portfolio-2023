import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
const Section = styled.div`
// // padding:2rem;
// // padding-top:450px;
color:${({theme}) => theme.textPrimary};
background:${({theme}) => theme.artcolors.primary};
margin-top:30vh;
padding-left:2rem;
flex-wrap: wrap;
max-width:80%;
h2{
  font-size:2rem;
  line-height:2rem;
}
z-index:2;
`

const About = () => {
const router= useRouter();
const {locales, locale: activeLocale} = router;
const language = activeLocale;
const {t} = useTranslation();
const [newName, setnewName] = useState("");
const shuffle = useCallback(() => {
  
const names = [ "vacker", "tankeväckande", "kritisk", "utforskande", "audiovisuell", "taktil", "mänsklig", "multidisciplinär", "digital"]
const engnames = [ "beautiful", "thought-provoking", "critical", "experimential", "audiovisual", "tactile", "human", "multidisciplinary", "digital"]

  if(language === "sv"){
    const index = Math.floor(Math.random() * names.length);
    setnewName(names[index]);
  }
  else{
    const index = Math.floor(Math.random() * names.length);
    setnewName(engnames[index]);
  }
  
}, [language]);

useEffect(() => {
  const intervalID = setInterval(shuffle, 3000);
  return () => clearInterval(intervalID);
}, [shuffle])

  return (
  <Section>
    <div>
      <h1>{t("arttitle.h1")} Tova Jertfelt.</h1>
      <h2>{t("artabout.h2first")} <i>{newName}</i><br/> {t("artabout.h2second")}</h2>
    </div>
  </Section>  );
}
export default About;