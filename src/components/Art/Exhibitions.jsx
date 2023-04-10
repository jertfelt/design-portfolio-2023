import { exhibitions_ENG, exhibitions_SV } from "@component/data/exhibitions";
import { useEffect, useState } from "react";

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
  console.log(xhibitions)
  return (<>
  {xhibitions && xhibitions.map((item,i) => (
    <div key={item.sys.id}>
      <h3>
        {item.fields.title}
      </h3>
      <h4>{item.fields.description}</h4>
      <h4>{item.fields.date}</h4>

    </div>
  ))}
  </>  );
}
 
export default Exhibitions;