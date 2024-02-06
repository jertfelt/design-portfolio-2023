export const cases_data = [
  {
    society_icon: {
      title: "Society Icon",
      picture: {
        exists: false,
        url: "",
      },
      video: {
        exists: false,
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
      title: "GREENPEACE",
      picture: {
        exists: false,
        adress: "",
      },
      video: {
        exists: true,
        adress: "https://youtu.be/s5fYHxAL2DQ",
        txt_en: "Click to see the website",
        txt: "Klicka för att se hur hemsidan såg ut!",
        title_en: "Greenpeace Campaign website",
        title: "Greenpeace Kampanjsida",
        aria_en: "A recording of the website",
        aria: "Greenpeace Kampanjsida - en demonstration.",
      },
      url: {
        exists: true,
        adress: "www.sverigesutslapp.se",
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
  {
    westcoast: {
      title: "Westcoast Education",
      picture: {
        exists: true,
        adress:
          "https://user-images.githubusercontent.com/30622818/215583059-a9a2ffbe-ea35-47ea-8e33-c9d0f2f8f2fd.png",
        aria: "En printscreen från hemsidan",
        aria_en: " A printscreen from the website.",
      },
      video: {
        exists: false,
      },
      url: {
        exists: true,
        adress: "https://westcoast-education.netlify.app/",
      },
      github: {
        exists: true,
        adress: "https://github.com/jertfelt/westcoast_education-nyhjs4",
      },
      sv: {
        description_1: "Studentarbete: Test Driven Development i React-miljö",
        description_2:
          "Vi skulle bygga en enkel hemsida som skulle visa publicerade kurser, och en admin portal för administratörer på skolan där man kunde logga in och editera (ändra, lägga till) kurser och lärare. Det skulle också gå att knyta ihop lärare och kurser, samt att visa om en kurs var publicerad utifrån att det var tillräckligt många studenter tillagda. Jag byggde även en portal, utöver uppgiften, för studenterna så de kunde anmäla sig till kurser, ändra email eller namn och använda sig av enkel pomofocus-timer på deras profilsida. Allt detta byggdes med TDD i åtanke, där jag från början jobbade med test miljöer i localserver och json server, för att sedan migrera projektet till Netlify och Firebase.Skoluppgiften gick ut på att skriva testdrivet, här har jag jobbat med unit-testing och viss interaction testing med hjälp av Jest.",
        description_3:
          "Jag har vidare jobbat med styled components, och testat olika filstrukturer. Vidare har jag experimenterat med dark mode/ light mode och tillgänglighet.",
        description_4:
          "Jag använde mig av Firebase för att administrera admin-logins, och för att ha en database till studenterna, kurserna och lärare. Här var jag tvungen att läsa på om Firebase funktionalitet. Jag har även valt att hosta hos Netlify, och utforskat möjligheter med att upprätta server.",
        description_5:
          "Sidan är fortfarande under uppbyggnad och kan ha vissa buggar.",
      },
      en: {
        description_1:
          "Student project: Test Driven Development in React environment",
        description_2:
          "We were supposed to build a simple website that would display published courses, and an admin portal for school administrators where they could log in and edit (change, add) courses and teachers. It should also be possible to link teachers and courses, and to indicate if a course was published based on whether there were enough students added. I also built a portal, in addition to the task, for the students so they could sign up for courses, change email or name, and use a simple pomofocus timer on their profile page. All this was built with TDD in mind, where I initially worked with test environments in local server and json server, and then migrated the project to Netlify and Firebase. The school assignment was to write test-driven, here I have worked with unit testing and some interaction testing using Jest.",
        description_3:
          "Furthermore, I have worked with styled components, and tested different file structures. Furthermore, I have experimented with dark mode/light mode and accessibility.",
        description_4:
          "I used Firebase to manage admin logins, and to have a database for students, courses, and teachers. Here, I had to read up on Firebase functionality. I have also chosen to host with Netlify, and explored possibilities with setting up a server.",
        description_5:
          "The site is still under construction and may have some bugs.",
      },
    },
  },
  {
    mrhr: {
      title: "Barnrättsspelet",
      picture: {
        exists: false,
        adress: "",
      },
      video: {
        exists: true,
        adress: "https://youtu.be/EAAQzB4dqYU",
        txt_en: "Click to see recording of the mobile app",
        txt: "Klicka för att se inspelning av mobilapp!",
        title: "Test av appen",
        title_en: "Test of the app",
        aria_en: "A record of the app",
        aria: "En inspelning av hur appen fungerade",
      },
      url: {
        exists: false,
      },
      github: {
        exists: false,
      },
      sv: {
        description_1:
          "En studie i hur jag konverterar en existerande webbplats till en app. I det här projektet använde jag mig av Expo, en plattform som använder sig av React Native, med målet att göra en app som är kompatibel för både iOS och Android. Jag utgick från hemsidan barnrattspelsspelet.se där målet var att göra korten i mobilformat.",
        description_2:
          "Vidare jobbade jag med Android Studio för att emulera mobil på dator, Google Play Console, och av React Native Webview som ett sätt att konvertera existerande React-projekt till en app. Vidare i projektet gjorde jag anpassningar i UI och UX så det blev mer mobilanpassat, genom att införa splashscreens, statusbar, ripple effects,  och en skissartad swipe-funktionalitet.",
        description_3:
          "I mitt arbete har jag jobbat med två frågor. 1. Hur skapar jag en app? 2. Hur konverterar jag en del av, eller en hel, webbplats till en app? Den andra frågan är viktig, då jag redan har en existerande kodbas och för att i kravet från beställaren så finns det en önskan om att inte ha fler kodbaser än nödvändigt. På grund av resurser så har man helt enkelt inte råd med att både ha en frontendare och en apputvecklare, och att ha olika kodbaser som måste uppdateras när en förändring sker. Därför behövs en lösning som konverterar existerande kod till en app.",
        description_4:
          "Vidare var det också krav på att kodbasen ska passa för både iOS och Android, alltså kodas crossplatform och inte var och en för sig, av samma anledning som punkt ett. Det är också viktigt att det i nuläget inte ska gå att navigera bort till startsidan eller spelet, då det inte finns stöd för det, då det inte kommer vara mobilanpassat, utan appen ska bara innehålla collection-viewer.",
        description_5:
          "Min metod har varit undersökande, med fokus på att testa saker och att felsöka när jag stöter på problem. Jag har jobbat i sprints, med en vecka i taget.Jag har dokumenterat hela processen i min rapport, så noggrant som möjligt, för att motivera några val och förklara resonemangen bakom. Jag har utgått från tutorials och dokumentation på olika ramverks hemsidor. Det har inte direkt varit en linjär process utan det har snarare varit sidospår, och ibland har det varit svårt att tidsestimera eller planera då saker kunnat ta oförutsett mycket eller lite tid. Det har också skett att jag lagt ner mycket tid på att försöka lösa ett problem, för att sedan byta inriktning helt, eller lämna den huvudvärken till ett senare skede.",
      },
      en: {
        description_1:
          "A study on how I convert an existing website into an app. In this project, I used Expo, a platform that uses React Native, with the goal of creating an app that is compatible with both iOS and Android. I started from the website childrensrightsgame.se where the goal was to make the cards in mobile format.",
        description_2:
          "Furthermore, I worked with Android Studio to emulate mobile on a computer, Google Play Console, and React Native Webview as a way to convert existing React projects into an app. Further into the project, I made adjustments in UI and UX to make it more mobile-friendly, by introducing splash screens, status bar, ripple effects, and a sketch-like swipe functionality.",
        description_3:
          "In my work, I have dealt with two questions. 1. How do I create an app? 2. How do I convert a part of, or an entire, website into an app? The second question is important, as I already have an existing codebase and because the client's requirement includes a wish to not have more codebases than necessary. Due to resources, it simply is not affordable to have both a frontend developer and an app developer, and to have different codebases that need to be updated when a change occurs. Therefore, a solution is needed that converts existing code into an app.",
        description_4:
          "Furthermore, there was also a requirement that the codebase should fit for both iOS and Android, i.e., coded cross-platform and not individually, for the same reason as point one. It is also important that currently it should not be possible to navigate back to the home page or the game, as there is no support for it, as it will not be mobile-friendly, but the app should only contain a collection viewer.",
        description_5:
          "My method has been investigative, focusing on testing things and troubleshooting when encountering problems. I have worked in sprints, one week at a time. I have documented the entire process in my report, as carefully as possible, to justify some choices and explain the reasoning behind them. I have relied on tutorials and documentation on various framework websites. It has not been a linear process but rather side-tracks, and sometimes it has been difficult to estimate or plan time since things could take unexpectedly much or little time. It has also happened that I have spent a lot of time trying to solve a problem, only to completely change direction, or leave that headache to a later stage.",
      },
    },
  },
];
