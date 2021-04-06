import Link from "next/link";
import { useRouter } from 'next/router'


export default function NavBar() {
    const router = useRouter()

    if (router.asPath != "/") {
        return (
            <div className="flex space-x-5 font-bold mb-3 justify-start">
                <Link href="/" shallow={true}><a className="hover:underline">Back</a></Link>
            </div>
        )
    } else {
        return null;
    }
}