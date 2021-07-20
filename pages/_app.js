import "tailwindcss/tailwind.css";
import "../styles/global.css";
import splitbee from "@splitbee/web";

splitbee.init();

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
