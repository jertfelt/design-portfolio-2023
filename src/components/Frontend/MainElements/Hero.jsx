import styled from "styled-components";
import Image from "next/image";
import profilepic from "../../../../public/apathy.png"


const PageWrapper = styled.div`


// // //   display:flex;
// // //   flex-direction:column;
  
// // }
`
const Heading = styled.h1`
transition: all 0.5s ease-out;
text-align:left;
font-size: 3.5rem;
text-transform: uppercase;
line-height:3.7rem;
  // // @media only screen and (max-width: 700px
  // // ){
  // // font-size:48px;
  // // line-height:3rem;
  // // }
  // // @media only screen and (max-width: 500px
  // //   ){
  // //   font-size:40px;
  // //   line-height:3rem;
  // //   }
`

const HeroPic = styled(Image)`
transition: all 1.8s ease-in;
filter: drop-shadow(0 6mm 4mm ${({theme}) => theme.frontendcolors.background});
transform: rotate(10deg);
overflow: hidden;
border-radius: ${({theme}) => theme.borderradius.fourth};
height:300px;
width:300px;

// //   height:200px;
// //   width:200px;
// //   filter: drop-shadow(0 2mm 1mm #867794);
// //   position:fixed;
// //   z-index:-1;
// //   top:10%;
// //   right:20%;;
// // }

// //   display:none;
// // }
`


const ParagraphRow = styled.div`
margin-top:-3rem;
display:flex;
gap:5rem;
p{
  max-width:500px;
}
button{
  max-height: 50px;
  align-self:center;
}

line-height:150%;
font-size:18px;
`

const Paragraph = styled.p `
font-family: Arya;
max-width:300px;
margin-bottom:-3rem;
font-size:20px;
`

const Grid = styled.div`
padding-bottom:10rem;
display: grid;
grid-template-columns: 1fr 2fr;
  grid-template-rows: auto;
  justify-items: start;
  align-items: start;
  column-gap: 50px;
  row-gap: 10px;
 
  // //   display:flex;
  // //   flex-direction:column-reverse;
  // //   div{
  // //     z-index:2;
  // //   }
  // // }
`


const HeroContent = () => {
  return ( <section>
    <PageWrapper>
      <Grid>
      <HeroPic
        src={profilepic}
        loading="lazy"
        alt="Svartvit bild på Tova som tittar in i kameran."
        />
        <div>
      <Paragraph>Jag är Tova Jertfelt:</Paragraph>
      <Heading
      title="Multidisciplinär & Kreativ Frontendare"
      className="headingfont">
        Multidisciplinär<br/>
        & Kreativ Frontendare<br/>
      </Heading>
      <ParagraphRow
      >
        <p>med flera års erfarenhet av visuell kommunikation och grafisk design. Jag älskar att jag i mitt arbetsliv kan få kombinera mina tre styrkor: problemlösning, kreativitet, och osläckta nyfikenhet.</p>
        {/* <ContactButton aria-label="Kontakta mig">
      KONTAKT
        </ContactButton> */}
      </ParagraphRow>
 
      </div>
 
      </Grid>

    </PageWrapper>
  </section> );
}
 
export default HeroContent;