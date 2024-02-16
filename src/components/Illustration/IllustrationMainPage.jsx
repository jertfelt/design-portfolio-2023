import { useTranslation } from "next-i18next";
import styled from "styled-components";
import IllustrationGrid from "./IllustrationGrid";

const Section = styled.main`
  min-height: 120vh;
  padding: 0;
  margin: 0;
  background-color: ${({ theme }) => theme.illustration.background};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding-top: 12rem;
  padding-left: 5rem;
  padding-right: 5rem;
  @media (max-width: 900px) {
    padding-top: 7rem;
  }
`;

const AboutIll = styled.section`
  min-height: 10vh;
  padding: 3rem;
  padding-top: 2rem;
  text-align: center;

  color: ${({ theme }) => theme.illustration.bgContrast};
  h1 {
    color: ${({ theme }) => theme.illustration.yellow};
    font-size: 120px;
    line-height: 0;
    font-weight: bold;
    letter-spacing: -2px;
    @media (max-width: 900px) {
      font-size: 4rem;
    }
  }
  p {
    line-height: 175%;
    max-width: 70vw;
    @media (max-width: 900px) {
      max-width: 100%;
      padding: 1rem;
    }
  }
`;

const IlluMainPage = () => {
  const { t } = useTranslation();
  return (
    <Section>
      <IllustrationGrid />
      <AboutIll>
        <h1>Illustration</h1>
        <p>{t("illustration.about")}</p>
      </AboutIll>
    </Section>
  );
};

export default IlluMainPage;
