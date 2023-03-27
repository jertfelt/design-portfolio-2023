import { createContext, useState } from "react";

export const AppContext = createContext()

const AppProvider = (props) => {
  const [selectedPage, setSelectedPage] = useState({value: "", url:"/"})

  return(
    <AppContext.Provider value={{
      selectedPage, setSelectedPage
    }}>
      {props.children}
    </AppContext.Provider>
  )
}
export default AppProvider