import Link from "next/link";
import styled from "styled-components";
export const ColumnMenu = styled.div`
display:flex;
flex-direction:column;
justify-content: center;
align-items:center;
`
const Start = () => {
  return ( 
  <ColumnMenu>
    <Link href={{pathname: "/frontend", query:{key:"frontend"}}}>Frontend</Link>
    <Link href={{pathname: "/illustration", query:{key:"illustration"}}}>Illustration</Link>
    <Link href={{pathname: "/art", query:{key:"art"}}}>Konst</Link>
    <Link href={{pathname: "/design", query:{key:"design"}}}>Design</Link>
  </ColumnMenu> );
}
 
export default Start;