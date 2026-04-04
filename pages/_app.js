import Head from 'next/head';
import { useRouter } from 'next/router';
import { AnimatePresence, motion } from 'framer-motion';
import '../styles/globals.css';
import Header from '../src/components/Header';
import Footer from '../src/components/Footer';
import ScrollTop from '../src/components/ScrollTop';

const siteName = 'STARBRIGHT SOLUTIONS';
const defaultTitle = 'STARBRIGHT SOLUTIONS | AI-Powered Digital Solutions';
const defaultDescription =
  'STARBRIGHT SOLUTIONS 专注于企业官网、软件开发、AI Automation 与 Digital Solutions，提供专业、可信、可持续的数字化服务。';
const defaultImage = '/og-image.png';
const siteUrl = 'https://starbright-solutions.example.com';

const pageVariants = {
  initial: { opacity: 0 },
  enter: { opacity: 1, transition: { duration: 0.25, ease: 'easeOut' } },
  exit: { opacity: 0, transition: { duration: 0.15, ease: 'easeIn' } },
};

export default function MyApp({ Component, pageProps }) {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>{defaultTitle}</title>
        <meta name="description" content={defaultDescription} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta name="theme-color" content="#000000" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
        <link rel="canonical" href={siteUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={defaultTitle} />
        <meta property="og:description" content={defaultDescription} />
        <meta property="og:site_name" content={siteName} />
        <meta property="og:locale" content="zh_CN" />
        <meta property="og:image" content={defaultImage} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={defaultTitle} />
        <meta name="twitter:description" content={defaultDescription} />
        <meta name="twitter:image" content={defaultImage} />
      </Head>
      <div
        id="app-root"
        style={{ fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif' }}
      >
        <Header />
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={router.pathname}
            variants={pageVariants}
            initial="initial"
            animate="enter"
            exit="exit"
          >
            <Component {...pageProps} />
          </motion.div>
        </AnimatePresence>
        <Footer />
        <ScrollTop />
      </div>
    </>
  );
}
