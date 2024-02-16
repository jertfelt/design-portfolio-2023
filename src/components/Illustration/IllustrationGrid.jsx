import styled from "styled-components";
import Image from "next/image";

import mona from "../../../public/illustraion/mona-monasar-modersmal-tova-jertfelt.png";
import klimatkamp from "../../../public/illustraion/republic-jertfelt-klimatkampar-illustration-sydafrika.png";
import shell from "../../../public/illustraion/shell-is-hell.png";
import omv from "../../../public/illustraion/save-earth-apps-tova-jertfelt-illustration-omvarlden-2018.png";
import amnesty from "../../../public/illustraion/gavokort-hemsida-tova-jertfelt-amnesty-4.png";
import underdittfinger from "../../../public/illustraion/under-ditt-finger-tova-jertfelt-collage--2.png";
import wescf from "../../../public/illustraion/sustainable-development-wescf-tovajertfeltillustration-webb.png";
import lsu from "../../../public/illustraion/bag-lsu.png";
import paflykt from "../../../public/illustraion/pa-flykt-republic-jertfelt-sida3.png";
import leopard from "../../../public/illustraion/Leopard--print.png";
import ottar from "../../../public/illustraion/ottar-png-version-tova-jertfelt-2021.png";
import isatou from "../../../public/illustraion/isatou-portratt-insta.png";
import inferno from "../../../public/illustraion/inferno-dance-tova-jertfelt-poster-for-sale-print-illustration-tova-jertfelt.png";
import frihet from "../../../public/illustraion/TJ-GIF1-SDochNMR-hatkarlek_mindregif.gif";
import whiteblindness from "../../../public/illustraion/web-white-blindness-png-tova-jertfelt-anti-racism-antirasist-poster-print.png";
import { firstFour } from "./illudata";
import { useRouter } from "next/router";

const Content = styled.section`
  min-height: 100vh;
  background-color: ${({ theme }) => theme.illustration.contentBg};
  max-width: 80vw;
  width: 100%;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.illustration.txt};
  .alignleft {
    text-align: right;
  }
`;

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: ${({ theme }) => theme.illustration.txt};
`;

const ImgContainerFirstRow = styled(ImageContainer)`
  height: 400px;
`;
const ImgContainer2ndRow = styled(ImageContainer)`
  height: 500px;
  width: 100%;
`;

const StyledImage = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  &:hover {
    opacity: 90%;
  }
`;

const ImgFirstRow = styled(StyledImage)`
  max-height: 400px;
`;

const Img2ndRow = styled(StyledImage)`
  max-height: 500px;
  width: 100%;
`;

const Article = styled.article`
  overflow: hidden;
`;

const ArticleFirstRow = styled(Article)`
  max-height: 400px;
`;

const ArticleSecondRow = styled(Article)`
  max-height: 500px;
  width: 100%;
`;

const FirstRow = styled.div`
  margin-bottom: 1rem;
  @media (max-width: 900px) {
    display: flex;
    flex-direction: column;
    padding-top: 0;
  }

  @media (min-width: 901px) and (max-width: 1200px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    row-gap: 0;
    column-gap: 2rem;
  }
  @media (min-width: 1201px) {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1rem;
    padding-top: 1rem;
  }
`;
const SecondRow = styled.div`
  width: 100%;
`;
const ThirdRow = styled.div`
  margin-top: 1rem;
  margin-bottom: 1rem;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  @media (max-width: 900px) {
    display: flex;
    flex-direction: column;
    row-gap: 0;
  }

  p {
    height: 400px;
    background: darkblue;
  }
`;

const FourthRow = styled.div`
  margin-top: 1rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  padding-bottom: 1rem;
  @media (max-width: 900px) {
    display: flex;
    flex-direction: column;
    row-gap: 0;
  }
`;

const FirstColumn = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 1rem;
  article {
    background: yellow;
    height: 400px;
  }
`;
const SecondColumn = styled.div`
  height: auto;
`;

const SecondColumnImageContainer = styled.div`
  overflow: hidden;
  height: auto;
