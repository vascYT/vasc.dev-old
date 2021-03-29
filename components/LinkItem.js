function LinkItem({name, href}) {
    return(
      <li>
        <a className="text-xl text-yellow-400 hover:bg-yellow-400 hover:text-white" href={href} target="_blank">
          {name}
        </a>
      </li>
    )
}

export default LinkItem;