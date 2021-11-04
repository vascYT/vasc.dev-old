import Head from "next/head";
import GithubRepos from "../components/GithubRepos";

export default function Projects() {
  return (
    <>
      <Head>
        <title>/projects &bull; vasc</title>
      </Head>
      <h1 className="text-5xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent pb-2">
        projects
      </h1>
      <p className="text-gray-300 mt-2 text-md sm:text-base">
        I have a lot of projects, that open-source, for example one of my
        biggest project called{" "}
        <a
          className="text-yellow-400"
          href="https://presencedb.com"
          target="_blank"
        >
          PresenceDB
        </a>
        .
      </p>
      <GithubRepos />
    </>
  );
}
