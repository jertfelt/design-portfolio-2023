import { Link } from "react-router-dom";
import styled from "styled-components";

const Section = styled.div`
padding-top:450px;
color:${({theme}) => theme.textPrimary};
`
const Content = styled.div`
padding:2rem;
max-width:100%;
p{
  text-align:center;
  line-height:1.5rem;
}
`

const Body = () => {
  return (<Section>
    <Content>
    <p>
  Jag är en multidisciplinär konstnär baserad i Sverige. Min body of work är bl.a. grafiska blad, taktila collage, linjeteckning, aktrylmålningar, samt digitalt måleri och collage.</p>
    <p> I mitt konstnärskap så orienterar jag mig främst med ord och bild, gärna i korrelation, antingen i form av spoken word eller text. Genom att kombinera bildkonst, i antingen målning, animation eller torrpastell, med mina texter i form av ljud eller skriven text, söker jag ett samspel mellan det visuella och det språkliga. Det finns varken en under- eller överordning mellan bild och text, utan det är sammanhangen som spelar roll i mina verk. </p>
    <p>
    Jag rör mig mellan det indignerade, känslokraftiga och det observerande. Mitt manér när det kommer till teckning <Link href="https://www.omkonst.com/16-konstfackskolan-varsutstallning.shtml"> &quot; hämtar bildidéer och uttryck från tecknarna som var talrika för ett knappt tiotal år sedan &quot;</Link> och jag jobbar gärna med platsspecifika fenomen. Jag bearbetar psykologi, livet, döden, samhällsfrågor och mänsklig relation till varandra och annat. Jag ställer ut, kodar hemsidor, står på open poetry slams, och testar improteater där det finns möjlighet.
    </p>
    <h3>Utställningar</h3>
    <br/>
    
   
    </Content>
    </Section> );
}
 
export default Body;