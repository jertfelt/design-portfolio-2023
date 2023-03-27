
import { ColumnMenu } from "./Start";
import Link from "next/link";
import styled from "styled-components";
import { DynamicLinkToOtherPages } from "./DynamicLinks";



const Links = styled.div`
`



const IllMenu = () => {
return ( 
<ColumnMenu>
<Links>
</Links>
    <p>&#9733;</p>
<DynamicLinkToOtherPages/>
  <p>&#9733;</p>
</ColumnMenu>  );
}
 
export default IllMenu;

