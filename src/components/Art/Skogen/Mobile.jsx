import ImageSlider from "../Slider";
import styled from "styled-components";
import { ursaktaImg } from "../Skogen/Imgs";
import Grid from "../Grid";
export const Mobile= styled.div`
@media (min-width:700px){
  display:none;
}`
export const Tablet = styled.div`
@media (max-width:700px){
  display:none;
}
`

const MobileSectionSkogen = () => {
  return (
    <Mobile>
<ImageSlider 
slides={ursaktaImg}
  format=""
  type="light"
/>
</Mobile>
)
}
 
export default MobileSectionSkogen;

export const TabletSectionSkogen = () => {
  return(
    <Tablet>
    <Grid imgs={ursaktaImg}
    type="skogen"/>
    </Tablet>
  )
}
