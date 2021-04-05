import Link from "next/link"

function ProjectItem(props) {
    return(
      <li>
        <Link href={props.href}>
          <a className="text-xl text-yellow-400 hover:bg-yellow-400 hover:text-white">{props.name}</a>
        </Link>
        <br/>
        <p className="text-gray-300">{props.description}</p>
      </li>
    )
}

export default ProjectItem;