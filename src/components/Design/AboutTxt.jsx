import styled, {css} from "styled-components";


const Section = styled.div`
min-height:30vh;
padding:0;
margin:0;
padding-bottom:10vh;
color: ${({theme}) => theme.primaryText};
background: ${({theme}) => theme.accent};
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
div{
    text-align:center;
   width:100%;
    .wrapper{
       width:70%;
       min-with:50vw;
    background:red;
        margin: auto;
        overflow-x: hidden;
        p{
            font-size:3rem;
                animation-name: rightToLeft;
                animation-duration: 4.5s;
                animation-timing-function: linear;
                animation-iteration-count: infinite;
            
            font-weight: bold;
            color: ${({theme}) => theme.primaryText};
 
        }
        .left{
            animation-name: leftToright;
            animation-duration: 4.5s;
            animation-timing-function: linear;
            animation-iteration-count: infinite;
        
        font-weight: bold;
        color: ${({theme}) => theme.primaryText};

        }
    }
}
@keyframes rightToLeft {
    0% {
      transform: translateX(0px);
    }
    100% {
      transform: translateX(-160px);
    }
  }
  @keyframes leftToright {
    0% {
      transform: translateX(-100%);
    }
    10% {
        transform: translateX(-30%)
      }
    100% {
      transform: translateX(100%);
    }
  }
`


const AboutTxt = () => {
    return ( 
    <Section>
        <div> 
            <h2>Sedan 2013 formger jag rapporter, grafiska identiteter och manualer för orginisationer.</h2>
        <h3>Jag vill fokusera på tillgänglighet, social hållbarhet, och viktiga frågor när jag formger.</h3>
        </div>
        <div>
            <h2>Kunder i urval:</h2>
           
            <div class="wrapper">
            <p class="right">Teskedsorden </p>
            <p class="left"><i>Forum Syd</i></p>
            <p class="right">Amnesty Sverige</p>
            </div>
        </div>
    </Section> );
}
 
export default AboutTxt;