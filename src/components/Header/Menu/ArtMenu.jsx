import { AppContext } from "@component/context/AppContext";
import { ColumnMenu } from "./Start";
import Link from "next/link";
import {useContext } from "react";
import styled from "styled-components";
import { DynamicLinkToOtherPages } from "./DynamicLinks";

const Links = styled.div`
`

const ArtMenu = ({setOpen, open}) => {
  const {setSelectedPage} =useContext(AppContext)
  return ( 
  <ColumnMenu>
  <Links>
 
  </Links>
      <p>&#9733;</p>
  <DynamicLinkToOtherPages
  setOpen={setOpen}
  open={open}/>
    <p>&#9733;</p>
  </ColumnMenu> );
}
 
export default ArtMenu;
