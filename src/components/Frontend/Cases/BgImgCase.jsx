import landingpic from "../../../../public/background_globalwarming.png"
import Image from "next/image"
import styled from "styled-components";



 const Wrapper = styled.div`
position: fixed;
height: 120vh;
width: 100%;
overflow: hidden;
z-index: 1;
@media screen and (max-width:700px){
 display:none;
}
`
const Overlay = styled.div`
position:fixed;
height:150vh;
width:100vw;
background: rgba(50, 57, 57, 0.3);
z-index:1;
@media screen and (max-width:700px){
  display:none;
}
`
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
@media screen and (max-width:700px){
padding:2rem;
padding-top:10vh;
padding-bottom:5vh;
}
`


const BgImgCase = ({individual}) => {
  return (<>
   {individual.map(item => (
      <div key={item.id}>
        <Wrapper>
        <Image
      alt={item.sources.imgalt}
      src={item.sources.imgurl}
      
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
    test
    </BgTxt>
    </div>
    ))}
    </>
    );
}
 
export default BgImgCase;