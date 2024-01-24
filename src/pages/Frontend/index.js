import FrontendMainPage from "@component/components/Frontend/FrontendMainPage";
import { AppContext } from "@component/context/AppContext";
import { useContext, useEffect } from "react";
import withTranslation, {getStaticProps} from '@component/components/utils/getStaticProps'
import HeadIndex from "@component/components/Head";


const Frontend = () => {
  const {selectedPage, setSelectedPage} = useContext(AppContext)

  useEffect(() => {
    if(selectedPage.value !== "frontend"){
      setSelectedPage({value:"frontend", url:"/frontend"})
    }
  },[selectedPage.value, setSelectedPage])
  
  return ( <>
    <HeadIndex/>
    <FrontendMainPage/>
    </>
    );
}
export {getStaticProps} 
export default withTranslation(Frontend);