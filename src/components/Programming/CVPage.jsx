import { useRouter } from "next/router";
import styled from "styled-components";
import { edu_js, edu_eng } from "./edu_sv";
import { qualities_sv, qualities_en } from "./qualities_sv";
import { works_sv, works_en } from "./works_sv";
import { useTranslation } from "next-i18next";
import FooterContentGeneral from "./FooterContentGeneral";

const BackgroundCV = styled.main`
  background-color: ${({ theme }) => theme.frontendnew.bgSecondary};
  color: ${({ theme }) => theme.frontendnew.primaryTxt};
`;
const Padding = styled.section`
  padding: 2rem;
`;
const Intro = styled.article`
  padding-top: 4rem;
  padding-bottom: 1rem;
  h1 {
    font-size: ${({ theme }) => theme.fonts.size.mobile.frontend.h1};
    font-family: ${({ theme }) => theme.fonts.frontendheader.primary};
    white-space: wrap;
    font-weight: 400;
  }
  h2,
  h3 {
    font-size: ${({ theme }) => theme.fonts.size.mobile.frontend.h3};
    font-family: ${({ theme }) => theme.fonts.frontendheader.primary};
    font-weight: 400;
    white-space: wrap;
    padding-right: 1rem;
  }
`;

const GridDesktop = styled.section`
  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
  }

  @media (min-width: 601px) and (max-width: 700px) {
    display: flex;
    flex-direction: column;
    padding-right: 5rem;
  }
  @media (min-width: 701px) and (max-width: 899px) {
    display: flex;
    flex-direction: column;
    padding-right: 10rem;
  }

  @media (min-width: 900px) and (max-width: 1499px) {
    display: grid;
    grid-template-columns: 2fr 2fr;
    column-gap: 5rem;
  }

  @media (min-width: 1300px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    column-gap: 5rem;
  }
`;
const Works = styled.article`
  h2 {
    font-size: ${({ theme }) => theme.fonts.size.mobile.frontend.h2};
    font-family: ${({ theme }) => theme.fonts.stats.primary};
    font-weight: 400;
    white-space: wrap;
    color: ${({ theme }) => theme.frontendnew.headerOne};
  }
  h3 {
    font-size: ${({ theme }) => theme.fonts.size.mobile.frontend.h3};
    font-family: ${({ theme }) => theme.fonts.stats.primary};
    font-weight: 400;
    white-space: wrap;
  }
  div {
    p {
      line-height: 200%;
      font-weight: 400;
    }
    .lengthTitle {
      font-family: "JetBrains Mono";
    }
    .paddingBottom {
      padding-bottom: 1rem;
    }
    .smallerP {
      font-size: 14px;
    }
    padding-bottom: 1rem;
  }
`;
const Line = styled.hr`
  width: 60px;
  color: ${({ theme }) => theme.frontendnew.primaryTxt};
  margin: 0;
`;

const CVPageContent = () => {
  const router = useRouter();
  const { locale: activeLocale } = router;
  const language = activeLocale;
  const { t } = useTranslation();

  const eduData = activeLocale === "sv" ? edu_js : edu_eng;
  const qualitiesData = activeLocale === "sv" ? qualities_sv : qualities_en;
  const worksData = activeLocale === "sv" ? works_sv : works_en;

  const showLastLine = (item, language) => {
    switch (language) {
      case "sv":
        return item !== "FRILANS";
      default:
        return item !== "FREELANCE";
    }
  };

  return (
    <BackgroundCV>
      <Padding>
        <Intro>
          <h1>CV</h1>
          <h2>{t("newFE.cv.subhead")}</h2>
          <h3>tovajertfelt@gmail.com</h3>
        </Intro>
        <GridDesktop>
          <Works>
            <h2>{t("newFE.cv.work")}</h2>
            {worksData.map((item, i) => (
              <div key={i}>
                <h3>{item.place}</h3>
                <p className="lengthTitle">
                  {item.title} {item.length}
                </p>
                <p className="paddingBottom">{item.description}</p>
                {item.place && showLastLine(item.place, language) ? (
                  <Line />
                ) : (
                  ""
                )}
              </div>
            ))}
          </Works>
          <Works>
            <h2>{t("newFE.cv.skills")}</h2>
            {qualitiesData.map((q, i) => (
              <div key={i}>
                <h3>{q.title}</h3>
                <p className="smallerP">{q.skills}</p>
                <p className="smallerP">{q.tools}</p>
              </div>
            ))}
          </Works>
          <Works>
            <h2>{t("newFE.cv.education")}</h2>
            {eduData.map((e, i) => (
              <div key={i}>
                <h3>{e.school}</h3>
                <h3>
                  {e.title} {e.year}
                </h3>
                <p>{e.desc}</p>
                {e.school !== "ART ACADEMY OF LATVIA" && <Line />}
              </div>
            ))}
          </Works>
        </GridDesktop>
        <FooterContentGeneral type="CV" language={language} />
      </Padding>
    </BackgroundCV>
  );
};

export default CVPageContent;
