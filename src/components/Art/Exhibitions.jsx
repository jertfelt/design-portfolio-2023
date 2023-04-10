import { exhibitions_ENG, exhibitions_SV } from "@component/data/exhibitions";
import { useEffect, useState } from "react";
import styled from "styled-components";

const Container = styled.div`


h4{
  font-family:JetBrains Mono;
}
h3{
  margin-bottom:0;
}
.description{
  margin-top:0;
  padding-left:3rem;
}

`
const YearandTitle= styled.div`
display:flex;
flex-direction:row;
gap: .5rem;
margin-bottom:0.2rem;`

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