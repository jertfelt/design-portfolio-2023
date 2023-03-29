import Canvas from "./Canvas";
import { device, flex, fonts } from "@component/components/stylings/Stylings";
import styled from "styled-components"
import Link from "next/link";

import { useEffect, useState } from "react";
import { Knapp } from "./Education";


const Container = styled.section`

gap:30px;

margin-top:3rem;
padding-bottom:5rem;
h3{
  line-height:2rem;
  text-align: left;
  font-family: Arya;
  color:${({theme}) => theme.lightblue};
  font-size:${fonts.fontSizes.large};
  @media screen and (max-width:800px){
    font-size:${fonts.fontSizes.large};
  }
}
h4{
  margin-top:-1rem;
}
p{
  line-height:1.5rem;
  a{
    text-decoration: none;
    color:${({theme}) => theme.lightblue};
  }
}
@media screen and (max-width:800px){
  margin:0;
  padding:1rem;
  max-width:500px;
}
`


const NackademinGrid = styled.div`
display:grid;
gap: 1rem;
width:100%;
@media ${device.tablet}{
  grid-template-columns: repeat(2, 1fr)
}
@media screen and (max-width:800px){
  margin:0;
  gap:2rem;
  width:80%;
}
`

const Row = styled.div`
display:flex;
gap:1rem;
align-items:center;
`


const HoverElement = styled.div`
position: absolute;
bottom:8%;
left:55%;
text-align:center;
width:20%;
z-index:20;
padding:1rem;
border-radius: 29px;
background-color: ${({theme}) => theme.frontendcolors.background};
line-height:1.5rem;
color:${({theme}) => theme.textPrimary};
@media screen and (max-width:800px){
  bottom:20%;
}
`

const Kursinnehåll = styled.ul`
list-style: none;
line-height:1.3rem;
padding-left:0;
`
const Table = styled.table`
border: 1px solid;
padding:10px;
border-radius:29px;
th{padding-right:2rem;
  padding-bottom:.5rem;
height:30px;}
tr{
  text-align:left;
}
th, td{
  padding: 5px;
  border-bottom: 1px solid ${({theme}) => theme.lightblue};
}
.notDone{
  color:${({theme}) => theme.frontendcolors.lightblue};
}
tr:hover{
  background-color:${({theme}) => theme.frontendcolors.background};
}
`

const Nackademin = ({courses}) => {
  const [doneCourses, setCourses] = useState([]);
  const [all, setAll] = useState([])
  const [isShown, setIsShown] = useState(false);


  useEffect(() => {
    setCourses(courses.filter(item => (item.done === true)))
    setAll(shuffle(courses))
    }, [])

    const shuffle = (array) => {
      let currentIndex = array.length, randomIndex;
      while (currentIndex != 0){
        randomIndex = Math.floor(Math.random()* currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [
          array[randomIndex], array[currentIndex]];
      }
      return array;
    }

    const done = (doneCourses.length/courses.length *100);

    const data2 = {
      labels: [
        "Färdiga kurser (i procent)",
        "Ej klara kurser (i procent)"
      ],
      datasets: [{
        data: [`${done}` ,(100-`${done}`)],
        backgroundColor: [
          '#bee5f5',
          `transparent`,
        ],
        }],
    }
    const configdata2 = {
      borderWidth: 0,
      responsive: true,

      plugins: {
        legend: {
          display:false,
          position: 'bottom',
          labels:{
            color: "white",
          }
        },
        title: {
          display: false,
          text: 'Avklarade kurser:',
          color: "white",
        }
      }
    }

  return (
    <Container>
    <NackademinGrid>
      <div>
    <h3>Frontendprogrammet</h3>
    <h4>Nackademin - Yrkeshögskola</h4>
    <p>2021-2023</p>
    </div>
    <Row>
    <Canvas
      data={data2}
      options={configdata2}/>
            <h3>Totalt {doneCourses.length} av {courses.length} kurser avklarade</h3>
    </Row>
    <div>
    <Table>
  <tr>
    <th>Kurs</th>
    <th>Betyg</th>
    <th>Omfattning</th>
  </tr>
  {all.map(item => {
    if((item.done !== true)){
      return <tr className="notDone"
      onMouseEnter={() => setIsShown(true)}
            onMouseLeave={() => setIsShown(false)}
      key={item.id}>
        <td>{item.title}</td>
        <td>N/A</td>
        <td>{item.omfattning}</td>
      </tr>
    }

    else{
      return <tr
      key={item.id}
      >
        <td>{item.title}</td>
        <td>{item.betyg}</td>
        <td>{item.omfattning}</td>
      </tr>
    }
  })}

</Table>
      {isShown && (
        <HoverElement>
          Den här kursen är antingen igång eller kommer att bli klar under läsåret 2022-23.
        </HoverElement>
      )}

      </div>
      
    <div>

      <Kursinnehåll>
          <h4>Kursbeskrivning:</h4>
          <li><b>Javascript 1 - </b>grundläggande javascript</li>
          <li><b>Javascript 2 - </b>API-anrop, fetch, querystrings och local storage</li>
          <li><b>Javascript 3 -</b> React och Redux</li>
          <li><b>Javascript 4 -</b> Tester med React och Jest</li>
          <li><b>JS som backend-språk -</b> Node JS </li>
          <li><b>Interaktion med CMS - </b> Strapi CMS, Postman och Axios </li>
          <li><b>Frontend-projekt - </b> Hur man jobbar i grupparbete </li>
          <li><b>LIA 1 & 2 - </b> Lärande I Arbete. Praktik på arbetsplats.</li>
        </Kursinnehåll>
        <Knapp>
        <Link href="https://nackademin.se/utbildningar/frontend-utvecklare/">Läs mer på Nackademin</Link>
        </Knapp>

      <div>

      </div>
      </div>

      </NackademinGrid>
    

    </Container>
   );
}

export default Nackademin;
