import React, { useState } from 'react';
import Image from 'next/image';
import { ImageWrapper } from './ViKanBattre';
import styled from 'styled-components';

const Slider = styled.div`
position: relative;
margin-bottom:3rem;
margin-top:3rem;
button{
background:transparent;
height:2rem;
width:2rem;
padding:8px;
display:flex;
align-items:center;
top: 50%;
@media (min-width:1040px){
  top:80%;
}
position:absolute;
font-size:2rem;
border-radius:50px;
border:none;
font-weight:bold;
z-index: 10;
cursor: pointer;
color: ${({theme}) => theme.textSecondary};
user-select: none;
&:hover{
  color: ${({theme}) => theme.artcolors.primaryLight};
}
@media (min-width:800px){
  font-size:4rem;
  right:20%;
}
}
.right-arrow{
right: 5px;
@media (min-width:800px){
  
  right:20%;
}
}
.right-arrow-dark{
  right: 5px;
  color: ${({theme}) => theme.textPrimary};
  &:hover{
    color: ${({theme}) => theme.artcolors.primaryLightest};
  }
  @media (min-width:800px){
   
    right:20%;
  }
}
.left-arrow{
  left: 5px;
  @media (min-width:800px){
   
    left:10%;
  }
}
.left-arrow-dark{
  left: 5px;
  color: ${({theme}) => theme.textPrimary};
  &:hover{
    color: ${({theme}) => theme.artcolors.primaryLighter};
  }
  @media (min-width:800px){
    left:10%;
  }
}
.slide{
  opacity: 0;
  transition-duration: 3s ease;
}
.slide.active {
  opacity: 1;
  transition-duration: 1s;
  transform: scale(1.08);
}
@media (min-width:900px){
  margin:0;
  margin-left:-5rem;
}
`



const ImageSlider = ({ slides, format, type }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }
  return (
    <Slider className='slider'>
      {type ==="light" ? <button className='left-arrow' onClick={prevSlide}>&lArr;</button>: <button className='left-arrow-dark' onClick={prevSlide}>&lArr;</button>}
      {type ==="light" ? <button className='right-arrow' onClick={nextSlide}>&rArr;</button>: <button className='right-arrow-dark' onClick={nextSlide}>&rArr;</button>} 
      {slides.map((slide, index) => {
        return (
          <div
            className={index === current ? 'slide active' : 'slide'}
            key={index}
          >
            {format === "horizontal" ? 
            <ImageWrapper horizontal_gallery>
            {index === current && (
              <img src={slide.src} 
              alt='Carousel images'  />
            )}
            </ImageWrapper> 
            : "row" ? <ImageWrapper grid>
            {index === current && (
              <img src={slide.src} 
              alt='Carousel images'  />
            )}
            </ImageWrapper> : 
            <ImageWrapper>
            {index === current && (
              <img src={slide.src} 
              alt='Carousel images'  />
            )}
            </ImageWrapper>}
          </div>
        );
      })}
    </Slider>
  );
};

export default ImageSlider;