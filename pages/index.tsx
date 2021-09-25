import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import PageContainer from "../components/PageContainer";
import SocialGallery from "../components/SocialGallery";
import DiscordActivity from "../components/DiscordActivity";

export default function Home() {
  const getAge = () => {
    return new Date().getFullYear() - 2006;
  };

  return (
    <>
      <Head>
        <title>Home • vasc</title>
      </Head>
      <PageContainer>
        <div className="flex flex-col items-center justify-center h-screen w-screen">
          {/* Center Content vertically and horizontally */}
          <div>
            {/* Make Content one object */}
            <div className="flex flex-col sm:flex-row w-full items-center sm:justify-start space-x-6">
              <div className="h-52 w-52 relative mb-3 sm:mb-0">
                <Image
                  src="/assets/avatar.png"
                  alt="Profile Picture"
                  layout="fill"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col justify-center">
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-300">
                  <span>Hey, I'm </span>
                  <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                    vasc
                  </span>
                  <span>.</span>
                </div>
                <DiscordActivity />
                <p className="text-gray-300 mt-2 text-sm sm:text-base">
                  {getAge()} y/o developer and server enthusiast.
                </p>
                <div className="self-start mt-3">
                  <Link href="/projects" shallow={true}>
                    <a className="flex justify-center items-center">
                      <p>projects </p>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                  </Link>
                </div>
                <SocialGallery />
              </div>
            </div>
          </div>
        </div>
      </PageContainer>
    </>
  );
}