`;

const SecondColumnImage = styled(StyledImage)`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const IllustrationGrid = () => {
  const router = useRouter();
  const { locale: activeLocale } = router;
  const language = activeLocale;

  const getImgSrc = (picture) => {
    switch (picture) {
      case "mona":
        return mona;
      case "underdittfinger":
        return underdittfinger;
      case "shell":
        return shell;
      case "omv":
        return omv;

      default:
        return "";
    }
  };

  return (
    <Content>
      <p>Tova Jertfelt Illustration</p>
      <FirstRow>
        {firstFour[0] &&
          Object.values(firstFour[0]).map((item, index) => (
            <ArticleFirstRow key={index}>
              <ImgContainerFirstRow>
                <ImgFirstRow
                  alt={item[language].alt}
                  src={getImgSrc(item.picture)}
                  quality={100}
                />
              </ImgContainerFirstRow>
            </ArticleFirstRow>
          ))}
      </FirstRow>

      <SecondRow>
        <ArticleSecondRow>
          <a href="">
            <ImgContainer2ndRow>
              <Img2ndRow
                alt="Collage, en dödskalle med en halo av ett snäckskal"
                src={amnesty}
                quality={100}
              ></Img2ndRow>
            </ImgContainer2ndRow>
          </a>
        </ArticleSecondRow>
      </SecondRow>
      <FourthRow>
        <SecondColumn>
          <SecondColumnImageContainer>
            <SecondColumnImage alt="Your Alt Text" src={whiteblindness} />
          </SecondColumnImageContainer>
        </SecondColumn>
        <FirstColumn>
          <ArticleFirstRow>
            <ImgContainerFirstRow>
              <ImgFirstRow alt="" src={lsu} quality={100} />
            </ImgContainerFirstRow>
          </ArticleFirstRow>
          <ArticleFirstRow>
            <a href="">
              <ImgContainerFirstRow>
                <ImgFirstRow alt="" src={frihet} quality={100} />
              </ImgContainerFirstRow>
            </a>
          </ArticleFirstRow>
        </FirstColumn>
      </FourthRow>
      <ThirdRow>
        <ArticleFirstRow>
          <a href="">
            <ImgContainerFirstRow>
              <ImgFirstRow
                alt="Collage, en dödskalle med en halo av ett snäckskal"
                src={wescf}
                quality={100}
              />
            </ImgContainerFirstRow>
          </a>
        </ArticleFirstRow>
        <ArticleFirstRow>
          <a href="">
            <ImgContainerFirstRow>
              <ImgFirstRow
                alt="Collage, en dödskalle med en halo av ett snäckskal"
                src={klimatkamp}
                quality={100}
              />
            </ImgContainerFirstRow>
          </a>
        </ArticleFirstRow>
      </ThirdRow>
      <FirstRow>
        <ArticleFirstRow>
          <a href="">
            <ImgContainerFirstRow>
              <ImgFirstRow
                alt="Collage till boken Under Ditt Finger, utgiven av Natur & Kultur"
                src={paflykt}
                quality={100}
              />
            </ImgContainerFirstRow>
          </a>
        </ArticleFirstRow>
        <ArticleFirstRow>
          <a href="">
            <ImgContainerFirstRow>
              <ImgFirstRow alt="OmVärlden" src={leopard} quality={100} />
            </ImgContainerFirstRow>
          </a>
        </ArticleFirstRow>
        <ArticleFirstRow>
          <a href="">
            <ImgContainerFirstRow>
              <ImgFirstRow
                alt="Illustrerad bild av en flicka som tittar sig i spegeln"
                src={isatou}
                quality={100}
              />
            </ImgContainerFirstRow>
          </a>
        </ArticleFirstRow>

        <ArticleFirstRow>
          <a href="">
            <ImgContainerFirstRow>
              <ImgFirstRow alt="" src={inferno} quality={100} />
            </ImgContainerFirstRow>
          </a>
        </ArticleFirstRow>
      </FirstRow>
      <p className="alignleft">2013- 2024</p>
    </Content>
  );
};

export default IllustrationGrid;
