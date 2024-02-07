import { useRouter } from "next/router";
import styled from "styled-components";
import { aboutMe_data } from "./aboutme_data";
import FooterContentGeneral from "./FooterContentGeneral";

import LinkedInProfilePic from "../../../public/tova-linkedin-portratt.png";
import PublishingPrize2018 from "../../../public/publishing-priset-1.png";
import Image from "next/image";

const BackGround = styled.section`
  background: linear-gradient(
    to bottom,
    ${({ theme }) => theme.frontendnew.bgPrimary},
    ${({ theme }) => theme.frontendnew.bgSecondary}
  );
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
  @media (max-width: 659px) {
    display: flex;
    flex-direction: column;
    padding: 2rem;
    padding-top: 3rem;
  }
  @media (min-width: 660px) {
    padding-right: 5rem;
    padding-left: 2rem;
    padding-bottom: 3rem;
    padding-top: 2rem;
  }
  @media (min-width: 900px) {
    padding-left: 2rem;
    padding-right: 9rem;
    padding-bottom: 3rem;
    padding-top: 3rem;
  }
  @media (min-width: 1100px) {
    padding-left: 8rem;
    padding-right: 9rem;
    padding-bottom: 3rem;
    max-width: 60%;
    padding-top: 6rem;
  }
  @media (min-width: 1400px) {
    padding-left: 8rem;
    padding-right: 9rem;
    padding-bottom: 3rem;
    max-width: 40%;
    padding-top: 6rem;
  }

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
const Wrap = styled.div`
  padding-top: 1rem;
  width:100%;

  img {
    width: 100%;
    max-width:500px; 
   border-radius: 86% 14% 52% 48% / 50% 52% 48% 50%;
   box-shadow: 0px 14px 10px #d03fee;
   margin-bottom:1rem;
  }
  
}
`;

const HeroAbout = styled.article``;

const TextContent = styled.article`
  p {
    line-height: 200%;
  }
`;

const ImageWrapper = styled.section`
  width: 100vw;
  img {
    max-width: 100vw;
    @media (min-width: 1300px) {
      max-height: 80vh;
    }
    object-fit: contain;
    margin-left: -1rem;
  }
  p {
    line-height: 175%;
    font-size: 14px;
    text-align: right;

    @media (max-width: 490px) {
      padding: 0;
      max-width: 90vw;

      margin: 0 auto;

      margin-right: 1rem;
      padding-right: 1rem;
      margin-bottom: -3rem;
      font-size: 12px;
    }

    @media (min-width: 491px) and (max-width: 659px) {
      padding: 0;
      max-width: 90vw;
      margin: 0 auto;
      margin-top: 1rem;
      margin-bottom: -2rem;
    }
    @media (min-width: 660px) and (max-width: 899px) {
      padding: 0;
      margin: 0 auto;
      max-width: 90vw;
      margin-top: 1rem;
    }
    @media (min-width: 900px) {
      padding: 0;
      margin: 0 auto;
      margin-right: 2rem;
      margin-top: 1rem;
      margin-bottom: -1rem;
      max-width: 80vw;
    }

    @media (min-width: 1100px) {
      padding: 0;
      margin-top: 1rem;
      margin-right: 3vw;
      max-width: 80vw;
    }
    @media (min-width: 1300px) {
      margin-right: 5rem;
      margin-top: 1rem;
    }
    @media (min-width: 1400px) {
      max-width: 80vw;
      margin-top: 1rem;
      margin-right: 8rem;
    }
    @media (min-width: 1430px) {
      margin-right: 9rem;
    }
    @media (min-width: 1480px) {
      margin-right: 11rem;
    }
    @media (min-width: 1500px) {
      max-width: 80vw;
      margin-right: 12vw;
      margin-top: 1rem;
    }
  }
`;
const Quotes = styled.aside`
  background-color: ${({ theme }) => theme.frontendnew.bgSecondary};
  padding: 2rem;
  margin-top: 5rem;
  margin-bottom: 3rem;
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
  @media (max-width: 659px) {
    display: flex;
    flex-direction: column;
    padding: 1rem;
  }
  @media (min-width: 660px) {
    max-width: 50vw;
    padding-right: 5rem;
    margin: 0 auto;
    margin-top: 3rem;
    margin-bottom: 3rem;
  }
  @media (min-width: 900px) {
    display: grid;
    max-width: 100vw;
    grid-template-columns: 2fr 2fr 2fr;
    column-gap: 3rem;
  }
  @media (min-width: 1100px) {
    grid-template-columns: 1fr 2fr;
    column-gap: 5rem;
    margin-bottom: 5rem;
    div {
      padding: 1rem;
    }
    max-width: 80vw;
  }
  @media (min-width: 1400px) {
    max-width: 72vw;
    margin-bottom: 10rem;
    div {
      padding: 1rem;
    }
  }
`;

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
      <Image
        layout="responsive"
        width={1500}
        height={300}
        objectFit="contain"
        src={PublishingPrize2018}
        alt={
          language === "sv"
            ? "Tova och Louise står och poserar med pokal och tavla."
            : "Tova and Louise poses with prize"
        }
      />

      {aboutMe_data.map((item, i) => (
        <p key={i}>{language === "sv" ? item.sv.img_txt : item.en.img_txt}</p>
      ))}
    </ImageWrapper>
  );
};

const ImageProfile = ({ language }) => {
  return (
    <Wrap>
      <Image
        layout="responsive"
        width={300}
        height={300}
        objectFit="contain"
        src={LinkedInProfilePic}
        alt={
          language === "sv"
            ? "Svartvitt foto på Tova som tittar in i kameran"
            : "Black and white photo with Tova looking into the camera"
        }
      />
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
        <ImageProfile language={language} />
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
