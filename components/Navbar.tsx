import { PropsWithChildren } from "react";
import Link from "next/link";
import SocialGallery from "./SocialGallery";

function Item(props: { link: string }) {
  return (
    <Link href={props.link}>
      <a className="rounded-xl hover:underline p-2">{props.link}</a>
    </Link>
  );
}

interface props {}
export default function Navbar(props: PropsWithChildren<props>) {
  return (
    <div className="flex text-white w-full pl-6 pr-6 pt-8 pb-8">
      <div className="w-full space-x-6">
        <Item link="/" />
        <Item link="/projects" />
      </div>

      <div className="flex items-end">
        <SocialGallery />
      </div>
    </div>
  );
}
