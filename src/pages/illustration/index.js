import { HeadIndexIllustraion } from "@component/components/Head";
import WorkInProgress from "@component/components/WorkInProgress";
import { AppContext } from "@component/context/AppContext";
import {useTranslation } from "next-i18next";
import { useContext, useEffect } from "react";
import withTranslation, {getStaticProps} from '@component/components/utils/getStaticProps'

const Illustration = () => {
  const {t} = useTranslation();
   const {selectedPage, setSelectedPage} = useContext(AppContext)

  useEffect(() => {
    if(selectedPage.value !== "illustration"){
      setSelectedPage({value:"illustration", url:"/illustration"})
    }
  },[selectedPage, setSelectedPage])
  
  return ( <>

  <WorkInProgress/></> );
}
export {getStaticProps}
export default withTranslation(Illustration);