function LinkItem(props) {
    return(
      <li>
        <a className="text-xl text-yellow-400 hover:bg-yellow-400 hover:text-white" href={props.href} target="_blank">
          {props.name}
        </a>
      </li>
    )
}

export default LinkItem;