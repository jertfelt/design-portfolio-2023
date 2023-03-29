import CountUp from "react-countup";
import styled from "styled-components";
import { device, fonts } from "@component/components/stylings/Stylings";

const NumberSpan = styled.span`
max-width:180px;
@media screen and ${device.maxtablet}{ 
  max-width:300px;
}
`
const BigNumber = styled.h3`
font-size:70px;
text-align:center;
line-height:1em;
color:${({theme}) => theme.white};
font-family: Arya;
font-weight: 500;
border-radius: ${({theme}) => theme.borderradius.third};
background-color:${({theme}) => theme.frontendcolors.contrast};
padding:2rem;
@media screen and ${device.maxtablet}{ 
  line-height:2em;
  padding:0rem;
}
@media screen and (max-width:700px){
  width:50%;
  margin-left:30%;
}
`
const Text = styled.p`
font-size:${fonts.fontSizes.medium};
margin-top:-3em;
@media (max-width:900px){
  font-size:${fonts.fontSizes.mediumsmall};
}
`
const BN = styled.h3`
font-size:70px;
text-align:center;
line-height:1em;
color:${({theme}) => theme.white};
font-family: Arya;
font-weight: 500;
border-radius: ${({theme}) => theme.borderradius.first};
background-color:${({theme}) => theme.frontendcolors.background};
@media screen and ${device.maxtablet}{ 
  line-height:2em;
  padding:0rem;
}
@media screen and (max-width:700px){
  width:100%;

}
`
const CountingUp = ({type, 
  number, 
  percent, 
  text}) => {
  return ( 
    <NumberSpan>
      {type === "utbildning" ? <BN>
      <CountUp 
      start={0} 
      end={number} 
      duration={2} 
      delay={0}/>
    {percent && <>%</>}
      </BN>: <BigNumber>
    <CountUp 
      start={0} 
      end={number} 
      duration={2} 
      delay={0}/>
    {percent && <>%</>}
    </BigNumber>}
   
    <Text>{text}</Text>
    </NumberSpan>     
   );
}
 
export default CountingUp;