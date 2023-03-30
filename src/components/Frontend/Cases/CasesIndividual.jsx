
import styled,{css} from "styled-components";
import { flex, device, fonts } from "@component/components/stylings/Stylings";
import { Grid } from "@component/components/stylings/Grids";
import { useState, useEffect } from "react";
import Link from "next/link";
import HeaderIndividual from "./HeaderCaseIndividual";
import Image from "next/image";
import NotFound from "@component/pages/404";
import Carousel from "./Carousel";

const Section = styled.section`
background-color: ${({theme}) => theme.frontendcolors.background};
width:100%;
width:100vw;
margin:0;
height:100%;
min-height:100vh;
z-index:0;
display:flex;
flex-direction:column;
`

 const Scrollable = styled.div`

ol{
  display:none;
}

.flickity-viewport{
  max-height:800px;
  img{
    max-height:800px;
  }
  @media (max-width:700px){
    display:none;
    // max-height:500px;

    // margin:0;

    // img{
    //   max-height:500px;
      
    // }
  }
  @media (max-width:1000px){
    max-height:500px;
    img{
      max-height:500px;
    }
  }
}

.flickity-button{
  background: ${({theme}) => theme.frontendcolors.background};
  color:${({theme}) => theme.contrast};
  margin:1rem;
  border:none;
  @media (max-width:700px){
    display:none;
  }
}

 background-color: ${({theme}) => theme.frontendcolors.background};
 color:${({theme}) => theme.textPrimary};
 padding:4rem;
 z-index:10;
margin-top:85vh;
min-height:100%;
h2{
  font-size: ${fonts.fontSizes.medium};
  color:${({theme}) => theme.lightblue};
}
hr{
  height:2px;
  border:none;
  color:${({theme}) => theme.textPrimary};
  background-color:${({theme}) => theme.textPrimary};
}
`
const About = styled.div`
width:80%;
font-size:20px;
line-height:28px;
padding-left:10px;
padding-top:2rem;
padding-bottom:2rem;
@media(max-width:800px){
   padding:0;
   width:90%;
}
`

const Arrow = styled.h3`
padding-top:2rem;
font-size:42px;
padding:1px;
&:hover{
transform: rotate(5deg);
}
text-align:center;
`


const RowSpaceapart = styled.div`
display:flex;
flex-direction:row-reverse;
height:10vh;
width:100%;
align-items:center;
justify-content: space-between;
gap:3rem;
.links{
  display:flex;
  gap:1rem;
  flex-direction:row;
 @media(max-width:800px){
  padding-top:1rem;
  width:100%;

}
  button{
    cursor:pointer;
    padding:6px;
    background-color: transparent;
    border: 2px solid;
    border-color: ${({theme}) => theme.textPrimary};
    color: ${({theme}) => theme.textPrimary};
    &:hover{
      border-radius:${({theme}) => theme.borderradius.third};
      border-color: ${({theme}) => theme.frontendcolors.lightblue};
      color: ${({theme}) => theme.frontendcolors.lightblue};
    }
  }
}`

const CaseIndividualPage = ({array, id}) => {
  let individual = array.filter(item => {
    return item.id.toString() === id
  })
  const [showBack, setBack] = useState(false)
  const [showButts, setShowButts] = useState(true)
  const [showFront, setFront] = useState(true)
 
  let max = (array.length);
  const next = Number(id)+1;
  const back = Number(id)-1; 

  useEffect(() => {
    if (id === undefined){
      setShowButts(false)
     
    }
    else{
      if (Number(id) >= 1){
     
        setBack(true)
      }
      if (Number(id) >= max){

        setFront(false)
      }
      setShowButts(true)
    }
  },[id])
   


  return (
      <Section>
      {id >=0 && id >= max ? 
      <NotFound/>: <>
      <HeaderIndividual individual={individual}/>
      {individual.map((item, i)=> (
           <Scrollable key={i}>
             <h2>
            {item.tag}
            </h2>
            <About>
             <h3>Om projektet:</h3>
             <p>{item.text}</p> 
             <p>{item.moreinfo.text1}</p>
            </About>
           <Carousel 
           img0={item.extra.file03.url}
           img1={item.sources.imgurl}
           img2={item.extra.file01.url}
           img3={item.extra.file02.url}
           />
        
        <About>
        <p>{item.moreinfo.text2}</p>
        <p>{item.moreinfo.text3}</p>
        </About>
        <hr></hr>
        <RowSpaceapart>
          <div className="links">
          {item.sources.github !== ""&& <Link href={item.sources.github}
          target="_blank"><button>Github</button></Link>}
          {item.sources.link !== "" && <Link href={item.sources.link}
           target="_blank"><button>Se mer</button></Link>}
          </div>
        <h3>{item.tags.c1} || {item.tags.c2} || {item.tags.c3}</h3>
        </RowSpaceapart>
        <RowSpaceapart>
        {showButts ? ( <>
          {showFront &&
        <Link href={'/frontend/cases/' + next}>
          <Arrow>
       &#10547;
        </Arrow>
        </Link>
      }
      {showBack && 
      <Link href={'/frontend/cases/' + back}>
        <Arrow>
        &#11071; 
        </Arrow>
        </Link>
      }
      </>
      )
      : (null)}
        </RowSpaceapart>
          </Scrollable>
        ))}
      </>}
      </Section>
    
    );
}
 
export default CaseIndividualPage;