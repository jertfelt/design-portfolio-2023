import styled from "styled-components";
import { contact_data } from "./contact_data";
import { LinkExternal, LinkNavigation } from "./Buttons";

export const FooterFrontend = styled.footer`
  display: flex;
  padding: 1rem;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  line-height: 175%;
  font-family: ${({ theme }) => theme.fonts.stats.primary};
  font-size: 14px;

  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
  }

  @media (min-width: 601px) and (max-width: 700px) {
    display: flex;
    flex-direction: column;
    padding-right: 5rem;
  }
  @media (min-width: 701px) and (max-width: 899px) {
    display: flex;
    flex-direction: column;
    padding-right: 10rem;
  }

  @media (min-width: 900px) and (max-width: 1499px) {
    display: grid;
    grid-template-columns: 2fr 2fr;
    column-gap: 5rem;
  }

  @media (min-width: 1300px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    column-gap: 5rem;
  }
`;

export const BtnContainer = styled.span`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;

  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
  }

  @media (min-width: 601px) and (max-width: 700px) {
    display: flex;
    flex-direction: column;
    padding-right: 5rem;
  }
  @media (min-width: 701px) and (max-width: 899px) {
    display: flex;
    flex-direction: column;
    padding-right: 10rem;
  }

  @media (min-width: 900px) and (max-width: 1499px) {
    display: grid;
    grid-template-columns: 2fr;
    column-gap: 5rem;
    padding-top: 3rem;
    button {
      max-width: 160px;
    }
  }
  @media (min-width: 1500px) and (max-width: 1599px) {
    display: grid;
    grid-template-columns: 2fr;
    column-gap: 5rem;
    padding-top: 5rem;
    button {
      max-width: 160px;
    }
  }

  @media (min-width: 1600px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    column-gap: 5rem;
    padding-top: 3rem;
  }
  button {
    margin-bottom: 2rem;
  }
`;
const Contact = styled.div`
  padding-top: 2rem;
  @media (max-width: 800px) {
    padding-top: 0;
  }
`;
const ContactList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  li {
    line-height: 200%;
  }
`;

const HRVisible = styled.hr`
  @media (max-width: 600px) {
    display: none;
  }
  @media (min-width: 601px) {
    color: ${({ theme }) => theme.frontendnew.primaryTxt};
    margin-bottom: 2rem;
  }
`;

const FooterContentGeneral = ({ type, language }) => {
  return (
    <>
      <HRVisible></HRVisible>
      <FooterFrontend>
        <BtnContainer>
          {type === "Om mig" ? (
            <>
              {" "}
              <LinkNavigation
                href="/programming/cv"
                linktxt="CV"
              ></LinkNavigation>
              <LinkNavigation
                href="/programming/cases"
                linktxt={language === "sv" ? "Projekt" : "Cases"}
              ></LinkNavigation>
            </>
          ) : type === "CV" ? (
            <>
              {" "}
              <LinkNavigation
                href="/programming/about"
                linktxt={language === "sv" ? "Om mig" : "About me"}
              ></LinkNavigation>
              <LinkNavigation
                href="/programming/cases"
                linktxt={language === "sv" ? "Projekt" : "Cases"}
              ></LinkNavigation>
              <LinkExternal
                linkurl="https://www.linkedin.com/in/tovajertfelt/"
                linktxt="LinkedIn"
              ></LinkExternal>
            </>
          ) : (
            <>
              <LinkNavigation
                href="/programming/about"
                linktxt={language === "sv" ? "Om mig" : "About me"}
              ></LinkNavigation>
              <LinkNavigation
                href="/programming/cv"
                linktxt="CV"
              ></LinkNavigation>
              <LinkExternal
                linkurl="https://www.linkedin.com/in/tovajertfelt/"
                linktxt="LinkedIn"
              ></LinkExternal>
            </>
          )}
        </BtnContainer>
        <Contact>
          {contact_data.map((c, i) => (
            <div key={i}>
              <h3>{language === "sv" ? c.sv.title : c.eng.title}</h3>
              <ContactList>
                {c.list.map((i, ind) => (
                  <li key={ind}>
                    <strong>
                      {language === "en" && i.label_en ? i.label_en : i.label}:
                    </strong>{" "}
                    {i.value}
                  </li>
                ))}
              </ContactList>
              <p>{language === "sv" ? c.sv.about : c.eng.about}</p>
            </div>
          ))}
        </Contact>
      </FooterFrontend>
    </>
  );
};
export default FooterContentGeneral;
