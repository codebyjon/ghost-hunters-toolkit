import { AppProps } from "next/app";

import "@/styles/globals.css";
import { AppContextProvider } from "@/context/AppContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppContextProvider>
      <Component {...pageProps} />
    </AppContextProvider>
  );
}
