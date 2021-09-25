import axios from "axios";
import useSWR from "swr";
import { GithubRepo } from "../typings/GithubAPI";
import ProjectItem from "./ProjectItem";

const fetcher = (url: string) => axios.get(url).then((res) => res.data);

export default function GithubRepos() {
  var { data, error } = useSWR(
    "https://api.github.com/users/vascYT/repos?per_page=100",
    fetcher
  );

  if (error)
    return (
      <p>
        Couldn't fetch Github repositories, please view them on my{" "}
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
  if (!data) return <></>;

  data = data.filter((repo: GithubRepo) => !repo.fork && repo.name != "vascYT");
  return data.map((repo: GithubRepo) => (
    <ProjectItem
      name={repo.name}
      href={repo.html_url}
      description={repo.description}
    />
  ));
}
