import MainFrontend from "@component/components/Frontend/MainFrontend";
import { AppContext } from "@component/context/AppContext";
import { useContext, useEffect } from "react";
import withTranslation, {getStaticProps} from '@component/components/utils/getStaticProps'
import { HeadIndexFrontend } from "@component/components/Head";


const FrontendPage = () => {
  const {selectedPage, setSelectedPage} = useContext(AppContext)

  useEffect(() => {
    if(selectedPage.value !== "frontend"){
      setSelectedPage({value:"frontend", url:"/frontend"})
    }
  },[])
  
  return ( <>
    <HeadIndexFrontend/>
    <MainFrontend/>
    </>
    );
}
export {getStaticProps} 
export default withTranslation(FrontendPage);