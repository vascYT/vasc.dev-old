import Link from "next/link";
import Socials from "./Socials";

const links = ["/"];

function Item(props: { link: string }) {
  return (
    <Link href={props.link}>
      <a className="rounded-xl hover:underline p-2">{props.link}</a>
    </Link>
  );
}

export default function Navbar() {
  return (
    <div className="flex text-white w-full pl-6 pr-6 pt-8 pb-8">
      <div className="w-full space-x-6">
        {links.map((link) => (
          <Item link={link} key={link} />
        ))}
      </div>

      <div className="flex items-end">
        <Socials />
      </div>
    </div>
  );
}
