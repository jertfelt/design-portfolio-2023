import styled, { css } from "styled-components";

const Section = styled.div`
  min-height: 30vh;
  padding: 0;
  margin: 0;
  padding-bottom: 5vh;
  color: ${({ theme }) => theme.textPrimary};
  background: ${({ theme }) => theme.accent};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  h2 {
    color: ${({ theme }) => theme.textPrimary};
    text-align: left;
    padding-left: 2rem;
  }
  div {
    text-align: center;
    width: 100%;
    .wrapper {
      width: 100%;
      min-with: 50vw;
      margin: auto;
      overflow-x: hidden;
      p {
        font-size: 3rem;
        animation-name: rightToLeft;
        animation-duration: 4.5s;
        animation-timing-function: linear;
        animation-iteration-count: infinite;

        font-weight: bold;
        color: ${({ theme }) => theme.primaryText};
      }
      .left {
        animation-name: leftToright;
        animation-duration: 4.5s;
        animation-timing-function: linear;
        animation-iteration-count: infinite;

        font-weight: bold;
        color: ${({ theme }) => theme.primaryText};
      }
      .right-slow {
        animation-name: rightToLeft;
        animation-duration: 10s;
        animation-timing-function: linear;
        animation-iteration-count: infinite;
      }
    }
  }
  @keyframes rightToLeft {
    0% {
      transform: translateX(0px);
    }
    100% {
      transform: translateX(-160px);
    }
  }
  @keyframes leftToright {
    0% {
      transform: translateX(-100%);
    }
    10% {
      transform: translateX(-50%);
    }
    100% {
      transform: translateX(100%);
    }
  }
`;

const AboutTxt = () => {
  return (
    <Section>
      <div>
        <h2>Kunder i urval:</h2>
        <div class="wrapper">
          <p class="right">Teskedsorden </p>
          <p class="right-slow">Berwaldhallen</p>
          <p class="left">Globalportalen</p>
          <p class="right">Amnesty Sverige</p>
        </div>
      </div>
    </Section>
  );
};

export default AboutTxt;
