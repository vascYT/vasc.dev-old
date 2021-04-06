import BackBar from "./BackBar";
import Footer from "./Footer";
import { motion } from "framer-motion";

export default function PageContainer(props) {
    return(
        <div className="text-white font-sans">
            <div className="flex h-screen p-7pt">
                <motion.div
                    className="flex flex-col justify-center"
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.75 }}
                    style={{opacity: 0}}
                >
                    <BackBar />
                    {props.children}
                </motion.div>
            </div>
            <Footer />
        </div>
    )
}