import HeadIndex, { HeadIndexDesign } from "@component/components/Head";
import WorkInProgress from "@component/components/WorkInProgress";
import { AppContext } from "@component/context/AppContext";
import {useTranslation } from "next-i18next";
import withTranslation, {getStaticProps} from '@component/components/utils/getStaticProps'
import { useContext, useEffect } from "react";


const Design = () => {
  const {t} = useTranslation();
  const {selectedPage, setSelectedPage} = useContext(AppContext)

 useEffect(() => {
   if(selectedPage.value !== "design"){
     setSelectedPage({value:"design", url:"/design"})
   }
 },[selectedPage.value, setSelectedPage])
  return ( <>
<HeadIndex/>
  <WorkInProgress/>
  </>
    
  );
}
export {getStaticProps} 
export default withTranslation(Design);