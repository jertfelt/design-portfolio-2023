import { useContext } from "react"
import { AppContext } from "@component/context/AppContext"

export const SelectLink = (value) => {
  const {setSelectedPage} = useContext(AppContext)
  
  switch(value){
    case "Frontend,":
      setSelectedPage({value:"frontend", url:"/frontend"})
      break;
    case "Konst,":
      setSelectedPage({value:"art", url:"/art"})
      break;
    case "Design &":
      setSelectedPage({value:"design", url:"/design"})
      break;
    case "Illustration":
      setSelectedPage({value:"illustration", url:"/illustration"})
      break;
    default: 
    setSelectedPage({value:"", url:"/"})
  }
}