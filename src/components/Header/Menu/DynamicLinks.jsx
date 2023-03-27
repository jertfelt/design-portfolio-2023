import styled from "styled-components";
import {useContext } from "react";
import { AppContext } from "@component/context/AppContext";
import Link from "next/link";

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
  const {selectedPage, setSelectedPage} =useContext(AppContext)

  return(
    <Others>
{data && data.filter(item => item.value !== selectedPage.value).map((item,i) => (
<Link href={item.url} 
key={i}
onClick={() => setSelectedPage({value:item.value, url: item.url})}>{item.text}</Link>
)

)}
    </Others>
  )
  
}