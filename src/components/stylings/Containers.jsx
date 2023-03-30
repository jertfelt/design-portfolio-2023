import styled, {css} from "styled-components";
import {flex, device, borders, padding } from "./Stylings"

export const Container = styled.section`
${props => 
  props.xlarge && 
  css`
  width:100%;
  margin:0;
  z-index:3;
  `}
  ${props => props.xlargebg && css`
  width:100%;
  height:100%;
  margin:0;
  margin-top:-5rem;
  background-color:${({theme}) => theme.frontendcolors.background};
  `}
  ${props => 
  props.xlargegreyslantedafter && css`
  margin-right:-2rem;
  background-color:${({theme}) => theme.frontendcolors.background};
  min-height:80vh;
  padding:2rem;
  padding-bottom: ${padding.paddingSizes.medium};
  position: relative;
  z-index:1;
  @media screen and ${device.maxtablet}{
  padding:0;
  width:100%;
  
  
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
  
  `}
  ${props => 
    props.purple && 
    css`
    // // max-width: ${({theme}) => theme.containers.xlarge};
  
    background-color: ${({theme}) => theme.purple};
    `}
  
`