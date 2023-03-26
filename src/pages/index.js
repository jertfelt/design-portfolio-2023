import styled from "styled-components"
import LinksToPages from "@component/components/Homepage/Links"
import { InstagramButton, LinkedInButton } from "@component/components/SVG/Icons"


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
const ThreeColumnGrid= styled.div`
margin: 0;
display:grid;
@media (min-width: 700px){
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr;

}
` 

const Column = styled.div`
display:flex;
flex-direction:column;
gap:50vh;

div{

  h3{
    font-size:1.2rem;
    line-height:1.2rem;
    color:${({ theme }) => theme.contrast};
    padding-bottom:.5rem;
    }
  p{
    line-height:1rem;
    font-size:.8rem;
    width:400px;
    text-align: justify;
    text-justify: inter-word;
  }
}
`


const Homepage = () => {
  return ( 
  <>
  <HomepageComponent>
  <ThreeColumnGrid>
  <TextContainer>
  <Column>
  <div>
    <h1>Tova Jertfelt</h1>
    <h2>Frontendare, konstnär, formgivare.</h2>
    </div>
  
  <div>
  <h3>Utbildad på Konstfack & Nackademin YH Frontend-programmet</h3>
  <p>Med många järn i elden har jag erfarenhet av det visuella. Jag jobbar med det digitala i främsta rum, men har erfarenhet som webbredaktör, digital producent, kodare, frilansande illustratör & formgivare, samt som konstnär.</p>

  </div>
 
  </Column>
  </TextContainer>
  <LinksToPages/>
  
  <div>
   
  
  </div>
  </ThreeColumnGrid>
  {/* <TextContainer>
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
   
    {/* <img src="https://www.tovajertfelt.se/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftova-linkedin-portratt.a78d20de.png&w=1080&q=75"/> 
      </div>*/}

  </HomepageComponent> 

  </>
);
}
 
export default Homepage;