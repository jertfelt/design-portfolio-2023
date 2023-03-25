import styled from "styled-components"
import LinksToPages from "@component/components/Homepage/Links"
import frontendPic from "../../public/frontend.png"

const HomepageComponent = styled.section`
max-width: 100vw;
width:100vw;
padding-top:4rem;
display:flex;
flex-direction: column;
box-sizing: border-box;
color: ${({ theme }) => theme.textPrimary};
`
const TextContainer = styled.div`
padding:2rem;
h1{
font-size:2.5rem;
}
h3{
  width:100%;
  font-size:.8rem;
  }
`
const Explanation = styled.div`
font-size:.8rem;
width:100%;
display:flex;
flex-direction:column;
align-items:flex-start;
padding:.5rem;
`
const TextContainerRight = styled.div`
padding-right:2rem;
h3{
font-size:.8rem;
}
display:flex;
flex-direction:column;
justify-content:flex-end;
align-items:flex-end;
p{
  line-height:1rem;
  font-size:.8rem;
  width:400px;
}
`

const Homepage = () => {
  return ( 
  <HomepageComponent>
  <TextContainer>
    <h1>Tova Jertfelt</h1>
    <h2>Frontendare, konstnär, formgivare.</h2>
  </TextContainer>
  <LinksToPages/>
  <Explanation>Klicka på en rubrik ovan för att komma vidare</Explanation>
  <TextContainerRight>
  <h3>Utbildad på Konstfack & Nackademin YH Frontend-programmet</h3>
  <p>Med många järn i elden har jag erfarenhet av det visuella. Jag jobbar med det digitala i främsta rum, men har erfarenhet som webbredaktör, digital producent, kodare, frilansande illustratör & formgivare, samt som konstnär.</p>
  </TextContainerRight>
  <div>
   
    {/* <img src="https://www.tovajertfelt.se/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftova-linkedin-portratt.a78d20de.png&w=1080&q=75"/> */}
  </div>
  </HomepageComponent> );
}
 
export default Homepage;