import { useTranslation } from "next-i18next";
import styled from "styled-components";

const Section = styled.div`
color:${({theme}) => theme.textPrimary};
background:${({theme}) => theme.artcolors.primaryLighter};
margin-top:30vh;
padding-left:2rem;
flex-wrap: wrap;
max-width:80%;
@media (min-width:500px){
  padding-right:2rem;
  
}
h2{
  font-size:2rem;
  line-height:2rem;
  @media (min-width:500px){
    font-size:3.5rem;
    line-height:4rem;
    margin-top:0;
  }
}
z-index:2;
`

const About = ({newName}) => {
const {t} = useTranslation();
  return (
  <Section>
    <div>
      <h1>{t("arttitle.h1")} Tova Jertfelt.</h1>
      <h2>{t("artabout.h2first")} <br/><i>{newName}</i> <br/>{t("artabout.h2second")}</h2>
    </div>
  </Section>  );
}
export default About;