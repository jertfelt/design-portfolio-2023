
import { AppContext } from "@component/context/AppContext";
import { useContext, useEffect } from "react";
import withTranslation, {getStaticProps} from '@component/components/utils/getStaticProps'
import HeadIndex from "@component/components/Head";
import DevelopmentPage from "@component/components/Development/DevelopmentPage";


const Development = () => {
  const {selectedPage, setSelectedPage} = useContext(AppContext)

  useEffect(() => {
    if(selectedPage.value !== "development"){
      setSelectedPage({value:"development", url:"/development"})
    }
  },[selectedPage.value, setSelectedPage])
  
  return ( <>
    <HeadIndex/>
   <DevelopmentPage/>
    
    </>
    );
}
export {getStaticProps} 
export default withTranslation(Development);