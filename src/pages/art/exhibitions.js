import { AppContext } from "@component/context/AppContext";
import { useContext, useEffect } from "react";
import withTranslation, {
  getStaticProps,
} from "@component/components/utils/getStaticProps";
import HeadIndex from "@component/components/Head";
import ExhibitionsPage from "@component/components/Art/Exhibitions";

const ExhibitionArt = () => {
  const { selectedPage, setSelectedPage } = useContext(AppContext);

  useEffect(() => {
    if (selectedPage.value !== "art/exhibitions") {
      setSelectedPage({
        value: "art/exhibitions",
        url: "/art/exhibitions",
      });
    }
  }, [selectedPage.value, setSelectedPage]);

  return (
    <>
      <HeadIndex />
      <ExhibitionsPage />
    </>
  );
};
export { getStaticProps };
export default withTranslation(ExhibitionArt);
