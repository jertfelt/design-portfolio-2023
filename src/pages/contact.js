import styled from "styled-components";
import { contacts } from "@component/data/contactdetails";
import { useTranslation } from "next-i18next";
import HeadIndex, { HeadHome } from "@component/components/Head";
import withTranslation, {
  getStaticProps,
} from "@component/components/utils/getStaticProps";

const Section = styled.section`
  max-width: 100vw;
  width: 100vw;
  padding: 5rem;
  padding-top: 10rem;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  color: ${({ theme }) => theme.textPrimary};
  @media (max-width: 700px) {
    padding: 2rem;
  }
  h1 {
    font-size: 40px;
    color: ${({ theme }) => theme.accentTwo};
    @media (max-width: 800px) {
      font-size: 30px;
      padding-top: 20vh;
    }
  }
  div {
    display: flex;
    flex-direction: column;

    gap: 16px;
    button {
      border: none;
      padding: 10px;

      color: ${({ theme }) => theme.accent};
      background: ${({ theme }) => theme.contrast};

      &:hover {
        color: ${({ theme }) => theme.textSecondary};
        background: ${({ theme }) => theme.accent};
      }
    }
    p {
      line-height: 175%;
      @media (max-width: 800px) {
        line-height: 0.5rem;
      }
    }
  }
`;

const Contact = () => {
  const { t } = useTranslation();

  return (
    <>
      <HeadIndex />
      <Section>
        <h1>{t("contact.h1")}</h1>
        <div>
          {contacts &&
            contacts.map((item, index) => (
              <div key={index}>
                {item.type === "phone:" ? (
                  <p>
                    {t("contact.phone")} {item.data}
                  </p>
                ) : item.type === "email:" ? (
                  <a href={`mailto:${item.data}`}>{item.data}</a>
                ) : (
                  <a
                    target="_blank"
                    href={
                      item.type === "linkedin"
                        ? `https://www.linkedin.com/in/${item.data}`
                        : `https://www.instagram.com/${item.data}`
                    }
                  >
                    <button>{item.type.toUpperCase()}</button>
                  </a>
                )}
              </div>
            ))}
        </div>
      </Section>
    </>
  );
};
export { getStaticProps };
export default withTranslation(Contact);
