import TokyoState from "@/src/Context";
import PreLoader from "@/src/layout/PreLoader";
import Head from "next/head";
import "@/styles/globals.css";

const title = "Guanhua Ding — Backend Software Engineer";
const description =
  "Guanhua Ding is a backend software engineer in Gold Coast, Australia, building production APIs, event-driven services and generative-AI pipelines in Java and TypeScript.";

export default function App({ Component, pageProps }) {
  return (
    <>
        <Head>
          <title>{title}</title>
          <meta name="description" content={description} />
          <meta name="theme-color" content="#111111" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content={title} />
          <meta property="og:description" content={description} />
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:title" content={title} />
          <meta name="twitter:description" content={description} />
        </Head>
        <TokyoState>
          <PreLoader />
          <Component {...pageProps} />
        </TokyoState>
    </>
  );
}
