import MainFrontend from "@component/components/Frontend/MainFrontend";
import { AppContext } from "@component/context/AppContext";
import { useContext, useEffect } from "react";

import {serverSideTranslations} from "next-i18next/serverSideTranslations"
import { HeadIndexFrontend } from "@component/components/Head";
export async function getStaticProps({locale}){
  return{
    props:{
      ...(await serverSideTranslations(locale, ["common"]))
    }
  }
}


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
 
export default FrontendPage;