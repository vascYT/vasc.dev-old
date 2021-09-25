import Image from "next/image";
import { PropsWithChildren } from "react";

interface props {
  href: string;
  name: string;
  description: string;
  imgUrl?: string;
}
function ProjectItem(props: PropsWithChildren<props>) {
  return (
    <div className="bg-gray-600 bg-opacity-50 p-4 rounded mt-5 w-[256px] sm:w-[512px]">
      <a className="text-xl text-yellow-400" href={props.href}>
        {props.name}
      </a>
      <br />
      <p className="text-gray-300">{props.description}</p>
      {props.imgUrl && (
        <div className="h-[144px] sm:h-[288px] aspect-w-16 aspect-h-9 relative mt-5">
          <Image layout="fill" src={props.imgUrl} className="rounded" />
        </div>
      )}
    </div>
  );
}

export default ProjectItem;
