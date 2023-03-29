import MainFrontend from "@component/components/Frontend/MainFrontend";
import { AppContext } from "@component/context/AppContext";
import { useContext, useEffect } from "react";

import {serverSideTranslations} from "next-i18next/serverSideTranslations"
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
    
    <MainFrontend/>
    </>
    );
}
 
export default FrontendPage;