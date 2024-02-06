import { useRouter } from "next/router";
import styled from "styled-components";
import { aboutMe_data } from "./aboutme_data";
import FooterContentGeneral from "./FooterContentGeneral";
import Selfie from "../../../public/bild_9(1).svg";
import Selfie2 from "../../../public/bild_9.png";

const urlPicPublishing =
  "https://globalreporting.net/sv/wp-content/uploads/sites/2/2018/11/OmV_pris.jpg";

const BackGround = styled.section`
  background: linear-gradient(
    to bottom,
    ${({ theme }) => theme.frontendnew.bgPrimary},
    ${({ theme }) => theme.frontendnew.bgSecondary}
  );

  min-height: 100vh;
  margin: 0 auto;
  padding: 0;
  padding: 1rem;
  color: ${({ theme }) => theme.frontendnew.primaryTxt};
  h1 {
    font-size: ${({ theme }) => theme.fonts.size.mobile.frontend.h1};
    font-family: ${({ theme }) => theme.fonts.frontendheader.primary};
    white-space: wrap;
    font-weight: 400;
  }
  h2 {
    line-height: 150%;
    font-size: ${({ theme }) => theme.fonts.size.mobile.frontend.h2};
    font-family: ${({ theme }) => theme.fonts.frontendheader.primary};
  }
`;

const Content = styled.main`
  //*for mobile, grid for desktop!
  display: flex;
  flex-direction: column;
  padding: 1rem;
  h3 {
    line-height: 175%;
    font-size: ${({ theme }) => theme.fonts.size.mobile.frontend.h3};
    font-family: ${({ theme }) => theme.fonts.frontendheader.primary};
    color: ${({ theme }) => theme.frontendnew.headerOne};
  }

  .img_desc {
    font-size: 12px;
    font-style: italic;
    text-align: right;
    margin-top: 4px;
    padding-right: 1rem;
  }
`;

const HeroAbout = styled.article`
  padding-top: 3rem;
`;

const TextContent = styled.article`
  p {
    line-height: 200%;
  }
`;

const ImageWrapper = styled.section`
  width: 110%;
  margin: 0;
  max-width: 100vw;
  padding: 0;
  img {
    margin-left: -1rem;
    filter: saturate(0%);
    max-width: 100vw;
    &:hover {
      filter: saturate(100%);
    }
  }
  p {
    padding-right: 3rem;
    line-height: 175%;
    font-size: 14px;
    text-align: right;
  }
`;
const Quotes = styled.aside`
  background-color: ${({ theme }) => theme.frontendnew.bgSecondary};
  padding: 2rem;
  margin-top: 5rem; //*mobil*//
  margin-bottom: 3rem; //*mobil*//
  p {
    line-height: 200%;
    white-space: wrap;
  }
  h4 {
    color: ${({ theme }) => theme.frontendnew.headerOne};
    font-size: ${({ theme }) => theme.fonts.size.mobile.frontend.h3};
    font-family: ${({ theme }) => theme.fonts.frontendheader.primary};
    line-height: 175%;
  }
`;

const Wrap = styled.div``;

const HeroOmMig = ({ title, h3, h2 }) => {
  return (
    <>
      <h1>{title}</h1>
      <h2>{h2}</h2>
      <h3>{h3}</h3>
    </>
  );
};
const QuotesDiv = ({ quotes }) => {
  return (
    <Quotes>
      {Object.values(quotes).map((quote, index) => (
        <div key={index}>
          <h4>{quote.title}</h4>
          <p>{quote.text}</p>
        </div>
      ))}
    </Quotes>
  );
};

const Paragraphs = ({ paragraphs }) => {
  return (
    <TextContent>
      {Object.values(paragraphs).map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
    </TextContent>
  );
};

const ImageSection = ({ language }) => {
  return (
    <ImageWrapper>
      <img
        src={urlPicPublishing}
        alt="Tova och Louise står och poserar med pokal och tavla."
      />
      {aboutMe_data.map((item, i) => (
        <p key={i}>{language === "sv" ? item.sv.img_txt : item.en.img_txt}</p>
      ))}
    </ImageWrapper>
  );
};

const ImageProfile = () => {
  return (
    <Wrap>
      <img src={Selfie2} alt="Svartvit bild på Tova" />
    </Wrap>
  );
};

const AboutPage = () => {
  const router = useRouter();
  const { locale: activeLocale } = router;
  const language = activeLocale;

  return (
    <BackGround>
      <Content>
        <ImageProfile />
        {aboutMe_data.map((item, indx) => (
          <>
            <HeroAbout key={indx}>
              {language === "sv" ? (
                <HeroOmMig
                  title={item.sv.title}
                  h3={item.sv.h3}
                  h2={item.sv.sub}
                />
              ) : (
                <HeroOmMig
                  title={item.en.title}
                  h3={item.en.h3}
                  h2={item.en.sub}
                />
              )}
            </HeroAbout>
            <Paragraphs paragraphs={item[language]?.paragraphs || {}} />
          </>
        ))}
      </Content>
      <ImageSection language={language} />
      <QuotesDiv quotes={aboutMe_data[0][language]?.quotes || {}} />
      <FooterContentGeneral type="Om mig" language={language} />
    </BackGround>
  );
};

export default AboutPage;
