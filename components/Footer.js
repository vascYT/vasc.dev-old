import Activity from "./Activity";
import Head from "next/head";
import { motion } from "framer-motion";

export default function Footer() {
    return (
        <>
            <Head>
                <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.3/css/all.css" integrity="sha384-SZXxX4whJ79/gErwcOYf+zWLeJdY/qpuqC4cAa9rOGUstPomtqpuNWT9wdPEn2fk" crossorigin="anonymous" />
            </Head>
            <div className="absolute inset-x-0 bottom-0 p-3">
                <div className="flex flex-row">
                    <Activity />
                    <div className="h-full space-x-3 self-end text-right flex-auto text-xl">
                        <a href="https://steamcommunity.com/profiles/76561198362939816"><motion.i class="fab fa-steam" whileHover={{color: "#66c0f4"}} /></a>
                        <a href="https://discord.banany.net/"><motion.i class="fab fa-discord" whileHover={{color: "#7289da"}} /></a>
                        <a href="https://github.com/vascyt"><motion.i class="fab fa-github" whileHover={{color: "#424242"}} /></a>
                        <a href="https://youtube.com/vascyt"><motion.i class="fab fa-youtube" whileHover={{color: "#e3321a"}} /></a>
                        <a href="https://twitter.com/vascyt"><motion.i class="fab fa-twitter" whileHover={{color: "#04a3fa"}} /></a>
                    </div>
                </div>
            </div>
        </>
    )
}