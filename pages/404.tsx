import Head from "next/head";
import Link from "next/link";
import { BsArrowLeftShort } from "react-icons/bs";

export default function NotFound() {
  return (
    <>
      <Head>
        <title>404 • vasc</title>
      </Head>
      <div className="text-center">
        <h1 className="text-6xl sm:text-7xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
          404
        </h1>
        <p className="text-xl">Not the 🍌 you are looking for.</p>
        <Link href="/">
          <a className="inline-flex items-center mt-5">
            <BsArrowLeftShort className="text-xl" /> Back to home
          </a>
        </Link>
      </div>
    </>
  );
}
