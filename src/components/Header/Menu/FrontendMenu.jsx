import { AppContext } from "@component/context/AppContext";
import { ColumnMenu } from "./Start";
import Link from "next/link";

import styled from "styled-components";
import { DynamicLinkToOtherPages } from "./DynamicLinks";

const Button = styled.button`
background:${({theme}) => theme.startbody};
color:${({theme}) => theme.white};

&:hover{
  transform: rotate(5deg);
}
padding:10px;
border:none; 
font-size: 1.5rem;
  line-height:2rem;
  font-weight: bold;
  font-family: JetBrains Mono;
  cursor:pointer;
`

const Links = styled.div`
display:flex;
flex-direction:column;
align-items:center;
`
const FrontendMenu = () => {
  return ( 
  <ColumnMenu>
  <Links>
  <Link href="/frontend/cv"><Button>CV</Button></Link><br/>

  </Links>
      <p>&#9733;</p>
 
    <DynamicLinkToOtherPages/>
 
    <p>&#9733;</p>
  </ColumnMenu> );
}
export default FrontendMenu;