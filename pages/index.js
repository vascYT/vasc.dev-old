import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import PageContainer from "../components/PageContainer.js";

export default function Home () {

  return (
    <>
      <Head>
        <meta charSet="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
        <link rel="icon" type="image/png" href="/assets/banana.png"/>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" rel="stylesheet"/>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"/>
        <title>I'm vasc</title>
      </Head>
      <PageContainer>
        <div className="flex flex-col sm:flex-row space-x-5">
          <Image
            src="/assets/avatar.png"
            width={200}
            height={200}
            className="rounded-full"
          />
          <div className="flex flex-col justify-center w-96">
            <h1 className="text-7xl sm:text-8xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">vasc</h1>
            <p className="text-gray-300">I ❤️ dealing with servers, coding and trying out open source software.</p>
            <div className="flex space-x-5 font-bold mb-3 mt-3">
              <Link href="/projects" shallow={true}><a className="hover:underline">Projects</a></Link>
            </div>
          </div>
        </div>
      </PageContainer>
    </>
  )
}