import artmadethis1 from "../../../public/art/hel_artmadethis_tovajertfelt.png"
import styled from "styled-components";
import Image from "next/image";
import { useTranslation } from "next-i18next";
import About from "./About";


const Wrapper = styled.div`
padding-top:10rem;
z-index:0;
.mobile{
  opacity:50%;
  @media (min-width:900px){
    display:none;
  }
}
.notMobile{
  @media (max-width:900px){
    display:none;
  }
}

`
const TitleOverWrapper = styled.div`
z-index:1;
position:absolute;
top:50vh;
@media (max-width:900px){
  top:20vh;
  width:100%;
  max-width:100vw;
}
display:flex;
flex-direction:column;`

const Title = styled.div`
z-index:1;
h1{
  font-size:80px;
  padding:2rem;
  padding-left:15rem;
  background: ${({theme}) => theme.artcolors.primaryLightest};
  color:${({theme}) => theme.textPrimary};
  @media (max-width:900px){
    padding:1rem;
    font-size:60px;
    width:100vw;
    max-width:100%;
    background:transparent;
  }
  padding-top:0;
  margin-top:-3rem;
  line-height:60px;
}
`
const MainTitle = () => {
  const {t} = useTranslation();
  return ( <>
    <Wrapper>
    <Image 
    className="mobile"
    alt="ArtMadeThis Sollentuna 2017" 
    src={artmadethis1}
    quality={100}
    fill
    // style={{
    //   objectFit: 'contain',
    // }}
    />
    <Image 
    className="notMobile"
    alt="ArtMadeThis Sollentuna 2017" 
    src={artmadethis1}
    quality={100}
    style={{
      objectFit: 'contain',
    }}
    />
    </Wrapper>
    <TitleOverWrapper>
    <About/>
    {/* <Title><h1>{t("arttitle.h1")} Tova Jertfelt </h1></Title> */}
    </TitleOverWrapper>
    </> );
}
 
export default MainTitle;