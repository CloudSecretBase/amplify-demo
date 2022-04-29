import '../styles/globals.css'
import '../styles/styles.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import {Amplify} from "aws-amplify";
import awsmobile from "../src/aws-exports";

Amplify.configure(awsmobile);

function MyApp({ Component, pageProps }: AppProps) {
  return (
      <>
        <Head><link  href='https://blog.xiaomo.info'/>
          <title>xiaomo blog</title>
        </Head>
        <Component {...pageProps} />
      </>
  )
}

export default MyApp
