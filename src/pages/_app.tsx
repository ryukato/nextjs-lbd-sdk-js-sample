import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { HttpClient } from '@line/lbd-sdk-js'
import httpLbdClient from './api/lbdApi'
import { useEffect, useState } from 'react'
export default function App({ Component, pageProps }: AppProps) {
  const [lbdApiClient, setLbdApiClient] = useState<HttpClient>();
  useEffect(() => {
    (async () => {
      // const timeResponse = await httpLbdClient.time();
      // console.log(timeResponse);
      console.log("httpLbdClient", httpLbdClient);
      setLbdApiClient(httpLbdClient);
    })();
  }, []);
  return <Component {...pageProps} />
}
