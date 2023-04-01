import { HeadIndexArt } from "@component/components/Head";
import WorkInProgress from "@component/components/WorkInProgress";
import { AppContext } from "@component/context/AppContext";
import {useTranslation } from "next-i18next";
import withTranslation, {getStaticProps} from '@component/components/utils/getStaticProps'
import { useContext, useEffect } from "react";
import ArtMain from "@component/components/Art/ArtMainPage";

const Art = () => {
  const {selectedPage, setSelectedPage} = useContext(AppContext)

 useEffect(() => {
   if(selectedPage.value !== "art"){
     setSelectedPage({value:"art", url:"/art"})
   }
 },[selectedPage.value, setSelectedPage])

  return (
    <>
    <HeadIndexArt/>
    <ArtMain/>
    </> );
}
export {getStaticProps} 
export default withTranslation(Art);