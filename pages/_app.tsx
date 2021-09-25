import { AppProps } from "next/app";
import Head from "next/head";
import "tailwindcss/tailwind.css";
import "../styles/global.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <script
          async
          defer
          data-website-id="d38f0e10-afae-4110-89e9-12cacc0b6902"
          src="https://analytics.vasc.dev/umami.js"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
