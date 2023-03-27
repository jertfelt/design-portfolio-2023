import { AppContext } from "@component/context/AppContext";
import { useContext } from "react";

const FrontendPage = () => {
  const {selectedPage, setSelectedPage} = useContext(AppContext)
  
  return ( <section>Testing NEXTJS Pages</section> );
}
 
export default FrontendPage;