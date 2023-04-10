import styled from "styled-components";
import WorkInProgress from "../WorkInProgress";
import Image from "next/image";
import artmadethis1 from "../../../public/art/hel_artmadethis_tovajertfelt.png"

const Section = styled.div`
min-height:120vh;
padding:0;
margin:0;
color: ${({theme}) => theme.primaryText};
background: ${({theme}) => theme.artcolors.primary};
`
const Wrapper = styled.div`
padding-top:10rem;
z-index:0;

`
const TitleOverWrapper = styled.div`
z-index:1;
position:absolute;
top:50vh;

display:flex;`

const Title = styled.div`
z-index:1;
h1{
  font-size:80px;
  padding:2rem;
  padding-left:15rem;
  background: ${({theme}) => theme.artcolors.primaryLightest};
  color:${({theme}) => theme.textSecondary};
}
`

const ArtMain = () => {
  return (<Section>
    <Wrapper>
    <Image 
    alt="Palmyra" 
    src={artmadethis1}
    quality={100}
    style={{
      objectFit: 'contain',
    }}
    />
    </Wrapper>
    <TitleOverWrapper>
    <Title><h1>ART</h1></Title>

    </TitleOverWrapper>
    <WorkInProgress/>
  </Section>  );
}
 
export default ArtMain;