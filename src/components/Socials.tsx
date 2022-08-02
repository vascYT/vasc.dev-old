import { FaGithub, FaTwitter, FaDiscord, FaEnvelope } from "react-icons/fa";

const links = [
  {
    url: "https://github.com/vascyt",
    icon: FaGithub,
    newTab: true,
  },
  {
    url: "https://twitter.com/vascyt",
    icon: FaTwitter,
    newTab: true,
  },
  {
    url: "https://discord.com/users/346977366569910274",
    icon: FaDiscord,
    newTab: true,
  },
  {
    url: "mailto:nico@vasc.dev",
    icon: FaEnvelope,
    newTab: false,
  },
];

export default function SocialGallery() {
  return (
    <>
      <div className="inline-flex h-full space-x-4 flex-auto text-2xl">
        {links.map((link) => (
          <a
            href={link.url}
            className="transition-transform hover:scale-105"
            target={link.newTab ? "_blank" : undefined}
            rel="noreferrer"
            key={link.url}
          >
            <link.icon />
          </a>
        ))}
      </div>
    </>
  );
}
