import WorkInProgress from "@component/components/WorkInProgress";
import { AppContext } from "@component/context/AppContext";
import {useTranslation } from "next-i18next";
import {serverSideTranslations} from "next-i18next/serverSideTranslations"
import { useContext, useEffect } from "react";
export async function getStaticProps({locale}){
  return{
    props:{
      ...(await serverSideTranslations(locale, ["common"]))
    }
  }
}

const Design = () => {
  const {t} = useTranslation();
  const {selectedPage, setSelectedPage} = useContext(AppContext)

 useEffect(() => {
   if(selectedPage.value !== "design"){
     setSelectedPage({value:"design", url:"/design"})
   }
 },[])
  return ( 
    <WorkInProgress/>
  );
}
 
export default Design;