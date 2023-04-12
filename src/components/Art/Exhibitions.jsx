import { exhibitions_ENG, exhibitions_SV } from "@component/data/exhibitions";
import { useEffect, useState } from "react";
import styled from "styled-components";

const Container = styled.div`
h4{
  font-family:JetBrains Mono;
  @media (min-width:500px){
    font-size:1rem;
    line-height:1.8rem;
    max-width:70vw;
  }
  @media (min-width:750px){
    font-size:1.5rem;
    line-height:1.8rem;
  }
}
h3{
  @media (min-width:500px){
    font-size:1.2rem;
    line-height:1.8rem;
  }
  @media (min-width:750px){
    font-size:2rem;
    line-height:2.2rem;
    max-width:60%;
  }
  @media (min-width:800px){
    font-size:1.8rem;
   
    max-width:80%;
  }
  @media (min-width:900px){
    font-size:1.8rem;
    line-height:2.1rem;
  }
  margin-bottom:0;
}
.description{
  margin-top:0;
  padding-left:3rem;
  @media (min-width:500px){
   padding-left:3.5rem;
  }
  @media (min-width:750px){
   padding-left:6rem;
   margin-top:.5rem;
  }
  @media (min-width:900px){
    margin-top:0;
    font-size:1rem;
  }
}


`
const YearandTitle= styled.div`
display:flex;
flex-direction:row;
gap: .5rem;
margin-bottom:0.2rem;
@media (min-width:500px){
  margin-bottom:0;
  gap:1rem;
}
@media (min-width:750px){
  gap:2.5rem;
 }

`

const Exhibitions = ({language}) => {
  const [xhibitions, setXhbitions] = useState("")
  useEffect(() => {
    if(language === "sv"){
      setXhbitions(exhibitions_SV)
    }
    else{
      setXhbitions(exhibitions_ENG)
    }

  },[language])
  return (<>
  {xhibitions && xhibitions.map((item,i) => (
    <Container key={item.sys.id}>
      <YearandTitle>
        <h4>{item.fields.date}</h4>
      <h3>
        {item.fields.title}
      </h3>
      </YearandTitle>
      <h4 className="description">{item.fields.description}</h4>
     
    </Container>
  ))}
  </>  );
}
 
export default Exhibitions;