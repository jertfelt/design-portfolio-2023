import { useEffect, useState } from "react";
import styled from "styled-components";
import CountingUp from "../Counter";
import { Bread, CVContent, GridItem, Period, Row } from "./Commons";
import { Grid } from "@component/components/stylings/Grids";
import { flex, device, fonts } from "@component/components/stylings/Stylings";
import Nackademin from "./Nackademin";
import { useTranslation } from "next-i18next";


const EducationStyle =styled.section`
background-color: ${({theme}) => theme.frontendcolors.alternativecontrast};
width:80%;
position: relative;
z-index:1;
padding-bottom:3rem;
padding-top:3rem;
padding:2rem;
@media screen and (max-width:700px){
  width:100vw;
  padding:3rem;
  padding-bottom:8rem;
  padding-left:10rem;
}
@media screen and (max-width:500px){
  width:100vw;
  padding:3rem;
  padding-left:10rem;
  padding-bottom:5rem;
}
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
h2{
  color:${({theme}) => theme.textPrimary};
}
`


const BlobInGrid = styled.div`
margin-top:-2rem;
margin-bottom:2rem;
padding:0;
display:flex;
align-items:center;
gap:1rem;
span{
  margin:0;
  padding:0;
  margin-bottom:1rem;
}
@media screen and (max-width:700px){
  display:none;
}
`

export const Knapp = styled.button`

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

const Mobile = styled.div`
@media screen and (min-width:800px){
display:none;
}`

const NotMobile = styled.div`
@media screen and (max-width:800px){
display:none;
}`

const Education = ({courses, education}) => {
  const {t} = useTranslation()
  const [doneCourses, setCourses] = useState([]);
  const [buttonMsg, setButtonMsg] = useState("Läs mer om frontend på Nackademin")
  const [show, setShow] = useState(false);

  const reveal = () => {
    if(show){
      setShow(false)
      setButtonMsg("Nackademins kurser")
    }
    else{
      setShow(true)
      setButtonMsg("Stäng")
    }
    }

  useEffect(() => {
    if(courses){
      setCourses(courses.filter(item => (item.done === true)))
    }
   
    }, [])
  const done = (doneCourses.length/courses.length *100);

  return (
    <EducationStyle>
    <CVContent>
    <h2>{t("cv.education")}</h2> 
    <Grid cv>
      
      {education && education.map(item => item).map((item,index) =>(
        <GridItem 
        key={index}>
          <Period>{item.period}</Period>
        <h3>{item.school}</h3>
        <h4>{item.title}</h4> 
        <Bread>{item.text}</Bread>
        {item.school === "Nackademin" && <>
       
      <BlobInGrid>
        <CountingUp
        type="utbildning"
        number={done}
        percent ={true}
        />
        </BlobInGrid>
        <Knapp 
        aria-label="button"
        type="button"
        onClick={reveal}>{buttonMsg}
      </Knapp>
      {show && <Mobile>
    <Nackademin
    courses={courses}
    />
    </Mobile> }
      </> 
     }
        </GridItem>
        ))}
   
      </Grid>
      {show && <NotMobile>
    <Nackademin
    courses={courses}
    />
    </NotMobile> }
    </CVContent>
    </EducationStyle>  );
}
 
export default Education;