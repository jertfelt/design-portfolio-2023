import styled from "styled-components"
import Link from "next/link"

import { OnHoverImage } from "../hooks/onHoverImage"
import frontendPic from "../../../public/frontend.png"
import Image from "next/image"
import { useState } from "react"

const Body = styled.div`
margin: 0;
display: grid;
@media (min-width: 700px){
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 1fr;
  height: 30vh;
}
margin-left:-2rem;

`



const BackgroundOne = styled.div`
background-color: ${({ theme }) => theme.contrast};
color: ${({ theme }) => theme.body};

&:hover{

  background-image: linear-gradient(${({ theme }) => theme.body} 1px, transparent 1px), linear-gradient(to right, ${({ theme }) => theme.body} 1px, transparent 1px);
background-size: 65px 65px;
background-repeat:repeat;
background-color: ${({ theme }) => theme.contrast};
  color: ${({ theme }) => theme.contrast};
}
`
const BackgroundTwo = styled.div`
background-color: ${({ theme }) => theme.contrast};
color: ${({ theme }) => theme.body};
`
const BackgroundThree = styled.div`
background-color: ${({ theme }) => theme.contrast};
color: ${({ theme }) => theme.body};
`
const BackgroundFour = styled.div`
background-color: ${({ theme }) => theme.contrast};
color: ${({ theme }) => theme.body};
`

const LinkContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
height: 100%;
position: relative;
z-index: 0;
font-size: 2.5em;
padding:1rem;
@media (max-width: 700px){
 font-size:2rem;
}
min-height:30vh;
max-height:30vh;

`


const LinkOne = styled.div`
transition: color 1s cubic-bezier(0.32, 0, 0.67, 0);
  line-height: 1em;
&:hover{
  color: ${({ theme }) => theme.textPrimary};
  transition: color 1s cubic-bezier(0.33, 1, 0.68, 1);
}
&:before{
  content: "";
  position: absolute;
  z-index: -1;
  width: 100%;
  height: 100%;
  top: 0;
  right: 0;
  transition: clip-path 1s cubic-bezier(0.65, 0, 0.35, 1);
}
&:hover:before{
  --webkit-clip-path: circle(100% at 50% 50%);
  clip-path: circle(100% at 50% 50%);
}
&:after{
  content: "";
  position: absolute;
  z-index: -1;
  width: 100%;
  height: 100%;
  top: 0;
  right: 0;
  background-color: ${({ theme }) => theme.contrast};
  --webkit-clip-path: polygon(
    40% 0%,
    60% 0%,
    60% 0%,
    40% 0%,
    40% 100%,
    60% 100%,
    60% 100%,
    40% 100%
  );
  clip-path: polygon(
    40% 0%,
    60% 0%,
    60% 0%,
    40% 0%,
    40% 100%,
    60% 100%,
    60% 100%,
    40% 100%
  );
  transition: clip-path 1s cubic-bezier(0.65, 0, 0.35, 1);
  @media (max-width: 700px){
    height: 100%;
    width:100%;
  }
}
&:hover:after{
  --webkit-clip-path: polygon(
    40% 10%,
    60% 10%,
    60% 35%,
    40% 35%,
    40% 90%,
    60% 90%,
    60% 65%,
    40% 65%
  );
  clip-path: polygon(
    40% 10%,
    60% 10%,
    60% 35%,
    40% 35%,
    40% 90%,
    60% 90%,
    60% 65%,
    40% 65%
  );

  @media (max-width: 700px){
    background-color: transparent;
  }
}
`
const LinkTwo = styled.div`
transition: color 1s cubic-bezier(0.32, 0, 0.67, 0);
&:hover{
  color: ${({ theme }) => theme.textPrimary};
  transition: color 1s cubic-bezier(0.33, 1, 0.68, 1);
  @media (max-width: 700px){
    color: ${({ theme }) => theme.textPrimary};
  }
}
&:before{
  content: "";
  position: absolute;
  z-index: -2;
  width: 100%;
  height: 100%;
  top: 0;
  right: 0;
  --webkit-clip-path: polygon(
    0% -20%,
    100% -30%,
    100% -10%,
    0% 0%,
    0% 130%,
    100% 120%,
    100% 100%,
    0% 110%
  )
  clip-path: polygon(
    0% -20%,
    100% -30%,
    100% -10%,
    0% 0%,
    0% 130%,
    100% 120%,
    100% 100%,
    0% 110%
  );
  background-color:transparent;
  transition: clip-path 1s cubic-bezier(0.25, 1, 0.5, 1);
  @media (max-width: 700px){
    background-color: ${({ theme }) => theme.textPrimary};
  }
}
&:hover:before{
  --webkit-clip-path: polygon(
    0% 10%,
    100% 0%,
    100% 20%,
    0% 30%,
    0% 100%,
    100% 90%,
    100% 70%,
    0% 80%
  );
  clip-path: polygon(
    0% 10%,
    100% 0%,
    100% 20%,
    0% 30%,
    0% 100%,
    100% 90%,
    100% 70%,
    0% 80%
  );
  
}
&:after{
  content: "";
  position: absolute;
  z-index: -1;
  width: 5ch;
  height: 5ch;
  top: 50%;
  right: 50%;
  transform: translate(50%, -50%) rotate(0deg) scale(0);
  transition: transform 0.3s ease;
  background-color: ${({ theme }) => theme.body};
}
&:hover:after{
  transform: translate(50%, -50%) rotate(135deg) scale(1.5);
  @media (max-width: 700px){
  background-color:transparent;
  }
}
`
const LinkThree = styled.div`
transition: color 1s cubic-bezier(0.32, 0, 0.67, 0);
  line-height: 1em;
