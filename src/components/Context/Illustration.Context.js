import { useState, useEffect } from "react";
import { createContext } from "react";

const IllContext = createContext({
  chosenIll: false,
  onChoice: () => {},
  onLeave: () => {}
})

export const IllContextProvider = (props) => {
  const [chosen, setChosen] = useState(false)
  
  useEffect(() => {
    const userChosen = localStorage.getItem("illustration");
    if(userChosen === "1"){
      setChosen(true)
    } 
  }, [])

  const onChoice = () => {
    localStorage.setItem("illustration", "1")
    setChosen(true)
}
  const onLeave = () => {
    setChosen(false)
    localStorage.removeItem("illustration")
  }
  return (
    <IllContext.Provider value={{
      chosenIll : chosen,
      onChoice: onChoice,
      onLeave: onLeave
    }}>
      {props.children}
    </IllContext.Provider>
  )
}

export default IllContext