import Head from "next/head";
import BackBar from "./BackBar";
import Footer from "./Footer";
import { motion } from "framer-motion";

export default function PageContainer(props) {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <link rel="icon" type="image/png" href="/assets/avatar.png" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <div className="text-white font-sans">
        <div className="flex flex-col sm:flex-row justify-center sm:justify-start h-screen p-7pt">
          <motion.div
            className="flex flex-col justify-center"
            animate={{ opacity: 1 }}
            transition={{ duration: 0.75 }}
            style={{ opacity: 0 }}
          >
            <BackBar />
            {props.children}
          </motion.div>
        </div>
        <Footer />
      </div>
    </>
  );
}
