import { useTranslation } from "next-i18next";
import { GridArt } from "./Skogen";
import { ImageWrapper } from "./ViKanBattre";


const Grid = ({imgs, type}) => {
  
  return (<>
    {type === "dream" ? <GridArt attahundra>
      {imgs.map((img, i) => {
        return(
          <div key={i} className={`item_${i}`}>
            <ImageWrapper grid>
             
            <img quality={100} alt="" src={img.src}/>
       
            </ImageWrapper>
          </div>
        )
      })}
 
    </GridArt>:<GridArt sjuhundra>
      {imgs.map((img, i) => {
        return(
          <div key={i} className={`item_${i}`}>
            <ImageWrapper grid>
            <img quality={100} alt="" src={img.src}/>
            </ImageWrapper>
          </div>
        )
      })}

    </GridArt> }
    </>
    );
}
 
export default Grid;