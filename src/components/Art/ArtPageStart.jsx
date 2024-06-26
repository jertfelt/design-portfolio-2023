import { useRouter } from "next/router";
import styled from "styled-components";

import { useTranslation } from "next-i18next";
import { artPageTxt } from "./artPageTxts";

import ArtPageFooter from "./ArtPageFooter";
import ArtGalleryStart from "./ArtGalleryStart";

const Container = styled.div`
  min-height: 100vh;
`;

const BackgroundArtPage = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 3rem;
  background-color: ${({ theme }) => theme.art.background};
  color: ${({ theme }) => theme.art.primaryTxt};
`;

const HeroArtPage = styled.article`
  h1 {
    line-height: 100%;
  }
  h2 {
    line-height: 150%;
  }
  @media (max-width: 440px) {
    padding-top: 5rem;
    h1 {
      font-size: 1.2rem;
    }
    h2 {
      font-size: 1.5rem;
    }
  }
  @media (min-width: 441px) and (max-width: 819px) {
    max-width: 80vw;
    padding-top: 8rem;
    h2 {
      font-size: 32px;
    }
  }
  @media (min-width: 820px) {
    padding-left: 8rem;
    padding-top: 16rem;
    h2 {
      font-size: 40px;
    }
  }
`;

const AboutMeArtPage = styled.article`
  p {
    line-height: 200%;
  }

  @media (max-width: 819px) {
    padding-top: 1rem;
    max-width: 80vw;
  }
  @media (min-width: 820px) {
    max-width: 60vw;
    padding: 0;
    padding-top: 8rem;
    padding-bottom: 8rem;
  }

  @media (min-width: 1100px) {
    max-width: 100%;
    p {
      padding-left: 8rem;
      padding-right: 4rem;
    }
    padding-top: 8rem;
    padding-bottom: 8rem;
  }
`;

const Gallery = styled.div``;

const ArtPageStart = () => {
  const router = useRouter();
  const { locale: activeLocale } = router;
  const language = activeLocale;

  const artText = language === "en" ? artPageTxt[0].en : artPageTxt[0].sv;
  console.log(language);
  return (
    <Container>
      <BackgroundArtPage>
        <HeroArtPage>
          <h1>{artText.h1}</h1>
          <h2>{artText.h2}</h2>
        </HeroArtPage>
        <AboutMeArtPage>
          {Object.values(artText.about_me).map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </AboutMeArtPage>
        <ArtGalleryStart lang={language} />
      </BackgroundArtPage>
      <ArtPageFooter
        page="start"
        link1={artText.btn1}
        link2=""
        lang={language}
      />
    </Container>
  );
};

export default ArtPageStart;
