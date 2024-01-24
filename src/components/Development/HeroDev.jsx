import bild_9 from "../../../public/frontend/bild_9.svg";
import Image from "next/image";
import styled, { useTheme } from "styled-components";

const Hero = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 90vw;
  color: ${({ theme }) => theme.frontendnew.txtprimary};
  h1,
  h2,
  h3 {
    line-height: 150%;
    font-family: ${({ theme }) => theme.fonts.frontendheader.primary};
    padding-left: 1rem;
    padding-top: 0;
    margin-top: 0;
  }

  .column-reverse {
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    img {
      max-width: 90vw;
    }
  }
  h1 {
    font-size: ${({ theme }) => theme.mobile.frontend.h1};
  }
  h2 {
    font-size: ${({ theme }) => theme.mobile.frontend.h2};
    color: ${({ theme }) => theme.frontendnew.txtcolorheader2};
    margin-top: -1rem;
    strong {
      color: ${({ theme }) => theme.frontendnew.txtcolorheader3};
    }
  }
  h3 {
    font-size: ${({ theme }) => theme.mobile.frontend.h3};
    font-family: Arya;
    text-align: left;
    padding-right: 2rem;
    font-weight: 400;
    line-height: 150%;
  }
`;

const HeroDev = () => {
  return (
    <Hero>
      <div className="column-reverse">
        <h1>Jag är Tova Jertfelt</h1>
        <Image src={bild_9} alt="Bild på Tova Jertfelt"></Image>
      </div>
      <h2>
        En kreativ &{" "}
        <strong>
          multidisciplinär <br />
        </strong>
        frontendare
      </h2>
      <h3>
        Med flera års erfarenhet av visuell kommunikation, projektledning och
        grafisk design. <br></br>
        <strong>
          Jag älskar att jag i mitt arbetsliv kan få kombinera mina tre styrkor:
          problemlösning, kreativitet, och osläckta nyfikenhet.
        </strong>
      </h3>
    </Hero>
  );
};
export default HeroDev;
