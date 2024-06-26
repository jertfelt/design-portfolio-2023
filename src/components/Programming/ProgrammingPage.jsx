import { useRouter } from "next/router";
import styled from "styled-components";
import Link from "next/link";
import { programmingLinksen, programmingLinksv } from "./programmingLinks";
import { useTranslation } from "next-i18next";

const BackGround = styled.main`
  background: linear-gradient(
    to bottom,
    ${({ theme }) => theme.frontendnew.bgPrimary},
    ${({ theme }) => theme.frontendnew.bgSecondary}
  );
`;
const Content = styled.section`
  min-height: 100vh;
  padding: 1rem;
  @media (min-width: 1050px) {
    padding-left: 300px;
  }
  @media (min-width: 1700px) {
    padding-left: 500px;
  }
  @media (min-height: 1000px) {
    padding-top: 10vh;
  }
`;

const HeroFrontend = styled.article`
  padding-top: 20vh;
  padding-left: 2rem;
  font-family: ${({ theme }) => theme.fonts.frontendheader.primary};
  font-weight: 400;
  color: ${({ theme }) => theme.frontendnew.primaryTxt};
  font-weight: 500;
  line-height: ${({ theme }) => theme.fonts.size.lineheightLarge};
  h1 {
    font-size: ${({ theme }) => theme.fonts.size.mobile.frontend.h2};
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
const NavHeroFrontend = styled.ul`
  color: ${({ theme }) => theme.frontendnew.primaryTxt};
  list-style: none;
  li {
    font-family: ${({ theme }) => theme.fonts.frontendheader.primary};
    font-size: ${({ theme }) => theme.fonts.size.mobile.frontend.h1};
    line-height: 200%;
    &:hover {
      text-decoration: underline;
      font-style: italic;
    }
  }
`;

const ProgrammingPage = (languageurl) => {
  const router = useRouter();
  const { locale: activeLocale } = router;
  const language = activeLocale;
  const linksHero = language === "en" ? programmingLinksen : programmingLinksv;
  const { t } = useTranslation();

  return (
    <BackGround>
      <Content>
        <HeroFrontend>
          <h1>Tova Jertfelt</h1>
          <h2>{t("newFE.start.about")}</h2>
          <h3>{t("newFE.start.h3")}</h3>
        </HeroFrontend>

        <NavHeroFrontend>
          {linksHero.map((l, i) => (
            <li key={i}>
              <Link href={"/programming/" + l.href}>{l.lable}</Link>
            </li>
          ))}
        </NavHeroFrontend>
      </Content>
    </BackGround>
  );
};
export default ProgrammingPage;
