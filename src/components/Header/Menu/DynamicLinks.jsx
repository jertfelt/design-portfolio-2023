import styled from "styled-components";
import {useContext, useEffect } from "react";
import { AppContext } from "@component/context/AppContext";
import Link from "next/link";
import { useTranslation } from 'next-i18next';
import { useRouter } from "next/router";

const Others = styled.div`
margin-top:16px;
display:flex;
flex-direction:column;
align-items:center;
border-radius:9px;
`

export const data = [
  {value:"frontend", url:"/frontend", text:"Frontend"},
  {value:"art", url:"/art", text:"Konst"},
  {value:"design", url:"/design", text:"Design"},
  {value:"illustration", url:"/illustration", text:"Illustration"},
  {value:"", url:"/", text:"Startsida"}]

export const DynamicLinkToOtherPages = () => {
  const {selectedPage, setSelectedPage} = useContext(AppContext)
  const router = useRouter()
  const { t } = useTranslation("");

useEffect(() => {
  let lang = router.locale == "sv" ? "sv" : "en";
  document.querySelector("html").setAttribute("lang", lang);
}, [router.locale]);

  return(
    <Others>
{data && data.map((item,i) => (<>
{item.value === selectedPage.value ?
  <Link 
href={item.url} 
key={i}
onClick={() => setSelectedPage({value:item.value, url: item.url})}><i>{item.text === "Konst" ? <>Konst</>: item.text}</i></Link>: <Link 
href={item.url} 
key={i}
onClick={() => setSelectedPage({value:item.value, url: item.url})}>{item.text === "Konst" ? <>Konst</>: item.text}</Link>}
</>
)

)}
    </Others>
  )
  
}

// data.filter(item => item.value !== selectedPage.value)