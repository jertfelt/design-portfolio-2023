import Flickity from "react-flickity-component";
import "flickity/css/flickity.css";
const flickityOptions = {
  initialIndex: 2
}

const Carousel =({
  img0,
  img1,
  img2,
  img3
}) => {
return (
  <Flickity
    className={'carousel'} // default ''
    elementType={'div'} // default 'div'
    options={flickityOptions} // takes flickity options {}
    disableImagesLoaded={false} // default false
    reloadOnUpdate // default false
    static // default false
  > <img src={img1}/>
    <img src={img0}/>
    <img src={img3}/>
    <img src={img2}/>
  </Flickity>
)
}
export default Carousel