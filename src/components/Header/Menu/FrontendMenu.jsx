import { AppContext } from "@component/context/AppContext";
import { ColumnMenu } from "./Start";
import Link from "next/link";
import {useContext } from "react";
import styled from "styled-components";
import { DynamicLinkToOtherPages } from "./DynamicLinks";

const Button = styled.button`
background:transparent;
border:none; 
font-size: 1.5rem;
  line-height:2rem;
  font-weight: bold;
  font-family: JetBrains Mono;
  cursor:pointer;
`

const Links = styled.div`
`
const FrontendMenu = () => {
  return ( 
  <ColumnMenu>
  <Links>
  <Link href="/frontend/cv">CV</Link>
  </Links>
      <p>&#9733;</p>
 
    <DynamicLinkToOtherPages/>
 
    <p>&#9733;</p>
  </ColumnMenu> );
}
export default FrontendMenu;