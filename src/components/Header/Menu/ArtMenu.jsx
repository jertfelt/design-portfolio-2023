import { AppContext } from "@component/context/AppContext";
import Link from "next/link";
import { ColumnMenu } from "./Start";
import styled from "styled-components";
import { useContext } from "react";
import { DynamicLinkToOtherPages } from "./DynamicLinks";
import { useRouter } from "next/router";

const Links = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ArtMenu = ({ setOpen, open }) => {
  const router = useRouter();
  const { locale: activeLocale } = router;
  const language = activeLocale;
  const linksEn = [
    { href: "exhibitions", lable: "Exhibitions" },
    { href: "", lable: "About" },
  ];
  const linksSv = [
    { href: "exhibitions", lable: "Utställningar" },
    { href: "", lable: "Om mig" },
  ];
  const linksArt = language === "en" ? linksEn : linksSv;
  return (
    <ColumnMenu>
      <Links>
        {linksArt.map((l, i) => (
          <Link key={i} onClick={() => setOpen(!open)} href={"/art/" + l.href}>
            {l.lable}
          </Link>
        ))}

        <br />
      </Links>
      <p>&#9733;</p>
      <DynamicLinkToOtherPages setOpen={setOpen} open={open} />
      <p>&#9733;</p>
    </ColumnMenu>
  );
};

export default ArtMenu;
