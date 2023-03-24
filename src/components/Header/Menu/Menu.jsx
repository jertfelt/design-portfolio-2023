import { useRouter } from 'next/router';
import styled from 'styled-components';
import { bool } from 'prop-types';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import ArtMenu from './ArtMenu';
import FrontendMenu from './FrontendMenu';
import DesignMenu from './DesignMenu';
import IllMenu from './IllMenu';


const StyledMenu = styled.nav`
display: flex;
flex-direction: column;
justify-content: center;
align-items:center;
background: ${({ theme }) => theme.contrast};
height: 120vh;
width:30vh;
text-align: left;
padding: 2rem;
position: absolute;
top:-3rem;
right:5rem;
transition: transform 0.3s ease-in-out;
z-index:10;
filter: drop-shadow(-10px 0px 10px ${({ theme }) => theme.black});
transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
// // @media (max-width: ${({ theme }) => theme.mobile}) {
// //   width: 100%;
// // }

a {
  font-size: 1.8rem;
 
  line-height:2.4rem;
  font-weight: bold;
  color: ${({ theme }) => theme.textSecondary};
  text-decoration: none;
  transition: color 0.3s linear;
  
  // // @media (max-width: ${({ theme }) => theme.mobile}) {
  // //   font-size: 1.5rem;
  // //   text-align: center;
  // // }

  &:hover {
    color: ${({ theme }) => theme.body};
  }
}
`;
const DropDownMenu = ({open, setOpen}) => {
const ref= useRef()
const router = useRouter()
const {key} = router.query;

console.log(key, "KEU", {key}, "KEY")

  useEffect(() => {
    const handleEsc = (event) => {
      if (event.keyCode === 27) {
        if (open && ref.current){
          setOpen(!open)
        }
     }
   };
   document.addEventListener("keydown", handleEsc)
   return() => {
    document.removeEventListener("keydown", handleEsc)
   }
  },[open])

  return ( 
    <StyledMenu open={open} ref={ref}>
      <Link href="/about">
        Om mig
      </Link>
   <ArtMenu/> 
   <FrontendMenu/>
   <DesignMenu/>
   <IllMenu/>
      <Link href="/contact">
        Kontakt
      </Link>
    </StyledMenu>
);
}
DropDownMenu.propTypes = {
  open: bool.isRequired,
}
export default DropDownMenu;