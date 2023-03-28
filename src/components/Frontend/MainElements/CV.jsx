import styled, {css} from "styled-components";
import { flex, device, fonts } from "@component/components/stylings/Stylings";
import { Container } from "@component/components/stylings/Containers";
import { useEffect, useState, } from "react";
import { Grid } from "@component/components/stylings/Grids";
import { work, education, courses, erfarenhet } from "@component/data/frontendCV";
import CountingUp from "./Counter";
import Link from "next/link";


const Content = styled.section`
min-height:130vh;
position: relative;
background-color:rgba(50, 57, 57, 0.3);
width:100vw;
height:100%;
z-index:10;
${flex}
padding-bottom:10em;

`
const IntroParagraph = styled.p`
line-height:150%;
width:50%;
`
const Heading = styled.div`
${flex({align:"center", justify:"space-around"})}
z-index:99;
color:${({theme}) => theme.white};
padding:1rem;
width:100%;
height:50%;


a{
  color:${({theme}) => theme.frontendcolors.lightblue};
font-weight:bold;

&:hover{
border-radius: ${({theme}) => theme.borderradius.fourth};
background-color:${({theme}) => theme.frontendcolors.alternativecontrast}; }
text-decoration:none;}
`
const Title = styled.h2`
font-family: Arya;
font-size:72px;
line-height:1rem;
  border-radius: ${({theme}) => theme.borderradius.first};
  background-color:${({theme}) => theme.frontendcolors.background};
  padding:3rem;
  color:${({theme}) => theme.frontendcolors.lightblue}
padding:2rem;
margin-bottom:2rem;
&:hover{
  border-radius: ${({theme}) => theme.borderradius.second};
}`

const CVContent=styled.div`
h2{
  font-family: Arya;
  font-size: ${fonts.fontSizes.mediumlarge};
  text-decoration:underline;
  text-transform:uppercase;
  text-align:left;
}
`

const Row = styled.div`
${flex}
gap:4rem;
@media only screen and (${device.laptop}){
  ${flex({direction:"row", align:"center", justify:"center"})}
  padding:5em;
 
}`

const GridItem = styled.article`
  max-width:100%;
h3{
  font-family:"Arya";
  font-size:${fonts.fontSizes.large};
  color: ${({theme}) => theme.lightblue};
  line-height:1.5rem;
}
h4{
  margin-top:-1rem;
  font-size:${fonts.fontSizes.medium};
}
@media  screen and (max-width:600px){
  padding-left:1rem;
}
li{
  line-height:1.5rem;
}
img{
  border-radius: 50%;
  margin-top:1rem;
}
${props => 
  props.work && 
  css`
  &:hover{
    border-radius:${({theme}) => theme.borderradius.third};
    background-color:${({theme}) => theme.frontendcolors.alternativecontrast};
  }
  `}
  ${props => 
  props.techstack && 
  css`
 
    h3{
      text-align:center;
    }
    ul{
      display:grid;
      grid-template-columns: repeat(2, 1fr);
      column-gap:1rem;
      
      width:100%;
      li{
        &:hover{
          color:${({theme}) => theme.frontendcolors.lightblue};
        }
      }
    }
 
  `}
`
const Period = styled.p`
font-size:${fonts.fontSizes.mediumsmall};
margin-bottom:-1rem;
font-weight:bold;
`

const Bread= styled.p`
width:80%;
line-height:1.8rem;
font-size:${fonts.fontSizes.mediumsmall};
margin-top:-1rem;
padding:0;
`


const Arbete = styled.section`
color:${({theme}) => theme.textPrimary};
background-color: ${({theme}) => theme.frontendcolors.background};
width:80%;
position: relative;
z-index:1;
padding-bottom:3rem;
padding-top:rem;
padding:2rem;
margin-top:4rem;
margin-bottom:5em;
&::before {
  top: 0;
  -webkit-transform: skewY(-4deg);
  transform: skewY(-4deg);
  -webkit-transform-origin: 0% 0;
  transform-origin: 0% 0;
  background: inherit;
  content: "";
  display: block;
  height: 30%;
  left: 0;
  position: absolute;
  right: 0;
  z-index: -1;
}
&::after {
  background: inherit;
  content: '';
  display: block;
  height: 100%;
  left: 0;
  position: absolute;
  right: 0;
  z-index: -1;
  bottom: 0;
    -webkit-transform: skewY(-4deg);
  transform: skewY(-4deg);
  -webkit-transform-origin: 100%;
  transform-origin: 100%;
}
`

const Wisdom =styled.section`
background-color: ${({theme}) => theme.vividblue};
width:80%;
position: relative;
z-index:1;
padding-bottom:3rem;
padding-top:3rem;
padding:2rem;
margin-bottom:5em;
&::before {
  top: 0;
  -webkit-transform: skewY(-4deg);
  transform: skewY(-4deg);
  -webkit-transform-origin: 0% 0;
  transform-origin: 0% 0;
  background: inherit;
  content: "";
  display: block;
  height: 30%;
  left: 0;
  position: absolute;
  right: 0;
  z-index: -1;
}
&::after {
  background: ${({theme}) => theme.vividblue};
  content: '';
  display: block;
  height: 50%;
  left: 0;
  position: absolute;
  right: 0;
  z-index: -1;
  bottom: 0;
  
  -webkit-transform: skewY(8deg);
  transform: skewY(8deg);
  -webkit-transform-origin: 100%;
  transform-origin: -10%;
}
`

