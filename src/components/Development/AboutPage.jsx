import styled, { useTheme } from "styled-components";
import CustomButton from "./Buttons";

const About = styled.article`
  h2 {
    font-size: ${({ theme }) => theme.mobile.frontend.h2};
    font-family: ${({ theme }) => theme.fonts.frontendheader.primary};
    text-transform: uppercase;
    color: ${({ theme }) => theme.frontendnew.txtcolorheader2};
    text-align: center;
    padding-bottom: 1rem;
    padding-top: 1rem;
  }
  p {
    line-height: 150%;
    font-size: ${({ theme }) => theme.mobile.frontend.bread};
    max-width: 80vw;
  }
  .button-container {
    padding-top: 3rem;
    padding-bottom: 3rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    max-width: 100px;
    margin: 0 auto;
    button {
      margin: 1rem;
    }
  }
`;

const AboutPage = () => {
  return (
    <About>
      <h2>Om mig:</h2>
      <p>
        Jag är från början utbildad på Konstfack som visuell kommunikatör, och
        har under nästan tio års tid arbetat med till exempel digital
        produktion, webbdesign, grafisk formgivning på tidningar, via frilans
        eller som fast anställd.
      </p>
      <p>
        Jag har genom denna arbetslivserfarenhet stor vana för att ha en dialog
        kring krav och förväntningar, vara föränderlig vid behov, och kunna se
        kärnan av problemen för att sedan problemlösa dem, självständigt eller i
        grupp.
      </p>
      <p>
        Jag är en ambitiös utvecklare som letar efter nya utmaningar. Jag är en
        snabblärd, flexibel, hårt arbetande människa med rötter från det
        konstnärliga och förståelse för både det abstrakta, logiska och det
        vackra.
      </p>
      <p>
        Jag är leveranssäker, orädd, noggrann, törstig för kunskap och gillar
        att experimentera. Jag är en engagerad medarbetare som gärna bidrar till
        helheten, och är van med agilt arbete.
      </p>
      <p>
        Jag har i och med min bakgrund i design och formgivning lätt för UX och
        UI, och vill ständigt förbättra både mitt och andras arbete. Jag lägger
        ingen prestige i det jag gör, utan föredrar en rak och öppen samt
        konstruktiv dialog, och har samtidigt höga krav på min leverans.
      </p>
      <div className="button-container">
        <CustomButton
          action="linkedin"
          type="primary"
          aria="Gå till LinkedIn"
          txt="LinkedIn"
        />{" "}
        <CustomButton
          action="contact"
          type="secondary"
          aria="Kontakta mig"
          txt="Kontakt"
        />
      </div>
    </About>
  );
};
export default AboutPage;
