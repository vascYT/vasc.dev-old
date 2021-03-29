import Link from "next/link";

function BackButton() {
    return(
        <Link href="/" shallow={true}><a className="text-xl text-yellow-400 hover:bg-yellow-400 hover:text-white">...</a></Link>
    )
}

export default BackButton;