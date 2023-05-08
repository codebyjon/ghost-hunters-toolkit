import { AppProps } from "next/app";

import "@/styles/globals.css";
import Head from "next/head";
import { AppContextProvider } from "@/context/AppContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppContextProvider>
      <>
        <Head>
          <title>Ghost Hunters' Toolkit</title>
        </Head>
        <Component {...pageProps} />
      </>
    </AppContextProvider>
  );
}