&:hover{
  color: ${({ theme }) => theme.textPrimary};
  transition: color 1s cubic-bezier(0.33, 1, 0.68, 1);
}
&:before{
  content: "";
  position: absolute;
  z-index: -1;
  width: 100%;
  height: 100%;
  top: 0;
  right: 0;
  background-color: ${({ theme }) => theme.body};
  clip-path: circle(0% at 50% calc(50%));
  transition: clip-path 1s cubic-bezier(0.65, 0, 0.35, 1);
}
&:hover:before{
  clip-path: circle(100% at 50% 50%);
}
&:after{
  content: "";
  position: absolute;
  z-index: -1;
  width: 100%;
  height: 100%;
  top: 0;
  right: 0;
  background-color: ${({ theme }) => theme.contrast};
  --webkit-clip-path: circle(100% at 50% calc(50%));
  clip-path: circle(100% at 50% calc(50%));
  transition: clip-path 1s cubic-bezier(0.65, 0, 0.35, 1);
}
&:hover:after{
  clip-path: circle(0% at 50% 50%);
}
`
const LinkFour = styled.div`
transition: color 1s cubic-bezier(0.32, 0, 0.67, 0);
&:hover{
  color: ${({ theme }) => theme.textPrimary};
  transition: color 1s cubic-bezier(0.33, 1, 0.68, 1);
}
&:before{
  content: "";
  position: absolute;
  z-index: 2;
  width: 100%;
  height: 100%;
  top: 0%;
  left: 0%;
  transform: translate(0, 10%) scaleY(0);
  transition: transform .5s ease;
  mix-blend-mode: hue;
  --webkit-clip-path: polygon(
    90% 100%,
    100% 100%,
    100% 0,
    0 0,
  )
  clip-path: polygon(
    90% 100%,
    100% 100%,
    100% 0,
    0 0,
    
  );
  background-color: ${({ theme }) => theme.body};
}
&:hover:before{
  transform: translate(0, 0%) scaleY(1);
}
`

const BodyTwo = styled.div`
margin-left:-2rem;
`

const LinkOnev3 = styled.div`
position: relative;
font-size: 80px;
font-weight: 700;
color: ${({ theme }) => theme.body};
z-index: 1;
&:hover{
  color:${({ theme }) => theme.textPrimary};
}

