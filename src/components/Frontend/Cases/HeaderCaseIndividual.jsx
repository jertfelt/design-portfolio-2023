import Image from "next/image"
import { flex, device } from "@component/components/stylings/Stylings";
import styled,{css} from "styled-components";

const Wrapper = styled.div`

position: fixed;
height: 100vh;
width: 100%;
overflow: hidden;
z-index: 1;
`
const Overlay = styled.div`

position:fixed;
height:100vh;
width:100%;
background: rgba(50, 57, 57, 0.5);
z-index:1;
`
const BgTxt = styled.div`
margin: 0;
text-align: left;
padding:4rem;
width:80%;
padding-left:6rem;
padding-top:50%;
color:${({theme}) => theme.white};
text-align:center;
hr{
  height:2px;
  border-radius:39px;
  background-color:${({theme}) => theme.white};
  width:100%;
  color:${({theme}) => theme.white};
  margin-top:-2rem;
  margin-bottom:-1rem;
  box-shadow: 1px 1px 1px ${({theme}) => theme.frontendcolors.background};
}
h1{
  font-size:80px;
  line-height:50px;
}
p{
  font-size:32px;
}
text-shadow: 1px 1px 1px ${({theme}) => theme.frontendcolors.background};
z-index: 1;
position: relative;
@media screen and (max-width:700px){
padding:2rem;
padding-top:10vh;
padding-bottom:5vh;
}
`

const HeaderIndividual = ({individual}) => {
  return ( <>
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
          <Overlay>
            <BgTxt>
              <h1>
                {item.title}
              </h1>
              <hr></hr>
              <p>{item.sub}</p>
          
              
            </BgTxt>
          </Overlay>
         
      
      </div>
    ))}

    </>  );
}
 
export default HeaderIndividual;