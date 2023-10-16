export const NavigationBar = props => {
  return (
    <nav className="bottom-nav">
        <ul className="navbar-nav">{ props.children }</ul>
    </nav>
  )
}