&:hover:before{
  content: attr(data-glitch);
  position: absolute;
  top: 0;
  left: -2px;
  width: 100%;
  color: ${({ theme }) => theme.body};
  background-color: ${({ theme }) => theme.body};
  overflow: hidden;
  clip: rect(0, 900px, 0, 0);
  animation: noise-before 3s infinite linear alternate-reverse;
}
&:hover:after{
  content: attr(data-glitch);
   position: absolute;
   top: 0;
   left: 2px;
   width: 100%;
   color: ${({ theme }) => theme.textPrimary};
   background-color: ${({ theme }) => theme.body};
   overflow: hidden;
   clip: rect(0, 900px, 0, 0);
   animation: noise-after 2s infinite linear alternate-reverse;
}



@keyframes noise-before {
  0% {
     clip: rect(61px, 9999px, 52px, 0);
  }

  5% {
     clip: rect(33px, 9999px, 144px, 0);
  }

  10% {
     clip: rect(121px, 9999px, 115px, 0);
  }

  15% {
     clip: rect(144px, 9999px, 162px, 0);
  }

  20% {
     clip: rect(62px, 9999px, 180px, 0);
  }

  25% {
     clip: rect(34px, 9999px, 42px, 0);
  }

  30% {
     clip: rect(147px, 9999px, 179px, 0);
  }

  35% {
     clip: rect(99px, 9999px, 63px, 0);
  }

  40% {
     clip: rect(188px, 9999px, 122px, 0);
  }

  45% {
     clip: rect(154px, 9999px, 14px, 0);
  }

  50% {
     clip: rect(63px, 9999px, 37px, 0);
  }

  55% {
     clip: rect(161px, 9999px, 147px, 0);
  }

  60% {
     clip: rect(109px, 9999px, 175px, 0);
  }

  65% {
     clip: rect(157px, 9999px, 88px, 0);
  }

  70% {
     clip: rect(173px, 9999px, 131px, 0);
  }

  75% {
     clip: rect(62px, 9999px, 70px, 0);
  }

  80% {
     clip: rect(24px, 9999px, 153px, 0);
  }

  85% {
     clip: rect(138px, 9999px, 40px, 0);
  }

  90% {
     clip: rect(79px, 9999px, 136px, 0);
  }

  95% {
     clip: rect(25px, 9999px, 34px, 0);
  }

  100% {
     clip: rect(173px, 9999px, 166px, 0);
  }
}

