import styled from "styled-components";
import Image from "next/image";
import Tova from "../../public/tova-poetry-slam.png"
import { useRouter } from 'next/router'

const Section = styled.section`
background-color: ${({theme}) => theme.body};
width:100%;
width:100vw;
margin:0;
height:100%;
min-height:100vh;
z-index:0;
padding-left:1rem;
padding-top:5rem;
display:flex;
flex-direction:column;
width:50%;
gap:1rem;
img{
  border-radius:${({theme}) => theme.borderradius.first};
}

.glitch-wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-color: ${({theme}) => theme.body};
}


.glitch {
  position: relative;
  font-size: 80px;
  font-weight: 700;
  line-height: 1.2;
  color:  ${({theme}) => theme.contrast};
  letter-spacing: 5px;
  animation: shift 4s ease-in-out infinite alternate;
  z-index: 1;
}

.glitch:before {
  content: attr(data-glitch);
  position: absolute;
  top: 0;
  left: -2px;
  text-shadow: -1px 0 #0ff;
  width: 100%;
  color: #fff;
  background-color: #222;
  overflow: hidden;
  clip: rect(0, 900px, 0, 0);
  animation: noise-before 3s infinite linear alternate-reverse;
}

.glitch:after {
  content: attr(data-glitch);
  position: absolute;
  top: 0;
  left: 2px;
  text-shadow: 1px 0 #ff00ff;
  width: 100%;
  color: #fff;
  background-color: #222;
  overflow: hidden;
  clip: rect(0, 900px, 0, 0);
  animation: noise-after 2s infinite linear alternate-reverse;
}

@keyframes noise-before {
  0% {
     clip: rect(61px, 9999px, 52px, 0);
  }

  5% {
     clip: rect(33px, 9999px, 144px, 0);
  }

  10% {
     clip: rect(121px, 9999px, 115px, 0);
  }

  15% {
     clip: rect(144px, 9999px, 162px, 0);
  }

  20% {
     clip: rect(62px, 9999px, 180px, 0);
  }

  25% {
     clip: rect(34px, 9999px, 42px, 0);
  }

  30% {
     clip: rect(147px, 9999px, 179px, 0);
  }

  35% {
     clip: rect(99px, 9999px, 63px, 0);
  }

  40% {
     clip: rect(188px, 9999px, 122px, 0);
  }

  45% {
     clip: rect(154px, 9999px, 14px, 0);
  }

  50% {
     clip: rect(63px, 9999px, 37px, 0);
  }

  55% {
     clip: rect(161px, 9999px, 147px, 0);
  }

  60% {
     clip: rect(109px, 9999px, 175px, 0);
  }

  65% {
     clip: rect(157px, 9999px, 88px, 0);
  }

  70% {
     clip: rect(173px, 9999px, 131px, 0);
  }

  75% {
     clip: rect(62px, 9999px, 70px, 0);
  }

  80% {
     clip: rect(24px, 9999px, 153px, 0);
  }

  85% {
     clip: rect(138px, 9999px, 40px, 0);
  }

  90% {
     clip: rect(79px, 9999px, 136px, 0);
  }

  95% {
     clip: rect(25px, 9999px, 34px, 0);
  }

  100% {
     clip: rect(173px, 9999px, 166px, 0);
  }
}

@keyframes noise-after {
  0% {
     clip: rect(26px, 9999px, 33px, 0);
  }

  5% {
     clip: rect(140px, 9999px, 198px, 0);
  }

  10% {
     clip: rect(184px, 9999px, 89px, 0);
  }

  15% {
     clip: rect(121px, 9999px, 6px, 0);
  }

  20% {
     clip: rect(181px, 9999px, 99px, 0);
  }

  25% {
     clip: rect(154px, 9999px, 133px, 0);
  }

  30% {
     clip: rect(134px, 9999px, 169px, 0);
  }

  35% {
     clip: rect(26px, 9999px, 187px, 0);
  }

  40% {
     clip: rect(147px, 9999px, 137px, 0);
  }

  45% {
     clip: rect(31px, 9999px, 52px, 0);
  }

  50% {
     clip: rect(191px, 9999px, 109px, 0);
  }

  55% {
     clip: rect(74px, 9999px, 54px, 0);
  }

  60% {
     clip: rect(145px, 9999px, 75px, 0);
  }

  65% {
     clip: rect(153px, 9999px, 198px, 0);
  }

  70% {
     clip: rect(99px, 9999px, 136px, 0);
  }

  75% {
     clip: rect(118px, 9999px, 192px, 0);
  }

  80% {
     clip: rect(1px, 9999px, 83px, 0);
  }

  85% {
     clip: rect(145px, 9999px, 98px, 0);
  }

  90% {
     clip: rect(121px, 9999px, 154px, 0);
  }

  95% {
     clip: rect(156px, 9999px, 44px, 0);
  }

  100% {
     clip: rect(67px, 9999px, 122px, 0);
  }
}

@keyframes shift {
  0%, 40%, 44%, 58%, 61%, 65%, 69%, 73%, 100% {
     transform: skewX(0deg);
  }

  41% {
     transform: skewX(10deg);
  }

  42% {
     transform: skewX(-10deg);
  }

  59% {
     transform: skewX(40deg) skewY(10deg);
  }

  60% {
     transform: skewX(-40deg) skewY(-10deg);
  }

  63% {
     transform: skewX(10deg) skewY(-5deg);
  }

  70% {
     transform: skewX(-50deg) skewY(-20deg);
  }

  71% {
     transform: skewX(10deg) skewY(-10deg);
  }
}
`

const WorkInProgress = () => {
  const router = useRouter()
  return(
    <Section>
      <div className="glitch-wrapper">
      <h1 className="glitch" data-glitch="WORK IN PROGRESS">WORK IN PROGRESS</h1>
      </div>
      <p>Sidan är under uppbyggnad. Kom tillbaka senare, eller kontakta mig för mer information.</p>
      <Image 
      width={800}
      height={500}
      src={Tova}
      alt="Tova läser poesi"/>
       <button type="button" onClick={() => router.back()}>
      Gå tillbaka
    </button>
    </Section>
  )
}
export default WorkInProgress;