import styled from "styled-components";
import Image from "next/image";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import ReactPlayer from 'react-player/lazy'

const Section = styled.section`
min-height:50vh;
background: ${({theme}) => theme.artcolors.primaryLighter};
padding:2rem;
color:${({theme}) => theme.textSecondary};
padding-bottom:0;
margin-bottom:-8px;
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

const ViKanBattre = () => {
  const {t} = useTranslation()

  return (
    <Section id="VKB">
      <Upperpadding></Upperpadding>
      <h2>{t("artistpages.vikanbattre.title")}</h2>
      <p>{t("artistpages.vikanbattre.smalldescription")}
      </p>
    <Link href="http://www.diva-portal.org/smash/record.jsf?pid=diva2%3A936493&dswid=9026" target="_blank">{t("artistpages.vikanbattre.readLink")}</Link>
    <VideoWrapper>
    <ReactPlayer url='https://youtu.be/IfffzYAGps4' 
    />
    </VideoWrapper>
    <p>{t("artistpages.vikanbattre.material")}</p>
    <p>{t("artistpages.vikanbattre.description1")}</p>
    </Section>
    );
}
 
export default ViKanBattre;