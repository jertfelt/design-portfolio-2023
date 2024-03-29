import { useRouter } from "next/router";
import styled from "styled-components";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import { artPageTxt } from "./artPageTxts";
import { ExhibitionsBtn } from "./ArtPageBtns";

const Container = styled.div`
  min-height: 100vh;
`;

const BackgroundArtPage = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 3rem;
  padding-top: 7rem;
  background-color: ${({ theme }) => theme.artshared.green};
  color: ${({ theme }) => theme.artshared.greentxt};
  h1 {
    font-family: Arya;
    font-size: 30px;
  }
`;
const Year = styled.article`
  margin-bottom: 2rem;
  h2 {
    font-size: 30px;
    font-family: Arya;
    line-height: 100%;
    margin: 0;
    padding: 0;
    max-width: 30vw;
  }
  h3 {
    font-size: 20px;
    @media (min-width: 700px) {
      max-width: 40vw;
    }
  }
`;
const AboutMeArtPage = styled.article`
  p {
    line-height: 150%;
  }
`;

const FooterArt = styled.footer`
  background-color: ${({ theme }) => theme.artshared.green};

  min-height: 10vh;
  margin: 0;
  padding: 2rem;
  color: ${({ theme }) => theme.artshared.greentxt};
  font-size: 28px;
  @media (max-width: 819px) {
    font-size: 18px;
  }
  hr {
    color: ${({ theme }) => theme.artshared.greentxt};
  }
`;
const Buttons = styled.div`
  a {
    font-family: Arya;
  }
  @media (max-width: 819px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 100vw;
  }
  @media (min-width: 820px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`;

const Exhibition = styled.div``;

const ExhibitionsPage = () => {
  const router = useRouter();
  const { locale: activeLocale } = router;
  const language = activeLocale;

  const artText = language === "en" ? artPageTxt[0].en : artPageTxt[0].sv;

  return (
    <Container>
      <BackgroundArtPage>
        <AboutMeArtPage>
          <h1>{artText.titleex}</h1>
          {Object.entries(artText.exhibitions)
            .reverse()
            .map(([year, exhibitions], i) => (
              <Year key={i}>
                <h2>{year}</h2>
                {Object.values(exhibitions).map((exhibition, j) => (
                  <Exhibition key={j}>
                    <h3>{exhibition.what}</h3>
                    <p>
                      {exhibition.where}
                      <br />
                      {exhibition.when}{" "}
                    </p>
                  </Exhibition>
                ))}
              </Year>
            ))}
        </AboutMeArtPage>
      </BackgroundArtPage>
      <FooterArt>
        <Buttons>
          <div></div>
          <ExhibitionsBtn>
            {/* <Link href={"/art/exhibitions"}>{artText.btn1}</Link> */}
          </ExhibitionsBtn>
        </Buttons>
        <hr></hr>
      </FooterArt>
    </Container>
  );
};

export default ExhibitionsPage;
