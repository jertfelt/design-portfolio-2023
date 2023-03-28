import styled from "styled-components";

const TechDiv = styled.div`
background:${({theme}) => theme.frontendcolors.contrast};
padding:1rem;
border-radius:${({theme}) => theme.borderradius.first};
div{

  padding:1rem;
  padding-top:0;
  display:grid;
  grid-template-columns: repeat(2, 1fr);
  row-gap:4px;
  column-gap:.5rem;
  p{
    font-size:1rem;
    line-height:1.2rem;
  }
}


`

const TechStack = ({techs}) => {
  return ( 
    <TechDiv>
       <h3>Tech stack:</h3>
       <div>
       {techs && techs.map((item, i) =>(
        <p key={i}>{item}</p>
       ))}
       </div>
    </TechDiv>
   );
}
 
export default TechStack;