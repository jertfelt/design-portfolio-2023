import landingpic from "../../../../public/background_globalwarming.png";
import Image from "next/image";
import styled from "styled-components";
import HeroContent from "./Hero";

const Wrapper = styled.div`
  position: fixed;
  height: 120vh;
  width: 100%;
  overflow: hidden;
  z-index: 1;
  @media screen and (max-width: 700px) {
    display: none;
    width: 0;
  }
`;
const Overlay = styled.div`
  position: fixed;
  height: 150vh;
  width: 100vw;
  background: rgba(50, 57, 57, 0.3);
  z-index: 1;
  @media screen and (max-width: 700px) {
    display: none;
    width: 0;
  }
`;
const BgTxt = styled.div`
  margin: 0;
  text-align: left;
  padding: 5rem;
  padding-top: 30vh;
  padding-bottom: 30vh;
  color: ${({ theme }) => theme.white};
  text-shadow: 1px 1px 1px ${({ theme }) => theme.frontendcolors.background};
  z-index: 1;
  position: relative;

  @media screen and (max-width: 700px) {
    padding-top: 10vh;
    max-width: 100%;
  }
  @media screen and (max-width: 500px) {
    padding: 2rem;
    padding-top: 10vh;
    padding-bottom: 5vh;
    max-width: 50vw;
  }
`;

const BgImg = () => {
  return (
    <>
      <Wrapper>
        <Image
          alt="Global warming"
          src={landingpic}
          priority={true}
          placeholder="blur"
          quality={100}
          fill
          sizes="80vw"
          style={{
            objectFit: "cover",
          }}
        />
      </Wrapper>
      <Overlay />
      <BgTxt>
        <HeroContent />
      </BgTxt>
    </>
  );
};

export default BgImg;
