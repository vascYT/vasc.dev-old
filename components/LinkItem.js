import HoverAnimation from "./HoverAnimation";

function LinkItem(props) {
  return (
    <li>
      <HoverAnimation className="text-xl text-yellow-400" href={props.href}>
        {props.name}
      </HoverAnimation>
    </li>
  );
}

export default LinkItem;
