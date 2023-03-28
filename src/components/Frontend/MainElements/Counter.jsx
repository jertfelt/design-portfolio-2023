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
`
const Text = styled.p`
font-size:${fonts.fontSizes.medium};
margin-top:-3em;
@media (max-width:900px){
  font-size:${fonts.fontSizes.mediumsmall};
}
`
const CountingUp = ({number, percent, text}) => {
  return ( 
    <NumberSpan>
    <BigNumber>
    <CountUp 
      start={0} 
      end={number} 
      duration={2} 
      delay={0}/>
    {percent && <>%</>}
    </BigNumber>
    <Text>{text}</Text>
    </NumberSpan>     
   );
}
 
export default CountingUp;