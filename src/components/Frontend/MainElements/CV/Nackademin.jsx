import Canvas from "./Canvas";
import { device, flex, fonts } from "@component/components/stylings/Stylings";
import styled from "styled-components"
import Link from "next/link";
import { useEffect, useState } from "react";
import { Knapp } from "./Education";
import { useTranslation } from "next-i18next";


const Container = styled.section`
padding:2rem;
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
  color:${({theme}) => theme.textPrimary};
}
p{
  color:${({theme}) => theme.lightblue};
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
padding-top:0;
margin-top:-1rem;
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
color:${({theme}) => theme.textPrimary};
line-height:1.6rem;
`
const Table = styled.table`
width:80%;
color:${({theme}) => theme.textPrimary};
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
  color:${({theme}) => theme.frontendcolors.background};
  &:hover{
    color:${({theme}) => theme.frontendcolors.lightblue};
  }
}
tr:hover{
  background-color:${({theme}) => theme.frontendcolors.background};
}
`

const Nackademin = ({courses}) => {
  const [doneCourses, setCourses] = useState([]);
  const [all, setAll] = useState([])
  const [isShown, setIsShown] = useState(false);
  const [language, setLang] = useState(document.getElementsByTagName('html')[0].getAttribute('lang'))
  const {t} = useTranslation()

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
        "%",
        "%"
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
    <h3>{t("nackademin.h3")}</h3>
    <h4>{t("nackademin.h4")}</h4>
    <p>2021-2023</p>
    </div>
    <Row>
      <Canvas
      data={data2}
      options={configdata2}/>
        <h3>{doneCourses.length} {t("nackademin.total")} {courses.length}  {t("nackademin.avklarade")}</h3>
    </Row>
    <div>
    <Table>
      <thead>
  <tr>
    <th>{t("nackademin.kurs")}</th>
    <th>{t("nackademin.Betyg")}</th>
    {/* <th>{t("nackademin.Omfattning")}</th> */}
  </tr>
  </thead>
  <tbody>
  {all.map(item => {
    if((item.done !== true)){
      return <tr className="notDone"
      onMouseEnter={() => setIsShown(true)}
            onMouseLeave={() => setIsShown(false)}
      key={item.id}>
        <td>{item.title}</td>
        <td>N/A</td>
        {/* <td>{item.omfattning}</td> */}
      </tr>
    }

    else{
      return <tr
      key={item.id}
      >
        
        <td>{item.title}</td>
        <td>{item.betyg}</td>
        {/* <td>{item.omfattning}</td> */}
      </tr>
    }
  })}
  </tbody>

</Table>
      {isShown && (
        <HoverElement>
          {t("nackademin.info")}
        </HoverElement>
      )}

      </div>
    <div>
  
      <Kursinnehåll>
          <h4>{t("nackademin.kursbeskrivning")}</h4>
          <li><b>Javascript 1 - </b> {t("nackademin.desc")}</li>
          <li><b>Javascript 2 - </b> {t("nackademin.desc2")}</li>
          <li><b>Javascript 3 -</b> {t("nackademin.desc3")}</li>
          <li><b>Javascript 4 -</b> {t("nackademin.desc4")}</li>
          <li><b>{t("nackademin.JS")} -</b> Node JS </li>
          <li><b>{t("nackademin.CMS")} - </b>{t("nackademin.desc5")} </li>
          <li><b>{t("nackademin.FE")} - </b>{t("nackademin.desc6")} </li>
          <li><b>LIA 1 & 2 - </b>{t("nackademin.desc7")}</li>
        </Kursinnehåll>
        <Knapp>
        <Link href="https://nackademin.se/utbildningar/frontend-utvecklare/"
        target="_blank" rel="nofollow">{t("nackademin.btn")}</Link>
        </Knapp>

      <div>

      </div>
      </div>

      </NackademinGrid>
    

    </Container>
   );
}

export default Nackademin;
