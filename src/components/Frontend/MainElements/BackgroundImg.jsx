import landingpic from "../../../../public/background_globalwarming.png"
import Image from "next/image"
import styled from "styled-components";
import HeroContent from "./Hero";

const Wrapper = styled.div`
position: fixed;
height: 120vh;
width: 100%;
overflow: hidden;
z-index: 1;
@media screen and (max-width:1050px){ 
  border-radius: ${({theme}) => theme.borderradius.second};
  top:-100px;
  right:10%;
}
@media screen and (max-width:700px){
 display:none;
}
`

const Overlay = styled.div`
position:fixed;
height:150vh;
width:100vw;
background: rgba(50, 57, 57, 0.3);
z-index:1;`


const BgTxt = styled.div`
margin: 0;
text-align: left;
padding:5rem;
padding-top:30vh;
padding-bottom:30vh;
color:${({theme}) => theme.white};
text-shadow: 1px 1px 1px ${({theme}) => theme.frontendcolors.background};
z-index: 1;
position: relative;

`


const BgImg = () => {
  return (<>
    <Wrapper>
      <Image
        alt="Global warming"
        src={landingpic}
        placeholder="blur"
        quality={100}
        fill
        sizes="80vw"
        style={{
          objectFit: 'cover',
        }}
      />
    </Wrapper>
    <Overlay/>
    <BgTxt>
    <HeroContent/>
    </BgTxt>
    </>
    );
}
 
export default BgImg;