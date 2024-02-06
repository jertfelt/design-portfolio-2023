import { useRouter } from "next/router";
import styled from "styled-components";
import { edu_js } from "./edu_sv";
import { qualities_sv } from "./qualities_sv";
import { works_sv } from "./works_sv";
import { ButtonPrimary, ButtonSecondary } from "./Buttons";
import FooterContentGeneral from "./FooterContentGeneral";

const BackgroundCV = styled.main`
  background-color: ${({ theme }) => theme.frontendnew.bgSecondary};
  color: ${({ theme }) => theme.frontendnew.primaryTxt};
  min-height: 100vh;
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

const CvFooter = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  line-height: 175%;
  font-family: ${({ theme }) => theme.fonts.stats.primary};
  font-size: 14px;
`;

const CVPageContent = () => {
  const router = useRouter();
  const { locales, locale: activeLocale } = router;
  const language = activeLocale;

  return (
    <BackgroundCV>
      <Padding>
        <Intro>
          <h1>CV</h1>
          <h2>FRONTENDUTVECKLARE</h2>
          <h3>tovajertfelt@gmail.com</h3>
        </Intro>
        <Works>
          <h2>JOBB</h2>
          {works_sv.map((item, i) => (
            <div key={i}>
              <h3>{item.place}</h3>
              <p className="lengthTitle">
                {item.title} {item.length}
              </p>
              <p className="paddingBottom">{item.description}</p>
              {item.place !== "FRILANS" && <Line />}
            </div>
          ))}
        </Works>
        <Works>
          <h2>FÄRDIGHETER</h2>
          {qualities_sv.map((q, i) => (
            <div key={i}>
              <h3>{q.title}</h3>
              <p className="smallerP">{q.skills}</p>
              <p className="smallerP">{q.tools}</p>
            </div>
          ))}
        </Works>
        <Works>
          <h2>UTBILDNING</h2>
          {edu_js.map((e, i) => (
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
        <FooterContentGeneral type="CV" language={language} />
      </Padding>
    </BackgroundCV>
  );
};

export default CVPageContent;
