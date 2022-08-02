import "tailwindcss/tailwind.css";
import "../styles/global.css";
import "react-loading-skeleton/dist/skeleton.css";

import { AppProps } from "next/app";
import nprogress from "nprogress";
import Router, { useRouter } from "next/router";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "../components/Navbar";
import { SWRConfig } from "swr";

Router.events.on("routeChangeStart", nprogress.start);
Router.events.on("routeChangeError", nprogress.done);
Router.events.on("routeChangeComplete", nprogress.done);

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <>
      <SWRConfig
        value={{
          refreshInterval: 0,
          fetcher: (resource, init) =>
            fetch(resource, init).then((r) => r.json()),
        }}
      >
        <div className="flex flex-row justify-center w-screen min-h-screen md:p-0">
          <div className="w-full md:w-[800px]">
            <Navbar />
            <AnimatePresence exitBeforeEnter>
              <motion.div
                key={router.route}
                initial="pageInitial"
                animate="pageAnimate"
                exit="pageExit"
                transition={{ type: "linear" }}
                className="px-5"
                variants={{
                  pageInitial: {
                    opacity: 0,
                    y: 10,
                  },
                  pageAnimate: {
                    opacity: 1,
                    y: 0,
                  },
                  pageExit: {
                    opacity: 0,
                    y: 10,
                  },
                }}
              >
                <Component {...pageProps} />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </SWRConfig>
    </>
  );
}
