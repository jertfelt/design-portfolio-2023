import { SkogenSignswithTranslations } from "@component/data/exhibitions";
import { GridArt } from "../Skogen";
import { ImageWrapper } from "../ViKanBattre";
import Image from "next/image";
import { TextInEnglish } from "../Skogen";
import ursakta6 from "../../../../public/art/skylt--jertfelt--klimatneutral+copy.png"
import ursakta7 from "../../../../public/art/skylt--jertfelt--parken-1.png"
import ursakta8 from "../../../../public/art/skylt--jertfelt--pulkabacken+copy.png"

const GridFrom1040px = ({language}) => {


  const GridItem1040px = (item) => {
    console.log(item.item, "test")
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

 

  return ( <>
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
  
  </> );
}
 
export default GridFrom1040px;



export const EnglishTextSkogen = ({item}) => {
  console.log(item)
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
