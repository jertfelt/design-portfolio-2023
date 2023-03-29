import { Grid } from "@component/components/stylings/Grids";
import { CVContent, GridItem, Bread, Period } from "./Commons";
import styled from "styled-components";


const ArbeteStyle = styled.section`
color:${({theme}) => theme.textPrimary};
background-color: ${({theme}) => theme.frontendcolors.background};
width:80%;
position: relative;
z-index:1;
padding:2rem;
padding-bottom:5rem;
margin-top:4rem;

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
  return (  
  <ArbeteStyle>
<CVContent>
<h2>Arbete</h2>
<Grid cv>
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
  <GridItem work>
  <Period>Oktober 2022- Mars 2023</Period>
    <h3>Praktik!
    </h3>
    <Bread>Just nu går jag praktik som frontendare hos Vinnovera/Delorean, Stockholm.
    Våren 2023 var jag även praktiserande junior konsult hos Society Icon via Vinnovera/Deloren.
    </Bread>
  </GridItem>
  </Grid>
  
  </CVContent>
  </ArbeteStyle> );
}
 
export default Arbete;