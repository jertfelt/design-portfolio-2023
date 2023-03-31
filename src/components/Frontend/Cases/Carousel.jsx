import Flickity from "react-flickity-component";
import "flickity/css/flickity.css";
import Image from "next/image";
const flickityOptions = {
  initialIndex: 2
}

const Carousel =({
  img0,
  alt0,
  alt1,
  alt2,
  alt3,
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
  > <img src={img1} alt={alt1}/>
    <img src={img0} alt={alt0}/>
    <img src={img3} alt={alt3}/>
    <img src={img2} alt={alt2}/>
  </Flickity>
)
}
export default Carousel