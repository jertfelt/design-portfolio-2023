import { useTranslation } from "next-i18next";
import styled from "styled-components";
const Section = styled.div`
color:${({theme}) => theme.textPrimary};
background:${({theme}) => theme.artcolors.primaryLighter};
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

const About = ({newName}) => {
const {t} = useTranslation();
  return (
  <Section>
    <div>
      <h1>{t("arttitle.h1")} Tova Jertfelt.</h1>
      <h2>{t("artabout.h2first")} <i>{newName}</i><br/> {t("artabout.h2second")}</h2>
    </div>
  </Section>  );
}
export default About;