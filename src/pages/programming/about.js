import { AppContext } from "@component/context/AppContext";
import { useContext, useEffect } from "react";
import withTranslation, {
  getStaticProps,
} from "@component/components/utils/getStaticProps";
import HeadIndex from "@component/components/Head";
import AboutPage from "@component/components/Programming/AboutPage";

const About = () => {
  const { selectedPage, setSelectedPage } = useContext(AppContext);

  useEffect(() => {
    if (selectedPage.value !== "programming/about") {
      setSelectedPage({
        value: "programming/about",
        url: "/programming/about",
      });
    }
  }, [selectedPage.value, setSelectedPage]);

  return (
    <>
      <HeadIndex />
      <AboutPage />
    </>
  );
};
export { getStaticProps };
export default withTranslation(About);
