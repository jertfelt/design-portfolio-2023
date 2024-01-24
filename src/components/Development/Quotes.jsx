import styled from "styled-components";

const Container = styled.section`
  padding: 2rem;
  padding-top: 0;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  p {
    font-family: ${({ theme }) => theme.fonts.frontendquotes.primary};
    font-size: ${({ theme }) => theme.mobile.frontend.bread};
    line-height: ${({ theme }) => theme.mobile.frontend.lineheight};
    color: ${({ theme }) => theme.frontendnew.txtprimary};
    font-weight: 400;
  }
  h2 {
    font-family: ${({ theme }) => theme.fonts.frontendheader.primary};
    color: ${({ theme }) => theme.frontendnew.txthighlight};
    font-size: ${({ theme }) => theme.mobile.frontend.h3};
  }
`;

export const QuotesOne = () => {
  return (
    <Container>
      <div>
        <h2>Ett starkt tillskott</h2>
        <p>
          “Tova är en otroligt snabblärd och engagerad frontend utvecklare med
          ett stort sinne för UX. Tova klarar av att ha koll på många saker
          samtidigt och utför sitt arbete noggrant. Tova smälter lätt in i
          gruppen och ser till att den växer, detta genom sitt individuella
          ansvar i de vardagliga arbetsuppgifter hon har, hennes förståelse
          kring teamets arbetssätt och att se vilka möjligheter som finns för
          förbättring. Tova delar gärna med sig av de kompetenser hon besitter
          till övriga, och ställer professionellt frågor som leder till att mål
          uppnås. Jag skickar mina varmaste rekommendationer till de som vill ha
          en effektiv, lösningsorienterad, humoristisk, samarbetsvillig och
          medmänsklig kollega.”– Basil Madhani, Arbetsförmedlingen
        </p>
      </div>
      <div>
        <h2>Iniativrik & investerad</h2>
        <p>
          “Hade ynnesten att få jobba med Tova för ett projekt för Greenpeace.
          Tova var väldigt lyhörd för förändringar och ideer till upplägget. Hon
          tog även mycket egna initiativ och fyllde i de designhål i upplevelsen
          som jag inte hunnit till. Det var tydligt att Tova var lika investerad
          i slutupplevelsen som resten av teamet. Då Tova har en bakgrund i
          visuell kommunikation gör det henne till en utvecklare som en designer
          verkligen uppskattar att samarbeta med.” – Per Lundgren, Senior UX
          Designer, Vinnovera
        </p>
      </div>
    </Container>
  );
};
