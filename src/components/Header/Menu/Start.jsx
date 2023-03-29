import Link from "next/link";
import styled from "styled-components";
import { DynamicLinkToOtherPages } from "./DynamicLinks";

export const ColumnMenu = styled.div`
display:flex;
flex-direction:column;
justify-content: center;
align-items:center;
p{
  margin-top:16px;
  color:${({ theme }) => theme.accent};
}
`
const Start = () => {
  return ( 
  <ColumnMenu>
    <DynamicLinkToOtherPages/>
    <p>&#9733;</p>
  </ColumnMenu> );
}
 
export default Start;