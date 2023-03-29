import { quotesAboutMe } from "@component/data/quotesaboutme";
import styled from "styled-components";
import { device, padding } from "@component/components/stylings/Stylings";

const Section = styled.div`
min-height:80vh;
margin-top:2rem;
padding:2rem;
padding-bottom: ${padding.paddingSizes.medium};
background-color: transparent;
position: relative;
z-index:1;
@media screen and ${device.maxtablet}{ 
}
  @media screen and (max-width:700px){
    padding:1rem;   
    margin:0;
    margin-left:-2rem;
    width:100%;
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
  height: 75%;
  left: 0;
  position: absolute;
  right: 0;
  z-index: -1;
}
&::after {
  background: inherit;
  content: '';
  display: block;
  height: 20%;
  left: 0;
  position: absolute;
  right: 0;
  z-index: -1;
  bottom: 0;
  -webkit-transform: skewY(0deg);
  transform: skewY(-4deg);
  -webkit-transform-origin: 100%;
  transform-origin: 100%;
  @media only screen and (${device.laptopL}){
    -webkit-transform: skewY(0deg);
    transform: skewY(-2deg);
    -webkit-transform-origin: 100%;
    transform-origin: 100%;
    }
}
`
const GridThree = styled.div`
display:grid;
@media screen and ${device.tablet}{
grid-template-columns: repeat(2, 1fr);}
@media screen and (max-width:700px){
  grid-template-columns: repeat(1, 1fr);
}
justify-items:start;
align-items:start;
column-gap:2rem;
row-gap:2rem;
padding:5em;
margin:5em;
@media screen and (max-width:700px){
 padding:1rem;   
 row-gap:1rem;
}
div{
  text-align:center;
  display:flex;
  flex-wrap:wrap;
  background-color:${({theme}) => theme.frontendcolors.contrast};
  color:${({theme}) => theme.textSecondary};
  border-radius:49px;
 
  &:hover{
    filter: drop-shadow(0 2mm 4mm ${({theme}) => theme.frontendcolors.alternativecontrast});
  }
  @media screen and ${device.maxtablet}{
    max-width:500px;
  }

  padding:1rem;
  padding-bottom:3rem;
  @media screen and (max-width:700px){
    padding:1rem;   
    row-gap:1rem;
    width:100%;
   }
  blockquote{
    width:90%;
  }
  p{width:90%;
  text-align:left;
  }
  
}
blockquote{
  h3{
    font-family:Merriweather Sans;
    font-size:30px;
    line-height:36px;
    text-align:left;
    color:${({theme}) => theme.frontendcolors.lightblue};
  }
  h4{
    text-align:left;
    font-size:18px;
    line-height:26px;
    font-weight:normal;
  }
}
@media screen and ${device.maxtablet}{
  gap:3rem;
  padding:0;
}
`

const GridWithQuotes = () => {
  return ( 
  <Section>
      <GridThree>
    {quotesAboutMe.map(item => (
  <div
  key={item.id}>
    <blockquote>
  <h3>{item.headline}</h3>
  <h4>“{item.quote}”</h4>
  <p><i>{item.name}</i></p>   
  </blockquote>
  </div>
  ) )}
    </GridThree>
  </Section> );
}
 
export default GridWithQuotes;