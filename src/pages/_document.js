import { Html, Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'
const Document = () => {

    return (
    <Html>
      <Head>
        <html lang="sv"></html>
        <link rel="icon" href="/favicon.ico" />
<link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
<link href="https://fonts.googleapis.com/css2?family=Arya:wght@400;700&family=JetBrains+Mono:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,500;1,600;1,700;1,800&family=Magra:wght@400;700&family=Merriweather+Sans:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,500;1,600;1,700;1,800&family=Tilt+Warp&display=swap" rel="stylesheet"/>

<link rel="icon" href="/favicon.ico" />
<link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>

<meta name="title" content="Tova Jertfelt || Frontend, art, design"/>
<meta name="description" content="Multidisciplinär frontendare, konstnär, formgivare och illustratör. Högpresterande och kreativ, kärt barn har många yrken!"/>   
<meta property="og:type" content="website"/>
<meta property="og:url" content="https://www.tovajertfelt.se/"/>
<meta property="og:title" content="Tova Jertfelt || 2023"/>
<meta property="og:description" content="Multidisciplinär frontendare, konstnär, formgivare och illustratör. Högpresterande och kreativ, kärt barn har många yrken!"/>
<meta property="og:image" content="/publishing-priset-2.png"/>

<meta property="twitter:card" content="summary_large_image"/>
<meta property="twitter:url" content="https://www.tovajertfelt.se/"/>
<meta property="twitter:title" content="Tova Jertfelt || 2023"/>
<meta property="twitter:description" content="Multidisciplinär frontendare, konstnär, formgivare och illustratör. Högpresterande och kreativ, kärt barn har många yrken!"/>
<meta property="twitter:image" content="/publishing-priset-2.png"/>

<meta name="author" content="Tova Jertfelt"></meta>

<meta charset="UTF-8" />

<link rel="icon" type="image/png" href="/favicon.ico" />
<link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
      </Head>
      <body>
        <Main />
        <div id="modal" />
        <NextScript />
        <noscript>You need to enable JavaScript to run this app.</noscript>
        
      </body>
    </Html>
  )
  
}
export default Document