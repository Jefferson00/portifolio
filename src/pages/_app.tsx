import { useEffect, useState } from 'react'
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
          <title>Jefferson | Portifólio</title>
        </Head>
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
