import styled,{css} from "styled-components"
import { flex, device, fonts } from "@component/components/stylings/Stylings"

export const Period = styled.p`
font-size:${fonts.fontSizes.mediumsmall};
margin-bottom:-1rem;
font-weight:bold;
`

export const Bread= styled.p`
width:80%;
line-height:1.8rem;
font-size:${fonts.fontSizes.mediumsmall};
margin-top:-1rem;
padding:0;
`

export const GridItem = styled.article`
  max-width:100%;
h3{
  font-family:"Arya";
  font-size:${fonts.fontSizes.large};
  color: ${({theme}) => theme.lightblue};
  line-height:1.5rem;
}
h4{
  margin-top:-1rem;
  font-size:${fonts.fontSizes.medium};
}
@media  screen and (max-width:600px){
  padding-left:1rem;
}
li{
  line-height:1.5rem;
}
img{
  border-radius: 50%;
  margin-top:1rem;
}
${props => 
  props.work && 
  css`
  &:hover{
    border-radius:${({theme}) => theme.borderradius.third};
    background-color:${({theme}) => theme.frontendcolors.contrast};
  }
  `}
  ${props => 
  props.techstack && 
  css`
 
    h3{
      text-align:center;
    }
    ul{
      display:grid;
      grid-template-columns: repeat(2, 1fr);
      column-gap:1rem;
      
      width:100%;
      li{
        &:hover{
          color:${({theme}) => theme.frontendcolors.lightblue};
        }
      }
    }
 
  `}
`

export const Row = styled.div`
${flex}
gap:4rem;
@media only screen and (${device.laptop}){
  ${flex({direction:"row", align:"center", justify:"center"})}
  padding:5em;
 
}`

export const CVContent=styled.div`
h2{
  font-family: Arya;
  font-size: ${fonts.fontSizes.mediumlarge};
  text-decoration:underline;
  text-transform:uppercase;
  text-align:left;
}
`