import styled from "styled-components";
import { useRouter } from "next/router";
import { cases_data } from "./cases_data";
import { LinkExternal } from "./Buttons";
import ReactPlayer from "react-player/lazy";
import FooterContentGeneral from "./FooterContentGeneral";
import { useTranslation } from "next-i18next";

const BackgroundCases = styled.main`
  background-color: ${({ theme }) => theme.frontendnew.bgPrimary};
  color: ${({ theme }) => theme.frontendnew.primaryTxt};
  padding: 1rem;
  min-height: 100vh;
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
    line-height: 200%;
    white-space: wrap;
    padding-right: 1rem;
  }
  button {
    margin-left: 1rem;
  }
`;

const ContentTop = styled.div`
  padding-top: 6rem;
  padding-left: 2rem;
`;

const Content = styled.section`
  .img_desc {
    font-size: 12px;
    font-style: italic;
    text-align: right;
    margin-top: 4px;
  }
  padding-left: 2rem;
  padding-right: 2rem;
  h2 {
    color: ${({ theme }) => theme.frontendnew.headerOne};
    font-weight: bold;
    padding-top: 2rem;
    text-transform: uppercase;
    font-family: ${({ theme }) => theme.fonts.stats.primary};
    font-size: ${({ theme }) => theme.fonts.size.mobile.frontend.h2};
  }
  p {
    line-height: 200%;
  }
`;

const VideoWrapper = styled.div`
  position: relative;
  padding-top: 56.25%;
  width: 100%;
  max-width: 100%;
`;
const VideoFrame = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const ImageWrapper = styled.div`
  position: relative;
  padding-top: 56.25%;
  width: 100%;
  max-width: 100%;

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;

const CasesFrontend = () => {
  const router = useRouter();
  const { locale: activeLocale } = router;
  const language = activeLocale;
  const { t } = useTranslation();

  const thisLanguage = language;

  const getDescription = (item, language, key) => {
    const { en, sv } = item[key];
    return language === "en" ? en : sv;
  };

  const VideoComponent = ({ src, ariaContent }) => {
    return (
      <VideoWrapper>
        <VideoFrame>
          <ReactPlayer
            url={src}
            width="100%"
            height="100%"
            aria-label={ariaContent}
          />
        </VideoFrame>
      </VideoWrapper>
    );
  };

  const videoRender = (adress, title, aria, txt) => {
    return (
      <>
        <br />
        <VideoComponent src={adress} title={title} ariaContent={aria} />
        <p className="img_desc">{txt}</p>
      </>
    );
  };

  return (
    <BackgroundCases>
      <ContentTop>
        <h1>{t("newFE.cases.title")}</h1>
        <h3>{t("newFE.cases.h2")}</h3>
      </ContentTop>
      <Content>
        {cases_data.map((item, i) => (
          <article key={i}>
            {Object.keys(item).map((key) => {
              const { title, picture, video } = item[key];
              const descriptions = getDescription(item, language, key);
              const { url, github } = item[key] || {};
              let label = "";

              return (
                <div key={key}>
                  <h2>{title}</h2>
                  {Object.values(descriptions).map((description, index) => (
                    <div key={index}>
                      <p>{description}</p>
                      {index === 1 &&
                        title === "GREENPEACE" &&
                        video.exists &&
                        (thisLanguage === "en"
                          ? videoRender(
                              video.adress,
                              video.title_en,
                              video.aria_en,
                              video.txt_en
                            )
                          : videoRender(
                              video.adress,
                              video.title,
                              video.aria,
                              video.txt
                            ))}{" "}
                      {index === 3 &&
                        title === "Barnrättsspelet" &&
                        video.exists &&
                        (thisLanguage === "en"
                          ? videoRender(
                              video.adress,
                              video.title_en,
                              video.aria_en,
                              video.txt_en
                            )
                          : videoRender(
                              video.adress,
                              video.title,
                              video.aria,
                              video.txt
                            ))}
                    </div>
                  ))}

                  {picture.exists && (
                    <ImageWrapper>
                      <img
                        src={picture.adress}
                        alt={
                          thisLanguage === "en" ? picture.aria_en : picture.aria
                        }
                      />
                    </ImageWrapper>
                  )}
                  <br />
                  {url && url.exists && (
                    <LinkExternal
                      linkurl={url.adress}
                      linktxt="Se mer"
                    ></LinkExternal>
                  )}
                  {github && github.exists && (
                    <LinkExternal onClick={() => window.open(github.adress)}>
                      GitHub
                    </LinkExternal>
                  )}
                </div>
              );
            })}
          </article>
        ))}
      </Content>

      <FooterContentGeneral type="work" language={thisLanguage} />
    </BackgroundCases>
  );
};

export default CasesFrontend;
