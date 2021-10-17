import { AppProps } from "next/app";
import "tailwindcss/tailwind.css";
import "../styles/global.css";
import ReactGA from "react-ga";
import { useEffect } from "react";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    ReactGA.initialize("UA-150201105-4");
    ReactGA.pageview(window.location.pathname + window.location.search);
  });

  return <Component {...pageProps} />;
}
