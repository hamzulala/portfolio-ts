import Head from 'next/head'
import type { NextPage } from 'next'
import Header from '@/components/Header';
import Hero from '@/components/Hero';


const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Hamza's Portfolio</title>
      </Head>
      {/* Header */}
      <Header/>

      {/* Hero */}
      <section id="hero">
        <Hero/>
      </section>

      {/* About */}

      {/* Experience */}

      {/* Skills */}

      {/* Projects */}

      {/* Contact Me */}

    </>
  );
};

export default Home;