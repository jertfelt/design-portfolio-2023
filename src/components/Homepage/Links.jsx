import styled from "styled-components"
import Link from "next/link"
import { useRouter } from "next/router"

const Body = styled.div`
margin: 0;
display: grid;
@media (min-width: 700px){
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 1fr;
  height: 30vh;
}
`
const BackgroundOne = styled.div`
background-color: ${({ theme }) => theme.contrast};
color: ${({ theme }) => theme.body};
&:hover{
  background: ${({ theme }) => theme.body};
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
  transform: translate(50%, -50%) rotate(135deg) scale(1);
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
  transform: translate(0, -50%) scaleY(0);
  transition: transform .5s ease;
  mix-blend-mode: hue;
  clip-path: polygon(
    0 0, 
    100% 0, 
    100% 100%, 
    90% 100%
  );
  background-color: ${({ theme }) => theme.body};
}
&:hover:before{
  transform: translate(0, 0%) scaleY(1);
}
`


const LinksToPages = () => {

const router = useRouter()


  return (   
  <Body>
    <Link href="/frontend" >
    <BackgroundOne value="Frontend">
      <LinkContainer>
      <LinkOne>Frontend,</LinkOne>
      </LinkContainer>
    </BackgroundOne>
    </Link>
    {/* <BackgroundTwo>
      <LinkContainer>
      <LinkTwo><Link to="/art">Konst,</Link></LinkTwo>
      </LinkContainer>
    </BackgroundTwo>
    <BackgroundThree>
      <LinkContainer>
      <LinkThree><Link to="/design">Design & </Link></LinkThree>
      </LinkContainer>
    </BackgroundThree>
    <BackgroundFour>
      <LinkContainer>
      <LinkFour><Link to="/illustration">Illustration</Link></LinkFour>
      </LinkContainer>
    </BackgroundFour> */}
    </Body> );
}
 
export default LinksToPages;