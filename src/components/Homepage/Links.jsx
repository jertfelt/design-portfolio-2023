import styled from "styled-components"
import Link from "next/link"



const BackgroundOne = styled.div`
background-color: ${({ theme }) => theme.contrast};
color: ${({ theme }) => theme.body};

&:hover{
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
  
  background-image:  repeating-radial-gradient(circle at 0 0, transparent 0, ${({ theme }) => theme.body} 24px), repeating-linear-gradient(${({ theme }) => theme.contrast}, ${({ theme }) => theme.contrast});
background-color: #9ac36d;
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

background-size: calc(2*59px) calc(2*59px);
  @media (max-width: 700px){

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
  background-image: linear-gradient(${({ theme }) => theme.contrast} 1px, transparent 1px), linear-gradient(to right, ${({ theme }) => theme.contrast} 1px, transparent 1px);
  background-size: 65px 65px;
  background-repeat:repeat;
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
  z-index: -2;
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
  background:
  conic-gradient(at 50% calc(100%/6),${({ theme }) => theme.contrast} 60deg,#0000 0),
  conic-gradient(at calc(100%/6) 50%,#0000 240deg,${({ theme }) => theme.contrast} 0),
  conic-gradient(from 180deg at calc(100%/6) calc(500%/6),${({ theme }) => theme.contrast} 60deg,#0000 0),
  conic-gradient(from 180deg at calc(500%/6),#0000 240deg,${({ theme }) => theme.contrast} 0) calc(4*.866*12px) 0,
  repeating-linear-gradient(-150deg,${({ theme }) => theme.textSecondary} 0 calc(100%/6),#0000   0 50%),
  repeating-linear-gradient(-30deg, ${({ theme }) => theme.accent} 0 calc(100%/6),${({ theme }) => theme.body} 0 50%);
background-size: calc(6*.866*12px) calc(3*12px);
background-repeat:repeat;
}
&:hover:before{
  transform: translate(0, 0%) scaleY(1);
}
&:after{
  content: "";
  position: absolute;
  z-index: -1;
  width: 8ch;
  height: 2ch;
  top: 50%;
  right: 50%;
  transform: translate(50%, -50%) rotate(0deg) scale(0);
  transition: transform 0.3s ease;
  background-color: ${({ theme }) => theme.body};
}
&:hover:after{
  transform: translate(50%, -50%) scale(2.5);

background-size: calc(2*59px) calc(2*59px);
  @media (max-width: 700px){

  }
}

`

const BodyTwo = styled.div`

height:100vh;
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


 
  clip-path: polygon(0%     0%, 
    0% 0%, 
    0% 00%, 
    0% 100%, 
    0% 100%, 
    0% 0%);
  );
  transition: clip-path 1s cubic-bezier(0.65, 0, 0.35, 1);
  @media (max-width: 700px){
    height: 100%;
    width:100%;
  }
}
&:hover:after{
  background-color: ${({ theme }) => theme.body};

  clip-path: polygon(
    0% 0%, 
    50% 0%, 
    90% 50%, 
    50% 100%, 
    0% 100%, 
    0% 50%);

background-image: radial-gradient(${({ theme }) => theme.contrast} 2px, transparent 1px);
background-size: 32px 32px;
background-color: ${({ theme }) => theme.body};

  @media (max-width: 700px){
    background-color: ${({ theme }) => theme.body};
  }
}
`


const LinksToPages = () => {

  return (   <>

    <BodyTwo>
      
    <Link href="/Frontend" >
    <BackgroundOne value="Frontend">

      <LinkContainer>
    
      <LinkOnev2 >

      Frontend,

      </LinkOnev2>
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
      </BodyTwo>
</> );
}
 
export default LinksToPages;