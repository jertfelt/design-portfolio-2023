import { useRouter } from "next/router";
import styled from "styled-components";
import { bool } from "prop-types";
import Link from "next/link";
import { useContext, useEffect, useRef, useState } from "react";
import ArtMenu from "./ArtMenu";
import FrontendMenu from "./FrontendMenu";
import DesignMenu from "./DesignMenu";
import IllMenu from "./IllMenu";
import Start from "./Start";
import { AppContext } from "@component/context/AppContext";
import LocaleSwitcher from "./LanguageSwitch";
import { useTranslation } from "next-i18next";

const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.contrast};
  height: 100vh;
  width: 30vh;
  text-align: left;
  padding: 2rem;
  position: absolute;
  top: -3rem;
  right: 5rem;
  transition: transform 0.3s ease-in-out;
  z-index: 10;
  filter: drop-shadow(-10px 0px 10px ${({ theme }) => theme.body});
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};
  text-align: center;
  @media (max-width: 800px) {
    width: 100%;
    width: 100vw;
    margin: 0;
    padding: 0;
    height: 100vh;
    font-size: 2rem;
    right: -2rem;
    filter: drop-shadow(-1px 0px 1px ${({ theme }) => theme.contrast});
  }

  @media (min-width: 1050px) {
    max-width: 25vh;
  }

  a {
    font-size: 1.5rem;
    line-height: 2rem;
    font-weight: bold;
    color: ${({ theme }) => theme.textSecondary};
    text-decoration: none;
    transition: color 0.3s linear;

    &:hover {
      color: ${({ theme }) => theme.accent};
    }
    i {
      color: ${({ theme }) => theme.accent};
    }
  }

  .mobileOnly {
    position: absolute;
    top: 40px;
    font-weight: bold;
    right: 1rem;
    font-size: 1rem;
    border: none;
    border-radius: 19px;
    padding: 10px;
    cursor: pointer;
    color: ${({ theme }) => theme.accent};
    background: ${({ theme }) => theme.contrast};
    &:hover {
      background: ${({ theme }) => theme.accentTwo};
      color: ${({ theme }) => theme.textSecondary};
    }
    @media (min-width: 900px) {
      display: none;
    }
  }
`;

const Content = styled.div`
  padding-top: 10vh;
`;

const DropDownMenu = ({ open, setOpen }) => {
  const ref = useRef();
  const router = useRouter();
  const { key } = router.query;
  const { selectedPage } = useContext(AppContext);
  const [selected, setSelected] = useState(selectedPage.value);
  const { t } = useTranslation();

  useEffect(() => {
    let lang = router.locale == "sv" ? "sv" : "en";
    document.querySelector("html").setAttribute("lang", lang);
  }, [router.locale]);

  useEffect(() => {
    const handleEsc = (event) => {
      if (event.keyCode === 27) {
        if (open && ref.current) {
          setOpen(!open);
        }
      }
    };
    document.addEventListener("keydown", handleEsc);
    return () => {
      document.removeEventListener("keydown", handleEsc);
    };
  }, [open]);

  useEffect(() => {
    if (router.pathname === "/contact") {
      setSelected("/contact");
    } else {
      setSelected(selectedPage.value);
    }
  }, [router, selectedPage.value]);

  const frontendOptions =
    selectedPage.value === "programming" ||
    selectedPage.value === "programming/about" ||
    selectedPage.value === "programming/cases" ||
    selectedPage.value === "programming/cv";

  const Contact = () => {
    return (
      <Link href="/contact" className="contact" onClick={() => setOpen(!open)}>
        {selected === "/contact" ? (
          <i> &#9993; {t("menu.Kontakt")}</i>
        ) : (
          <>&#9993; {t("menu.Kontakt")}</>
        )}
      </Link>
    );
  };

  return (
    <StyledMenu open={open} ref={ref}>
      <button className="mobileOnly" onClick={() => setOpen(!open)}>
        X
      </button>
      <Content>
        {selectedPage && selectedPage.value === "" && (
          <>
            <Start setOpen={setOpen} open={open} />
          </>
        )}
        {selectedPage && frontendOptions && (
          <FrontendMenu setOpen={setOpen} open={open} />
        )}
        {selectedPage && selectedPage.value === "art" && (
          <ArtMenu setOpen={setOpen} open={open} />
        )}
        {selectedPage && selectedPage.value === "design" && (
          <DesignMenu setOpen={setOpen} open={open} />
        )}
        {selectedPage && selectedPage.value === "illustration" && <IllMenu />}
        <Contact />
        <LocaleSwitcher setOpen={setOpen} open={open} />
      </Content>
    </StyledMenu>
  );
};
DropDownMenu.propTypes = {
  open: bool.isRequired,
};
export default DropDownMenu;
