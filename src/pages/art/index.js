import { HeadIndexArt } from "@component/components/Head";
import WorkInProgress from "@component/components/WorkInProgress";
import { AppContext } from "@component/context/AppContext";
import {useTranslation } from "next-i18next";
import withTranslation, {getStaticProps} from '@component/components/utils/getStaticProps'
import { useContext, useEffect } from "react";

const Art = () => {
  const {t} = useTranslation();
  const {selectedPage, setSelectedPage} = useContext(AppContext)

 useEffect(() => {
   if(selectedPage.value !== "art"){
     setSelectedPage({value:"art", url:"/art"})
   }
 },[])
  return (
    <>

    <WorkInProgress/>
    </> );
}
export {getStaticProps} 
export default withTranslation(Art);