@keyframes noise-after {
  0% {
     clip: rect(26px, 9999px, 33px, 0);
  }

  5% {
     clip: rect(140px, 9999px, 198px, 0);
  }

  10% {
     clip: rect(184px, 9999px, 89px, 0);
  }

  15% {
     clip: rect(121px, 9999px, 6px, 0);
  }

  20% {
     clip: rect(181px, 9999px, 99px, 0);
  }

  25% {
     clip: rect(154px, 9999px, 133px, 0);
  }

  30% {
     clip: rect(134px, 9999px, 169px, 0);
  }

  35% {
     clip: rect(26px, 9999px, 187px, 0);
  }

  40% {
     clip: rect(147px, 9999px, 137px, 0);
  }

  45% {
     clip: rect(31px, 9999px, 52px, 0);
  }

  50% {
     clip: rect(191px, 9999px, 109px, 0);
  }

  55% {
     clip: rect(74px, 9999px, 54px, 0);
  }

  60% {
     clip: rect(145px, 9999px, 75px, 0);
  }

  65% {
     clip: rect(153px, 9999px, 198px, 0);
  }

  70% {
     clip: rect(99px, 9999px, 136px, 0);
  }

  75% {
     clip: rect(118px, 9999px, 192px, 0);
  }

  80% {
     clip: rect(1px, 9999px, 83px, 0);
  }

  85% {
     clip: rect(145px, 9999px, 98px, 0);
  }

  90% {
     clip: rect(121px, 9999px, 154px, 0);
  }
`


const LinkOnev2 = styled.div`
margin:0;
padding:0;
transition: color 1s cubic-bezier(0.32, 0, 0.67, 0);
  line-height: 1em;
&:hover{
  color: ${({ theme }) => theme.textPrimary};
  transition: color 1s cubic-bezier(0.33, 1, 0.68, 1);
}
&:before{
  content: "";
  position: absolute;
  z-index: -1;
  width: 100%;
  height: 100%;
  top: 0;
  right: 0;
  transition: clip-path 1s cubic-bezier(0.25, 0, 0.35, 1);
}
&:hover:before{
  --webkit-clip-path: circle(100% at 50% 50%);
  clip-path: circle(100% at 50% 50%);
}
&:after{
  content: "";
  position: absolute;
  z-index: -1;
  width: 100%;
  height: 100%;
  top: 0;
  right: 0;
background-color: ${({theme}) => theme.contrast}
  --webkit-clip-path: polygon(
    40% 0%,
    60% 0%,
    60% 0%,
    40% 0%,
    40% 100%,
    60% 100%,
    60% 100%,
    40% 100%
  );
  clip-path: polygon(
    25% 0%, 100% 0%,  75% 100%, 0% 100%
);

  );
  transition: clip-path 1s cubic-bezier(0.65, 0, 0.35, 1);
  @media (max-width: 700px){
    height: 100%;
    width:100%;
  }
}
&:hover:after{
  background-image: linear-gradient(${({ theme }) => theme.textPrimary} 1px, transparent 1px), linear-gradient(to right, ${({ theme }) => theme.textPrimary} 1px, transparent 1px);
  background-size: 65px 65px;
  background-repeat:repeat;
  background-color: ${({ theme }) => theme.body};
  --webkit-clip-path: polygon(
    40% 00%,
    60% 10%,
    60% 35%,
    40% 35%,
    40% 90%,
    60% 90%,
    60% 65%,
    40% 65%
  );
  clip-path: polygon(
    0% 100%,
    100% 100%, 
    45% 0%, 
    55% 0%
  );

  @media (max-width: 700px){
    background-image: linear-gradient(${({ theme }) => theme.contrast} 1px, transparent 1px), linear-gradient(to right, ${({ theme }) => theme.contrast} 1px, transparent 1px);
    background-size: 65px 65px;
    background-repeat:repeat;
    background-color: ${({ theme }) => theme.body};
  }
}
`


const LinksToPages = () => {

  return (   <>
  <Body>
  
    <Link href="/Frontend" >
    <BackgroundOne value="Frontend">

      <LinkContainer>
      <LinkOne>

      Frontend,

      </LinkOne>
  


      </LinkContainer>
    </BackgroundOne>
    </Link>
    <Link href="/art">
    <BackgroundTwo>
      <LinkContainer>
      <LinkTwo>Konst,</LinkTwo>
      </LinkContainer>
    </BackgroundTwo>
    </Link>
    <Link href="/design">
    <BackgroundThree>
      <LinkContainer>
      <LinkThree>Design & </LinkThree>
      </LinkContainer>
    </BackgroundThree>
    </Link>
    <Link href="/illustration">
    <BackgroundFour>
      <LinkContainer>
      <LinkFour>Illustration</LinkFour>
      </LinkContainer>
    </BackgroundFour> 
    </Link>
    </Body>
    <BodyTwo>
      
    <Link href="/Frontend" >
    <BackgroundOne value="Frontend">

      <LinkContainer>
    
      <LinkOnev2 >

      Frontend,

      </LinkOnev2>
     
  {/* <LinkOnev3 data-glitch="Frontend,">
    Frontend,
  </LinkOnev3> */}


      </LinkContainer>
    </BackgroundOne>
    </Link>
    <Link href="/art">
    <BackgroundTwo>
      <LinkContainer>
      <LinkTwo>Konst,</LinkTwo>
      </LinkContainer>
    </BackgroundTwo>
    </Link>
    <Link href="/design">
    <BackgroundThree>
      <LinkContainer>
      <LinkThree>Design & </LinkThree>
      </LinkContainer>
    </BackgroundThree>
    </Link>
    <Link href="/illustration">
    <BackgroundFour>
      <LinkContainer>
      <LinkFour>Illustration</LinkFour>
      </LinkContainer>
    </BackgroundFour> 
    </Link>
      </BodyTwo></> );
}
 
export default LinksToPages;