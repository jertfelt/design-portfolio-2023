import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";

const Span = styled.span`
padding-top:2rem;
display:flex;
flex-direction:row-reverse;
align-items:center;
img{
  border-radius:29px;
  width:30px;
  height:30px;
}`

export default function LocaleSwitcher({open, setOpen}) {
  const router = useRouter();
  const { locales, locale: activeLocale } = router;
  const otherLocales = locales?.filter(
    (locale) => locale !== activeLocale && locale !== "default"
  );

  return (
    <span className="">
      {otherLocales?.map((locale) => {
        const { pathname, query, asPath } = router;
        return (
          <span key={"locale-" + locale}>
            <Link href={{ pathname, query }} as={asPath} locale={locale}
            onClick={() => setOpen(!open)}>
              <Span>
                {locale === "en" ? <>English <img src="https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Flag_of_the_United_Kingdom.svg/800px-Flag_of_the_United_Kingdom.svg.png" alt="English"/></> : locale === "sv" ? <>Svenska <img src="https://upload.wikimedia.org/wikipedia/en/thumb/4/4c/Flag_of_Sweden.svg/1200px-Flag_of_Sweden.svg.png" alt="Swedish"></img></> : null}
              </Span>
            </Link>
          </span>
        );
      })}
    </span>
  );
}