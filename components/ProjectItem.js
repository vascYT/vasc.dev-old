import HoverAnimation from "./HoverAnimation"

function ProjectItem(props) {
    return(
      <li>
        <HoverAnimation className="text-xl text-yellow-400" href={props.href}>
          {props.name}
        </HoverAnimation>
        <br/>
        <p className="text-gray-300">{props.description}</p>
      </li>
    )
}

export default ProjectItem;