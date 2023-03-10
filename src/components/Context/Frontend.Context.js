import { useState, useEffect } from "react";
import { createContext } from "react";

const FeContext = createContext({
  chosenfe: false,
  onChoice: () => {},
  onLeave: () => {}
})

export const FrontendContextProvider = (props) => {
  const [chosenfe, setChosenfe] = useState(false)
  
  useEffect(() => {
    const userChosenfe = localStorage.getItem("fe");
    if(userChosenfe === "1"){
      setChosenfe(true)
    } 
  }, [])

  const onChoice = () => {
    localStorage.setItem("fe", "1")
    setChosenfe(true)
}
  const onLeave = () => {
    setChosenfe(false)
    localStorage.removeItem("fe")
  }
  return (
    <FeContext.Provider value={{
      chosenfe : chosenfe,
      onChoice: onChoice,
      onLeave: onLeave
    }}>
      {props.children}
    </FeContext.Provider>
  )
}

export default FeContext