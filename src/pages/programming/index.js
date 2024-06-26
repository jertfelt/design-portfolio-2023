import { AppContext } from "@component/context/AppContext";
import { useContext, useEffect } from "react";
import withTranslation, {
  getStaticProps,
} from "@component/components/utils/getStaticProps";
import HeadIndex from "@component/components/Head";
import ProgrammingPage from "@component/components/Programming/ProgrammingPage";

const Programming = () => {
  const { selectedPage, setSelectedPage } = useContext(AppContext);

  useEffect(() => {
    if (selectedPage.value !== "programming") {
      setSelectedPage({ value: "programming", url: "/programming" });
    }
  }, [selectedPage.value, setSelectedPage]);

  return (
    <>
      <HeadIndex />
      <ProgrammingPage />
    </>
  );
};
export { getStaticProps };
export default withTranslation(Programming);
