import { AppContext } from "@component/context/AppContext";
import { useContext, useEffect } from "react";
import withTranslation, {
  getStaticProps,
} from "@component/components/utils/getStaticProps";
import HeadIndex from "@component/components/Head";

import AboutMePage from "@component/components/Programming/AboutMe";

const AboutMe = () => {
  const { selectedPage, setSelectedPage } = useContext(AppContext);

  useEffect(() => {
    if (selectedPage.value !== "programming/aboutme") {
      setSelectedPage({
        value: "programming/aboutme",
        url: "/programming/aboutme",
      });
    }
  }, [selectedPage.value, setSelectedPage]);

  return (
    <>
      <HeadIndex />
      <AboutMePage />
    </>
  );
};
export { getStaticProps };
export default withTranslation(AboutMe);
