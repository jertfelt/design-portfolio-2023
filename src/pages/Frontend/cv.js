import CVFrontend from "@component/components/Frontend/MainElements/CV";
import { HeadIndexFrontend } from "@component/components/Head";
import { AppContext } from "@component/context/AppContext";
import { useContext, useEffect } from "react";
import styled from "styled-components"
import {serverSideTranslations} from "next-i18next/serverSideTranslations"

export async function getStaticProps({locale}){
  return{
    props:{
      ...(await serverSideTranslations(locale, ["common"]))
    }
  }
}


const BackgroundCV = styled.section`
background:${({theme}) => theme.frontendcolors.accent};
`
const FrontendCV = () => {
  const {selectedPage, setSelectedPage} = useContext(AppContext)

  useEffect(() => {
    if(selectedPage.value !== "frontend"){
      setSelectedPage({value:"frontend", url:"/frontend"})
    }
  },[selectedPage, setSelectedPage])

  return (<>
  <BackgroundCV>
  <CVFrontend/>
  </BackgroundCV></>  );
}
 
export default FrontendCV;