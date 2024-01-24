import HeadIndex, { HeadIndexDesign } from "@component/components/Head";

import { AppContext } from "@component/context/AppContext";
import { useTranslation } from "next-i18next";
import withTranslation, { getStaticProps } from '@component/components/utils/getStaticProps'
import { useContext, useEffect } from "react";
import DesignMainPage from "@component/components/Design/DesignMainPage";


const Design = () => {
    const { t } = useTranslation();
    const { selectedPage, setSelectedPage } = useContext(AppContext)

    useEffect(() => {
        if (selectedPage.value !== "design") {
            setSelectedPage({ value: "design", url: "/design" })
        }
    }, [selectedPage.value, setSelectedPage])

    return ( 
  <>
        <
        HeadIndex/>
        <
        DesignMainPage / >
        
        </>

    );
}
export { getStaticProps }
export default withTranslation(Design);