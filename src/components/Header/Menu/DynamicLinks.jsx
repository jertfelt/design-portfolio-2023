import styled from "styled-components";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "@component/context/AppContext";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";

const Others = styled.div`
  margin-top: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 9px;
  i {
    color: ${({ theme }) => theme.accent};
  }
`;

export const data = [
  { value: "programming", url: "/programming", text: "Frontend" },
  { value: "art", url: "/art", text: "Konst" },
  { value: "design", url: "/design", text: "Design" },
  { value: "illustration", url: "/illustration", text: "Illustration" },
  { value: "", url: "/", text: "Startsida" },
];

export const DynamicLinkToOtherPages = ({ setOpen, open }) => {
  const { selectedPage, setSelectedPage } = useContext(AppContext);
  const router = useRouter();
  const [selected, setSelected] = useState(selectedPage.value);
  const { t } = useTranslation("");

  useEffect(() => {
    let lang = router.locale == "sv" ? "sv" : "en";
    document.querySelector("html").setAttribute("lang", lang);
  }, [router.locale]);

  const selectAndClose = (item) => {
    setSelectedPage({ value: item.value, url: item.url });
    setOpen(!open);
  };

  useEffect(() => {
    console.log(router, "test");
    console.log(router.pathname, "test2");
    if (router.pathname === "/contact") {
      setSelected("/contact");
    } else {
      setSelected(selectedPage.value);
    }
  }, [router, selectedPage.value]);

  return (
    <Others>
      {data &&
        data.map((item, i) => (
          <div key={i}>
            {item.value === selected ? (
              <Link
                href={item.url}
                key={`${item.url}${i}`}
                onClick={() => selectAndClose(item)}
              >
                <i>
                  {item.text === "Konst" ? (
                    <>{t("menu.Choice1")}</>
                  ) : item.text === "Startsida" ? (
                    <>{t("menu.Startsida")}</>
                  ) : (
                    item.text
                  )}
                </i>
              </Link>
            ) : (
              <Link
                href={item.url}
                key={`${item.url}_${i}`}
                onClick={() => selectAndClose(item)}
              >
                {item.text === "Konst" ? (
                  <>{t("menu.Choice1")}</>
                ) : item.text === "Startsida" ? (
                  <>{t("menu.Startsida")}</>
                ) : (
                  item.text
                )}
              </Link>
            )}
          </div>
        ))}
    </Others>
  );
};

// data.filter(item => item.value !== selectedPage.value)
