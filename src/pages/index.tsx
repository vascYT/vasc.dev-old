import Head from "next/head";
import Image from "next/image";
import DiscordActivity from "../components/DiscordActivity";
import Projects from "../components/Projects";

export default function Home() {
  const getAge = () => {
    const today = new Date();
    const birthDate = new Date("05/13/2006");
    var age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }

    return age;
  };

  return (
    <>
      <Head>
        <title>/ &bull; vasc</title>
      </Head>
      <div className="mt-6">
        <div className="sm:flex sm:items-center sm:space-x-5">
          <Image
            src="/assets/avatar.png"
            width={125}
            height={125}
            alt="vasc's avatar"
          />

          <div>
            <div className="text-5xl sm:text-6xl font-bold text-gray-300">
              <span>Hey, I&apos;m </span>
              <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                vasc
              </span>
            </div>
            <DiscordActivity />
          </div>
        </div>

        <div className="text-gray-300 text-base leading-relaxed mt-5">
          <p>
            I&apos;m a {getAge()} y/o developer from Vienna, Austria{" "}
            <Image
              src="/assets/austria.svg"
              height={12}
              width={16}
              className="rounded-sm"
              alt="Austrian Flag"
            />
            . I&apos;m mainly interested in web development and server software.
            I also love to explore new technologies and tools made by others.
          </p>
          <p className="mt-5">
            I have tried some different programming languages, such as Python,
            Java, PHP, but Javascript/Typescript is my favorite and therefore my
            primary programming language.
          </p>
        </div>

        <div className="mt-5 mb-5">
          <h1 className="text-3xl font-bold text-gray-300">What I Built 🏗️</h1>
          <div className="mt-3">
            <Projects />
          </div>
        </div>
      </div>
    </>
  );
}
