import { ColumnMenu } from "./Start";
import Link from "next/link";
import {
  programmingLinksen,
  programmingLinksv,
} from "@component/components/Programming/programmingLinks";
import styled from "styled-components";
import { DynamicLinkToOtherPages } from "./DynamicLinks";
import { useRouter } from "next/router";

const Links = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const FrontendMenu = ({ setOpen, open }) => {
  const router = useRouter();
  const { locale: activeLocale } = router;
  const language = activeLocale;
  const linksProgramming =
    language === "en" ? programmingLinksen : programmingLinksv;
  return (
    <ColumnMenu>
      <Links>
        {linksProgramming.map((l, i) => (
          <Link
            key={i}
            onClick={() => setOpen(!open)}
            href={"/programming/" + l.href}
          >
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
export default FrontendMenu;
