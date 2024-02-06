export const cases_data = [
  {
    society_icon: {
      title: "Society Icon",
      picture: {
        exists: false,
        url: "",
      },
      url: {
        exists: false,
        adress: "",
      },
      github: {
        exists: false,
        adress: "",
      },
      sv: {
        description_1:
          "Society Icon var ett företag som hade en egenutvecklad plattform där man kopplade ihop bolag så som H&M med stora och små influencer-konton på sociala medier. I appen kunde företag lägga upp kampanjer som var aktuella för tillfället, och användarna kunde ansöka om att bli en del av den. Ersättningen baserades på personens möjlighet att sprida kampanjen.",
        description_2:
          " Under min praktikperiod på företaget Society Icon så tog jag över frontenden-delen för deras adminportal, en custom CMS byggt i React där företag kan registrera varumärken, skapa kampanjer, välja ut ikoner till kampanjer, m.m. När jag började på praktiken var det en buggig frontend-sida som ingen rört på drygt två års tid, utvecklat av ett ad hoc team från Indien med mycket felaktig kod.",
        description_3:
          "I projektet har jag och en till praktikant som enda frontendare på företaget projektlett, estimerat och planerat sprints, där fokus har varit att refaktorisera kod, och byta ut komponenter som varit för gamla eller direkt felaktiga. Det fanns många lik i garderoben i koden som vi städade bort. Till exempel bytte vi ut onödig jQuery-kod, skrev om buggiga komponenter, bröt upp långa komponenter, uppgraderade Node, och lade in React Context för att öka optimering. Vi var också UX-orienterade i detta projekt där vi gjorde designändringar i formulär, sidomenyer och på knappar enligt UX/UI och tillgänglighetstänk, så att sidan i framtiden även skulle kunna användas på mobil/tablet. Vi förberedde även för möjligheten att göra enhetstester och större Cypress-tester.",
        description_4:
          "När jag började på företaget så ringde företag in till Society Icon för att få hjälp med att manövrera plattformen, som var buggig och svårnavigerad. Målet var att göra en hemsida som faktiskt skulle kunna användas av företagen själva, utan att behöva ringa in och få hjälp.",
        description_5:
          "Vill du veta mer? Society Icon gick i konkurs i mars 2023, så projektet är inte längre tillgängligt på webben. Hör av dig så kan jag berätta mer i detalj vad vi gjorde under vår praktikperiod.",
      },
      en: {
        description_1:
          "Society Icon was a company that had a proprietary platform where they connected companies such as H&M with large and small influencer accounts on social media. In the app, companies could create campaigns that were current at the time, and users could apply to be a part of them. Compensation was based on the person's ability to spread the campaign.",
        description_2:
          "During my internship at the company Society Icon, I took over the frontend part for their admin portal, a custom CMS built in React where companies can register brands, create campaigns, select icons for campaigns, etc. When I started the internship, it was a buggy frontend page that no one had touched for over two years, developed by an ad hoc team from India with a lot of faulty code.",
        description_3:
          "In the project, I and another intern, as the only frontend developers at the company, project-managed, estimated, and planned sprints, with a focus on refactoring code, and replacing components that were too old or directly faulty. There were many skeletons in the closet in the code that we cleaned up. For example, we replaced unnecessary jQuery code, rewrote buggy components, broke up long components, upgraded Node, and added React Context to increase optimization. We were also UX-oriented in this project where we made design changes in forms, side menus, and buttons according to UX/UI and accessibility thinking, so that the site could also be used on mobile/tablet in the future. We also prepared for the possibility of making unit tests and larger Cypress tests.",
        description_4:
          "When I started at the company, companies called Society Icon for help navigating the platform, which was buggy and difficult to navigate. The goal was to create a website that could actually be used by the companies themselves, without having to call in for assistance.",
        description_5:
          "Want to know more? Society Icon went bankrupt in March 2023, so the project is no longer available online. Get in touch and I can tell you more in detail about what we did during our internship.",
      },
    },
  },
  {
    greenpeace: {
      title: "SVERIGESUTSLAPP.SE",
      picture: {
        exists: true,
        adress: "",
      },
      url: {
        exists: false,
        adress: "",
      },
      github: {
        exists: false,
        adress: "",
      },
      sv: {
        description_1:
          "En responsiv kampanjsida med seo-perspektiv och interaktiva grafer, byggd i NEXT.js. ",
        description_2:
          "Greenpeace ville ha en hemsida som hanterar statistik från SCB och som ska ge en tydligare bild av biobränsle. Det skulle vara sökbart, interaktivt, och enkelt att ta till sig. Utöver frontend-programmering så illustrerade jag även några illustrationer och tog iniativ för UX och UI, bland annat färgval men även i funktionalitet.",
        description_3:
          "Vi jobbade med verktyget GraphJS för att skapa interaktiva grafer för användaren, totalt tre stycken. Datan hämtade vi från bl.a. SCB, och lagrade på vår egen databas i Firebase.",
        description_4:
          "Vi byggde även en funktion där användaren kan välja ett år och se datan för det specifika året. Datan uppdateras automatiskt när Naturvårdsverket uppdaterar.",
        description_5:
          "Vi skapade ett eget CMS-system för Greenpeace, en enkel admin-sida, där de kunde gå in och ändra i länkar, bildtexter och texter samt avpublicera/publicera hela sektioner. Vi använde oss av en NoSQL-databas (Firebase) för att snabbt och smidigt kunna publicera/avpublicera och/eller ändra brödtext och statistik.",
      },
      en: {
        description_1:
          "A responsive campaign page with an SEO perspective and interactive graphs, built in NEXT.js.",
        description_2:
          "Greenpeace wanted a website that handles statistics from SCB and that provides a clearer picture of biofuel. It should be searchable, interactive, and easy to understand. In addition to frontend programming, I also illustrated some illustrations and took initiatives for UX and UI, including color choices but also in functionality.",
        description_3:
          "We worked with the GraphJS tool to create interactive graphs for the user, a total of three. We collected data from, among others, SCB, and stored it in our own database in Firebase.",
        description_4:
          "We also built a function where the user can select a year and see the data for that specific year. The data is automatically updated when the Swedish Environmental Protection Agency updates.",
        description_5:
          "We created our own CMS system for Greenpeace, a simple admin page, where they could go in and edit links, image captions and texts, and publish/unpublish entire sections. We used a NoSQL database (Firebase) to quickly and easily publish/unpublish and/or change body text and statistics.",
      },
    },
  },
];
