import CasesPage from "@component/components/Frontend/MainElements/Cases";
import { AppContext } from "@component/context/AppContext";
import { useContext, useEffect } from "react";

const Cases = () => {
  const {selectedPage, setSelectedPage} = useContext(AppContext)

  useEffect(() => {
    if(selectedPage.value !== "frontend"){
      setSelectedPage({value:"frontend", url:"/frontend"})
    }
  },[])
  return ( <section><CasesPage/></section> );
}
 
export default Cases;