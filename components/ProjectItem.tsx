import { PropsWithChildren } from "react";
import { BiStar, BiGitRepoForked } from "react-icons/bi";

interface props {
  href: string;
  name: string;
  description: string;
  stars: number;
  forks: number;
}
export default function ProjectItem(props: PropsWithChildren<props>) {
  return (
    <div className="bg-white bg-opacity-10 rounded-md border-2 border-[#00000025] p-4 mt-5 mb-6 w-full">
      <div className="inline-flex items-center space-x-3">
        <a
          className="text-xl text-yellow-400 hover:underline"
          href={props.href}
        >
          {props.name}
        </a>
        <div className="inline-flex items-center space-x-1">
          <BiStar />
          <span>{props.stars}</span>
        </div>
        <div className="inline-flex items-center space-x-1">
          <BiGitRepoForked />
          <span>{props.forks}</span>
        </div>
      </div>
      <br />
      <p className="text-gray-300">{props.description}</p>
    </div>
  );
}
