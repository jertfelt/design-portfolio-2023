import { useRouter } from 'next/router';
import styled from 'styled-components';
import { bool } from 'prop-types';
import Link from 'next/link';
import { useContext, useEffect, useRef, useState } from 'react';
import ArtMenu from './ArtMenu';
import FrontendMenu from './FrontendMenu';
import DesignMenu from './DesignMenu';
import IllMenu from './IllMenu';
import Start from './Start';
import { AppContext } from '@component/context/AppContext';
import LocaleSwitcher from './LanguageSwitch';
import { useTranslation } from 'next-i18next';

const StyledMenu = styled.nav`
display: flex;
flex-direction: column;
justify-content: center;
align-items:center;
background: ${({ theme }) => theme.contrast};
height: 100vh;
width:30vh;
text-align: left;
padding: 2rem;
position: absolute;
top:-3rem;
right:5rem;
transition: transform 0.3s ease-in-out;
z-index:10;
filter: drop-shadow(-10px 0px 10px ${({ theme }) => theme.body});
transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
@media (max-width:800px) {
  width:100%;
  width:80vw;
  padding:0;
  height:100vh;
  font-size:2rem;
  right:2rem;
  filter: drop-shadow(-1px 0px 1px ${({ theme }) => theme.contrast});
}
@media (max-width:300px){
  width:100%;
  width:100vw;
  margin:0;
  position: absolute;
  right:-2rem;
  font-size:1rem;
  padding:0;
}
@media (min-width: 1050px){
  max-width:25vh;
}
@media (max-width: 800px) {
  font-size: 1.5rem;
  text-align: center;
}
a {
  font-size: 1.5rem;
  line-height:2rem;
  font-weight: bold;
  color: ${({ theme }) => theme.textSecondary};
  text-decoration: none;
  transition: color 0.3s linear;
  
  @media (max-width: 800px) {
    font-size: 1.5rem;
    text-align: center;
  }
  &:hover {
    color: ${({ theme }) => theme.accent};
  }
}
`;



const DropDownMenu = ({open, setOpen}) => {
const ref= useRef()
const router = useRouter()
const {key} = router.query;
const {selectedPage} = useContext(AppContext)

const { t } = useTranslation();

useEffect(() => {
  let lang = router.locale == "sv" ? "sv" : "en";
  document.querySelector("html").setAttribute("lang", lang);
}, [router.locale]);

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
    {selectedPage && selectedPage.value==="" &&  <Start 
    setOpen={setOpen}
    open={open}/>}
    {selectedPage && selectedPage.value==="frontend" && <FrontendMenu
    setOpen={setOpen}
    open={open}/>}
    {selectedPage && selectedPage.value==="art" &&  <ArtMenu
    setOpen={setOpen}
    open={open}/>}
    {selectedPage && selectedPage.value==="design" &&
    <DesignMenu
    setOpen={setOpen}
    open={open}/>
    }
    {selectedPage && selectedPage.value==="illustration" &&
   <IllMenu/>
    }
    <Link href="/contact" onClick={() => setOpen(!open)}>
      &#9993; {t("menu.Kontakt")}
    </Link>
    <LocaleSwitcher
    setOpen={setOpen}
    open={open}
    />
  
    </StyledMenu>
);
}
DropDownMenu.propTypes = {
  open: bool.isRequired,
}
export default DropDownMenu;