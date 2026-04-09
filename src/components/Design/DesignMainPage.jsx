import styled, { css } from "styled-components";
import ImgMenu from "./ImageMenu";
import { useTranslation } from "next-i18next";
import { useState } from "react";
import AboutTxt from "./AboutTxt";
import WorkInProgress from "../WorkInProgress";

export const Section = styled.div`
  min-height: 120vh;
  padding: 0;
  margin: 0;
  color: ${({ theme }) => theme.primaryText};
  background: ${({ theme }) => theme.body};
`;

const Header = styled.div`
  min-height: 100%;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 2;
  background: ${({ theme }) => theme.accentTwo};
`;

const HeaderSquare = styled.div`
  width: 100%;
  height: 100%;
  min-height: 40vh;
  width: 100vw;
  background-image:
    linear-gradient(${({ theme }) => theme.accent} 1px, transparent 1px),
    linear-gradient(
      to right,
      ${({ theme }) => theme.accent} 1px,
      transparent 1px
    );
  background-position: 0% 50%;
  background-size: 30px 30px;
  background-repeat: repeat;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  &:hover {
    animation: gradient 55s ease infinite;

    @keyframes gradient {
      0% {
        background-position: 0% 50%;
      }
      50% {
        background-position: 100% 50%;
      }
      100% {
        background-position: 0% 50%;
      }
    }
  }
`;

const FilledSquare = styled.div`
  width: 100%;
  height: 100%;
  height: 50%;
  width: 50vw;
  background-color: ${({ theme }) => theme.accent};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: 0.3s;
  padding: 2rem;
  color: ${({ theme }) => theme.textPrimary};

  h1 {
    font-size: 2rem;
  }
  p {
    text-align: center;
    line-height: 1.5rem;
  }
`;
export const PinkBg = styled.div`
  background-image: linear-gradient(
    ${({ theme }) => theme.startbody},
    ${({ theme }) => theme.accentTwo}
  );
  height: 3rem;
  width: 100%;
  ${(props) =>
    props.reverse &&
    css`
      background-image: linear-gradient(
        ${({ theme }) => theme.accentTwo},
        ${({ theme }) => theme.startbody}
      );
    `}
  ${(props) =>
    props.nogradient &&
    css`
      background: ${({ theme }) => theme.accent};
      height: 1rem;
    `}
`;

const DesignMainPage = () => {
  const { t } = useTranslation();

  return (
    <Section>
      <PinkBg nogradient />
      <Header>
        <HeaderSquare>
          <FilledSquare>
            <h1>Design for humanity</h1>
            <h2>
              Sedan 2013 formger jag rapporter, grafiska identiteter och
              manualer för orginisationer. Jag vill fokusera på tillgänglighet,
              social hållbarhet, och viktiga frågor när jag formger.
            </h2>
            <p>
              Har du funderingar eller förslag på samarbeten? <br />
              Hör av dig på min mail tovajertfelt@gmail.com
            </p>
          </FilledSquare>
        </HeaderSquare>
      </Header>
      <AboutTxt />
      <ImgMenu />
    </Section>
  );
};

export default DesignMainPage;
