import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import PageContainer from "../components/PageContainer.js";

export default function Home() {
  return (
    <>
      <Head>
        <title>vasc</title>
      </Head>
      <PageContainer>
        <div className="flex flex-col w-full text-center justify-center sm:flex-row sm:text-left sm:justify-start space-x-5">
          <img
            src="/assets/avatar.png"
            width={200}
            height={200}
            className="self-center"
          />
          <div className="flex flex-col justify-center w-64 sm:w-96">
            <h1 className="text-7xl sm:text-8xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
              vasc
            </h1>
            <p className="text-gray-300">
              I ❤️ dealing with servers, coding and trying out open source
              software.
            </p>
            <div className="flex space-x-5 font-bold mb-3 mt-3 justify-center sm:justify-start">
              <Link href="/projects" shallow={true}>
                <a className="hover:underline">Projects</a>
              </Link>
            </div>
          </div>
        </div>
      </PageContainer>
    </>
  );
}
