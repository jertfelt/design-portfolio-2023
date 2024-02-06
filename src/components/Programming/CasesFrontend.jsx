import styled from "styled-components";
import { useRouter } from "next/router";
import { cases_data } from "./cases_data";
import { ButtonPrimary, ButtonSecondary } from "./Buttons";
import React from "react";
import greenpeaceVideo from "../../../public/videos/greenpace_demo.mp4";

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
`;

const ContentTop = styled.div`
  padding-top: 6rem;
  padding-left: 2rem;
`;

const Content = styled.section`
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

const VideoComponent = (src) => {
  <div>
    <h3>Video:</h3>
    <video controls>
      <source src={src} type="video/mp4">
        {" "}
        Your browser does not support the video tag.{" "}
      </source>
    </video>
  </div>;
};

const CasesFrontend = () => {
  const router = useRouter();
  const { locales, locale: activeLocale } = router;
  const language = activeLocale;

  const getDescription = (item, language, key) => {
    const { en, sv } = item[key];
    return language === "en" ? en : sv;
  };

  return (
    <BackgroundCases>
      <ContentTop>
        <h1>Projekt</h1>
        <h3>
          Några exempel på vad jag gör, har gjort, kan göra och vill göra inom
          programmering.
        </h3>
      </ContentTop>
      <Content>
        {cases_data.map((item, i) => (
          <article key={i}>
            {Object.keys(item).map((key) => {
              const { title, picture } = item[key];
              const descriptions = getDescription(item, language, key);

              return (
                <div key={key}>
                  <h2>{title}</h2>
                  {Object.values(descriptions).map((description, index) => (
                    <div key={index}>
                      <p>{description}</p>
                      {index === 1 &&
                        title === "SVERIGESUTSLAPP.SE" &&
                        picture.exists && (
                          <VideoComponent videsrc={greenpeaceVideo} />
                        )}{" "}
                    </div>
                  ))}
                  {title !== "SVERIGESUTSLAPP.SE" && picture.exists && (
                    <p>bild</p>
                  )}
                </div>
              );
            })}
          </article>
        ))}
      </Content>
    </BackgroundCases>
  );
};

export default CasesFrontend;
