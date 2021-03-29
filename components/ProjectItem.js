import Link from "next/link"

function ProjectItem({name, href, description}) {
    return(
      <li>
        <Link href={href}>
          <a className="text-xl text-yellow-400 hover:bg-yellow-400 hover:text-white">{name}</a>
        </Link>
        <br/>
        <p className="text-gray-300">{description}</p>
      </li>
    )
}

export default ProjectItem;