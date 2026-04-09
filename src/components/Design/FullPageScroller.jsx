import Image from "next/image";
import styled, { css } from "styled-components";
import emiljensen2 from "../../../public/design/emiljensen2.png";
import berwaldhallen from "../../../public/design/berwaldhallen-jertfelt.png";
import kollektivSorg from "../../../public/design/kollektiv-sorg-pitch.png";
import familyFirst from "../../../public/design/FAMILY-FIRST-METAMORPHOSIS.gif";
import forumSyd from "../../../public/design/forum-syd-rebrand.png";
import globalPortalen from "../../../public/design/globalportalen-grafiska-riktlinjer-2022-tova-jertfelt-monster.png";

const FullPageScroll = () => {
  const AppWrap = styled.div`
    background: ${({ theme }) => theme.accentTwo};
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0;
    padding: 0;
  `;

  const Item = styled.div`
    background-image:
      linear-gradient(${({ theme }) => theme.accent} 1px, transparent 1px),
      linear-gradient(
        to right,
        ${({ theme }) => theme.accent} 1px,
        transparent 1px
      );
    background-position: 0% 0%;
    background-size: 30px 30px;
    background-repeat: repeat;
    width: 100vw;
    display: flex;
    flex-direction: column;

    padding: 0;
    margin: 0;
    margin-top: -6vh;
    height: 100%;
    margin-bottom: -6vh;
  `;

  const ImageWrapper = styled.div`
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100%;
    min-width: 99vw;
    position: relative;
    img {
      width: 100%;
      height: 100%;
    }
  `;

  const TitleOverWrapper = styled.div`
    z-index: 1;
    position: relative;
    top: 340px;
    left: 10px;
    max-width: 25vw;
    flex-direction: row-reverse;
    gap: 1rem;
    border: 2px solid ${({ theme }) => theme.frontendnew.bgPrimary};
    background-color: ${({ theme }) => theme.frontendnew.bgSecondary};
  `;

  const Text = styled.div`
    cursor: none;
    line-height: 14px;
    color: ${({ theme }) => theme.white};
    font-size: 16px;
    font-family: JetBrains Mono;
    padding-right: 2rem;
    padding-left: 2rem;
  `;

  return (
    <AppWrap>
      <Item>
        <TitleOverWrapper>
          <Text>
            <h2>Grafisk Identitet </h2>
          </Text>
          <Text>
            <h2 className="customer">Teskedsorden</h2>
          </Text>
        </TitleOverWrapper>
        <ImageWrapper>
          <Image
            priority={true}
            quality={100}
            src={emiljensen2}
            alt="Emil Jensen wearing Teskedsorden T-shirt"
            style={{
              objectFit: "cover",
            }}
          ></Image>
        </ImageWrapper>
      </Item>
      <Item>
        <TitleOverWrapper reverse>
          <Text reverse>
            <h2>Affisch</h2>
          </Text>
          <Text reverse>
            <h2 className="customer">Berwaldhallen</h2>
          </Text>
        </TitleOverWrapper>
        <ImageWrapper>
          <Image
            priority={true}
            quality={100}
            src={berwaldhallen}
            alt="Affisch 70x100 cm stor i träram"
            style={{
              objectFit: "cover",
            }}
          ></Image>
        </ImageWrapper>
      </Item>
      <Item>
        <TitleOverWrapper reverse>
          <Text reverse>
            <h2>Grafisk profil</h2>
          </Text>
          <Text reverse>
            <h2 className="customer">Kollektiv Sorg</h2>
          </Text>
        </TitleOverWrapper>
        <ImageWrapper>
          <Image
            priority={true}
            quality={100}
            src={kollektivSorg}
            alt=""
            style={{
              objectFit: "cover",
            }}
          ></Image>
        </ImageWrapper>
      </Item>
      <Item>
        <TitleOverWrapper reverse>
          <Text reverse>
            <h2>Grafisk identitet</h2>
          </Text>
          <Text reverse>
            <h2 className="customer">Globalportalen</h2>
          </Text>
        </TitleOverWrapper>
        <ImageWrapper>
          <Image
            priority={true}
            quality={100}
            src={globalPortalen}
            alt=""
            style={{
              objectFit: "cover",
            }}
          ></Image>
        </ImageWrapper>
      </Item>

      <Item>
        <TitleOverWrapper reverse>
          <Text reverse>
            <h2>Grafisk identitet</h2>
          </Text>
          <Text reverse>
            <h2 className="customer">Forum Syd</h2>
          </Text>
        </TitleOverWrapper>
        <ImageWrapper>
          <Image
            priority={true}
            quality={100}
            src={forumSyd}
            alt=""
            style={{
              objectFit: "cover",
            }}
          ></Image>
        </ImageWrapper>
      </Item>
      <Item>
        <TitleOverWrapper>
          <Text>
            <h2>Grafisk identitet</h2>
          </Text>
          <Text>
            <h2 className="customer">Family First</h2>
          </Text>
        </TitleOverWrapper>
        <ImageWrapper>
          <Image
            priority={true}
            quality={100}
            src={familyFirst}
            alt=""
            style={{
              objectFit: "cover",
            }}
          ></Image>
        </ImageWrapper>
      </Item>
    </AppWrap>
  );
};

export default FullPageScroll;
