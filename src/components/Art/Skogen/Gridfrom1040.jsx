import { SkogenSignswithTranslations } from "@component/data/exhibitions";
import { GridArt } from "../Skogen";
import { ImageWrapper } from "../ViKanBattre";
import Image from "next/image";
import { TextInEnglish } from "../Skogen";
import ursakta6 from "../../../../public/art/skylt--jertfelt--klimatneutral+copy.png"
import ursakta7 from "../../../../public/art/skylt--jertfelt--parken-1.png"
import ursakta8 from "../../../../public/art/skylt--jertfelt--pulkabacken+copy.png"
import styled from "styled-components";
import { useRef, useState } from "react";
export const Grid1200px = styled.div`
@media (max-width:1199px){
  display:none;
}`
export const Max1200px = styled.div`
@media (min-width:1199px){
  display:none;
}`

export const GridItem1040px = (item) => {

  return(
   
    <ImageWrapper grid>
    
    {item.item.sys.id === "ursakta6" && 
    <Image alt={item.item.img.fields.alt} quality={100} style={{objectFit:"contain",}} src={ursakta6}/>
    }
    {item.item.sys.id === "ursakta7" && 
    <Image alt={item.item.img.fields.alt} quality={100} style={{objectFit:"contain",}} src={ursakta7}/>
    }
    {item.item.sys.id === "ursakta8" && 
    <Image alt={item.item.img.fields.alt} quality={100} style={{objectFit:"contain",}} src={ursakta8}/>
    } 
  
  </ImageWrapper>
 
  )

}

const GridFrom1040px = ({language}) => {
 


  return ( <> 
  <Max1200px>
    {SkogenSignswithTranslations.map(item => (
      <GridArt attahundra key={item.sys.id}>
        {language !== "sv" ? <>
        <GridItem1040px item={item}/>
        <EnglishTextSkogen item={item.translation}/>
        </> :
        <>
         <GridItem1040px item={item}/>
         <SwedishTextSkogen item={item.swedishtext}/>
         </> 
        }
      </GridArt>
    ))}
   </Max1200px>
  </> );
}
 
export default GridFrom1040px;

export const EnglishTextSkogen = ({item}) => {
  return(
  <TextInEnglish>
  <p>Translation:</p>
  <h3>
    {item.first}<br/>{item.second}
  </h3>
  <p>
    {item.text}
  </p> 
</TextInEnglish>
)
}

export const SwedishTextSkogen = ({item}) => {
  return(  <TextInEnglish>
    <p>
      {item}
    </p>
  </TextInEnglish>)

}

export const GridSkogen1200pxMin = ({language}) =>{

  const GridItem= (item) => {

    return(
  
      <ImageWrapper grid 
      >
      
      {item.item.sys.id === "ursakta6" && 
      <Image alt={item.item.img.fields.alt} quality={100} style={{objectFit:"contain",}} src={ursakta6}/>
      }
      {item.item.sys.id === "ursakta7" && 
      <Image alt={item.item.img.fields.alt} quality={100} style={{objectFit:"contain",}} src={ursakta7}/>
      }
      {item.item.sys.id === "ursakta8" && 
      <Image alt={item.item.img.fields.alt} quality={100} style={{objectFit:"contain",}} src={ursakta8}/>
      } 
    
    </ImageWrapper>

    )
  
  }

return(
  <Grid1200px>
    <GridArt threeRepeat>
   {SkogenSignswithTranslations.map((item,i) => (
      <div key={item.sys.id}>
        {language !== "sv" ? <>
        <GridItem item={item} 
        />
        
        <EnglishTextSkogen item={item.translation}/>
        </> :
        <>
         
         <GridItem item={item}/>
         <SwedishTextSkogen item={item.swedishtext}/>
         </> 
        }
      </div>
    ))}
    </GridArt>
     </Grid1200px>
    
)



}