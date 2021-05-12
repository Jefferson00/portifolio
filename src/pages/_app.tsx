import { useEffect} from 'react'
import { About } from '../components/About'
import { Header } from '../components/Header'
import { Socials } from '../components/Socials'
import { Technologies } from '../components/Technologies'
import { ProjectsProvider } from '../contexts/ProjectsContext'
import '../styles/global.css'
import Router from 'next/router';
import Head from 'next/head';
import { Contact } from '../components/Contact'

function MyApp({ Component, pageProps }) {
  

  useEffect(()=>{
    Router.events.on('routeChangeStart', () => {
      console.log('start');
    });

    Router.events.on('routeChangeComplete', () => {
      console.log('complete');
    });

    Router.events.on('routeChangeError', () => {
      console.log('error');
    });

    
  })
  
  return (
    <ProjectsProvider>
        <Head>
          <title>Jefferson | Desenvolvedor Web/FullStack</title>
          <meta name="description" content="Desenvolvendo soluções FullStack eficientes com Javascript/Typescript/React" />
          <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"/>
          <meta name="author" content="Jefferson C. Silva"/>
          <meta name="image" content="thumb.png" />
          <meta name="referrer" content="no-referrer-when-downgrade" />
          <meta name="MobileOptimized" content="320" />
          <meta name="HandheldFriendly" content="True" />
          <meta name="full-screen" content="yes" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="mobile-web-app-capable" content="yes" />
          <meta name="keywords" content="jefferson, portifólio dev, desenvolvedor" />

          <meta property="og:title" content="Jefferson | Desenvolvedor Web/FullStack" />
          <meta property="og:description" content="Desenvolvendo soluções FullStack eficientes com Javascript/Typescript/React"/>
          <meta property="og:locale" content="pt_BR" />
          <meta property="og:type" content="website" />
          <meta property="og:site_name" content="Jefferson | Desenvolvedor Web/FullStack" />
          <meta property="og:image" content="thumb.png" />
          <meta property="og:image:secure_url" content="thumb.png" />
          <meta property="og:image:alt" content="Thumbnail" />
          <meta property="og:image:type" content="image/png" />
          <meta property="og:image:width" content="300" />
          <meta property="og:image:height" content="200" />

          <meta name="twitter:title" content="Jefferson | Desenvolvedor Web/FullStack" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:image" content="thumb.png" />
          <meta name="twitter:image:src" content="thumb.png" />
          <meta name="twitter:image:alt" content="Thumbnail" />
          <meta name="twitter:image:width" content="300" />
          <meta name="twitter:image:height" content="200" />

        </Head>
        <span itemProp="image" itemScope itemType="image/png"> 
          <link itemProp="url" href="thumb.png" />
        </span>
        <div className="headerWrapper">
          <Header/>
          <Socials/>
          <Technologies/>
        </div>
      <Component {...pageProps} />
        <Contact/>
        <About/>
    </ProjectsProvider>
  )
}

export default MyApp
