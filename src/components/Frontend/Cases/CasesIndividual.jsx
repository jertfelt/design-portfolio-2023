import { useRouter } from "next/router";
import styled,{css} from "styled-components";
import { Container } from "@component/components/stylings/Containers";
import { flex, device } from "@component/components/stylings/Stylings";
import { Grid } from "@component/components/stylings/Grids";
import { useState, useEffect } from "react";
import Link from "next/link";
import HeaderIndividual from "./HeaderCaseIndividual";
import Image from "next/image";



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
min-height:100vh;`

const Row = styled.div`
display:flex;
flex-direction:row-reverse;
align-items:flex-end;
justify-content;flex-end;
gap:1rem;`

const ImageWrapper = styled.div`
width:100%;
max-width:50vw;
height:40vh;
position:relative;
`

const CaseIndividualPage = ({array, id}) => {
  console.log(array, id)
  let individual = array.filter(item => {
    return item.id.toString() === id
  })
  const [showBack, setBack] = useState(false)
  const [showButts, setShowButts] = useState(true)
  const [showFront, setFront] = useState(true)
  const [tags, setTags] = useState("")
  let max = (array.length);
  const next = Number(id)+1;
  const back = Number(id)-1; 


 
  useEffect(() => {
    if (id === undefined){
      setShowButts(false)
      console.log("id was undefined")
    }
    else{
      setShowButts(true)
    }
  },[id])
   
 
 useEffect(() => {
  if (Number(id) >= 1){
    setBack(true)

  }
  if (Number(id) >= max){

    setFront(false)
  }
},[id])

  return (
      <Section>
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
        // width={500}
        // height={500}
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
        // width={500}
        // height={500}
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
        // width={500}
        // height={500}
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
        <h3>{item.tags.c1} || {item.tags.c2} || {item.tags.c3}</h3>
          </Scrollable>
        ))}
      </Section>
    
    );
}
 
export default CaseIndividualPage;