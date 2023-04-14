import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";


const Span = styled.div`
font-size:14px;
font-weight:bold;
padding:10px;
text-align:center;

&:hover{
  background: ${({ theme }) => theme.accentTwo};
  color:${({ theme }) => theme.textSecondary};
  border-radius:9px;
}
`

const Column = styled.div`
color:${({ theme }) => theme.textSecondary};
display:flex;
with:100%;
flex-direction: column;
gap:4px;
align-items:center;
font-size: 1.5rem;
line-height:1rem;

a{
font-size: 1rem;
line-height:1rem;
font-family: JetBrains Mono;
font-weight:normal;

&:hover{
  color:${({ theme }) => theme.accent};
}
}
`

const Current = styled.div`
color:${({ theme }) => theme.accent};
padding-top:2rem;
font-size:.9rem;
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


  return (
    <div>
      {otherLocales?.map((locale) => {
        const { pathname, query, asPath } = router;
        return (
          <Column key={"locale-" + locale}>
          <Star>&#9733;</Star>
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
                Change to English
                </FlagAndName>
                : locale === "sv" ? <FlagAndName>
                Byt till Svenska
                </FlagAndName> : null}
              </Span>
            </Link>
            </div>
           
          </Column>
        );
      })}
    </div>
  );
}