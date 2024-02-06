import { AppContext } from "@component/context/AppContext";
import { useContext, useEffect } from "react";
import withTranslation, {
  getStaticProps,
} from "@component/components/utils/getStaticProps";
import HeadIndex from "@component/components/Head";
import CasesFrontend from "@component/components/Programming/CasesFrontend";

const CasesFE = () => {
  const { selectedPage, setSelectedPage } = useContext(AppContext);

  useEffect(() => {
    if (selectedPage.value !== "programming") {
      setSelectedPage({
        value: "programming/cases",
        url: "/programming/cases",
      });
    }
  }, [selectedPage.value, setSelectedPage]);

  return (
    <>
      <HeadIndex />
      <CasesFrontend />
    </>
  );
};
export { getStaticProps };
export default withTranslation(CasesFE);
