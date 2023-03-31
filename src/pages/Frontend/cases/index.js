import CasesPage from "@component/components/Frontend/MainElements/Cases";
import { HeadIndexFrontend } from "@component/components/Head";
import { AppContext } from "@component/context/AppContext";
import { useContext, useEffect } from "react";

const Cases = () => {
  const {selectedPage, setSelectedPage} = useContext(AppContext)

  useEffect(() => {
    if(selectedPage.value !== "frontend"){
      setSelectedPage({value:"frontend", url:"/frontend"})
    }
  },[])
  return ( <section>
    <HeadIndexFrontend/>
    <CasesPage/></section> );
}
 
export default Cases;