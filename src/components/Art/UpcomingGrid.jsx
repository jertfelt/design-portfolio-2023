import { new_exp_EN, new_exp_SV } from "@component/data/exhibitions";
import { useEffect, useState } from "react";
import styled from "styled-components";

const Container = styled.article`

.where{
  margin-bottom:0;
  
  font-size:1rem;
}
h4{
  font-family:JetBrains Mono;
  color: ${({theme}) => theme.artcolors.white};
}
h3{
  
  font-size:1.5rem;
}

`


const UpcomingGrid = ({language}) => {
  const [xhibitions, setXhbitions] = useState("")
  useEffect(() => {
    if(language === "sv"){
      setXhbitions(new_exp_SV)
    }
    else{
      setXhbitions(new_exp_EN)
    }

  },[language])
  return (<>
  {xhibitions && xhibitions.map((item,i) => (
    <Container key={item.sys.id}>
          <h3>
        {item.fields.title}
      </h3>
      <h3 className="where">{item.fields.description}</h3>
    
        <h4>{item.fields.date}</h4>
  
   
       
      
    </Container>
  ))}
  </>  );
}
 
export default UpcomingGrid;