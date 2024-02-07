import LinksToPages from "@component/components/Homepage/Links";
import { useTranslation } from "next-i18next";
import withTranslation, {
  getStaticProps,
} from "@component/components/utils/getStaticProps";
import Head from "next/head";
import {
  FooterHomePage,
  TextContainerHomePage,
  HomepageComponent,
  ThreeColumnGridHomePage,
  ColumnHomePage,
} from "@component/components/HomePageElements";
import { LinkBtn } from "@component/components/stylings/ButtonsHomePage";

const Homepage = () => {
  const { t } = useTranslation();
  return (
    <>
      <Head>
        <title>Tova Jertfelt || Frontend, art, design || Home</title>
        <meta name="title" content="Tova Jertfelt || Frontend, art, design" />
        <meta
          name="description"
          content="Multidisciplinär frontendare, konstnär, formgivare och illustratör. Högpresterande och kreativ, kärt barn har många yrken!"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.tovajertfelt.se/" />
        <meta property="og:title" content="Tova Jertfelt || 2023" />
        <meta
          property="og:description"
          content="Multidisciplinär frontendare, konstnär, formgivare och illustratör. Högpresterande och kreativ, kärt barn har många yrken!"
        />
        <meta property="og:image" content="./publishing-priset-2.png" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.tovajertfelt.se/" />
        <meta property="twitter:title" content="Tova Jertfelt || 2023" />
        <meta
          property="twitter:description"
          content="Multidisciplinär frontendare, konstnär, formgivare och illustratör. Högpresterande och kreativ, kärt barn har många yrken!"
        />
        <meta property="twitter:image" content="/publishing-priset-2.png" />

        <meta name="author" content="Tova Jertfelt"></meta>
      </Head>
      <HomepageComponent>
        <ThreeColumnGridHomePage>
          <TextContainerHomePage>
            <ColumnHomePage>
              <article>
                <h1>Tova Jertfelt</h1>
                <h2>{t("startsida.h2")}</h2>
              </article>
              <article>
                <h3>{t("startsida.h3")}</h3>
                <p>{t("startsida.par1")}</p>
              </article>
              <div className="btn-container">
                <LinkBtn>
                  <a
                    href="https://www.linkedin.com/in/tovajertfelt/"
                    target="_blank"
                  >
                    LinkedIn
                  </a>
                </LinkBtn>
                <LinkBtn className="second">
                  <a href="https://www.instagram.com/jertfelt/" target="_blank">
                    Instagram
                  </a>
                </LinkBtn>
              </div>
            </ColumnHomePage>
          </TextContainerHomePage>
          <LinksToPages />
          <div></div>
        </ThreeColumnGridHomePage>
      </HomepageComponent>
      <FooterHomePage></FooterHomePage>
    </>
  );
};

export { getStaticProps };
export default withTranslation(Homepage);
