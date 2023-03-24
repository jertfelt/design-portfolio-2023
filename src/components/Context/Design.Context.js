import { useState, useEffect, useReducer } from "react";
import { createContext } from "react";

const DesignContext = createContext({
  chosen: false,
  onChoice: () => {},
  onLeave: () => {}
})

export const DContext = createContext()


export const designReducer = (state, action) => {
  switch(action.type){
    case "CHOSEN":
      return {view: action.payload}
    case "LEAVE":
      window.localStorage.clear()
      return {view: null}
    default:
      return state
  }
}

export const DContextProvider = ({children}) => {
  const [state, dispatch] = useReducer(designReducer, {
    view: null
  })


useEffect(() => {
  const view = JSON.parse(localStorage.getItem("design"))
  if(view){
    dispatch({type:"CHOSEN", payload: view})
  }
},[])
return(
  <DContext.Provider value={{ ...state, dispatch}}>
    {children}
  </DContext.Provider>
)
}

export const DesignContextProvider = (props) => {
  const [chosen, setChosen] = useState(false)
  
  useEffect(() => {
    const userChosen = localStorage.getItem("design");
    if(userChosen === "1"){
      setChosen(true)
    } 
  }, [])

  const onChoice = () => {
    localStorage.setItem("design", "1")
    setChosen(true)
}
  const onLeave = () => {
    setChosen(false)
    localStorage.removeItem("design")
  }
  return (
    <DesignContext.Provider value={{
      chosen : chosen,
      onChoice: onChoice,
      onLeave: onLeave
    }}>
      {props.children}
    </DesignContext.Provider>
  )
}

export default DesignContext
