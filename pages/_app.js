import '../styles/styles.css'; // Include your main styles here
import '../styles/responsivestyles.css'; // Include your responsive styles here
import '../styles/ImageComparison.css'
import Head from 'next/head';

import Header from '../src/components/Header'
import Footer from '../src/components/Footer'
function MyApp({ Component, pageProps }) {
  return <>
  <Head>
        <title>ZainShah</title>
        <link rel="icon" href="./favicon.png" />
      </Head>
  <Header/>
  <Component {...pageProps} />
  <Footer/>
  </>
}

export default MyApp;
