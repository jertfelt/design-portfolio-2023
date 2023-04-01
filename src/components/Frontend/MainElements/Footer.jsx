import styled from "styled-components";
import Link from "next/link";
import { flex, device, padding, fonts } from "@component/components/stylings/Stylings";
import { useTranslation } from "next-i18next";

const FooterStyle = styled.footer`
display:flex;
flex-direction:row;
width:100%;
position: absolute;
z-index:5;
padding:${padding.paddingSizes.medium};
height:5vh;
bottom:100;
align-items:center;
justify-content:center;
background:${({theme}) => theme.frontendcolors.alternativecontrast};
@media screen and ${device.maxmobile}{
height:10vh;
bottom:120;
padding:0;
p{
  font-size:  ${fonts.fontSizes.small};
  color: ${({theme}) => theme.white};
}
}
`


const Links = styled.div`
${flex({direction:"row"})}
gap:10px;
font-family: Arya;
font-size:  ${fonts.fontSizes.medium};
line-height: 1.4rem;


a{
  border-style: solid;
  border-color: transparent;
  border-radius: ${({theme}) => theme.borderradius.first};
  padding:18px 18px;
  text-decoration:none;
  color: ${({theme}) => theme.white};
  &:hover{
    color:${({theme}) => theme.lightblue};
    background-color:${({theme}) => theme.vividblue};
  }
}`

const Footer = () => {
  const {t} = useTranslation()
  return (
    <FooterStyle>
   
      <Links>
      <Link 
      href="https://www.linkedin.com/in/tovajertfelt/"
      target="_blank">
        Linkedin</Link>
      <Link  
      href="https://github.com/jertfelt"
      target="_blank">Github</Link>
   
      </Links>
      <p>{t("footerfrontend.text")}</p>
    </FooterStyle>);
}

export default Footer