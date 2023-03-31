import Head from 'next/head'
import favicon from "../../public/favicon.ico"
import mainMetaPic from "../../public/publishing-priset-2.png"
import metaFrontend from "../../public/metapicture.png"
import metaIllustration from "../../public/illustraion/fire-color-jertfelt.png"
import metaDesign from "../../public/design/kollektiv-sorg-samples.png"
import metaArt from "../../public/art/vi-kan-battre-tova-jertfelt-kandidatexamen-2016-konstfack.png"

export const HeadTypography = () => {
  <Head>
    <link rel="icon" href="../../public/favicon.ico" />
  <link rel="preconnect" href="https://fonts.googleapis.com"/>
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>

  </Head>
}
export const HeadIndexArt = () => {
  <Head>
  <title>Tova Jertfelt</title>
  <meta name="title" content="Tova Jertfelt Konstnär"/>
  <meta name="description" content="Multidisciplinär konstnär som rör sig mellan teckning och språket, det digitala, rörliga och stillbilder."/>
  <meta name="author" content="Tova Jertfelt"></meta>
  
  <meta property="og:type" content="website"/>
  <meta property="og:url" content="https://www.tovajertfelt.se/art"/>
  <meta property="og:title" content="Tova Jertfelt Artist"/>
  <meta property="og:description" content="Multidisciplinär konstnär som rör sig mellan teckning och språket, det digitala, rörliga och stillbilder."/>
  <meta property="og:image" content={metaArt}/>
  
  <meta property="twitter:card" content="summary_large_image"/>
  <meta property="twitter:url" content="https://www.tovajertfelt.se/art"/>
  <meta property="twitter:title" content="Tova Jertfelt Art"/>
  <meta property="twitter:description" content="Multidisciplinär konstnär som rör sig mellan teckning och språket, det digitala, rörliga och stillbilder."/>
  <meta property="twitter:image" content={metaArt}/>
  
  <link rel="icon" href="../../public/favicon.ico"/>
  <link rel="preconnect" href="https://fonts.googleapis.com"/>
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>

      </Head>
}


export const HeadIndexDesign = () => {
  <Head>
  <title>Tova Jertfelt</title>
  <meta name="title" content="Tova Jertfelt Formgivare"/>
  <meta name="description" content="Multidisciplinär formgivare med erfarenhet av digital kommunikation. Tillgänglig för frilans! "/>
  <meta name="author" content="Tova Jertfelt"></meta>
  
  <meta property="og:type" content="website"/>
  <meta property="og:url" content="https://www.tovajertfelt.se/design"/>
  <meta property="og:title" content="Tova Jertfelt Formgivare"/>
  <meta property="og:description" content="Multidisciplinär formgivare med erfarenhet av digital kommunikation. Tillgänglig för frilans! "/>
  <meta property="og:image" content={metaDesign}/>
  
  <meta property="twitter:card" content="summary_large_image"/>
  <meta property="twitter:url" content="https://www.tovajertfelt.se/design"/>
  <meta property="twitter:title" content="Tova Jertfelt Formgivare"/>
  <meta property="twitter:description" content="Multidisciplinär formgivare med erfarenhet av digital kommunikation. Tillgänglig för frilans!"/>
  <meta property="twitter:image" content={metaDesign}/>
  
  <link rel="icon" href="/favicon.ico" />
  <link rel="preconnect" href="https://fonts.googleapis.com"/>
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
 
      </Head>
}

export const HeadIndexIllustraion = () => {
  return(
    <Head>
<title>Tova Jertfelt</title>
<meta name="title" content="Tova Jertfelt Illustration"/>
<meta name="description" content="Multidisciplinär illustratör som jobbar både digitalt och analogt. Tillgänglig för frilans! "/>
<meta name="author" content="Tova Jertfelt"></meta>

<meta property="og:type" content="website"/>
<meta property="og:url" content="https://www.tovajertfelt.se/illustration"/>
<meta property="og:title" content="Tova Jertfelt Illustration"/>
<meta property="og:description" content="Multidisciplinär illustratör som jobbar både digitalt och analogt. Tillgänglig för frilans!"/>
<meta property="og:image" content={metaIllustration}/>

<meta property="twitter:card" content="summary_large_image"/>
<meta property="twitter:url" content="https://www.tovajertfelt.se/illustration"/>
<meta property="twitter:title" content="Tova Jertfelt Illustratör"/>
<meta property="twitter:description" content="Multidisciplinär illustratör som jobbar både digitalt och analogt. Tillgänglig för frilans! "/>
<meta property="twitter:image" content={metaIllustration}/>

<link rel="icon" href="/favicon.ico" />
<link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>

    </Head>
  )
}

export const HeadIndexFrontend = () => {
  return (
    <Head>
<title>Tova Jertfelt Frontend</title>
<meta name="title" content="Tova Jertfelt Frontend"/>
<meta name="description" content="Multidisciplinär frontendare med bakgrund inom visuell kommunikation, digital produktion och frilans söker jobb! "/>
<meta name="author" content="Tova Jertfelt"></meta>

<meta property="og:type" content="website"/>
<meta property="og:url" content="https://www.tovajertfelt.se/frontend"/>
<meta property="og:title" content="Tova Jertfelt Frontend"/>
<meta property="og:description" content="Multidisciplinär frontendare med bakgrund inom visuell kommunikation, digital produktion och frilans söker jobb! "/>
<meta property="og:image" content={metaFrontend}/>

<meta property="twitter:card" content="summary_large_image"/>
<meta property="twitter:url" content="https://www.tovajertfelt.se/frontend"/>
<meta property="twitter:title" content="Tova Jertfelt Frontend"/>
<meta property="twitter:description" content="Multidisciplinär frontendare med bakgrund inom visuell kommunikation, digital produktion och frilans söker jobb! "/>
<meta property="twitter:image" content={metaFrontend}/>

<link rel="icon" href="/favicon.ico" />
<link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>


    </Head>
  )
}

const HeadIndex = () => {
  return (
    
<Head>

<title>Tova Jertfelt || 2023</title>
<meta name="title" content="Tova Jertfelt || 2023"/>
<meta name="description" content="Multidisciplinär frontendare, konstnär, formgivare och illustratör. Högpresterande och kreativ, kärt barn har många yrken!"/>
<meta name="author" content="Tova Jertfelt"></meta>

<meta property="og:type" content="website"/>
<meta property="og:url" content="https://www.tovajertfelt.se/"/>
<meta property="og:title" content="Tova Jertfelt || 2023"/>
<meta property="og:description" content="Multidisciplinär frontendare, konstnär, formgivare och illustratör. Högpresterande och kreativ, kärt barn har många yrken!"/>
<meta property="og:image" content={mainMetaPic}/>

<meta property="twitter:card" content="summary_large_image"/>
<meta property="twitter:url" content="https://www.tovajertfelt.se/"/>
<meta property="twitter:title" content="Tova Jertfelt || 2023"/>
<meta property="twitter:description" content="Multidisciplinär frontendare, konstnär, formgivare och illustratör. Högpresterande och kreativ, kärt barn har många yrken!"/>
<meta property="twitter:image" content={mainMetaPic}/>

<link rel="icon" type="image/png" href="/favicon.ico" />
<link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>


</Head>
  )

}
export default HeadIndex