import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/logo512.png"
import Toggle from "../stylings/Toggler";
import styled from "styled-components";
import Burger from "./Burger/Burger";
import DropDownMenu from "./Menu/Menu";
import { useOnClickOutside } from "../hooks/useOnclickOutside";

import {useState, useRef } from 'react';

const HeaderComponent = styled.header`
left: 0;
  margin-left: 0;
  width: 100%;
  z-index: 50;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  position: fixed;
  padding:2rem;
  top:0;
`
const NavComponent = styled.nav`
display: flex;
  align-items: flex-end;
  flex-direction: row;
  justify-content: space-around;
  padding-bottom:3rem;
  img{
    position: fixed;
    left:10%;
  }
  span{
    display: flex;
    gap:2rem;
    align-items: flex-end;
    flex-direction: row;
    position: fixed;
    top:2rem;
    right:2rem;
  }
  color:${({ theme }) => theme.textPrimary};
 
`

const LogoNav = styled.div`
img{
  border-radius:50%;
  &:hover{
    border-radius:${({ theme }) => theme.borderradius.third};
  }
  filter: drop-shadow(0px 3px 2px ${({ theme }) => theme.contrast})
}
` 

const Header = ({theme, toggleTheme}) => {
  const [open, setOpen] = useState(false);
  const node = useRef();
  useOnClickOutside(node, () => setOpen(false));
  return (  

  <HeaderComponent>
    <NavComponent>
    <LogoNav>
      <Link href="/">
      <Image src={logo}
      width={50}
      height={50}
      alt="logotyp"/>
      </Link>
      </LogoNav>
      <span>
      <div ref={node}>
      <Burger 
      open={open} 
      setOpen={setOpen}/>
      {open && 
      <DropDownMenu open={open} 
      setOpen={setOpen}/>
      }
      </div>
      <Toggle 
        theme={theme} 
        toggleTheme={toggleTheme}/>
    </span>

  </NavComponent>
  </HeaderComponent>
 );
}
 
export default Header;
