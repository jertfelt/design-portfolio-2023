import styled from "styled-components";
import { Grid } from "@component/components/stylings/Grids";
import { CVContent, GridItem, Bread, Row, Period } from "./Commons";
import { useTranslation } from "next-i18next";

const Wisdom =styled.section`
background-color: ${({theme}) => theme.frontendcolors.alternative};
width:80%;
position: relative;
z-index:1;
padding-top:3rem;
padding:2rem;
padding-bottom:8rem;
margin-bottom:10rem;
@media screen and (max-width:700px){
  background:${({theme}) => theme.frontendcolors.background};

  width:100%;
  
  padding:0;
  padding-bottom:8rem;
  h2{
    padding-top:5rem;
    padding-left:10rem;
  }
}
@media screen and (max-width:500px){
  width:100%;
 
  padding:0;
  padding-bottom:8rem;
  h2{
    padding-left:3rem;
  }
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
  background: ${({theme}) => theme.frontendcolors.alternative};
  content: '';
  display: block;
  height: 50%;
  left: 0;
  position: absolute;
  right: 0;
  z-index: -1;
  bottom: 0;
  
  -webkit-transform: skewY(8deg);
  transform: skewY(8deg);
  -webkit-transform-origin: 100%;
  transform-origin: -10%;
  @media screen and (max-width:700px){
    display:none;
  }
}
`
const ErfarenhetStyle = styled.div`
color: ${({theme}) => theme.textPrimary};
ul{
list-style:none;
}
`
const Centered = styled.div`
display:flex;
width:100%;
align-items:center;
justify-content:center;

`


const Erfarenhet = ({erfarenhet}) => {
  const {t} = useTranslation();
  return (  <Wisdom>
    <ErfarenhetStyle>
    <CVContent>
      <h2>{t("cv.erfarenhet")}</h2>
      <Row>
      {erfarenhet && erfarenhet.map((item,i) => (
        <GridItem key={i}>
      {i !== 0 && <div>
        <h3>{item.name}</h3>
      <ul>
      
      {item.li.map((item, i) => (
        <li key={`${item}--${i}`}>{item}</li>
      ))}
        </ul>
      </div>}
      </GridItem>
      ))}
      </Row>
      <Centered>
      {erfarenhet && erfarenhet.map((item,i) => (
        <GridItem 
        techstack
        key={i}>
      {i === 0 && <>
        <h3>{item.name}</h3>
      <ul>
      {item.li.map(item => (
        <li key={`${item}--${i}`}>{item}</li>
      ))}
        </ul>
      </>}
      </GridItem>
      ))}
      </Centered>
      <Grid>
    
     
        
      </Grid>
     
    
    </CVContent>
 
    </ErfarenhetStyle>
    </Wisdom> );
}
 
export default Erfarenhet;