const Education =styled.section`
background-color: ${({theme}) => theme.brown};
width:80%;
position: relative;
z-index:1;
padding-bottom:3rem;
padding-top:3rem;
padding:2rem;
margin-bottom:5em;
&::before {
  top: 0;
  -webkit-transform: skewY(-4deg);
  transform: skewY(-4deg);
  -webkit-transform-origin: 0% 0;
  transform-origin: 0% 0;
  background: inherit;
  content: "";
  display: block;
  height: 30%;
  left: 0;
  position: absolute;
  right: 0;
  z-index: -1;
}
&::after {
  background: inherit;
  content: '';
  display: block;
  height: 100%;
  left: 0;
  position: absolute;
  right: 0;
  z-index: -1;
  bottom: 0;
    -webkit-transform: skewY(0deg);
  transform: skewY(-4deg);
  -webkit-transform-origin: 100%;
  transform-origin: 100%;
}
`

const Erfarenhet = styled.div`
color:white;
ul{
list-style:none;
}
`
const Knapp = styled.button`
padding:18px;
font-size:${fonts.fontSizes.mediumsmall};
border-color:${({theme}) => theme.white};
background:transparent;
border-radius:${({theme}) => theme.borderradius.second};
color:${({theme}) => theme.frontendcolors.lightblue};
border:solid;
cursor: pointer;
max-width:50%;
&:hover{
  border-color:${({theme}) => theme.white};
  color:${({theme}) => theme.white};
}
&:active{
  background-color:${({theme}) => theme.frontendcolors.lightblue};
  border:none;
}
&:focus{
  background-color:transparent;
  color:${({theme}) => theme.white};
}
`


const BlobInGrid = styled.div`
margin-top:-2rem;
padding:0;
display:flex;
align-items:center;
gap:1rem;
span{
  margin:0;
  padding:0;
  margin-bottom:1rem;
  
}
`

const Centered = styled.div`
display:flex;
width:100%;
align-items:center;
justify-content:center;
`

const CVFrontend = () => {
  const [buttonMsg, setButtonMsg] = useState("Läs mer om frontend på Nackademin")
  const [show, setShow] = useState(false);
  const [notShow, setNotShow] = useState(true);
  const [doneCourses, setCourses] = useState([]);

  useEffect(() => {
    setCourses(courses.filter(item => (item.done === true)))
    }, [])
  const done = (doneCourses.length/courses.length *100);
  const listItems = erfarenhet.map(item => item.li)

  const reveal = () => {
    if(show){
      setShow(false)
      setButtonMsg("Läs mer om vad jag gör på Nackademin")
    }
    else{
      setShow(true)
      setButtonMsg("Stäng")
    }
    }
  return (  
  <Container xlarge>
    <Content>
      <Heading>
      <Title>CV</Title>
        <IntroParagraph>Här följer relevant urval av jobb, utbildningar och erfarenheter som har med frontend att göra. Se gärna hela mitt cv på <Link href="https://www.linkedin.com/in/tovajertfelt/">Linkedin.</Link></IntroParagraph>
        </Heading>
        <Arbete>
        <CVContent>
    <h2>Arbete</h2>
    <Grid cv>
      {work && work.map(item => item).map((item,index) =>(
        <GridItem 
        work
        key={index}>
        <Period>{item.period}</Period>
        <h3>{item.workplace}</h3>
        <h4>{item.title}</h4>
        <Bread>{item.text}</Bread>
        </GridItem>
        ))
      
      }
      <GridItem work>
      <Period>Oktober 2022- Mars 2023</Period>
        <h3>Praktik!
        </h3>
        <Bread>Just nu går jag praktik som frontendare hos Vinnovera/Delorean, Stockholm.
        Våren 2023 var jag även praktiserande junior konsult hos Society Icon via Vinnovera/Deloren.
        </Bread>
      </GridItem>
      </Grid>
      
      </CVContent>
      </Arbete>
      <Education>
      <CVContent>
      <h2>Utbildning</h2> 
      <Grid cv>
        
        {education && education.map(item => item).map((item,index) =>(
          <GridItem 
          key={index}>
            <Period>{item.period}</Period>
          <h3>{item.school}</h3>
          <h4>{item.title}</h4>
         
          <Bread>{item.text}</Bread>
          {item.school === "Nackademin" &&  
        <BlobInGrid>
              <CountingUp
          number={done}
          percent ={true}
          />
          </BlobInGrid>}
          </GridItem>
          ))}
        <Knapp 
          aria-label="button"
          type="button"
          onClick={reveal}>{buttonMsg}
        </Knapp>
        </Grid>
        {show && <Row>
      {/* <Nackademin/> */}
      </Row> }
      </CVContent>
      </Education>
 
      <Wisdom>
      <Erfarenhet>
      
      <CVContent>
        <h2>Erfarenhet</h2>
        <Row>
        {erfarenhet && erfarenhet.map((item,i) => (
          <GridItem key={i}>
        {i !== 0 && <div>
          <h3>{item.name}</h3>
        <ul>
        
        {item.li.map(item => (
          <li>{item}</li>
        ))}
          </ul>
        </div>}
        </GridItem>
        ))}
        </Row>
        <Centered>
        {erfarenhet && erfarenhet.map((item,i) => (
          <GridItem 
          techstack
          key={i}>
        {i === 0 && <>
          <h3>{item.name}</h3>
        <ul>
        {item.li.map(item => (
          <li>{item}</li>
        ))}
          </ul>
        </>}
        </GridItem>
        ))}
        </Centered>
        <Grid>
      
       
          
        </Grid>
       
      
      </CVContent>
   
      </Erfarenhet>
      </Wisdom>
        </Content>
        </Container> );
}
 
export default CVFrontend;