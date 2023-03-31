import { HeadIndexArt } from "@component/components/Head";
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
export default Art;