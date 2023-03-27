import styled, {css} from "styled-components";

export const Grid = styled.div`
display: grid;
max-width: 1000px;
margin: 0 auto;
gap: 2rem;
@media (min-width: 600px) {
  grid-template-columns: repeat(3, 1fr);
 }
 @media screen and (max-width: 1050px){
  grid-template-columns: repeat(2, 1fr);
  padding:2rem;
  gap:4rem;
  max-width:900px;
 }
 @media screen and (max-width: 1050px){
  grid-template-columns: repeat(1, 1fr);
  max-width:400px;
 }
 ${props => 
  props.cverfarenhet && 
  css`  
  @media (min-width: 600px) {
  grid-template-columns: repeat(3, 1fr);
 }
  
  `}
${props => props.about && css`

line-height:150%;
padding:1rem;
padding-top:8rem;
font-size:1.2rem;
color:${({theme}) => theme.textPrimary};
@media (min-width: 1000px){
  gap: 5rem;
}
@media (max-width: 1000px){
  gap:3rem;
}

`}
${props => 
  props.numbers && 
  css`  
  gap:5em;
  @media screen and (max-width:1000px){
    gap:2rem;
    display:flex;
    flex-direction:column;
  }
  `}
  ${props => 
    props.cv && 
    css`  
gap: 5rem;
@media (min-width: 700px) {
  grid-template-columns: repeat(2, 1fr);
 }
    `}
    ${props => 
      props.cases && 
      css`  
      
  
      `}
  
`
