import "tailwindcss/tailwind.css";
import "../styles/global.css";
import splitbee from "@splitbee/web";

splitbee.init();

export default function App({ Component, pageProps, router }) {
  return <Component {...pageProps} />;
}
