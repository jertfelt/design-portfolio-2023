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
@media (max-width: ${({ theme }) => theme.mobile}) {
  width: 100%;
}
@media (min-width: 1050px){
  max-width:25vh;
}
a {
  font-size: 1.5rem;
  line-height:2rem;
  font-weight: bold;
  color: ${({ theme }) => theme.textSecondary};
  text-decoration: none;
  transition: color 0.3s linear;
  
  @media (max-width: ${({ theme }) => theme.mobile}) {
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

const { t } = useTranslation("");

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
    {selectedPage && selectedPage.value==="" &&  <Start/>}
    {selectedPage && selectedPage.value==="frontend" && <FrontendMenu/>}
    {selectedPage && selectedPage.value==="art" &&  <ArtMenu/>}
    {selectedPage && selectedPage.value==="design" &&
    <DesignMenu/>
    }
    {selectedPage && selectedPage.value==="illustration" &&
   <IllMenu/>
    }

    <Link href="/contact">
      &#9993; {t("menu.Kontakt")}
    </Link>
    {/* <LocaleSwitcher/> */}
    </StyledMenu>
);
}
DropDownMenu.propTypes = {
  open: bool.isRequired,
}
export default DropDownMenu;