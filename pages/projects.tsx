import Head from "next/head";
import Link from "next/link";
import PageContainer from "../components/PageContainer";
import ProjectItem from "../components/ProjectItem";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Projects() {
  var { data: ghdata } = useSWR(
    "https://api.github.com/users/vascYT/repos?per_page=100",
    fetcher
  );

  if (ghdata)
    ghdata = ghdata.filter((repo) => !repo.fork && repo.name != "vascYT");

  return (
    <>
      <Head>
        <title>Projects • vasc</title>
      </Head>
      <PageContainer>
        {/* Center Content vertically */}
        <div className="flex flex-row justify-center h-screen w-screen">
          <div className="mt-[10vh] mb-8">
            <Link href="/" shallow={true}>
              <a className="w-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </Link>
            <h1 className="text-5xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent h-14 mt-3">
              projects
            </h1>
            <h2 className="text-sm text-gray-300 sm:text-xl mt-6 font-medium">
              ...I currently work on
            </h2>
            <div className="mt-3 mb-6">
              <ProjectItem
                name="PresenceDB"
                href="https://presencedb.com"
                description="A service that tracks the playtime of your Discord Activities."
                imgUrl="https://i.imgur.com/Ph1A5pr.png"
              />
            </div>
            <h2 className="text-sm text-gray-300 sm:text-xl mt-6 font-medium">
              ...on Github
            </h2>
            <div className="mt-3">
              {ghdata &&
                ghdata.map((repo) => (
                  <ProjectItem
                    name={repo.name}
                    href={repo.html_url}
                    description={repo.description}
                  />
                ))}
            </div>
          </div>
        </div>
      </PageContainer>
    </>
  );
}
