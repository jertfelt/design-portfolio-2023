import styled from "styled-components";

export const HomepageComponent = styled.section`
  max-width: 100vw;
  width: 100vw;
  padding-top: 2rem;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  color: ${({ theme }) => theme.textPrimary};
  @media (max-width: 700px) {
    margin-top: -1rem;
    max-width: 100%;
    padding-top: 5rem;
  }
  @media (max-width: 500px) {
    margin: 0;
    padding: 0;
    max-width: 100%;
    padding: 1rem;
    padding-top: 5rem;
  }
`;
export const TextContainerHomePage = styled.div`
  padding: 2rem;
  padding-left: 5rem;
  h1 {
    font-size: 4.5rem;
    line-height: 4rem;
    color: ${({ theme }) => theme.accentTwo};
  }
  h2 {
    width: 100%;
    font-size: 2rem;
    line-height: 2rem;
  }
  @media (max-width: 500px) {
    margin: 0;
    padding: 0.5rem;
    max-width: 100%;
    h1 {
      font-size: 2rem;
      line-height: 2.5rem;
    }
    h2 {
      font-size: 1.5rem;
    }
  }
`;

export const ThreeColumnGridHomePage = styled.div`
  margin: 0;
  display: grid;
  @media (max-width: 500px) {
    grid-template-columns: repeat(1, 1fr);
  }
  @media (min-width: 700px) {
    padding-top: 5rem;
    grid-template-columns: repeat(2, 1fr);
    row-gap: 1rem;
    grid-template-rows: 1fr;
  }
`;

export const ColumnHomePage = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  @media (min-width: 1050px) {
    gap: 30vh;
  }
  article {
    h3 {
      font-size: 1.3rem;
      line-height: 1.8rem;
      color: ${({ theme }) => theme.start.accent};
      padding-bottom: 0.5rem;
    }
    p {
      line-height: 1.5rem;
      font-size: 1rem;
      @media (min-width: 1050px) {
        max-width: 550px;
      }
      word-spacing: 3px;
    }
  }
  .btn-container {
    display: flex;
    gap: 16px;
    justify-content: center;
    padding: 4rem;
    align-items: center;
  }
`;
export const FooterHomePage = styled.footer`
  background: ${({ theme }) => theme.body};

  margin: 0;
  margin-left: -2rem;
  margin-right: -2rem;
  margin-bottom: -2rem;

  hr {
    color: ${({ theme }) => theme.accent};
  }
`;
