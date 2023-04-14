import styled from "styled-components";
import Image from "next/image";
import profilepic from "../../../../public/tova-linkedin-portratt.png"
import {useTranslation } from "next-i18next";

const PageWrapper = styled.div`


// // //   display:flex;
// // //   flex-direction:column;
  
// // }
`
const Heading = styled.h1`
transition: all 0.5s ease-out;
text-align:left;
font-size: 3.5rem;
text-transform: uppercase;
line-height:3.7rem;
@media screen and (max-width:700px){
 font-size:2.5rem;
 line-height:3rem;
 margin:0;
  }
  @media screen and (max-width:700px){
    font-size:2rem;

  }
`

const HeroPic = styled(Image)`
padding-top:2rem;
transition: all 1.8s ease-in;
filter: drop-shadow(0 6mm 4mm ${({theme}) => theme.frontendcolors.background});
transform: rotate(3deg);
overflow: hidden;
border-radius: ${({theme}) => theme.borderradius.first};
height:300px;
width:300px;
@media screen and (max-width:700px){
height:200px;
width:200px;
padding-left:50%;
}

@media screen and (max-width:500px){
  height:120px;
  width:120px;
 }
`


const ParagraphRow = styled.div`
margin-top:-4rem;
display:flex;
gap:5rem;
p{
  max-width:500px;
}
button{
  max-height: 50px;
  align-self:center;
}

line-height:150%;
font-size:18px;
@media screen and (max-width:700px){
  margin:0;
  width:80%;
  }
`

const Paragraph = styled.p `
font-family: Arya;
max-width:300px;
margin-bottom:-3rem;
font-size:20px;
@media screen and (max-width:700px){
  margin:0;

  }
`

const Grid = styled.div`
padding-bottom:10rem;
display: grid;
grid-template-columns: 1fr 2fr;
  grid-template-rows: auto;
  justify-items: start;
  align-items: start;
  column-gap: 50px;
  row-gap: 10px;
  @media screen and (max-width:900px){
    display:flex;
    flex-direction:column;
    padding-bottom:5rem;
    div{
      z-index:2;
    }
   }
   @media screen and (max-width:700px){
    margin-top:-2rem;
    padding-bottom:1rem;
   
   }
   
  
`


const HeroContent = () => {
  const {t} = useTranslation();
  return ( <section>
    <PageWrapper>
      <Grid>
      <HeroPic
        src={profilepic}
        loading="lazy"
        alt="Svartvit bild på Tova som tittar in i kameran."
        />
        <div>
      <Paragraph>{t("frontendpage.hero1")}</Paragraph>
      <Heading
      title="Multidisciplinär & Kreativ Frontendare"
      className="headingfont">
        {t("frontendpage.hero2")}<br/>
        {t("frontendpage.hero2b")}
       
      </Heading>
      <ParagraphRow
      >
        <p>{t("frontendpage.hero3")}</p>

      </ParagraphRow>
 
      </div>
 
      </Grid>

    </PageWrapper>
  </section> );
}
 
export default HeroContent;