import "tailwindcss/tailwind.css";
import "../styles/global.css";
import "nprogress/nprogress.css";
import Router from "next/router";
import NProgress from "nprogress";

NProgress.configure({color: "yellow"});

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

export default function App({ Component, pageProps }) {
    return <Component {...pageProps} />
}