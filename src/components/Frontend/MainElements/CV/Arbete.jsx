import { Grid } from "@component/components/stylings/Grids";
import { CVContent, GridItem, Bread, Period } from "./Commons";
import styled from "styled-components";
import { useTranslation } from "next-i18next";


const ArbeteStyle = styled.section`
color:${({theme}) => theme.textPrimary};
background-color: ${({theme}) => theme.frontendcolors.background};
width:80%;
position: relative;
z-index:1;
padding:2rem;
padding-bottom:3rem;
margin-top:4rem;
@media screen and (max-width:700px){
  width:100vw;
  padding:3rem;
  padding-bottom:8rem;
  padding-left:10rem;
}
@media screen and (max-width:500px){
  width:100vw;
  padding:3rem;
  padding-left:10rem;
  margin-top:-2rem;
}

&::before {
  top: 0;
  -webkit-transform: skewY(-4deg);
  transform: skewY(-4deg);
  -webkit-transform-origin: 0% 0;
  transform-origin: 0% 0;
  background: inherit;
  content: "";
  display: block;
  height: 30%;
  left: 0;
  position: absolute;
  right: 0;
  z-index: -1;
}
&::after {
  background: inherit;
  content: '';
  display: block;
  height: 100%;
  left: 0;
  position: absolute;
  right: 0;
  z-index: -1;
  bottom: 0;
    -webkit-transform: skewY(-4deg);
  transform: skewY(-4deg);
  -webkit-transform-origin: 100%;
  transform-origin: 100%;
}
`


const Arbete = ({work}) => {
  const {t} = useTranslation();
  return (  
  <ArbeteStyle>
<CVContent>
<h2>{t("cv.arbete")}</h2>
<Grid cv>
<GridItem work>
  <Period>{t("cv.praktikdates")}</Period>
    <h3>{t("cv.praktikinfo")}
    </h3>
    <Bread>{t("cv.praktikinfo2")}
    </Bread>
  </GridItem>
  {work && work.map(item => item).map((item,index) =>(
    <GridItem 
    work
    key={index}>
    <Period>{item.period}</Period>
    <h3>{item.workplace}</h3>
    <h4>{item.title}</h4>
    <Bread>{item.text}</Bread>
    </GridItem>
    ))
  
  }

  </Grid>
  
  </CVContent>
  </ArbeteStyle> );
}
 
export default Arbete;