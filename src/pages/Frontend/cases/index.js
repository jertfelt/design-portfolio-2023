import CasesPage from "@component/components/Frontend/MainElements/Cases";
import { HeadIndexFrontend } from "@component/components/Head";
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
const Cases = () => {
  const {selectedPage, setSelectedPage} = useContext(AppContext)

  useEffect(() => {
    if(selectedPage.value !== "frontend"){
      setSelectedPage({value:"frontend", url:"/frontend"})
    }
  },[])
  return ( <section>
    <CasesPage/></section> );
}
 
export default Cases;