import { useState, useEffect } from "react";
import { createContext } from "react";

const ArtContext = createContext({
  chosenArt: false,
  onChoice: () => {},
  onLeave: () => {}
})

export const ArtContextProvider = (props) => {
  const [chosenArt, setChosenArt] = useState(false)
  
  useEffect(() => {
    const userChosenArt = localStorage.getItem("art");
    if(userChosenArt === "1"){
      setChosenArt(true)
    } 
  }, [])

  const onChoice = () => {
    localStorage.setItem("art", "1")
    setChosenArt(true)
}
  const onLeave = () => {
    setChosenArt(false)
    localStorage.removeItem("art")
  }
  return (
    <ArtContext.Provider value={{
      chosenArt : chosenArt,
      onChoice: onChoice,
      onLeave: onLeave
    }}>
      {props.children}
    </ArtContext.Provider>
  )
}

export default ArtContext