import Link from "next/link";
import styled from "styled-components";
import { Btn } from "./ArtPageBtns";

const FooterArt = styled.footer`
  background-color: ${({ theme }) => theme.art.background};
  color: ${({ theme }) => theme.art.primaryTxt};

  min-height: 10vh;
  margin: 0;
  padding: 2rem;

  font-size: 28px;
  @media (max-width: 819px) {
    font-size: 18px;
  }
  hr {
    color: ${({ theme }) => theme.art.primaryTxt};
  }
  a {
    color: ${({ theme }) => theme.art.primaryTxt};
  }
`;

const Buttons = styled.div`
  a {
    font-family: Arya;
    color: ${({ theme }) => theme.art.primaryTxt};
  }
  button {
    color: ${({ theme }) => theme.art.primaryTxt};
  }
  @media (max-width: 819px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 100vw;
  }
  @media (min-width: 820px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`;

const ArtPageFooter = ({ page, link1, link2, lang }) => {
  console.log(lang, "LANG");
  return (
    <FooterArt>
      <Buttons>
        <div></div>
        <Btn>
          {page === "exhibitions" ? (
            <>
              <Link href={"/art"}>{lang === "en" ? "Back" : "Tillbaka"}</Link>
            </>
          ) : page === "start" ? (
            <Link href={"/art/exhibitions"}>{link1 ? link1 : ""}</Link>
          ) : (
            <></>
          )}
        </Btn>
      </Buttons>
      <hr></hr>
    </FooterArt>
  );
};
export default ArtPageFooter;
