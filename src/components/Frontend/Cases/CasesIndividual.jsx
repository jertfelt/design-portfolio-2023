import { useRouter } from "next/router";
import styled,{css} from "styled-components";
import { Container } from "@component/components/stylings/Containers";
import { flex, device } from "@component/components/stylings/Stylings";
import { Grid } from "@component/components/stylings/Grids";
import { useState, useEffect } from "react";
import Link from "next/link";
import HeaderIndividual from "./HeaderCaseIndividual";
import Image from "next/image";
import NotFound from "@component/pages/404";



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
 background-color: ${({theme}) => theme.frontendcolors.background};
 color:${({theme}) => theme.textPrimary};
 padding:4rem;
 z-index:10;
margin-top:85vh;
min-height:100%;`

const Arrow = styled.h3`
font-size:42px;
&:hover{
  background-color:${({theme}) => theme.frontendcolors.alternativecontrast};
}

border-radius: 50%;

text-align:center;
padding:1rem;`

const ImageWrapper = styled.div`
width:100%;
max-width:50vw;
height:40vh;
position:relative;
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
 
  button{
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
  console.log(array, id)
  let individual = array.filter(item => {
    return item.id.toString() === id
  })
  const [showBack, setBack] = useState(false)
  const [showButts, setShowButts] = useState(true)
  const [showFront, setFront] = useState(true)
 
  let max = (array.length);
  const next = Number(id)+1;
  const back = Number(id)-1; 
  console.log(next, max, back)

 
  useEffect(() => {
    if (id === undefined){
      setShowButts(false)
     
    }
    else{
      if (Number(id) >= 1){
     
        setBack(true)
      }
      if (Number(id) >= max){
        console.log(Number(id), "id")
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
            <div>
             <h3>Om projektet:</h3>
             <p>{item.text}</p> 
             <p>{item.moreinfo.text1}</p>
            </div>
            <Grid>
            <ImageWrapper>
        <Image 
     
        fill
        quality={100}
        sizes="100vw"
        style={{
          objectFit: 'contain',
        }}
        alt={item.extra.file01.alt}
        src={item.extra.file01.url}
         />
       
        </ImageWrapper>
        <ImageWrapper>
        <Image 

        fill
        quality={100}
        sizes="100vw"
        style={{
          objectFit: 'contain',
        }}
        alt={item.extra.file02.alt}
        src={item.extra.file02.url}
         />
       
        </ImageWrapper>
        <ImageWrapper>
        <Image 
      
        fill
        quality={100}
        sizes="100vw"
        style={{
          objectFit: 'contain',
        }}
        alt={item.extra.file03.alt}
        src={item.extra.file03.url}
         />
       
        </ImageWrapper>
            </Grid>
        <p>{item.moreinfo.text2}</p>
        <p>{item.moreinfo.text3}</p>
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