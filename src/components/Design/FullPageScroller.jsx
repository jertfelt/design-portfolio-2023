import Image from "next/image";
import styled, {css} from "styled-components";
import emiljensen2 from "../../../public/design/emiljensen2.png"
import berwaldhallen from "../../../public/design/berwaldhallen-jertfelt.png"
import kollektivSorg from "../../../public/design/kollektiv-sorg-pitch.png"
import familyFirst from "../../../public/design/FAMILY-FIRST-METAMORPHOSIS.gif"
import forumSyd from "../../../public/design/forum-syd-rebrand.png"
import globalPortalen from "../../../public/design/globalportalen-grafiska-riktlinjer-2022-tova-jertfelt-monster.png"
import Link from "next/link";

const FullPageScroll = () => {

const AppWrap = styled.div`
background: ${({theme}) => theme.accentTwo};
width:100vw;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
margin:0;
padding:0;
`

const Item = styled.div`
background-image: linear-gradient(${({ theme }) => theme.accent} 1px, transparent 1px), linear-gradient(to right, ${({ theme }) => theme.accent} 1px, transparent 1px);
background-position: 0% 50%;
background-size: 30px 30px;
background-repeat:repeat;
width:100vw;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
padding:0;
margin:0;
margin-top:-6vh;
height:100%;
margin-bottom:-6vh;
`

  const ImageWrapper = styled.div`
  
  margin:0;
  padding:0;
  height:100%;
  width:100%;
  min-width:99vw;
  position:relative;
  img{
    width:100%;
    height:100%;
  }
  `

  const TitleOverWrapper = styled.div`
  z-index:1;
  position:relative;
  color: ${({theme}) => theme.black};
  display:flex;
  flex-direction:row;

  align-items:center;
  justify-content:space-around;
  width:100%;
  bottom:20vh;
  padding-bottom:0;
  a{
    font-size:2rem;
    font-family:JetBrains Mono;
      padding:6px 8px;
      background: ${({theme}) => theme.white};
      color: ${({theme}) => theme.black};
      font-weight:bold;
      
  }
  ${props => 
    props.reverse && 
    css` 
    color: ${({theme}) => theme.white};
    a{
      background: ${({theme}) => theme.black};
      color: ${({theme}) => theme.white};
    }
    `}
  
  `

  const Text = styled.div`
  h2{
  font-size:2rem;
  font-family:JetBrains Mono;
  padding:6px;
  color: ${({theme}) => theme.black};
  background: ${({theme}) => theme.white};
  &:hover{
    font-style:italic;
   
  }
}
.customer{
 
 
  text-transform:uppercase;
  &:hover{
    font-style:initial;
   
  }
}
${props => 
  props.reverse && 
  css` 
  h2{
    color: ${({theme}) => theme.white};
  background: ${({theme}) => theme.black};
  }
  .customer{

    &:hover{
      font-style:initial;
      
    }
  }
  `}
  `

  return (   

    <AppWrap>
      <Item>
      <ImageWrapper>
        <Image 
        priority={true}
        quality={100}
        src={emiljensen2} alt="Emil Jensen wearing Teskedsorden T-shirt"
        style={{
          objectFit: 'cover',
        }}
        >
        </Image>
      </ImageWrapper>
      <TitleOverWrapper>
      <Text>
        <h2>Grafisk Identitet  </h2>
        </Text>
        <Text>
        <h2 className="customer">Teskedsorden</h2>
        </Text>
        <Link href="/design/teskedsorden">
        Se mer
        </Link>
      </TitleOverWrapper>
      </Item>
      <Item>
      <ImageWrapper>
        <Image 
        priority={true}
        quality={100}
        src={berwaldhallen} alt="Affisch 70x100 cm stor i träram"
        style={{
          objectFit: 'cover',
        }}
        >
        </Image>
      </ImageWrapper>
      <TitleOverWrapper reverse>
      <Text reverse>
        <h2>Affisch</h2>
        </Text>
        <Text reverse>
        <h2 className="customer">Berwaldhallen</h2>
        </Text>
        <Link href="/design/berwaldhallen">
        Se mer
        </Link>
      </TitleOverWrapper>
      </Item>
      <Item>
      <ImageWrapper>
        <Image 
        priority={true}
        quality={100}
        src={kollektivSorg} alt=""
        style={{
          objectFit: 'cover',
        }}
        >
        </Image>
      </ImageWrapper>
      <TitleOverWrapper reverse>
      <Text reverse>
        <h2>Grafisk profil</h2>
        </Text>
        <Text reverse>
        <h2 className="customer">Kollektiv Sorg</h2>
        </Text>
        <Link href="/design/kollektivsorg">
        Se mer
        </Link>
      </TitleOverWrapper>
      </Item>
      <Item>
      <ImageWrapper>
        <Image 
        priority={true}
        quality={100}
        src={globalPortalen} alt=""
        style={{
          objectFit: 'cover',
        }}
        >
        </Image>
      </ImageWrapper>
      <TitleOverWrapper reverse>
      <Text reverse>
        <h2>Grafisk identitet</h2>
        </Text>
        <Text reverse>
        <h2 className="customer">Globalportalen</h2>
        </Text>
        <Link href="/design/familyfirst">
        Se mer
        </Link>
      </TitleOverWrapper>
      </Item>
      <Item>
      <ImageWrapper>
        <Image 
        priority={true}
        quality={100}
        src={familyFirst} alt=""
        style={{
          objectFit: 'cover',
        }}
        >
        </Image>
      </ImageWrapper>
      <TitleOverWrapper>
      <Text>
        <h2>Grafisk identitet</h2>
        </Text>
        <Text>
        <h2 className="customer">Family First Exhibition</h2>
        </Text>
        <Link href="/design/familyfirst">
        Se mer
        </Link>
      </TitleOverWrapper>
      </Item>
      <Item>
      <ImageWrapper>
        <Image 
        priority={true}
        quality={100}
        src={forumSyd} alt=""
        style={{
          objectFit: 'cover',
        }}
        >
        </Image>
      </ImageWrapper>
      <TitleOverWrapper reverse>
      <Text reverse>
        <h2>Grafisk identitet</h2>
        </Text>
        <Text reverse>
        <h2 className="customer">Forum Syd</h2>
        </Text>
        <Link href="/design/familyfirst">
        Se mer
        </Link>
      </TitleOverWrapper>
      </Item>
  </AppWrap>
  
   );
}
 
export default FullPageScroll;