import styled, {css} from "styled-components"
import Link from "next/link"
import { flex, device, fonts } from "@component/components/stylings/Stylings";
import { useTranslation } from "next-i18next";

export const CaseContainer = styled.article`

color:${({theme}) => theme.lightblue};
${flex({align:"flex-start", justify:"flex-start"})}
@media screen and (max-width:700px){
 
  padding:1rem;
  max-width:80vw;
}

a{
  text-decoration: none;
  color:${({theme}) => theme.lightblue};
  &:hover{
    color:${({theme}) => theme.frontendcolors.alternativecontrast};
  }
}

button{
  cursor:pointer;
  border:2px solid ${({theme}) => theme.lightblue};
  color:${({theme}) => theme.lightblue};
  padding:10px;
  font-size:16px;
  font-family:JetBrains Mono;
  background-color: transparent;
  &:hover{
   border-radius:${({theme}) => theme.borderradius.first};
   border-color:${({theme}) => theme.frontendcolors.alternativecontrast};
  }
  &:active, &:focus{
    border-radius:${({theme}) => theme.borderradius.first};
    color:${({theme}) => theme.white};
    border-color:${({theme}) => theme.white};
  }
  
}
`

export const CaseHeader = styled.h3`
color: ${({theme}) => theme.lightblue};
text-transform: uppercase;
font-size:${fonts.fontSizes.large};
flex-wrap: wrap;
line-height:2.8rem;
margin-bottom:-.5rem;
font-family: JetBrains Mono;
@media screen and (max-width:700px){
 font-size:${fonts.fontSizes.medium};
}
`
export const Description = styled.p`
font-size:${fonts.fontSizes.medium};
color:${({theme}) => theme.white};
text-align: left;
margin-top:0;
`
export const Subtitle = styled.h4`
text-transform:uppercase;
`

const Row = styled.div`
display:flex;
flex-direction: row;
gap:1rem;`
const CasefItem = ({item}) => {
  const {t} = useTranslation();
  console.log(item)
  return (<>
    <CaseContainer key={item.id}
    >
    {item && <>
        <CaseHeader>    
          {/* <Link href={'/frontend/cases/' + item.id} 
                state={{data: item.id}}
                key={item.id}>
                {item.title}
          </Link> */}
          {item.title}
         </CaseHeader> 

        {/* <Link href={'/frontend/cases/' + item.id} 
        key={item.id}>    */}
          <Subtitle>{item.sub}</Subtitle> 
          <Description>{item.text}
          {item.moreinfo.text1}<br/><br/>
          {item.moreinfo.text2}<br/><br/>
          {item.moreinfo.text3}
          </Description>
          <Row>
        {item.sources.github && <Link href={item.sources.github} target="_blank"><button>Github</button></Link>}
        {item.sources.link && <Link href={item.sources.link} target="_blank"><button>{t("casespage.button")}</button></Link>}
        </Row>
        {/* </Link> */}
        {/* <Link href={'/frontend/cases/' + item.id} state={{data: item.id}}><button>{t("casespage.button")}</button>
          </Link> */}
      </>
     }

      </CaseContainer>
      
      
   </>
  );
}
export default CasefItem;