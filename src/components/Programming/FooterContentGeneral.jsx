import styled from "styled-components";
import Link from "next/link";
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
`;

export const BtnContainer = styled.span`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  button {
    margin-bottom: 0.5rem;
  }
`;
const Contact = styled.div`
  padding-top: 2rem;
`;
const ContactList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  li {
    line-height: 200%;
  }
`;

const FooterContentGeneral = ({ type, language }) => {
  return (
    <FooterFrontend>
      <BtnContainer>
        {type === "Om mig" ? (
          <></>
        ) : type === "CV" ? (
          <>
            {" "}
            <LinkNavigation
              href="/programming/about-me"
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
              href="/programming/about-me"
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
  );
};
export default FooterContentGeneral;
