import styled, {css} from "styled-components";

export const Grid = styled.div`
display: grid;
max-width: 1000px;
margin: 0 auto;
gap: 2rem;

@media (min-width: 1050px) {
  grid-template-columns: repeat(3, 1fr);
 }
 @media screen and (max-width: 1050px){
  grid-template-columns: repeat(2, 1fr);
 }
 @media screen and (max-width: 700px){

  grid-template-columns: repeat(1, 1fr);
  row-gap:1rem;
  column-gap:1rem;
 }

 ${props => 
  props.cverfarenhet && 
  css`  
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
  gap:2rem;
  padding:2rem;
}
@media screen and (max-width:700px){
padding:2rem;
   
}

`}
${props => 
  props.numbers && 
  css`  
  gap:5em;
  @media screen and (max-width:700px){
    gap:1rem;
    display:flex;
    flex-direction:column;
    max-width:80%;
  }
  `}
  ${props => 
    props.cv && 
    css`  
gap: 5rem;

@media (min-width: 700px) {
  grid-template-columns: repeat(2, 1fr);
  padding:2rem;
 }
    `}
 
  
`
