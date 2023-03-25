import Image from "next/image";
import { useState } from "react";
import styled from "styled-components";

const ImageDiv = styled.div`
img{
  color:${({ theme }) => theme.contrast};
}`

export const OnHoverImage = ({
  hoveredImg,
  img,
  alt
}) => {
  const [hover, setHover] = useState(false);
  return (
    <ImageDiv
    onMouseEnter={() => setHover(true)}
    onMouseLeave={() => setHover(false)}
  >
    {!hover ? (
      <Image src={img} 
      alt={alt}
      fill />
    ) : (
      <Image src={hoveredImg} 
      fill
      alt={alt} />
    )}
  </ImageDiv>
    );
}
 
