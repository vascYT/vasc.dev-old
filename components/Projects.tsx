import { BiStar, BiGitRepoForked } from "react-icons/bi";
import { VscLoading } from "react-icons/vsc";
import useSWR from "swr";
import { GithubRepo } from "../typings/GithubAPI";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { FiExternalLink } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";
import { FaArchive } from "react-icons/fa";

function Card(props: {
  title: string;
  description: string;
  url: string;
  stars?: number;
  forks?: number;
  archived?: boolean;
}) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      animate={{ height: open ? "auto" : "50px" }}
      className="bg-white bg-opacity-10 border border-white border-opacity-20 rounded-md w-full shadow"
    >
      <div className="flex items-center px-4">
        <div className="w-full">
          <div className="flex items-center space-x-3 h-[50px]">
            <h1 className="text-lg text-yellow-400">{props.title}</h1>
            {props.stars !== undefined && (
              <div className="flex items-center space-x-1">
                <BiStar />
                <span>{props.stars}</span>
              </div>
            )}
            {props.forks !== undefined && (
              <div className="flex items-center space-x-1">
                <BiGitRepoForked />
                <span>{props.forks}</span>
              </div>
            )}
            {props.archived && (
              <span className="text-orange-500 text-sm" title="Archived">
                <FaArchive />
              </span>
            )}
          </div>
        </div>
        <button
          className="hover:bg-white/10 p-2 rounded-full"
          onClick={() => setOpen(!open)}
        >
          <IoIosArrowDown
            className={`transition-transform ${open && "rotate-180"}`}
          />
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="mb-3 border-t border-white/20 px-4"
          >
            <p className="text-gray-300 mt-3">{props.description}</p>
            <a
              className="flex items-center w-fit space-x-1 bg-white bg-opacity-20 rounded-full px-5 py-2 text-sm mt-3 transition-transform hover:scale-[102%]"
              href={props.url}
              target="_blank"
            >
              <span>View</span>
              <FiExternalLink />
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function Projects() {
  var { data, error } = useSWR(
    "https://api.github.com/users/vascYT/repos?per_page=100"
  );

  if (error)
    return (
      <p>
        Failed to fetch Github repositories, please view them on my{" "}
        <a
          className="text-yellow-400"
          href="https://github.com/vascYT"
          target="_blank"
        >
          Github Profile
        </a>
        .
      </p>
    );

  if (!data)
    return (
      <VscLoading className="animate-spin text-4xl w-full text-center mt-5" />
    );

  data = data.filter((repo: GithubRepo) => !repo.fork && repo.name != "vascYT");
  data = data.sort((a: GithubRepo, b: GithubRepo) =>
    a.stargazers_count < b.stargazers_count ? 1 : -1
  );
  data = data.sort((a: GithubRepo, b: GithubRepo) =>
    a.archived ? 1 : b.archived ? -1 : 0
  );

  return (
    <div className="grid md:grid-cols-2 gap-4">
      {data.map((repo: GithubRepo) => (
        <Card
          title={repo.name}
          description={repo.description}
          url={repo.html_url}
          stars={repo.stargazers_count}
          forks={repo.forks_count}
          archived={repo.archived}
        />
      ))}
    </div>
  );
}
