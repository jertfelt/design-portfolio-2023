import styled from "styled-components";
import { useTranslation } from "next-i18next";
import FullPageScroll from "./FullPageScroller";
const Section = styled.section`
z-index:5;
width:100%;
min-height:100vh;
background-color: ${({ theme }) => theme.accent};

`

const Container = styled.div`
width:100%;
height:100%;
height:80vh;
width:100vh;
`
const ImgMenu = () => {
  const {t} = useTranslation()
  return (
  <Section>
    <Container>
    <FullPageScroll></FullPageScroll>

    </Container>
  </Section>  );
}
 
export default ImgMenu;