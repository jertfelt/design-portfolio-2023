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
color:${({theme}) => theme.textPrimary};
  max-width:100%;
h3{
  font-family:"Arya";
  font-size:${fonts.fontSizes.large};
  color: ${({theme}) => theme.frontendcolors.lightblue};
  line-height:1.5rem;
}
h4{
  color: ${({theme}) => theme.frontendcolors.lightblue};
  margin-top:-1rem;
  font-size:${fonts.fontSizes.medium};
  max-width:80vw;
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
  max-width:400px;
   @media screen and (max-width: 700px){
      width:80vw;
  }
  h3{
    max-width:80vw;
  }
  &:hover{
    @media screen and (min-width:1000px){
      border-radius:${({theme}) => theme.borderradius.third};
      background-color:${({theme}) => theme.frontendcolors.alternativecontrast};
    }

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