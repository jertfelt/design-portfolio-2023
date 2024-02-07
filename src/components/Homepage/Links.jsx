import { useContext } from "react";
import Link from "next/link";
import { AppContext } from "@component/context/AppContext";
import { useTranslation } from "next-i18next";
import { linksdata } from "./linksdata";
import {
  BackgroundOne,
  BackgroundTwo,
  BodyTwo,
  LinkContainer,
  LinkFour,
  LinkOnev2,
  LinkThree,
  LinkTwo,
} from "./LinksComponents";

const LinksToPages = () => {
  const { setSelectedPage } = useContext(AppContext);
  const { t } = useTranslation();
  const selection = (e) => {
    switch (e.target.outerText) {
      case "Frontend,":
        setSelectedPage({ value: "programming", url: "/programming" });
        break;
      case "Art,":
        setSelectedPage({ value: "art", url: "/art" });
        break;
      case "Konst,":
        setSelectedPage({ value: "art", url: "/art" });
        break;
      case "Design &":
        setSelectedPage({ value: "design", url: "/design" });
        break;
      case "Illustration":
        setSelectedPage({ value: "illustration", url: "/illustration" });
        break;
      default:
        setSelectedPage({ value: "", url: "/" });
    }
  };
  return (
    <BodyTwo>
      <>
        {linksdata.map((item, i) => (
          <div key={i} onClick={(e) => selection(e)}>
            <Link
              href={{
                pathname: `/${item.link.href}`,
              }}
            >
              <>
                {" "}
                {item.link.href === "programming" ? (
                  <BackgroundOne>
                    <LinkContainer>
                      <LinkOnev2>{item.text}</LinkOnev2>
                    </LinkContainer>
                  </BackgroundOne>
                ) : (
                  <BackgroundTwo>
                    <LinkContainer>
                      {item.translation ? (
                        <LinkTwo>{t("startsida.headline")}</LinkTwo>
                      ) : (
                        <>
                          {item.link.href === "design" && (
                            <LinkThree>{item.text}</LinkThree>
                          )}
                          {item.link.href === "illustration" && (
                            <LinkFour>{item.text}</LinkFour>
                          )}
                        </>
                      )}
                    </LinkContainer>
                  </BackgroundTwo>
                )}
              </>
            </Link>
          </div>
        ))}
      </>
    </BodyTwo>
  );
};

export default LinksToPages;
