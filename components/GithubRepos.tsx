import useSWR from "swr";
import { GithubRepo } from "../typings/GithubAPI";
import ProjectItem from "./ProjectItem";
import { VscLoading } from "react-icons/vsc";

export default function GithubRepos() {
  var { data, error } = useSWR(
    "https://api.github.com/users/vascYT/repos?per_page=100"
  );

  if (error)
    return (
      <p className="text-red-400 mt-5">
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
  return data.map((repo: GithubRepo) => (
    <ProjectItem
      name={repo.name}
      href={repo.html_url}
      description={repo.description}
      stars={repo.stargazers_count}
      forks={repo.forks_count}
    />
  ));
}
