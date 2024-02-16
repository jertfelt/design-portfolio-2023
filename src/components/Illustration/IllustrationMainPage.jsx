import styled from "styled-components";
import WorkInProgress from "../WorkInProgress";

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
`;

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
  }
  p {
    line-height: 175%;
    max-width: 70vw;
  }
`;

const FirstRow = styled.div`
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

  p {
    height: 300px;
    max-height: 300px;
    background: pink;
  }
`;
const SecondRow = styled.div`
  width: 100%;
  background: teal;
  height: 500px;
`;
const ThirdRow = styled.div`
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
  background: pink;
  @media (max-width: 900px) {
    margin-top: 1rem;
  }
`;

const IlluMainPage = () => {
  return (
    <Section>
      {/* <WorkInProgress></WorkInProgress> */}
      <Content>
        <p>Tova Jertfelt Illustration</p>
        <FirstRow>
          <p>hej</p>
          <p>test</p>
          <p>kollakolla</p>
          <p>bajs</p>
        </FirstRow>
        <SecondRow>hej</SecondRow>
        <ThirdRow>
          <p>banana</p>
          <p>coconut</p>
        </ThirdRow>
        <FourthRow>
          <FirstColumn>
            <article>HEJHEJ</article>
            <article>OSKAR</article>
          </FirstColumn>
          <SecondColumn>
            <article>Du är helt okej</article>
          </SecondColumn>
        </FourthRow>
        <p className="alignleft">2013- 2024</p>
      </Content>
      <AboutIll>
        <h1>Illustration</h1>
        <p>
          Illustrerat bland annat åt OmVärlden, Plan Sverige, RFSU, Ottar, LSU,
          Frihet.se, Natur & Kultur. Gör tidningsillustrationer eller friare
          illustrationer, i både tryckt och digitalt format.
        </p>
      </AboutIll>
    </Section>
  );
};

export default IlluMainPage;
