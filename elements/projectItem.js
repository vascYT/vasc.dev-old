import Link from "next/link"

function ProjectItem({name, url, description}) {
    return(
      <li className="project-item">
        <Link href={url} target="_blank"><a>{name}</a></Link>
        <br/>
        {description}
      </li>
    )
}

export default ProjectItem;