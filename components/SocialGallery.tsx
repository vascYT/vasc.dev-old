import { PropsWithChildren } from "react";
import { FaGithub, FaTwitter, FaDiscord, FaEnvelope } from "react-icons/fa";

interface props {}
export default function SocialGallery(props: PropsWithChildren<props>) {
  return (
    <>
      <div className="inline-flex h-full space-x-4 flex-auto text-2xl">
        <a href="https://github.com/vascyt" target="_blank">
          <FaGithub />
        </a>
        <a href="https://twitter.com/vascyt" target="_blank">
          <FaTwitter />
        </a>
        <a href="https://discord.com/users/346977366569910274" target="_blank">
          <FaDiscord />
        </a>
        <a href="mailto:nico@vasc.dev">
          <FaEnvelope />
        </a>
      </div>
    </>
  );
}
