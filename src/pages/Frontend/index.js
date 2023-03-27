import { AppContext } from "@component/context/AppContext";
import { useContext, useEffect } from "react";

const FrontendPage = () => {
  const {selectedPage, setSelectedPage} = useContext(AppContext)
  useEffect(() => {
    if(selectedPage.value !== "frontend"){
      setSelectedPage({value:"frontend", url:"/frontend"})
    }
  },[])
  
  return ( <section>Testing NEXTJS Pages</section> );
}
 
export default FrontendPage;