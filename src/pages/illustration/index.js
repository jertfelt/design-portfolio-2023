import HeadIndex, { HeadIndexIllustraion } from "@component/components/Head";
import WorkInProgress from "@component/components/WorkInProgress";
import { AppContext } from "@component/context/AppContext";
import {useTranslation } from "next-i18next";
import { useContext, useEffect } from "react";
import withTranslation, {getStaticProps} from '@component/components/utils/getStaticProps'
import IlluMainPage from "@component/components/Illustration/IllustrationMainPage";

const Illustration = () => {
  const {t} = useTranslation();
  const {selectedPage, setSelectedPage} = useContext(AppContext)

  useEffect(() => {
    if(selectedPage.value !== "illustration"){
      setSelectedPage({value:"illustration", url:"/illustration"})
    }
  },[selectedPage, setSelectedPage])
  
  return ( <>
  <HeadIndex/>
  <IlluMainPage/></> );
}
export {getStaticProps}
export default withTranslation(Illustration);