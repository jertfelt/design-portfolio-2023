import { AppContext } from "@component/context/AppContext";
import { useContext, useEffect } from "react";
import withTranslation, {
  getStaticProps,
} from "@component/components/utils/getStaticProps";
import HeadIndex from "@component/components/Head";
import CVPageContent from "@component/components/Programming/CVPage";

const CVPage = () => {
  const { selectedPage, setSelectedPage } = useContext(AppContext);

  useEffect(() => {
    if (selectedPage.value !== "programming") {
      setSelectedPage({ value: "programming/cv", url: "/programming/cv" });
    }
  }, [selectedPage.value, setSelectedPage]);

  return (
    <>
      <HeadIndex />
      <CVPageContent />
    </>
  );
};
export { getStaticProps };
export default withTranslation(CVPage);
