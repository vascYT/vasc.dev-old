import { motion } from "framer-motion";

export default function HoverAnimation(props) {
    return (
        <motion.a
            href={props.href}
            className={props.className}
            whileHover={{
              color: "#d97706"
            }}
        >
            {props.children}
        </motion.a>
    )
}