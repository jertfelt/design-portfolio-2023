import { useTranslation } from "next-i18next";
import { GridArt } from "./Skogen";
import { ImageWrapper } from "./ViKanBattre";
import styled from "styled-components";

const Background= styled.div`
background:${({theme}) => theme.artcolors.primaryLightest};
color:${({theme}) => theme.textSecondary};
display:flex;
flex-direction:column;
height:100%;
justify-content:center;
align-items:center;
width:100%;
margin:0;
margin-top:-1rem;
margin-left:-2rem;
`

const Grid = ({imgs, type}) => {
  const {t} = useTranslation()
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
      {/* <Background>
      <p className="curator">Curator: Alba Folgado</p>
      <p className="link">{t("artistpages.forest.linktxt")} <a href="https://uppsalakonstnarsklubb.se/projekt-och-event/Rusmus" target="_blank">Rusmus</a> {t("artistpages.forest.linktxt2")}</p>
      </Background> */}
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
      {/* <Background>
      <p className="curator">Curator: Alba Folgado</p>
      <p className="link">{t("artistpages.forest.linktxt")} <a href="https://uppsalakonstnarsklubb.se/projekt-och-event/Rusmus" target="_blank">Rusmus</a> {t("artistpages.forest.linktxt2")}</p>
      </Background> */}
    </GridArt> }
    </>
    );
}
 
export default Grid;