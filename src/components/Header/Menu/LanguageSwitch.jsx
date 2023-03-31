import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";


const Span = styled.div`


`

const Column = styled.div`
color:${({ theme }) => theme.textSecondary};
display:flex;
with:100%;
flex-direction: column;
gap:1rem;
align-items:center;
font-size: 1rem;
line-height:1rem;
a{
font-size: 1rem;
line-height:1rem;
font-family: Merriweather Sans;
font-weight:normal;
}
font-family: Merriweather Sans;

`

const Current = styled.div`
color:${({ theme }) => theme.accent};
`

const FlagAndName = styled.div`
`
const Star = styled.p`
color:${({ theme }) => theme.accent};
margin-bottom:16px;
`

export default function LocaleSwitcher({open, setOpen}) {
  const router = useRouter();
  const { locales, locale: activeLocale } = router;
  const otherLocales = locales?.filter(
    (locale) => locale !== activeLocale && locale !== "default"
  );
  console.log(activeLocale, "ACTIVE")
  console.log(otherLocales, "OTHER?")

  return (
    <div>
      {otherLocales?.map((locale) => {
        const { pathname, query, asPath } = router;
        return (
          <Column key={"locale-" + locale}>
      
            <Current>
              {activeLocale === "en" ? <>
              Language: English
              </> : <>Språk: Svenska</>}
              
            </Current>
            <div>
            <Link href={{pathname,query}} 
            as={asPath} 
            locale={locale}
            onClick={() => setOpen(!open)}>
              <Span>
                {locale === "en" ? 
                <FlagAndName>
                Change to english
                </FlagAndName>
                : locale === "sv" ? <FlagAndName>
                Byt till svenska
                </FlagAndName> : null}
              </Span>
            </Link>
            </div>
            <Star>&#9733;</Star>
          </Column>
        );
      })}
    </div>
  );
}